import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Target, Users, Sparkles, ArrowRight } from 'lucide-react';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About MenoMatch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your personalized companion for navigating menopause with confidence and clarity
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12 animate-slideUp">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary-500" />
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            MenoMatch was created with a simple but powerful goal: to help women find the right support 
            during their menopause journey. We understand that every woman's experience is unique, and 
            that's why we've developed a personalized approach to wellness recommendations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through our intelligent quiz system, we analyze your specific symptoms, preferences, and 
            lifestyle to provide tailored product recommendations that truly match your needs.
          </p>
        </div>

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Take Our Quiz</h3>
            <p className="text-gray-600">
              Answer 10 simple questions about your symptoms, lifestyle, and preferences.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-secondary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Get Matched</h3>
            <p className="text-gray-600">
              Our algorithm analyzes your responses to find products that best fit your needs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Take Action</h3>
            <p className="text-gray-600">
              Explore your personalized recommendations and start your wellness journey today.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose MenoMatch?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-bold mb-2">Personalized Approach</h4>
                <p className="text-blue-50">Every recommendation is tailored to your unique symptoms and needs.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-bold mb-2">Science-Backed</h4>
                <p className="text-blue-50">Our recommendations are based on research and expert knowledge.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-bold mb-2">Free & Easy</h4>
                <p className="text-blue-50">Our quiz is completely free and takes just 2 minutes to complete.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-600 font-bold text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-bold mb-2">Community Support</h4>
                <p className="text-blue-50">Join thousands of women finding relief and support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Your Match?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Take our free 2-minute quiz and discover personalized recommendations 
            that can help you feel like yourself again.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Start Your Free Quiz
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">MenoMatch</h3>
              <p className="text-gray-400 text-sm">
                Personalized menopause wellness recommendations for women.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Take Quiz</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#disclaimer" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 MenoMatch. All rights reserved.</p>
            <p className="mt-2">
              This site contains affiliate links. We may earn a commission from purchases made through these links.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

