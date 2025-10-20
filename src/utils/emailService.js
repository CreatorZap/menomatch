/**
 * Email Service Integration
 * 
 * This file provides functions to integrate with various email services.
 * Uncomment and configure the service you want to use.
 */

/**
 * Submit email to Mailchimp
 * @param {string} email - User's email address
 * @param {object} answers - Quiz answers for segmentation
 * @returns {Promise}
 */
export const submitToMailchimp = async (email, answers) => {
  const API_KEY = process.env.REACT_APP_MAILCHIMP_API_KEY;
  const LIST_ID = process.env.REACT_APP_MAILCHIMP_LIST_ID;
  const SERVER_PREFIX = process.env.REACT_APP_MAILCHIMP_SERVER_PREFIX;

  if (!API_KEY || !LIST_ID || !SERVER_PREFIX) {
    throw new Error('Mailchimp credentials not configured');
  }

  // Note: This should be done server-side to protect your API key
  // This is just an example of the API structure
  const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: '', // Can be collected in quiz
        LNAME: '',
      },
      tags: ['menomatch-quiz'], // Tag for segmentation
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to subscribe to Mailchimp');
  }

  return response.json();
};

/**
 * Submit email to ConvertKit
 * @param {string} email - User's email address
 * @param {object} answers - Quiz answers for segmentation
 * @returns {Promise}
 */
export const submitToConvertKit = async (email, answers) => {
  const API_KEY = process.env.REACT_APP_CONVERTKIT_API_KEY;
  const FORM_ID = process.env.REACT_APP_CONVERTKIT_FORM_ID;

  if (!API_KEY || !FORM_ID) {
    throw new Error('ConvertKit credentials not configured');
  }

  const url = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: API_KEY,
      email: email,
      tags: ['menomatch-quiz'], // Tag for segmentation
      fields: {
        // You can add custom fields here based on quiz answers
        quiz_completed: 'yes',
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to subscribe to ConvertKit');
  }

  return response.json();
};

/**
 * Submit email to your own API
 * @param {string} email - User's email address
 * @param {object} answers - Quiz answers
 * @returns {Promise}
 */
export const submitToCustomAPI = async (email, answers) => {
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      answers,
      source: 'menomatch-quiz',
      timestamp: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit email');
  }

  return response.json();
};

/**
 * Main email submission function
 * Choose which service to use here
 */
export const submitEmail = async (email, answers) => {
  try {
    // Option 1: Use ConvertKit (recommended for beginners)
    // return await submitToConvertKit(email, answers);

    // Option 2: Use Mailchimp
    // return await submitToMailchimp(email, answers);

    // Option 3: Use your own API
    // return await submitToCustomAPI(email, answers);

    // For now, just log to console (development mode)
    console.log('Email submission:', { email, answers });
    return { success: true, email };

  } catch (error) {
    console.error('Email submission error:', error);
    throw error;
  }
};

export default submitEmail;




