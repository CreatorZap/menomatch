import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Sparkles, ArrowRight, Award, Shield, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const About = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About MenoMatch | Our Mission to Empower Women Through Menopause</title>
        <meta name="description" content="Learn how MenoMatch helps women navigate menopause with personalized, science-backed supplement recommendations. Join 10,000+ women finding relief." />
        <meta name="keywords" content="about menomatch, menopause support, personalized menopause care, women's wellness" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About MenoMatch | Empowering Women Through Menopause" />
        <meta property="og:description" content="Join 10,000+ women finding personalized menopause relief with MenoMatch." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <Header />
        
        {/* Hero Section - Improved */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-4 py-16 md:py-20"
        >
          <div className="text-center">
            <motion.div 
              variants={scaleIn}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-2 rounded-full font-semibold text-sm mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Our Story</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Empowering Women Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Menopause
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              MenoMatch was born from a simple belief: every woman deserves 
              personalized support during menopause. No two journeys are alike, 
              and your solutions shouldn't be either.
            </motion.p>
          </div>
        </motion.section>

        {/* The Problem Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  The Problem We're Solving
                </h2>
                <div className="space-y-6">
                  <motion.div 
                    variants={fadeInUp}
                    className="flex gap-4"
                  >
                    <span className="text-3xl flex-shrink-0">😓</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Overwhelming Information</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Thousands of supplements, conflicting advice, and no clear path forward. 
                        It's exhausting to figure out what actually works.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="flex gap-4"
                  >
                    <span className="text-3xl flex-shrink-0">🤷‍♀️</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">One-Size-Fits-All Fails</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Generic recommendations ignore your unique symptoms, lifestyle, and body. 
                        What works for your friend might not work for you.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="flex gap-4"
                  >
                    <span className="text-3xl flex-shrink-0">⏰</span>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Wasted Time & Money</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Trial and error with products that don't address YOUR specific needs. 
                        You deserve better than guesswork.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={scaleIn}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  A personalized, science-backed quiz that analyzes YOUR symptoms 
                  and recommends supplements proven to work for women like you.
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl">
                  <p className="text-primary-700 font-bold text-lg text-center">
                    💡 Free • 2 Minutes • Personalized
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4"
              >
                What We Stand For
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
              >
                These core values guide everything we do at MenoMatch
              </motion.p>
              
              <motion.div 
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8 md:gap-10"
              >
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">🔬</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Science-Backed</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every recommendation is based on peer-reviewed research and clinical studies. 
                    No pseudoscience, just proven solutions.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">💚</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Honest & Transparent</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're upfront about affiliate partnerships and never recommend products 
                    we don't believe in. Your trust matters more than commissions.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">👥</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">Community First</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your wellbeing matters more than any sale. We're here to support you, 
                    not just sell to you.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats/Impact Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-16 md:py-20 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              Our Impact So Far
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-primary-100 text-center mb-12 max-w-2xl mx-auto"
            >
              Helping thousands of women find relief, one personalized recommendation at a time
            </motion.p>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            >
              <motion.div 
                variants={scaleIn}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">10,000+</div>
                <div className="text-primary-100 text-lg">Quizzes Taken</div>
              </motion.div>
              
              <motion.div 
                variants={scaleIn}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">4.8★</div>
                <div className="text-primary-100 text-lg">Average Rating</div>
              </motion.div>
              
              <motion.div 
                variants={scaleIn}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">94%</div>
                <div className="text-primary-100 text-lg">Satisfaction Rate</div>
              </motion.div>
              
              <motion.div 
                variants={scaleIn}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">8</div>
                <div className="text-primary-100 text-lg">Educational Guides</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* How It Works */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
              >
                How MenoMatch Works
              </motion.h2>
              
              <motion.div 
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                <motion.div 
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all relative"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2">
                    <Target className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Take Our Quiz</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Answer 10 simple questions about your symptoms, lifestyle, and wellness preferences.
                  </p>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all relative"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-secondary-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2">
                    <Sparkles className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Get Personalized Matches</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our algorithm analyzes your responses to find supplements proven to work for your specific needs.
                  </p>
                </motion.div>

                <motion.div 
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all relative"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2">
                    <TrendingUp className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Start Your Journey</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Explore your recommendations, read detailed guides, and begin feeling like yourself again.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Final CTA Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-4 py-16 md:py-20"
        >
          <motion.div 
            variants={fadeInUp}
            className="text-center bg-white rounded-2xl shadow-2xl p-10 md:p-16 border border-gray-100"
          >
            <motion.div 
              variants={scaleIn}
              className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Ready to Find Your Match?
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Join 10,000+ women who've found personalized menopause relief. 
              Take our free 2-minute quiz and start feeling like yourself again.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Start Your Free Quiz
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-sm text-gray-500 mt-6"
            >
              ✓ 100% Free • ✓ 2 Minutes • ✓ Science-Backed • ✓ Personalized Results
            </motion.p>
          </motion.div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
                <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="mailto:support@getmenomatch.com" className="hover:text-white transition-colors">
                    Email Us
                  </a>
                </li>
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
    </>
  );
};

export default About;
