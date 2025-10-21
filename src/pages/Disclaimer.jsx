import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, AlertTriangle, Stethoscope, ShieldAlert, Phone } from 'lucide-react';
import Header from '../components/Header';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Helmet>
        <title>Medical Disclaimer | MenoMatch</title>
        <meta name="description" content="MenoMatch Medical Disclaimer - Important information about our educational content and limitations." />
        <meta name="keywords" content="medical disclaimer, health disclaimer, not medical advice, menomatch disclaimer" />
        <link rel="canonical" href="https://meno-match.vercel.app/disclaimer" />
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
            <ShieldAlert className="w-10 h-10 text-red-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Medical Disclaimer</h1>
          </div>
          <p className="text-lg text-gray-600">
            Last Updated: <strong>January 2025</strong>
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Effective Date: <strong>January 2025</strong>
          </p>
        </div>

        {/* Important Notice Box */}
        <div className="bg-red-50 border-4 border-red-500 p-8 rounded-2xl mb-12 shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-3">
                ⚠️ PLEASE READ CAREFULLY
              </h2>
              <p className="text-red-900 text-lg font-semibold mb-3">
                The information on MenoMatch is for <strong>EDUCATIONAL AND INFORMATIONAL PURPOSES ONLY</strong>.
              </p>
              <p className="text-red-900 text-base">
                <strong>We are NOT doctors. This is NOT medical advice. Always consult a qualified healthcare professional before making any health decisions.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* 1. Medical Disclaimer */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">1.</span> Medical Disclaimer
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-4">
              <h3 className="font-bold text-yellow-900 mb-3 text-xl">MenoMatch is NOT:</h3>
              <ul className="list-disc list-inside text-yellow-900 space-y-2">
                <li><strong>A medical service</strong> or healthcare provider</li>
                <li><strong>A substitute</strong> for professional medical advice, diagnosis, or treatment</li>
                <li><strong>Qualified</strong> to diagnose medical conditions</li>
                <li><strong>Able to prescribe</strong> medications or treatments</li>
                <li><strong>Responsible</strong> for your health outcomes</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The content on MenoMatch—including articles, quiz results, product recommendations, and newsletters—is provided for <strong>general informational and educational purposes</strong> only. It is based on research, personal experiences, and publicly available information.
            </p>

            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-red-900 font-semibold text-lg mb-2">
                ⚠️ Before starting any supplement or wellness program:
              </p>
              <ul className="list-disc list-inside text-red-900 space-y-2 text-sm">
                <li>Consult your doctor, especially if you are pregnant, nursing, taking medications, or have a medical condition</li>
                <li>Inform your healthcare provider about all supplements you're considering</li>
                <li>Never stop or alter prescribed medications without medical supervision</li>
                <li>Seek immediate medical help for severe or worsening symptoms</li>
              </ul>
            </div>
          </section>

          {/* 2. Educational Purpose Only */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">2.</span> Educational Purpose Only
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MenoMatch provides <strong>general education about menopause</strong>, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Common symptoms and their potential causes</li>
              <li>Supplement options that some women find helpful</li>
              <li>Lifestyle strategies for wellness</li>
              <li>Research summaries and health information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, <strong>every woman is different</strong>. What works for one person may not work for another. Our content is <strong>not personalized medical advice</strong> tailored to your specific health situation, history, or needs.
            </p>
          </section>

          {/* 3. No Doctor-Patient Relationship */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Stethoscope className="w-8 h-8 text-red-600" />
              No Doctor-Patient Relationship
            </h2>
            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg mb-4">
              <p className="text-gray-900 font-semibold mb-3">
                Using MenoMatch does <strong>NOT</strong> create a doctor-patient, therapist-patient, or any other healthcare professional relationship.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>Our quiz is an <strong>educational assessment</strong>, not a medical diagnosis</li>
                <li>Our recommendations are <strong>suggestions</strong>, not prescriptions</li>
                <li>We cannot provide individualized medical advice or treatment plans</li>
                <li>We are not qualified to replace your healthcare team</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Only a licensed healthcare professional who has examined you and reviewed your complete medical history can provide personalized medical advice.
            </p>
          </section>

          {/* 4. Results May Vary */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">4.</span> Individual Results May Vary
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important:</strong> We make no guarantees about specific results from following our recommendations or using suggested products.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h3 className="font-semibold text-blue-900 mb-3">Why Results Differ:</h3>
              <ul className="list-disc list-inside text-blue-900 space-y-2 text-sm">
                <li><strong>Unique Biology:</strong> Every woman's body, hormones, and genetics are different</li>
                <li><strong>Health History:</strong> Existing conditions, medications, and allergies affect outcomes</li>
                <li><strong>Lifestyle Factors:</strong> Diet, exercise, sleep, and stress levels play a role</li>
                <li><strong>Supplement Quality:</strong> Not all brands or formulations are equal</li>
                <li><strong>Consistency:</strong> Results depend on proper usage over time</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>What works for one woman may not work for another.</strong> Some women may experience significant improvement, while others may see little to no effect. This is normal and does not reflect on you—it's simply biology.
            </p>
          </section>

          {/* 5. Product Information */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">5.</span> Product Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Product information on MenoMatch (including descriptions, benefits, and dosages) is:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Based on <strong>manufacturer claims and product labels</strong></li>
              <li>Derived from <strong>publicly available research and reviews</strong></li>
              <li>Provided for <strong>informational purposes</strong> only</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-yellow-900 font-semibold mb-2">
                ⚠️ We do NOT:
              </p>
              <ul className="list-disc list-inside text-yellow-900 space-y-1 text-sm">
                <li>Manufacture, test, or verify the products we recommend</li>
                <li>Guarantee product safety, efficacy, or quality</li>
                <li>Control product formulations (manufacturers may change ingredients)</li>
                <li>Handle customer service, refunds, or product issues (contact retailers directly)</li>
              </ul>
            </div>
          </section>

          {/* 6. External Links */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">6.</span> External Links & Third Parties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MenoMatch contains links to external websites, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Amazon and other e-commerce platforms</li>
              <li>Supplement manufacturer websites</li>
              <li>Health research sources</li>
              <li>Affiliate partner sites</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>We are not responsible for:</strong> The content, accuracy, safety, or practices of third-party websites or the products they sell. When you click our links and make purchases, you are subject to the retailer's terms, policies, and customer service.
            </p>
          </section>

          {/* 7. Professional Advice */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">7.</span> Always Seek Professional Advice
            </h2>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-300">
              <h3 className="font-bold text-red-900 mb-4 text-2xl">
                🩺 Consult Your Doctor If:
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-red-900">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>You have any medical conditions</li>
                  <li>You're taking prescription medications</li>
                  <li>You're pregnant or nursing</li>
                  <li>You're planning surgery</li>
                  <li>You have allergies</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Symptoms are severe or worsening</li>
                  <li>You experience unusual side effects</li>
                  <li>You're unsure about any supplement</li>
                  <li>You want personalized advice</li>
                  <li>You have questions about dosing</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
              <strong>Never disregard professional medical advice or delay seeking medical care</strong> because of something you read on MenoMatch. If you think you may have a medical emergency, call your doctor or emergency services immediately.
            </p>
          </section>

          {/* 8. Errors and Omissions */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">8.</span> Accuracy & Limitations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive for accuracy, <strong>we cannot guarantee</strong> that all information on MenoMatch is:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Current:</strong> Research evolves, and information may become outdated</li>
              <li><strong>Complete:</strong> We may not cover all aspects of a topic</li>
              <li><strong>Error-Free:</strong> Mistakes or omissions may occur</li>
              <li><strong>Applicable to You:</strong> Individual circumstances vary</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We make reasonable efforts to keep content up to date, but we are <strong>not liable</strong> for any errors, omissions, or outdated information. Always verify information with current medical sources and your healthcare provider.
            </p>
          </section>

          {/* 9. Emergency */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Phone className="w-8 h-8 text-red-600" />
              Medical Emergency
            </h2>
            <div className="bg-red-100 border-4 border-red-600 p-8 rounded-2xl">
              <h3 className="font-bold text-red-900 mb-4 text-2xl flex items-center gap-2">
                <AlertTriangle className="w-8 h-8" />
                If You Have a Medical Emergency:
              </h3>
              <div className="space-y-3 text-red-900 text-lg">
                <p className="font-semibold">
                  🚨 <strong>DO NOT</strong> rely on MenoMatch for emergency medical assistance
                </p>
                <p className="font-semibold">
                  📞 <strong>Call 911</strong> (USA) or <strong>192</strong> (Brazil) immediately
                </p>
                <p>
                  or go to the nearest emergency room
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-red-300">
                <p className="text-red-900 text-sm">
                  <strong>Signs of medical emergency may include:</strong> Severe chest pain, difficulty breathing, sudden severe headache, loss of consciousness, severe bleeding, stroke symptoms, allergic reactions, or any life-threatening situation.
                </p>
              </div>
            </div>
          </section>

          {/* Liability */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">10.</span> Limitation of Liability
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 mb-3 font-semibold">
                By using MenoMatch, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>You use our site and recommendations <strong>at your own risk</strong></li>
                <li>MenoMatch and its creators are <strong>not liable</strong> for any health outcomes, adverse reactions, or injuries</li>
                <li>You are responsible for <strong>consulting healthcare professionals</strong> before making health decisions</li>
                <li>We make <strong>no warranties</strong> about the accuracy, reliability, or completeness of our content</li>
                <li>Our total liability for any claims shall not exceed $0 (as our service is free)</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">11.</span> Questions About This Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about this Medical Disclaimer, please contact us:
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg">
              <p className="text-gray-900 mb-2"><strong>MenoMatch Team</strong></p>
              <p className="text-gray-700 mb-2">
                📧 Email: <a href="mailto:contato@edysouzafotografia.com" className="text-primary-600 hover:underline">contato@edysouzafotografia.com</a>
              </p>
              <p className="text-gray-700 text-sm">
                We cannot provide medical advice via email, but we're happy to clarify our policies or content.
              </p>
            </div>
          </section>

          {/* Final Statement */}
          <section className="border-t border-gray-200 pt-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-900 mb-3 font-semibold text-lg">
                💙 Our Intent
              </p>
              <p className="text-blue-900">
                MenoMatch was created to <strong>empower women</strong> with education and information about menopause. We want to help you make <strong>informed decisions</strong> in partnership with your healthcare providers. Your health and safety are our top priorities, which is why we emphasize the importance of professional medical guidance throughout our site.
              </p>
            </div>
          </section>

          {/* Related Links */}
          <section className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Policies</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/privacy-policy" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                <ArrowLeft className="w-4 h-4 rotate-180" />
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                <ArrowLeft className="w-4 h-4 rotate-180" />
                Terms of Service
              </Link>
              <Link to="/affiliate-disclosure" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                <ArrowLeft className="w-4 h-4 rotate-180" />
                Affiliate Disclosure
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

export default Disclaimer;

