import React from 'react';
import { Sparkles, Brain, Zap, Moon, ArrowRight, CheckCircle } from 'lucide-react';
import Testimonials from './Testimonials';
import FAQ from './FAQ';

const Landing = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
            Personalized Menopause Wellness
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              {' '}Menopause Solution
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Take our science-backed quiz and discover personalized supplement recommendations 
            tailored to your unique symptoms and wellness goals.
          </p>

          {/* CTA Button */}
          <button 
            onClick={onStartQuiz}
            className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto transform hover:scale-105"
          >
            Start Your Free Quiz
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Takes only 2 minutes</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Science-backed</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Personalized Analysis
            </h3>
            <p className="text-gray-600">
              Our intelligent quiz analyzes your symptoms to recommend the best 
              solutions for your unique needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-secondary-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Natural Solutions
            </h3>
            <p className="text-gray-600">
              Discover clinically-studied natural supplements that can help manage 
              your menopausal symptoms effectively.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Moon className="w-6 h-6 text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Better Wellness
            </h3>
            <p className="text-gray-600">
              Take control of your menopause journey with evidence-based 
              recommendations you can trust.
            </p>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6">Trusted by thousands of women</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-primary-500">10,000+</div>
              <div className="text-sm text-gray-600">Quizzes Taken</div>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-primary-500">4.8★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-primary-500">95%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Take the Quiz</h3>
              <p className="text-gray-600">
                Answer 10 simple questions about your symptoms and wellness preferences
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized product suggestions based on your unique needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Your Journey</h3>
              <p className="text-gray-600">
                Begin your path to wellness with solutions that work for you
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Feel Like Yourself Again?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of women who've found relief through personalized recommendations
            </p>
            <button 
              onClick={onStartQuiz}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all shadow-lg transform hover:scale-105"
            >
              Get Started Now - It's Free!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

