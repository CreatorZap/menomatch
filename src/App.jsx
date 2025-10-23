import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Results from './components/Results';
import EmailModal from './components/EmailModal';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import BlogIndex from './pages/BlogIndex';
import ArticlePage from './pages/ArticlePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import Disclaimer from './pages/Disclaimer';
import { questions } from './data/questions';
import { subscribeToKit, prepareQuizDataForKit, trackEmailCapture } from './services/brevoService';

// Quiz App Component (encapsulates quiz logic)
function QuizApp() {
  const [currentStep, setCurrentStep] = useState('landing'); // landing, quiz, results
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Track page views for analytics
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: currentStep,
        page_location: window.location.href,
      });
    }
  }, [currentStep]);

  // Handle starting the quiz
  const handleStartQuiz = () => {
    setCurrentStep('quiz');
    setCurrentQuestion(0);
    setAnswers({});
    
    // Track quiz start
    if (window.gtag) {
      window.gtag('event', 'quiz_started', {
        quiz_version: 'v1'
      });
    }
  };

  // Handle quiz answer
  const handleAnswer = (questionId, answerValue) => {
    const newAnswers = { ...answers, [questionId]: answerValue };
    setAnswers(newAnswers);

    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      setCurrentStep('results');
      
      // Track quiz completion
      if (window.gtag) {
        window.gtag('event', 'quiz_completed', {
          total_questions: questions.length
        });
      }
    }
  };

  // Handle previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Handle email capture (can receive email directly or just open modal)
  const handleEmailCapture = async (email) => {
    // If email is provided, submit it directly
    if (email) {
      return await handleEmailSubmit(email);
    }
    // Otherwise, open the modal
    setShowEmailModal(true);
  };

  // Handle email submit with Kit (ConvertKit) integration
  const handleEmailSubmit = async (email) => {
    try {
      console.log('📧 Processing email capture:', email);

      // Prepare quiz data for Kit with all answers
      const quizResults = {
        email: email,
        symptoms: Object.keys(answers).map(key => {
          const question = questions.find(q => q.id === parseInt(key));
          return question ? question.text : key;
        }),
        ageRange: answers[1] || 'Not specified', // Assuming question 1 is age
      };

      const kitData = prepareQuizDataForKit(answers, quizResults);

      // Subscribe to Kit (ConvertKit) with new API
      const result = await subscribeToKit(kitData);

      // Track in analytics regardless of Kit success
      trackEmailCapture(result.success, 'quiz');

      // Always close modal and show success to user
      // (We don't want email service failures to block UX)
      setShowEmailModal(false);

      if (result.success) {
        console.log('✅ Successfully subscribed to Kit via new API!');
      } else {
        console.warn('⚠️ Kit subscription failed, but continuing UX flow:', result.error);
      }

      return Promise.resolve();
    } catch (error) {
      console.error('❌ Error in email submission:', error);
      
      // Even with error, close modal and continue
      // (Better UX than blocking user)
      setShowEmailModal(false);
      return Promise.resolve(); // Resolve instead of reject
    }
  };

  // Handle retake quiz
  const handleRetakeQuiz = () => {
    setCurrentStep('landing');
    setCurrentQuestion(0);
    setAnswers({});
    window.scrollTo(0, 0);
  };

  return (
    <div className="App min-h-screen">
      {/* Header */}
      <Header 
        showProgress={currentStep === 'quiz'}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
      />

      {/* Main Content */}
      {currentStep === 'landing' && (
        <Landing onStartQuiz={handleStartQuiz} />
      )}

      {currentStep === 'quiz' && (
        <Quiz
          currentQuestion={currentQuestion}
          answers={answers}
          onAnswer={handleAnswer}
          onPrevious={handlePrevious}
        />
      )}

      {currentStep === 'results' && (
        <Results
          answers={answers}
          onEmailCapture={handleEmailCapture}
          onRetakeQuiz={handleRetakeQuiz}
        />
      )}

      {/* Email Modal */}
      <EmailModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        onSubmit={handleEmailSubmit}
      />

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
    </div>
  );
}

// Main App Component with Router
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;

