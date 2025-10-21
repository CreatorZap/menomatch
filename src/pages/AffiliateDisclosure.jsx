import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, DollarSign, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import Header from '../components/Header';

const AffiliateDisclosure = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Helmet>
        <title>Affiliate Disclosure | MenoMatch</title>
        <meta name="description" content="MenoMatch Affiliate Disclosure - Learn how we earn commissions and maintain honest recommendations." />
        <meta name="keywords" content="affiliate disclosure, commission, transparency, FTC disclosure, menomatch affiliates" />
        <link rel="canonical" href="https://meno-match.vercel.app/affiliate-disclosure" />
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
            <DollarSign className="w-10 h-10 text-primary-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Affiliate Disclosure</h1>
          </div>
          <p className="text-lg text-gray-600">
            Last Updated: <strong>January 2025</strong>
          </p>
          <p className="text-xl text-gray-700 mt-4 font-medium">
            Transparency First: How MenoMatch Makes Money 💰
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* 1. Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="w-8 h-8 text-pink-500" />
              Honesty & Transparency
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Hi there! 👋 We believe in being <strong>completely transparent</strong> about how we earn money. This page explains our affiliate relationships and why you can still trust our recommendations.
            </p>
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-6 rounded-lg border-l-4 border-pink-500">
              <p className="text-gray-900 font-semibold mb-2">
                💡 The Short Version:
              </p>
              <p className="text-gray-700">
                When you click our product links and make a purchase, we <strong>may earn a commission</strong> at <strong>no extra cost to you</strong>. This helps us keep MenoMatch free and continuously improve our service. Your support means the world to us! ❤️
              </p>
            </div>
          </section>

          {/* 2. What Are Affiliate Links? */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">🔗</span> What Are Affiliate Links?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Great question! Let's break it down in simple terms:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h3 className="font-semibold text-blue-900 mb-3 text-xl">How It Works:</h3>
              <ol className="list-decimal list-inside text-blue-900 space-y-3">
                <li>
                  <strong>You take our quiz</strong> → We analyze your symptoms and recommend products that might help
                </li>
                <li>
                  <strong>You click a product link</strong> → A small tracking cookie is placed (this tells the retailer you came from MenoMatch)
                </li>
                <li>
                  <strong>You make a purchase</strong> → The retailer pays us a small commission (usually 4-10% of the sale)
                </li>
                <li>
                  <strong>You pay the same price</strong> → The commission comes from the retailer's marketing budget, not your wallet!
                </li>
              </ol>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Think of it like this: retailers give us a "thank you" payment for referring customers to them. It's their way of paying for advertising, except instead of paying Google or Facebook, they reward <strong>us</strong> (and by extension, <strong>you</strong> get free, helpful content!).
            </p>
          </section>

          {/* 3. Our Affiliate Partnerships */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">🤝</span> Our Affiliate Partners
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work with several trusted affiliate networks and programs:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-200">
                <h3 className="font-bold text-orange-900 mb-2 text-lg">Amazon Associates</h3>
                <p className="text-orange-900 text-sm mb-2">
                  We're participants in the Amazon Services LLC Associates Program, an affiliate advertising program.
                </p>
                <p className="text-orange-900 text-xs italic">
                  Commission: Usually 4-8% depending on product category
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="font-bold text-blue-900 mb-2 text-lg">ClickBank</h3>
                <p className="text-blue-900 text-sm mb-2">
                  Digital products and supplements, especially comprehensive menopause programs.
                </p>
                <p className="text-blue-900 text-xs italic">
                  Commission: Varies by product (typically 50-75% for digital products)
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-200">
                <h3 className="font-bold text-purple-900 mb-2 text-lg">Digistore24</h3>
                <p className="text-purple-900 text-sm mb-2">
                  Health and wellness products, courses, and supplement programs.
                </p>
                <p className="text-purple-900 text-xs italic">
                  Commission: Varies by vendor
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
                <h3 className="font-bold text-green-900 mb-2 text-lg">CelluCare & Direct Brands</h3>
                <p className="text-green-900 text-sm mb-2">
                  Individual supplement manufacturers who offer affiliate programs.
                </p>
                <p className="text-green-900 text-xs italic">
                  Commission: Varies (usually 10-30% per sale)
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm italic">
              <strong>Note:</strong> We only partner with programs that allow us to maintain editorial independence and honest reviews.
            </p>
          </section>

          {/* 4. No Extra Cost to You */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">💸</span> You Pay $0 Extra
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-4">
              <p className="text-green-900 font-semibold mb-3 text-xl">
                Here's the best part: Using our links costs you NOTHING extra!
              </p>
              <p className="text-green-900 mb-3">
                The price you pay is <strong>exactly the same</strong> whether you:
              </p>
              <ul className="list-disc list-inside text-green-900 space-y-2">
                <li>Click our affiliate link and buy</li>
                <li>Go directly to Amazon/retailer and buy</li>
                <li>Search Google and buy</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The commission we earn comes from the <strong>retailer's marketing budget</strong>. They'd be spending this money on ads anyway—this way, it supports free educational content instead!
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-yellow-900 font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Sometimes You Save Money!
              </p>
              <p className="text-yellow-900">
                Occasionally, our affiliate partners give us <strong>exclusive discount codes</strong> to share with you. So using our links might actually <strong>save you money</strong>! 🎉
              </p>
            </div>
          </section>

          {/* 5. Our Recommendations */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-primary-600" />
              Honest & Unbiased Recommendations
            </h2>
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg border-2 border-primary-200 mb-4">
              <p className="text-gray-900 font-bold mb-3 text-lg">
                🎯 Our Promise to You:
              </p>
              <p className="text-gray-900 mb-3">
                We <strong>never</strong> recommend a product just because it pays higher commissions. Here's our process:
              </p>
              <ol className="list-decimal list-inside text-gray-900 space-y-2">
                <li><strong>Research First:</strong> We study ingredients, scientific research, and user reviews</li>
                <li><strong>Quality Standards:</strong> Products must meet our criteria for safety and efficacy</li>
                <li><strong>Real Help:</strong> We ask "Would this genuinely help women with menopause symptoms?"</li>
                <li><strong>Only Then:</strong> We consider affiliate partnerships</li>
              </ol>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Bottom line:</strong> We'd rather recommend a $15 supplement that works (with a small commission) than a $100 product that pays more but doesn't help. <strong>Your trust is worth more than any commission.</strong> ❤️
            </p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-900 text-sm">
                <strong>Full Transparency:</strong> If a product we recommend doesn't have an affiliate program, we'll still recommend it. We've included non-affiliate products in our blog articles when they're the best option.
              </p>
            </div>
          </section>

          {/* 6. FTC Compliance */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">📋</span> FTC Compliance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We follow the <strong>Federal Trade Commission (FTC) guidelines</strong> for affiliate marketing and endorsements.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">What This Means:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We <strong>clearly disclose</strong> our affiliate relationships (like on this page!)</li>
                <li>We mark affiliate links where appropriate</li>
                <li>We're honest about our financial interests</li>
                <li>We maintain editorial independence</li>
                <li>We comply with all applicable advertising laws</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm">
              This disclosure is a <strong>legal requirement</strong>, but it's also just the right thing to do. You deserve to know how we make money so you can make informed decisions.
            </p>
          </section>

          {/* 7. Questions? */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-primary-600">❓</span> Questions or Concerns?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We're here to answer any questions about our affiliate relationships or recommendations!
            </p>
            
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-900 mb-3">
                <strong>Get in Touch:</strong>
              </p>
              <p className="text-gray-700 mb-2">
                📧 Email: <a href="mailto:contato@edysouzafotografia.com" className="text-primary-600 hover:underline font-medium">contato@edysouzafotografia.com</a>
              </p>
              <p className="text-gray-700 mb-3">
                ⏱️ We respond within 48 hours
              </p>
              <p className="text-gray-700 text-sm italic">
                Want to know more about a specific product? Need help deciding? Have feedback about our recommendations? We're all ears! 👂
              </p>
            </div>
          </section>

          {/* Thank You Section */}
          <section className="border-t border-gray-200 pt-8">
            <div className="bg-gradient-to-r from-primary-100 to-secondary-100 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ❤️ Thank You for Your Support!
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                When you use our links, you're helping us keep MenoMatch <strong>free</strong> and continuously <strong>improving</strong>. We can create more content, add new features, and help more women navigate menopause.
              </p>
              <p className="text-gray-700 text-lg font-semibold">
                We couldn't do this without you. Seriously, thank you! 🙏💜
              </p>
            </div>
          </section>

          {/* Summary Box */}
          <section className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-3 text-xl">📝 Quick Summary</h3>
            <ul className="space-y-2 text-blue-900">
              <li>✓ We use affiliate links to earn commissions</li>
              <li>✓ You pay $0 extra when using our links</li>
              <li>✓ Commissions come from retailers' marketing budgets</li>
              <li>✓ Our recommendations are honest and research-based</li>
              <li>✓ We follow FTC guidelines and disclose relationships</li>
              <li>✓ Your trust matters more than any commission</li>
              <li>✓ Your support helps keep MenoMatch free</li>
            </ul>
          </section>

          {/* Additional Links */}
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

export default AffiliateDisclosure;

