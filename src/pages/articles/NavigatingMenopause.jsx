import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import BlogPost from '../../components/BlogPost';
import { articles } from '../../data/articles';

const NavigatingMenopause = () => {
  // Get current article data
  const article = articles.find(a => a.slug === 'navigating-menopause-guide');
  
  // Get related articles
  const relatedArticles = articles.filter(a => 
    ['natural-supplements-menopause', 'mood-swings-anxiety-menopause', 'understanding-perimenopause'].includes(a.slug)
  );

  return (
    <>
      <Header />
      <BlogPost
        title={article.title}
        excerpt={article.excerpt}
        author={article.author}
        date={article.date}
        readTime={article.readTime}
        category={article.category}
        image={article.image}
        keywords={article.keywords}
        relatedArticles={relatedArticles}
      >
        {/* Introduction */}
        <p className="lead text-xl text-gray-700 font-medium mb-6">
          Menopause is a natural biological transition that every woman will experience, yet it remains one of the most misunderstood phases of life. If you're reading this, you're likely navigating these changes yourself or supporting someone who is. You're not alone—and you're in the right place.
        </p>

        <p>
          This comprehensive guide will walk you through everything you need to know about menopause: what it is, why it happens, the symptoms you might experience, and most importantly, practical solutions to help you thrive during this transition.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8 rounded-r-lg">
          <p className="text-lg font-semibold text-primary-900 mb-2">
            Did You Know?
          </p>
          <p className="text-gray-700">
            Studies show that approximately <strong>75% of women</strong> experience moderate to severe menopause symptoms, yet many suffer in silence, unaware of the effective solutions available to them.
          </p>
        </div>

        {/* What is Menopause */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          What is Menopause?
        </h2>

        <p>
          Menopause is the point in time when a woman's menstrual periods permanently stop, marking the end of her reproductive years. Technically, menopause is confirmed when you've gone 12 consecutive months without a period.
        </p>

        <p>
          But menopause isn't just a single moment—it's a transition that occurs in three distinct phases:
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 my-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-primary-600 mb-2">Perimenopause</h3>
            <p className="text-gray-700">
              The transitional period before menopause, typically beginning in your 40s (but sometimes earlier). During this phase, hormone levels fluctuate, periods become irregular, and symptoms often start to appear. This phase can last 4-8 years.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-primary-600 mb-2">Menopause</h3>
            <p className="text-gray-700">
              The point when you've gone 12 months without a period, typically occurring around age 51. This marks the end of ovarian function and fertility.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-primary-600 mb-2">Postmenopause</h3>
            <p className="text-gray-700">
              The years following menopause. Symptoms may continue for several years but typically decrease in intensity over time. This phase encompasses the rest of your life.
            </p>
          </div>
        </div>

        <p>
          The average age for menopause in the United States is 51, but it's completely normal for it to occur anywhere between ages 45 and 55. For most women, symptoms persist for about 7-10 years, though some experience them for longer.
        </p>

        {/* Common Symptoms */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          Common Menopause Symptoms: What to Expect
        </h2>

        <p>
          Menopause affects every woman differently, but there are several common symptoms you should be aware of. Understanding what's happening in your body is the first step toward finding relief.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-2xl mr-2">🔥</span>
              Hot Flashes & Night Sweats
            </h4>
            <p className="text-sm text-gray-700">
              Experienced by 75-85% of women. Sudden feelings of intense heat, often accompanied by sweating and flushing, typically lasting 30 seconds to 10 minutes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-2xl mr-2">😴</span>
              Sleep Disturbances
            </h4>
            <p className="text-sm text-gray-700">
              Affects 40-60% of women. Difficulty falling asleep, staying asleep, or both, often due to night sweats or racing thoughts.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-5 border border-pink-200">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-2xl mr-2">😢</span>
              Mood Changes
            </h4>
            <p className="text-sm text-gray-700">
              Experienced by 50-70% of women. Irritability, anxiety, depression, or emotional volatility due to fluctuating hormone levels.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-5 border border-orange-200">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-2xl mr-2">🧠</span>
              Brain Fog
            </h4>
            <p className="text-sm text-gray-700">
              Reported by 60% of women. Difficulty concentrating, memory lapses, or feeling mentally "fuzzy."
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5 border border-green-200">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-2xl mr-2">⚖️</span>
              Weight Gain
            </h4>
            <p className="text-sm text-gray-700">
              Common in 60-70% of women. Especially around the abdomen, due to metabolic changes and hormonal shifts.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-5 border border-yellow-200">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-2xl mr-2">💧</span>
              Vaginal Dryness
            </h4>
            <p className="text-sm text-gray-700">
              Affects 50-60% of women. Due to decreased estrogen levels, leading to discomfort during intimacy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-5 border border-red-200">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-2xl mr-2">🦴</span>
              Joint Pain & Stiffness
            </h4>
            <p className="text-sm text-gray-700">
              Experienced by 50-60% of women. Aching joints, particularly in the hands, knees, hips, and shoulders.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-5 border border-indigo-200">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-2xl mr-2">💇</span>
              Hair & Skin Changes
            </h4>
            <p className="text-sm text-gray-700">
              Common in 40-50% of women. Thinning hair, dry skin, and loss of elasticity due to reduced collagen production.
            </p>
          </div>
        </div>

        {/* CTA Box 1 */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 my-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">
            Experiencing Multiple Symptoms?
          </h3>
          <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
            Our free quiz analyzes your specific symptoms and recommends personalized solutions tailored just for you.
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Take the Free Quiz Now →
          </Link>
        </div>

        {/* Why Does Menopause Happen */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          Why Does Menopause Happen?
        </h2>

        <p>
          Understanding the "why" behind menopause can help you feel more in control of what's happening in your body.
        </p>

        <p>
          Menopause occurs when your ovaries gradually stop producing estrogen and progesterone—the hormones that regulate menstruation and support reproductive function. This decline is a natural part of aging, typically beginning in your late 30s or early 40s, but accelerating significantly in your late 40s.
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-lg text-gray-900 mb-3">The Hormonal Shift</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span><strong>Estrogen</strong> levels can drop by up to 90%, affecting temperature regulation, bone density, mood, and more</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span><strong>Progesterone</strong> production ceases almost entirely, impacting sleep and mood stability</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              <span><strong>Testosterone</strong> levels also decline (yes, women have testosterone too!), affecting energy and libido</span>
            </li>
          </ul>
        </div>

        <p>
          This hormonal transition is completely natural—your body has been preparing for this change since birth. Every woman is born with approximately 1-2 million eggs, and by menopause, only about 1,000 remain. It's simply your body's way of transitioning to a new phase of life.
        </p>

        {/* Managing Your Symptoms */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          Managing Your Symptoms: Practical Solutions That Work
        </h2>

        <p>
          The good news? There are numerous evidence-based strategies to help manage menopause symptoms. The key is finding what works best for your unique body and lifestyle.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Lifestyle Changes That Make a Difference
        </h3>

        <div className="space-y-4 my-6">
          <div className="flex items-start bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <span className="text-3xl mr-4">🏃‍♀️</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Regular Exercise</h4>
              <p className="text-gray-700 text-sm">
                Aim for at least 30 minutes of moderate activity daily. Exercise helps regulate hormones, improve sleep, maintain healthy weight, strengthen bones, and boost mood. Try a mix of cardio, strength training, and flexibility work.
              </p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <span className="text-3xl mr-4">🧘‍♀️</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Stress Management</h4>
              <p className="text-gray-700 text-sm">
                Chronic stress can worsen menopause symptoms. Practice meditation, deep breathing, yoga, or any activity that helps you unwind. Even 10 minutes daily can make a significant difference.
              </p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <span className="text-3xl mr-4">😴</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Optimize Sleep Hygiene</h4>
              <p className="text-gray-700 text-sm">
                Keep your bedroom cool (65-68°F is ideal), establish a consistent sleep schedule, avoid screens before bed, and consider using moisture-wicking bedding to combat night sweats.
              </p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <span className="text-3xl mr-4">🚫</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Identify and Avoid Triggers</h4>
              <p className="text-gray-700 text-sm">
                Common hot flash triggers include caffeine, alcohol, spicy foods, hot drinks, and tight clothing. Keep a symptom diary to identify your personal triggers.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Natural Solutions and Supplements
        </h3>

        <p>
          Many women find relief through natural supplements and dietary changes. While results vary, research supports several evidence-based options:
        </p>

        <ul className="list-disc list-inside space-y-2 my-4 text-gray-700">
          <li><strong>Black Cohosh</strong> for hot flashes and mood balance</li>
          <li><strong>Maca Root</strong> for energy and hormonal balance</li>
          <li><strong>Evening Primrose Oil</strong> for hot flashes and breast tenderness</li>
          <li><strong>Omega-3 Fatty Acids</strong> for mood and heart health</li>
          <li><strong>Vitamin D and Calcium</strong> for bone health</li>
          <li><strong>Magnesium</strong> for sleep and mood</li>
        </ul>

        <p className="text-sm italic text-gray-600 bg-gray-50 p-4 rounded-lg my-4">
          Want to learn more about natural supplements? Check out our detailed guide: <Link to="/blog/natural-supplements-menopause" className="text-primary-600 font-semibold hover:underline">The Power of Nature: Top 5 Natural Supplements for Menopause Relief</Link>
        </p>

        <p>
          Diet also plays a crucial role. Focus on whole foods, plenty of fruits and vegetables, lean proteins, and foods rich in phytoestrogens (like soy, flaxseeds, and legumes). For comprehensive nutritional guidance, explore our article on <Link to="/blog/menopause-diet-hormone-balance" className="text-primary-600 font-semibold hover:underline">eating for hormone balance</Link>.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          When to See a Doctor
        </h3>

        <p>
          While menopause is natural, you don't have to suffer through severe symptoms. Consult your healthcare provider if you experience:
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span>Symptoms that significantly impact your quality of life or ability to function</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span>Heavy or irregular bleeding (especially after 12 months without a period)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span>Severe mood changes or depression</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span>Sudden or dramatic changes in symptoms</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span>Questions about hormone replacement therapy (HRT) or other medical treatments</span>
            </li>
          </ul>
        </div>

        <p>
          Your doctor can discuss treatment options including HRT, prescription medications, or other interventions tailored to your specific needs and medical history.
        </p>

        {/* The Emotional Side */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          The Emotional Side of Menopause
        </h2>

        <p>
          Let's talk about something that doesn't get discussed enough: the emotional and psychological impact of menopause.
        </p>

        <p>
          It's completely normal to feel frustrated, sad, anxious, or even angry during this transition. You're not "losing your mind"—you're experiencing real hormonal changes that affect brain chemistry and emotional regulation.
        </p>

        <div className="bg-purple-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-lg text-gray-900 mb-3">You're Not Alone</h4>
          <p className="text-gray-700 mb-4">
            Studies show that up to 70% of women experience mood changes during menopause, yet many feel isolated in their experience. Remember:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">✓</span>
              <span>Your feelings are valid and hormonally driven</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">✓</span>
              <span>This phase is temporary—symptoms do improve</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">✓</span>
              <span>Support is available and seeking help is a sign of strength</span>
            </li>
          </ul>
        </div>

        <p>
          Consider joining a support group (online or in-person), talking to a therapist who specializes in women's health, or simply opening up to friends who may be going through the same thing. For more strategies on managing mood swings and anxiety, read our guide: <Link to="/blog/mood-swings-anxiety-menopause" className="text-primary-600 font-semibold hover:underline">Beyond Hot Flashes: Addressing Mood Swings and Anxiety During Menopause</Link>.
        </p>

        {/* Taking Control */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          Taking Control of Your Menopause Journey
        </h2>

        <p>
          Here's the empowering truth: while you can't prevent menopause, you absolutely can control how you experience it.
        </p>

        <p>
          The most important thing to understand is that menopause is highly individual. What works for your friend, sister, or colleague may not work for you—and that's okay. The key is finding a personalized approach that addresses your unique symptom profile and lifestyle.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 my-8 border border-blue-200">
          <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Your Action Plan
          </h4>
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <span><strong>Track your symptoms</strong> for at least 2 weeks to identify patterns and triggers</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <span><strong>Start with lifestyle modifications</strong>—they're free, safe, and often highly effective</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <span><strong>Consider natural supplements</strong> based on your primary symptoms</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <span><strong>Schedule a check-up</strong> with your healthcare provider to discuss your options</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">5</span>
              <span><strong>Give solutions time to work</strong>—most natural approaches take 4-6 weeks to show full effects</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">6</span>
              <span><strong>Adjust as needed</strong>—menopause is a journey, and your needs may change</span>
            </li>
          </ol>
        </div>

        {/* CTA Box 2 */}
        <div className="bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl p-8 my-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Ready to Create Your Personalized Plan?
          </h3>
          <p className="text-blue-50 mb-6 text-center max-w-2xl mx-auto">
            Take our free 2-minute quiz to discover which supplements and lifestyle changes are most likely to help YOUR specific symptoms. Get personalized recommendations backed by science and real results.
          </p>
          <div className="text-center">
            <Link
              to="/"
              className="inline-block bg-white text-primary-600 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Take the Free Quiz →
            </Link>
          </div>
          <p className="text-center text-blue-100 text-sm mt-4">
            ✓ 100% Free  •  ✓ 2 Minutes  •  ✓ Science-Backed  •  ✓ Personalized Results
          </p>
        </div>

        {/* Conclusion */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          Your Menopause Journey Starts Here
        </h2>

        <p>
          Menopause is not an ending—it's a transition into a new phase of life. While the symptoms can be challenging, remember that they are temporary, manageable, and part of a natural process that billions of women have navigated before you.
        </p>

        <p>
          You now have the knowledge to understand what's happening in your body and a toolkit of evidence-based strategies to find relief. Whether you choose lifestyle modifications, natural supplements, medical treatments, or a combination of approaches, the most important thing is that you take action.
        </p>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-8 my-8 border border-pink-200">
          <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
            Remember These Key Takeaways:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 text-xl">💪</span>
              <span>You're not alone—75% of women experience menopause symptoms</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 text-xl">🎯</span>
              <span>Every woman's experience is unique—personalization is key</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 text-xl">🌱</span>
              <span>Natural solutions can be highly effective for many women</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 text-xl">👩‍⚕️</span>
              <span>Don't hesitate to seek medical help if symptoms are severe</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 text-xl">⏰</span>
              <span>This phase is temporary—symptoms do improve over time</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 text-xl">✨</span>
              <span>You have the power to thrive during this transition</span>
            </li>
          </ul>
        </div>

        <p className="text-lg font-medium text-gray-800 mb-6">
          Your journey to menopause wellness doesn't have to be overwhelming. Start with small, manageable steps, be patient with yourself, and remember that support is always available.
        </p>

        <p className="text-gray-700 mb-8">
          Whether you're just beginning to experience symptoms or have been dealing with them for years, it's never too late to take control and find the relief you deserve. You've got this! 💙
        </p>

        <div className="border-t-2 border-gray-200 pt-8 mt-12">
          <p className="text-sm text-gray-600 italic">
            <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider before starting any new supplement regimen or making significant changes to your health routine, especially if you have pre-existing conditions or take medications.
          </p>
        </div>
      </BlogPost>
    </>
  );
};

export default NavigatingMenopause;

