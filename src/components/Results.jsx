import React from 'react';
import { motion } from 'framer-motion';
import { Check, ExternalLink, Mail, Star, AlertCircle } from 'lucide-react';
import { getRecommendations, getMainSymptoms } from '../utils/recommendations';
import { products } from '../data/products';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const Results = ({ answers, onEmailCapture, onRetakeQuiz }) => {
  const recommendations = getRecommendations(answers, products).slice(0, 4);
  const mainSymptoms = getMainSymptoms(answers);

  const handleAffiliateClick = (product) => {
    // Track affiliate click in analytics
    if (window.gtag) {
      window.gtag('event', 'affiliate_click', {
        product_id: product.id,
        product_name: product.name,
        platform: product.platform
      });
    }
    
    // Open link in new tab
    window.open(product.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Results Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div 
            variants={scaleIn}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Check className="w-4 h-4" />
            Analysis Complete
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Your Personalized Recommendations
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Based on your answers, we've identified the best solutions to help you 
            manage your symptoms and improve your wellness journey.
          </motion.p>
        </motion.div>

        {/* Main Symptoms Summary */}
        {mainSymptoms.length > 0 && (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-xl font-semibold text-gray-900 mb-4"
            >
              Your Primary Concerns
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="flex flex-wrap gap-3"
            >
              {mainSymptoms.map((symptom, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-lg"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span className="font-medium">{symptom}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Email Capture CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-8 text-white text-center mb-12 shadow-lg"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold mb-2"
          >
            Want these results in your inbox?
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-4 opacity-90 max-w-2xl mx-auto"
          >
            Get your personalized recommendations plus exclusive wellness tips, 
            menopause guides, and special offers delivered directly to your email.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.5 }}
            onClick={onEmailCapture}
            className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-md"
          >
            Send Me My Results
          </motion.button>
        </motion.div>

        {/* Product Recommendations */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl font-bold text-gray-900 mb-6"
          >
            Recommended For You
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {recommendations.map((product, index) => (
              <motion.div 
                key={product.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl relative"
              >
                {/* Product Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-2 py-1 rounded">
                        #{index + 1} Recommended
                      </span>
                      {product.rating && (
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium text-gray-700">
                            {product.rating}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {product.platform} • {product.price}
                    </p>
                  </div>
                </div>

                {/* Product Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Key Benefits:
                  </p>
                  {product.benefits.slice(0, 4).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAffiliateClick(product)}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  Learn More & Get Started
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
                
                {/* Top Pick Badge para o primeiro produto */}
                {index === 0 && (
                  <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.5, type: "spring", damping: 15 }}
                    className="absolute top-4 left-0 bg-orange-500 text-white px-4 py-1 rounded-r-full font-semibold text-sm shadow-md"
                  >
                    ⭐ Top Pick
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Disclaimer */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong className="text-gray-900">Important Note:</strong> These recommendations 
            are based on your quiz responses and are for informational purposes only. 
            They are not intended as medical advice. Please consult with your healthcare 
            provider before starting any new supplement regimen, especially if you have 
            pre-existing conditions or are taking medications.
          </p>
        </div>

        {/* Bottom Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-lg p-6 shadow-sm border border-gray-100"
        >
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Want different recommendations?
            </h3>
            <p className="text-sm text-gray-600">
              Retake the quiz to get updated suggestions
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRetakeQuiz}
            className="px-6 py-3 border-2 border-primary-500 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors whitespace-nowrap"
          >
            Retake Quiz
          </motion.button>
        </motion.div>

        {/* Additional Resources Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Continue Your Wellness Journey
          </h3>
          <p className="text-gray-600 mb-6">
            Explore our blog for more menopause tips, guides, and expert advice
          </p>
          <a 
            href="#blog" 
            className="inline-block px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Visit Our Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default Results;




