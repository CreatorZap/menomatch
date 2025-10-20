import React, { useState } from 'react';
import { X, Mail, Loader, CheckCircle } from 'lucide-react';

const EmailModal = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async () => {
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Call the parent's submit handler
      await onSubmit(email);
      
      // Track email capture event
      if (window.gtag) {
        window.gtag('event', 'email_captured', {
          source: 'results_modal'
        });
      }

      // Show success state
      setSubmitSuccess(true);
      setIsSubmitting(false);

      // Auto-close after 2.5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setEmail('');
        onClose();
      }, 2500);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-xl p-8 max-w-md w-full relative animate-slideUp shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          disabled={isSubmitting || submitSuccess}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Success State */}
        {submitSuccess ? (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-slideUp">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Success! 🎉
            </h3>
            <p className="text-gray-600 mb-2">
              Check your email for your personalized recommendations
            </p>
            <p className="text-sm text-gray-500">
              This window will close automatically...
            </p>
          </div>
        ) : (
          <>
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Get Your Results
            </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 text-center">
          Enter your email to receive your personalized recommendations, exclusive wellness tips, and special offers.
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="your@email.com"
            disabled={isSubmitting}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
              error ? 'border-red-500' : 'border-gray-300'
            } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
          />
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
        </div>

        {/* Privacy Note */}
        <p className="text-xs text-gray-500 mb-6 text-center">
          We respect your privacy. Your email will never be shared or sold. 
          You can unsubscribe at any time.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Maybe Later
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send My Results'
            )}
          </button>
        </div>

        {/* Benefits */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            You'll also receive:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Weekly wellness tips and menopause guides</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Exclusive discounts on recommended products</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Early access to new resources and content</span>
            </li>
          </ul>
        </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailModal;

