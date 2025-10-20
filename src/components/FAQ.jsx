import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "How accurate are the recommendations?",
    answer: "Our recommendations are based on a scientifically-backed algorithm that analyzes your symptoms, age, and wellness preferences. We match you with products that have clinical studies supporting their efficacy for your specific symptoms. However, individual results may vary."
  },
  {
    id: 2,
    question: "Are these products safe?",
    answer: "All recommended products are from reputable manufacturers and contain natural ingredients. However, we always recommend consulting with your healthcare provider before starting any new supplement regimen, especially if you have pre-existing conditions or are taking medications."
  },
  {
    id: 3,
    question: "How long until I see results?",
    answer: "Most women report noticeable improvements within 2-4 weeks of consistent use. Natural supplements work with your body gradually, so patience is key. Some symptoms like hot flashes may improve sooner, while others may take longer."
  },
  {
    id: 4,
    question: "Do I need a prescription?",
    answer: "No, all the supplements we recommend are over-the-counter products that don't require a prescription. They contain natural ingredients like herbs, vitamins, and minerals that support your body during menopause."
  },
  {
    id: 5,
    question: "Can I return products if they don't work?",
    answer: "Return policies vary by product and seller (Amazon, ClickBank, etc.). Most of our recommended products come with money-back guarantees. Check the product page for specific return information before purchasing."
  },
  {
    id: 6,
    question: "Is this quiz really free?",
    answer: "Yes, absolutely! The quiz is 100% free with no hidden costs. We earn a small commission if you purchase products through our affiliate links, but you'll never pay more because of it. This allows us to keep the quiz free for everyone."
  },
  {
    id: 7,
    question: "Will my email be shared or sold?",
    answer: "Never! We respect your privacy completely. Your email is only used to send you your quiz results and occasional wellness tips. You can unsubscribe at any time, and we will never share or sell your information to third parties."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about MenoMatch
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary-300 transition-colors"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openId === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-primary-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-slideUp">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            We're here to help! Reach out to our support team.
          </p>
          <a 
            href="mailto:support@getmenomatch.com"
            className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;




