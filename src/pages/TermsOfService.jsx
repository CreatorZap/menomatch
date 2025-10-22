import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, FileText, AlertTriangle, Scale } from 'lucide-react';
import Header from '../components/Header';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Helmet>
        <title>Terms of Service | MenoMatch</title>
        <meta name="description" content="MenoMatch Terms of Service - Legal agreement for using our menopause wellness platform and services." />
        <meta name="keywords" content="terms of service, user agreement, legal terms, menomatch terms" />
        <link rel="canonical" href="https://meno-match.vercel.app/terms-of-service" />
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
            <FileText className="w-10 h-10 text-primary-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms of Service</h1>
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
          
          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">1.</span> Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to <strong>MenoMatch</strong>. By accessing or using our website at <a href="https://meno-match.vercel.app" className="text-primary-600 hover:underline">meno-match.vercel.app</a>, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                <span><strong>Age Requirement:</strong> You must be at least <strong>18 years old</strong> to use MenoMatch. By using our services, you represent and warrant that you are 18 or older.</span>
              </p>
            </div>
          </section>

          {/* 2. Description of Service */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">2.</span> Description of Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MenoMatch is an <strong>educational platform</strong> that provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Personalized Quiz:</strong> A 10-question assessment to help identify menopause symptoms</li>
              <li><strong>Product Recommendations:</strong> Suggestions for supplements and products based on quiz responses</li>
              <li><strong>Educational Content:</strong> Blog articles, guides, and resources about menopause wellness</li>
              <li><strong>Newsletter:</strong> Optional email updates with tips, research, and recommendations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Our service is <strong>informational and educational only</strong>. We do not sell products directly—all purchases are made through third-party retailers.
            </p>
          </section>

          {/* 3. Medical Disclaimer */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">3.</span> Medical Disclaimer
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-4">
              <p className="text-yellow-900 font-semibold mb-2 text-lg">
                ⚠️ IMPORTANT: MenoMatch is NOT medical advice
              </p>
              <ul className="list-disc list-inside text-yellow-900 space-y-2 text-sm">
                <li>We are <strong>not doctors</strong> and do not provide medical diagnosis or treatment</li>
                <li>Our recommendations are <strong>educational suggestions</strong>, not prescriptions</li>
                <li>Content is for <strong>general information only</strong> and should not replace professional medical advice</li>
                <li>Always <strong>consult a healthcare professional</strong> before starting any supplement or treatment</li>
                <li>Never disregard professional medical advice or delay seeking care because of information on MenoMatch</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              For detailed medical disclaimers, see our <Link to="/disclaimer" className="text-primary-600 hover:underline font-medium">Medical Disclaimer</Link> page.
            </p>
          </section>

          {/* 4. User Responsibilities */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">4.</span> User Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using MenoMatch, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Provide Accurate Information:</strong> Give truthful responses in the quiz for accurate recommendations</li>
              <li><strong>Personal Use Only:</strong> Use the service for your own personal, non-commercial purposes</li>
              <li><strong>No Scraping or Automation:</strong> Do not use bots, scrapers, or automated tools to access our site</li>
              <li><strong>Respect Intellectual Property:</strong> Do not copy, reproduce, or redistribute our content without permission</li>
              <li><strong>No Harmful Activities:</strong> Do not engage in activities that could harm our site, users, or reputation</li>
              <li><strong>Comply with Laws:</strong> Use the service in accordance with all applicable local, state, and federal laws</li>
            </ul>
          </section>

          {/* 5. Affiliate Relationships */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">5.</span> Affiliate Relationships
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Full Disclosure:</strong> MenoMatch participates in affiliate marketing programs and earns commissions on qualifying purchases made through our links.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>We partner with <strong>Amazon Associates, ClickBank, Digistore24, CelluCare</strong>, and individual brands</li>
              <li>When you click affiliate links and make purchases, we may receive a commission at <strong>no extra cost to you</strong></li>
              <li>Our recommendations are <strong>independent and unbiased</strong>—we only recommend products we believe can help</li>
              <li>Commission earnings do not influence the integrity of our recommendations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              For complete transparency, see our <Link to="/affiliate-disclosure" className="text-primary-600 hover:underline font-medium">Affiliate Disclosure</Link>.
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">6.</span> Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on MenoMatch, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Text, articles, blog posts, and guides</li>
              <li>Graphics, logos, images, and design</li>
              <li>Quiz questions and algorithms</li>
              <li>Website code and functionality</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              ...is owned by or licensed to MenoMatch and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">7.</span> Limitation of Liability
            </h2>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg mb-4">
              <p className="text-gray-900 font-semibold mb-3">
                TO THE FULLEST EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>MenoMatch is provided <strong>"AS IS"</strong> without warranties of any kind</li>
                <li>We do not guarantee specific results from using our recommendations</li>
                <li>We are <strong>not responsible</strong> for any health outcomes, adverse reactions, or results from products you purchase</li>
                <li>We are <strong>not liable</strong> for third-party websites, products, or services accessed through our links</li>
                <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Our total liability shall not exceed the amount you paid to us (which is $0 for free services)</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm italic">
              Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.
            </p>
          </section>

          {/* 8. Third-Party Links */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">8.</span> Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MenoMatch contains links to external websites and retailers, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Amazon.com and other e-commerce platforms</li>
              <li>Supplement manufacturer websites</li>
              <li>Health information resources</li>
              <li>Affiliate partner sites</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>We are not responsible for:</strong> The content, privacy policies, or practices of third-party sites. Your interactions with external sites are governed by their terms and policies. We encourage you to read their terms before making purchases.
            </p>
          </section>

          {/* 9. Termination */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">9.</span> Termination
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Your Rights:</strong> You may stop using MenoMatch at any time. To unsubscribe from emails, click the "Unsubscribe" link in any newsletter.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Our Rights:</strong> We reserve the right to suspend or terminate your access to MenoMatch at our sole discretion, without notice, for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Any reason we deem necessary to protect our service or users</li>
            </ul>
          </section>

          {/* 10. Changes to Terms */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">10.</span> Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may modify these Terms at any time to reflect:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Changes in our services or practices</li>
              <li>Legal, regulatory, or security requirements</li>
              <li>Improved clarity or user experience</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The "Last Updated" date at the top will indicate when changes were made. Your continued use of MenoMatch after changes constitutes acceptance of the new Terms. We encourage you to review this page periodically.
            </p>
          </section>

          {/* 11. Governing Law */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">11.</span> Governing Law
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-900 mb-3 flex items-center gap-2">
                <Scale className="w-6 h-6" />
                <strong className="text-lg">Legal Jurisdiction</strong>
              </p>
              <p className="text-blue-900 mb-2">
                These Terms are governed by and construed in accordance with the laws of <strong>Brazil</strong>, without regard to conflict of law principles.
              </p>
              <p className="text-blue-900">
                Any disputes arising from these Terms or use of MenoMatch shall be subject to the exclusive jurisdiction of the courts of <strong>São Paulo, Brazil</strong>.
              </p>
            </div>
          </section>

          {/* 12. Contact */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">12.</span> Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms or need to report a violation, please contact us:
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg">
              <p className="text-gray-900 mb-2"><strong>MenoMatch Legal Team</strong></p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:support@getmenomatch.com" className="text-primary-600 hover:underline">support@getmenomatch.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Response Time:</strong> Within 2-3 business days
              </p>
            </div>
          </section>

          {/* Acceptance Statement */}
          <section className="border-t border-gray-200 pt-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-green-900 font-semibold mb-2">
                ✓ By using MenoMatch, you acknowledge that:
              </p>
              <ul className="list-disc list-inside text-green-900 space-y-1 text-sm">
                <li>You have read and understood these Terms of Service</li>
                <li>You agree to be bound by these Terms</li>
                <li>You understand MenoMatch is educational, not medical advice</li>
                <li>You are 18 years of age or older</li>
                <li>You will use the service responsibly and lawfully</li>
              </ul>
            </div>
          </section>

          {/* Additional Links */}
          <section className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Policies</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/privacy-policy" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                <ArrowLeft className="w-4 h-4 rotate-180" />
                Privacy Policy
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

export default TermsOfService;

