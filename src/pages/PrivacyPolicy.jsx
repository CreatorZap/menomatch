import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Mail, Shield, Lock, Eye } from 'lucide-react';
import Header from '../components/Header';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Helmet>
        <title>Privacy Policy | MenoMatch</title>
        <meta name="description" content="MenoMatch Privacy Policy - Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, LGPD, GDPR, menomatch privacy" />
        <link rel="canonical" href="https://meno-match.vercel.app/privacy-policy" />
      </Helmet>

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Back to Home Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-primary-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-600">
            Last Updated: <strong>January 2025</strong>
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Effective Date: <strong>January 2025</strong>
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* 1. Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">1.</span> Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to <strong>MenoMatch</strong>. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://meno-match.vercel.app" className="text-primary-600 hover:underline">meno-match.vercel.app</a> and use our services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              MenoMatch is a personalized menopause wellness platform that helps women find supplement recommendations tailored to their unique symptoms and needs. We take your privacy seriously and are committed to transparency about our data practices.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-900 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <strong>Contact:</strong> <a href="mailto:contato@edysouzafotografia.com" className="hover:underline">contato@edysouzafotografia.com</a>
              </p>
            </div>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">2.</span> Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us and information that is collected automatically when you use our services.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Email Addresses:</strong> When you sign up for our newsletter or request personalized recommendations</li>
              <li><strong>Quiz Responses:</strong> Answers to our 10-question menopause symptom assessment (not stored long-term, used only for generating recommendations)</li>
              <li><strong>Communications:</strong> When you contact us via email or forms</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Information Collected Automatically</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Usage Data:</strong> Pages visited, time spent, click behavior via Google Analytics</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address, device identifiers</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies for analytics and improving user experience</li>
              <li><strong>Affiliate Link Clicks:</strong> When you click on product links (for commission tracking)</li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">3.</span> How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Generate Personalized Recommendations:</strong> Analyze your quiz responses to suggest relevant supplements</li>
              <li><strong>Send Email Communications:</strong> Deliver your personalized recommendations and newsletters (if opted in)</li>
              <li><strong>Improve User Experience:</strong> Understand how visitors use our site to improve functionality and content</li>
              <li><strong>Analytics and Statistics:</strong> Track site performance and user behavior via Google Analytics</li>
              <li><strong>Respond to Inquiries:</strong> Answer your questions and provide customer support</li>
              <li><strong>Comply with Legal Obligations:</strong> Meet legal and regulatory requirements</li>
            </ul>
          </section>

          {/* 4. Third-Party Services */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">4.</span> Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the following third-party services that may collect, store, or process your information:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                <p className="text-gray-700 text-sm">Tracks website usage and behavior. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Privacy Policy</a></p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">ConvertKit</h4>
                <p className="text-gray-700 text-sm">Email marketing platform for newsletters. <a href="https://convertkit.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Privacy Policy</a></p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Vercel</h4>
                <p className="text-gray-700 text-sm">Website hosting and deployment. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Privacy Policy</a></p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Affiliate Networks</h4>
                <p className="text-gray-700 text-sm">Amazon, ClickBank, Digistore24, CelluCare (when you click affiliate links)</p>
              </div>
            </div>
          </section>

          {/* 5. Affiliate Links Disclosure */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">5.</span> Affiliate Links Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important:</strong> MenoMatch participates in affiliate marketing programs. This means we may earn a commission when you click on certain product links and make a purchase.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>We use affiliate links from <strong>Amazon Associates, ClickBank, Digistore24, and CelluCare</strong></li>
              <li>When you click an affiliate link, cookies may be placed on your device to track the transaction</li>
              <li>You pay <strong>no extra cost</strong> — prices are the same whether you use our links or not</li>
              <li>Commissions help us maintain and improve our free service</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              For more details, see our <Link to="/affiliate-disclosure" className="text-primary-600 hover:underline font-medium">Affiliate Disclosure</Link> page.
            </p>
          </section>

          {/* 6. Cookies */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">6.</span> Cookies and Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to improve your experience on our site.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Types of Cookies We Use:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Google Analytics to understand site usage</li>
              <li><strong>Affiliate Cookies:</strong> Track clicks on product links for commission attribution</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">How to Control Cookies:</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              You can disable cookies through your browser settings. However, this may affect site functionality.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Chrome</a> | <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Firefox</a> | <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Safari</a> | <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Edge</a></li>
            </ul>
          </section>

          {/* 7. Your Rights (LGPD/GDPR) */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">7.</span> Your Privacy Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under data protection laws including <strong>LGPD (Brazil)</strong> and <strong>GDPR (EU)</strong>, you have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete information</li>
              <li><strong>Right to Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Right to Object:</strong> Object to certain data processing activities</li>
            </ul>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-green-900">
                <strong>To exercise your rights:</strong> Email us at <a href="mailto:contato@edysouzafotografia.com" className="hover:underline font-medium">contato@edysouzafotografia.com</a> with your request. We will respond within 30 days.
              </p>
            </div>
          </section>

          {/* 8. Data Security */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">8.</span> Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>SSL Encryption:</strong> All data transmitted between your browser and our servers is encrypted</li>
              <li><strong>Secure Hosting:</strong> Our website is hosted on Vercel's secure infrastructure</li>
              <li><strong>Limited Access:</strong> Only authorized personnel have access to personal data</li>
              <li><strong>Regular Updates:</strong> We keep our systems and software up to date</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-yellow-900 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                <span><strong>Note:</strong> We do not process payments directly. All purchases are made through third-party retailers (Amazon, ClickBank, etc.) who have their own security measures.</span>
              </p>
            </div>
          </section>

          {/* 9. Children's Privacy */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">9.</span> Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              MenoMatch is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:contato@edysouzafotografia.com" className="text-primary-600 hover:underline">contato@edysouzafotografia.com</a> so we can delete it.
            </p>
          </section>

          {/* 10. Changes to Policy */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">10.</span> Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>The "Last Updated" date at the top will indicate when changes were made</li>
              <li>We encourage you to review this policy periodically</li>
              <li>For significant changes, we may notify you via email (if you're subscribed)</li>
              <li>Continued use of our services after changes constitutes acceptance</li>
            </ul>
          </section>

          {/* 11. Contact Us */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">11.</span> Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg">
              <p className="text-gray-900 mb-2"><strong>MenoMatch Privacy Team</strong></p>
              <p className="text-gray-700 mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-600" />
                <strong>Email:</strong> <a href="mailto:contato@edysouzafotografia.com" className="text-primary-600 hover:underline">contato@edysouzafotografia.com</a>
              </p>
              <p className="text-gray-700 flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary-600" />
                <strong>Response Time:</strong> Within 48 hours (business days)
              </p>
            </div>
          </section>

          {/* Additional Links */}
          <section className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Policies</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/terms-of-service" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                <ArrowLeft className="w-4 h-4 rotate-180" />
                Terms of Service
              </Link>
              <Link to="/affiliate-disclosure" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                <ArrowLeft className="w-4 h-4 rotate-180" />
                Affiliate Disclosure
              </Link>
              <Link to="/disclaimer" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                <ArrowLeft className="w-4 h-4 rotate-180" />
                Medical Disclaimer
              </Link>
            </div>
          </section>

        </div>

        {/* Back to Home Button (Bottom) */}
        <div className="mt-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 MenoMatch. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

