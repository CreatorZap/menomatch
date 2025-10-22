import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = ({ showProgress = false, currentQuestion = 0, totalQuestions = 10 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Check if link is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    if (path === '/blog') {
      return location.pathname === '/blog' || location.pathname.startsWith('/blog/');
    }
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity z-50"
            onClick={closeMobileMenu}
          >
            <img 
              src="/logo192.png" 
              alt="MenoMatch Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-gray-900">MenoMatch</span>
          </Link>

          {/* Progress indicator or navigation */}
          {showProgress ? (
            <span className="text-sm text-gray-600 font-medium">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
          ) : (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                <Link 
                  to="/about" 
                  className={`font-medium transition-colors relative pb-1 ${
                    isActive('/about')
                      ? 'text-primary-600 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-600'
                      : 'text-gray-600 hover:text-primary-500'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/" 
                  className={`font-medium transition-colors relative pb-1 ${
                    isActive('/')
                      ? 'text-primary-600 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-600'
                      : 'text-gray-600 hover:text-primary-500'
                  }`}
                >
                  Take Quiz
                </Link>
                <Link 
                  to="/blog" 
                  className={`font-medium transition-colors relative pb-1 ${
                    isActive('/blog')
                      ? 'text-primary-600 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-600'
                      : 'text-gray-600 hover:text-primary-500'
                  }`}
                >
                  Blog
                </Link>
              </nav>

              {/* Mobile Hamburger Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-50"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900" />
                )}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {!showProgress && mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <nav 
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 md:hidden transform transition-transform duration-300 ease-in-out"
            style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-1">
                <Link
                  to="/about"
                  className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors ${
                    isActive('/about')
                      ? 'text-primary-600 bg-primary-50 font-semibold'
                      : 'text-gray-900 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  to="/"
                  className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors ${
                    isActive('/')
                      ? 'text-primary-600 bg-primary-50 font-semibold'
                      : 'text-gray-900 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Take Quiz
                </Link>
                <Link
                  to="/blog"
                  className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors ${
                    isActive('/blog')
                      ? 'text-primary-600 bg-primary-50 font-semibold'
                      : 'text-gray-900 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </div>

              {/* Mobile Menu Footer */}
              <div className="mt-auto pb-8">
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-500 text-center">
                    Personalized menopause wellness
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
