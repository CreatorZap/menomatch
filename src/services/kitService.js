// Kit (ConvertKit) Email Marketing Service
// Handles subscriber management and email capture

const KIT_API_KEY = process.env.REACT_APP_KIT_API_KEY;
const KIT_API_BASE = process.env.REACT_APP_KIT_API_BASE || 'https://api.kit.com/v3';

/**
 * Subscribe user to Kit (ConvertKit)
 * @param {Object} userData - User information
 * @param {string} userData.email - User email (required)
 * @param {string} userData.firstName - User first name (optional)
 * @param {Array} userData.tags - Tags to apply (optional)
 * @param {Object} userData.fields - Custom fields (optional)
 * @returns {Promise<Object>} Result object with success status
 */
export const subscribeToKit = async (userData) => {
  const { email, firstName, tags = [], fields = {} } = userData;

  // Validação básica
  if (!email || !email.includes('@')) {
    console.error('❌ Invalid email address');
    return { success: false, error: 'Invalid email address' };
  }

  if (!KIT_API_KEY) {
    console.error('❌ Kit API key not configured');
    return { success: false, error: 'API key not configured' };
  }

  try {
    console.log('📧 Subscribing to Kit:', email);

    const response = await fetch(`${KIT_API_BASE}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KIT_API_KEY}`
      },
      body: JSON.stringify({
        email_address: email,
        first_name: firstName || '',
        tags: ['menomatch-quiz', 'website-lead', ...tags],
        fields: {
          source: 'MenoMatch Quiz',
          signup_date: new Date().toISOString(),
          ...fields
        }
      })
    });

    const data = await response.json();

    // Kit retorna 200 mesmo se subscriber já existe
    if (response.ok || response.status === 200) {
      console.log('✅ Successfully subscribed to Kit:', data);
      return { success: true, data };
    }

    // Tratar erro específico
    throw new Error(data.message || `HTTP ${response.status}`);

  } catch (error) {
    console.error('❌ Kit subscription error:', error);
    
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
 * Add tags to existing subscriber
 * @param {string} email - Subscriber email
 * @param {Array} tags - Tags to add
 * @returns {Promise<Object>} Result object
 */
export const addTagsToSubscriber = async (email, tags) => {
  if (!KIT_API_KEY) {
    return { success: false, error: 'API key not configured' };
  }

  try {
    const response = await fetch(`${KIT_API_BASE}/tags`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KIT_API_KEY}`
      },
      body: JSON.stringify({
        email_address: email,
        tags: tags
      })
    });

    if (!response.ok) {
      throw new Error('Failed to add tags');
    }

    const data = await response.json();
    console.log('✅ Tags added successfully');
    return { success: true, data };

  } catch (error) {
    console.error('❌ Error adding tags:', error);
    return { success: false, error: error.message, silent: true };
  }
};

/**
 * Prepare quiz data for Kit submission
 * @param {Object} quizAnswers - All quiz answers
 * @param {Object} results - Quiz results/analysis
 * @returns {Object} Formatted data for Kit
 */
export const prepareQuizDataForKit = (quizAnswers, results) => {
  // Extrair sintomas identificados
  const symptoms = results.symptoms || [];
  const topProducts = results.products ? results.products.slice(0, 3) : [];

  // Criar tags baseadas em sintomas
  const symptomTags = symptoms.map(symptom => 
    `symptom-${symptom.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
  );

  // Determinar severidade geral
  const severityTag = symptoms.length >= 5 ? 'severity-high' : 
                      symptoms.length >= 3 ? 'severity-medium' : 
                      'severity-low';

  return {
    email: results.email || '',
    firstName: results.firstName || '',
    tags: [
      'quiz-completed',
      severityTag,
      ...symptomTags
    ],
    fields: {
      // Dados do quiz
      quiz_completion_date: new Date().toISOString(),
      primary_symptoms: symptoms.join(', '),
      symptom_count: symptoms.length.toString(),
      
      // Produtos recomendados
      top_product_1: topProducts[0]?.name || '',
      top_product_2: topProducts[1]?.name || '',
      top_product_3: topProducts[2]?.name || '',
      
      // Tracking
      source: 'MenoMatch Website',
      landing_page: window.location.pathname,
      referrer: document.referrer || 'Direct',
      user_agent: navigator.userAgent,
      
      // Dados demográficos (se disponível)
      age_range: quizAnswers?.ageRange || '',
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

export default {
  subscribeToKit,
  addTagsToSubscriber,
  prepareQuizDataForKit,
  trackEmailCapture
};

