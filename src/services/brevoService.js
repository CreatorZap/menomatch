// Brevo (SendinBlue) Email Marketing Service
// Handles subscriber management and email capture

const BREVO_API_KEY = process.env.REACT_APP_BREVO_API_KEY;
const BREVO_API_BASE = process.env.REACT_APP_BREVO_API_BASE || 'https://api.brevo.com/v3';

// ID da lista do Brevo onde os contatos serão adicionados
// IMPORTANTE: Substitua pelo ID real da sua lista no Brevo
const BREVO_LIST_ID = parseInt(process.env.REACT_APP_BREVO_LIST_ID) || 2;

/**
 * Subscribe user to Brevo
 * @param {Object} userData - User information
 * @param {string} userData.email - User email (required)
 * @param {string} userData.firstName - User first name (optional)
 * @param {Array} userData.tags - Tags to apply (optional) - Note: Brevo usa "attributes" não "tags"
 * @param {Object} userData.fields - Custom fields (optional)
 * @returns {Promise<Object>} Result object with success status
 */
export const subscribeToBrevo = async (userData) => {
  const { email, firstName, tags = [], fields = {} } = userData;

  // Validação básica
  if (!email || !email.includes('@')) {
    console.error('❌ Invalid email address');
    return { success: false, error: 'Invalid email address' };
  }

  if (!BREVO_API_KEY || BREVO_API_KEY === 'YOUR_BREVO_API_KEY_HERE') {
    console.error('❌ Brevo API key not configured');
    console.warn('⚠️ Please add your Brevo API key to .env file');
    return { success: false, error: 'API key not configured' };
  }

  try {
    console.log('📧 Subscribing to Brevo:', email);
    console.log('📋 List ID:', BREVO_LIST_ID);

    // Preparar attributes do Brevo
    const attributes = {
      FIRSTNAME: firstName || '',
      SOURCE: 'MenoMatch Quiz',
      SIGNUP_DATE: new Date().toISOString(),
      // Converter tags em uma string separada por vírgulas (Brevo não tem tags nativos como Kit)
      TAGS: tags.join(', '),
      // Adicionar todos os custom fields
      ...fields
    };

    const requestBody = {
      email: email,
      attributes: attributes,
      listIds: [BREVO_LIST_ID],
      updateEnabled: true // Permite atualizar contato se já existir
    };

    console.log('📤 Request body:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(`${BREVO_API_BASE}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    // Brevo retorna 201 para criação, 204 para update
    if (response.status === 201 || response.status === 204) {
      console.log('✅ Successfully subscribed to Brevo:', data);
      return { success: true, data };
    }

    // Se retornar 200 ou outro sucesso
    if (response.ok) {
      console.log('✅ Successfully subscribed to Brevo:', data);
      return { success: true, data };
    }

    // Tratar erro específico
    console.error('❌ Brevo API error response:', data);
    throw new Error(data.message || `HTTP ${response.status}`);

  } catch (error) {
    console.error('❌ Brevo subscription error:', error);
    
    // Não vamos falhar o fluxo por erro de email
    // Apenas logamos e continuamos
    return { 
      success: false, 
      error: error.message,
      silent: true // Flag para não mostrar erro ao usuário
    };
  }
};

/**
 * Update contact attributes in Brevo
 * @param {string} email - Contact email
 * @param {Object} attributes - Attributes to update
 * @returns {Promise<Object>} Result object
 */
export const updateContactAttributes = async (email, attributes) => {
  if (!BREVO_API_KEY || BREVO_API_KEY === 'YOUR_BREVO_API_KEY_HERE') {
    return { success: false, error: 'API key not configured' };
  }

  try {
    const response = await fetch(`${BREVO_API_BASE}/contacts/${encodeURIComponent(email)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        attributes: attributes
      })
    });

    if (response.status === 204) {
      console.log('✅ Contact attributes updated successfully');
      return { success: true };
    }

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to update attributes');
    }

    console.log('✅ Contact attributes updated successfully');
    return { success: true };

  } catch (error) {
    console.error('❌ Error updating contact attributes:', error);
    return { success: false, error: error.message, silent: true };
  }
};

/**
 * Prepare quiz data for Brevo submission
 * @param {Object} quizAnswers - All quiz answers
 * @param {Object} results - Quiz results/analysis
 * @returns {Object} Formatted data for Brevo
 */
export const prepareQuizDataForBrevo = (quizAnswers, results) => {
  // Extrair sintomas identificados
  const symptoms = results.symptoms || [];
  const topProducts = results.products ? results.products.slice(0, 3) : [];

  // Criar tags baseadas em sintomas (para armazenar em TAGS attribute)
  const symptomTags = symptoms.map(symptom => 
    `symptom-${symptom.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
  );

  // Determinar severidade geral
  const severityTag = symptoms.length >= 5 ? 'severity-high' : 
                      symptoms.length >= 3 ? 'severity-medium' : 
                      'severity-low';

  const allTags = [
    'menomatch-quiz',
    'website-lead',
    'quiz-completed',
    severityTag,
    ...symptomTags
  ];

  return {
    email: results.email || '',
    firstName: results.firstName || '',
    tags: allTags,
    fields: {
      // Dados do quiz
      QUIZ_COMPLETION_DATE: new Date().toISOString(),
      PRIMARY_SYMPTOMS: symptoms.join(', '),
      SYMPTOM_COUNT: symptoms.length.toString(),
      
      // Produtos recomendados
      TOP_PRODUCT_1: topProducts[0]?.name || '',
      TOP_PRODUCT_2: topProducts[1]?.name || '',
      TOP_PRODUCT_3: topProducts[2]?.name || '',
      
      // Tracking
      SOURCE: 'MenoMatch Website',
      LANDING_PAGE: window.location.pathname,
      REFERRER: document.referrer || 'Direct',
      USER_AGENT: navigator.userAgent.substring(0, 255), // Brevo tem limite de 255 chars
      
      // Dados demográficos (se disponível)
      AGE_RANGE: quizAnswers?.ageRange || '',
      
      // Severidade
      SEVERITY: severityTag,
    }
  };
};

/**
 * Track email capture event in analytics
 * @param {boolean} success - Whether capture was successful
 * @param {string} source - Source of capture (quiz, newsletter, etc)
 */
export const trackEmailCapture = (success, source = 'quiz') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_captured', {
      event_category: 'Lead Generation',
      event_label: source,
      value: success ? 5 : 0, // Valor estimado de um lead
      success: success
    });
  }

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: source,
      content_category: 'Email Capture'
    });
  }
};

// Aliases para manter compatibilidade com código existente
export const subscribeToKit = subscribeToBrevo;
export const prepareQuizDataForKit = prepareQuizDataForBrevo;
export const addTagsToSubscriber = updateContactAttributes;

export default {
  subscribeToBrevo,
  updateContactAttributes,
  prepareQuizDataForBrevo,
  trackEmailCapture,
  // Aliases
  subscribeToKit,
  prepareQuizDataForKit,
  addTagsToSubscriber
};

