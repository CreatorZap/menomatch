import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, TrendingUp, Mail, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import EmailModal from '../components/EmailModal';
import { articles, getCategories } from '../data/articles';
import { fadeInUp, staggerContainer } from '../utils/animations';

const BlogIndex = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Get categories
  const categories = ['All Articles', ...getCategories()];

  // Calculate article counts per category
  const getCategoryCount = (category) => {
    if (category === 'All Articles') {
      return articles.length;
    }
    return articles.filter(article => article.category === category).length;
  };

  // Filter articles
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All Articles' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.keywords.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured article (first one)
  const featuredArticle = filteredArticles.find(a => a.featured) || filteredArticles[0];
  const otherArticles = filteredArticles.filter(a => a.id !== featuredArticle?.id);

  const handleEmailSubmit = async (email) => {
    try {
      console.log('Newsletter signup:', email);
      
      if (window.gtag) {
        window.gtag('event', 'newsletter_signup', {
          source: 'blog_index',
          location: 'newsletter_cta'
        });
      }
      
      setShowEmailModal(false);
      return Promise.resolve();
    } catch (error) {
      console.error('Error submitting email:', error);
      return Promise.reject(error);
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Menopause Wellness Blog | Evidence-Based Guides & Tips | MenoMatch</title>
        <meta name="description" content="Expert menopause advice, natural relief tips, and science-backed guides. Learn about symptoms, supplements, nutrition, and holistic wellness strategies." />
        <meta name="keywords" content="menopause blog, menopause tips, menopause advice, perimenopause, natural menopause relief, menopause supplements, menopause wellness" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Menopause Wellness Blog | MenoMatch" />
        <meta property="og:description" content="Expert menopause advice, natural relief tips, and science-backed guides." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Menopause Wellness Blog | MenoMatch" />
        <meta name="twitter:description" content="Expert menopause advice, natural relief tips, and science-backed guides." />

        {/* Schema.org Blog markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "MenoMatch Blog",
            "description": "Evidence-based menopause wellness guides and tips",
            "url": window.location.href,
            "publisher": {
              "@type": "Organization",
              "name": "MenoMatch",
              "logo": {
                "@type": "ImageObject",
                "url": `${window.location.origin}/logo192.png`
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <Header />
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 text-white py-20"
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center mb-8"
            >
              <motion.div 
                variants={fadeInUp}
                className="flex items-center justify-center gap-3 mb-4"
              >
                <Sparkles className="w-8 h-8 animate-pulse" />
                <h1 className="text-5xl md:text-6xl font-extrabold">
                  Menopause Wellness Blog
                </h1>
                <Sparkles className="w-8 h-8 animate-pulse" />
              </motion.div>
              <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-8 animate-slideUp">
                Evidence-based guides to help you navigate menopause naturally
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/50 shadow-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    selectedCategory === category
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {getCategoryCount(category)}
                  </span>
                </button>
              ))}
            </div>
            
            {searchQuery && (
              <div className="text-center mt-4 text-gray-600">
                Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} 
                {searchQuery && ` matching "${searchQuery}"`}
              </div>
            )}
          </div>

          {/* Featured Article (Larger) */}
          {featuredArticle && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-7 h-7 text-primary-600" />
                <h2 className="text-3xl font-bold text-gray-900">Featured Article</h2>
              </div>
              
              <Link to={`/blog/${featuredArticle.slug}`} className="block group">
                <article className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all transform hover:-translate-y-1">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-80 md:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 opacity-90" />
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                      <span className="absolute top-6 left-6 px-4 py-2 bg-white rounded-full text-sm font-bold text-primary-600 shadow-lg">
                        {featuredArticle.category}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                        {featuredArticle.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 mb-6 line-clamp-4">
                        {featuredArticle.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredArticle.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center gap-2 text-primary-600 font-bold text-lg group-hover:text-primary-700 transition-colors">
                        Read Full Article
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-secondary-500 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <Mail className="w-8 h-8" />
                    <h3 className="text-3xl font-bold">Get Weekly Menopause Tips</h3>
                  </div>
                  <p className="text-lg text-purple-50">
                    Expert advice, natural remedies, and wellness strategies delivered to your inbox.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setShowEmailModal(true)}
                    className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          {otherArticles.length > 0 && (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl font-bold text-gray-900 mb-8"
              >
                {selectedCategory === 'All Articles' ? 'All Articles' : selectedCategory}
              </motion.h2>
              
              <motion.div 
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {otherArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </motion.div>
            </motion.div>
          )}
          
          {/* No articles message - only show if NO articles at all (including featured) */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found. Try a different category or search term.</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Personalized Recommendations?
            </h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Take our free 2-minute quiz to get supplement recommendations tailored to your unique symptoms.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Take the Free Quiz
              <ArrowRight className="w-6 h-6" />
            </Link>
            <p className="mt-6 text-sm text-blue-100">
              ✓ 100% Free  •  ✓ 2 Minutes  •  ✓ Science-Backed  •  ✓ Personalized Results
            </p>
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

      {/* Email Modal */}
      <EmailModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        onSubmit={handleEmailSubmit}
      />
    </>
  );
};

// Article Card Component
const ArticleCard = ({ article }) => {
  return (
    <Link to={`/blog/${article.slug}`} className="block group">
      <motion.article 
        variants={fadeInUp}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl h-full flex flex-col"
      >
        {/* Image with Gradient Overlay */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/80 to-secondary-400/80" />
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="absolute top-4 left-4 px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-700 shadow-md"
          >
            {article.category}
          </motion.span>
        </div>
        
        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors leading-tight">
            {article.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <motion.div 
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:text-primary-700 transition-colors"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogIndex;
