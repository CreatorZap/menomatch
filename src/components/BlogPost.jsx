import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Mail, Facebook, Twitter, Linkedin, Link2, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import EmailModal from './EmailModal';

const BlogPost = ({ 
  title, 
  excerpt, 
  author, 
  date, 
  readTime, 
  category, 
  image, 
  keywords,
  children,
  relatedArticles = []
}) => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  // Handle email submission
  const handleEmailSubmit = async (email) => {
    try {
      // Here you would integrate with your email service
      console.log('Newsletter signup:', email);
      
      // Track newsletter signup
      if (window.gtag) {
        window.gtag('event', 'newsletter_signup', {
          source: 'blog_post',
          article_title: title
        });
      }
      
      setShowEmailModal(false);
      return Promise.resolve();
    } catch (error) {
      console.error('Error submitting email:', error);
      return Promise.reject(error);
    }
  };

  // Copy link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Social share URLs
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
  };

  // Track page view
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, [title]);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{title} | MenoMatch Blog</title>
        <meta name="description" content={excerpt} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={image} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Article Header */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                {/* Featured Image */}
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {category}
                    </span>
                  </div>
                </div>

                {/* Article Meta */}
                <div className="p-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span className="font-medium">{author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{readTime}</span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    {children}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl shadow-xl p-8 text-white text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready for Personalized Recommendations?
                </h3>
                <p className="text-lg text-blue-50 mb-6 max-w-2xl mx-auto">
                  Take our free 2-minute quiz to get product recommendations tailored to your unique symptoms.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Take the Free Quiz
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl shadow-xl p-6 text-white sticky top-4">
                <h3 className="text-xl font-bold mb-3">
                  Find Your Perfect Match
                </h3>
                <p className="text-blue-50 mb-4 text-sm">
                  Take our personalized quiz and get supplement recommendations tailored to your needs.
                </p>
                <Link
                  to="/"
                  className="block w-full bg-white text-primary-600 text-center px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Start Quiz
                </Link>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-primary-500" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Stay Updated
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Get the latest menopause tips, research, and product recommendations delivered to your inbox.
                </p>
                <button
                  onClick={() => setShowEmailModal(true)}
                  className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  Subscribe Now
                </button>
              </div>

              {/* Social Sharing */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Share This Article
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href={shareUrls.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="font-medium">Share on Facebook</span>
                  </a>
                  <a
                    href={shareUrls.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="font-medium">Share on Twitter</span>
                  </a>
                  <a
                    href={shareUrls.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">Share on LinkedIn</span>
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {copiedLink ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-medium text-green-600">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Link2 className="w-5 h-5" />
                        <span className="font-medium">Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.slice(0, 3).map((article) => (
                      <Link
                        key={article.id}
                        to={`/blog/${article.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                          />
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-1">
                              {article.title}
                            </h4>
                            <span className="text-xs text-gray-500">{article.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/blog"
                    className="block w-full text-center text-primary-600 font-semibold mt-4 hover:text-primary-700 transition-colors"
                  >
                    View All Articles →
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>
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

export default BlogPost;

