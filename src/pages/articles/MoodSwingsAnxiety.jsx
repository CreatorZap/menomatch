import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import BlogPost from '../../components/BlogPost';
import { articles } from '../../data/articles';

const MoodSwingsAnxiety = () => {
  const article = articles.find(a => a.slug === 'mood-swings-anxiety-menopause');
  const relatedArticles = articles.filter(a => 
    ['navigating-menopause-guide', 'natural-supplements-menopause', 'overcoming-menopausal-insomnia'].includes(a.slug)
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
          You're not "going crazy," and you're not alone. If you've found yourself crying over a commercial, snapping at loved ones for no reason, or feeling anxious about things that never bothered you before, you're experiencing one of the most common—yet least discussed—aspects of menopause.
        </p>

        <p>
          While hot flashes get all the attention, the emotional and psychological impacts of menopause can be just as challenging, if not more so. Mood swings, anxiety, irritability, and even depression affect up to 70% of women during this transition, yet many suffer in silence, unsure if what they're experiencing is "normal" or if something is wrong with them.
        </p>

        <p>
          Here's the truth: Your feelings are valid, they're hormonal, and most importantly, they're manageable. In this guide, we'll explore why menopause affects your emotional wellbeing, what you can expect, and evidence-based strategies—both natural and lifestyle-based—to help you feel like yourself again.
        </p>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8 rounded-r-lg">
          <p className="text-lg font-semibold text-purple-900 mb-2">
            You're Not Imagining It
          </p>
          <p className="text-gray-700">
            Research shows that women going through menopause are <strong>2-4 times more likely</strong> to experience depression and anxiety than at other life stages. This isn't a personal failing—it's a biological reality driven by dramatic hormonal shifts.
          </p>
        </div>

        {/* Why It Happens */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          Why Menopause Affects Your Mood (It's Not Just "In Your Head")
        </h2>

        <p>
          Understanding the science behind your emotions can be incredibly validating. When you know <em>why</em> you're feeling this way, it's easier to be compassionate with yourself and seek the right solutions.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          The Hormone-Mood Connection
        </h3>

        <p>
          Your mood isn't just psychological—it's deeply biochemical. Here's what's happening in your body:
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-2xl mr-2">📉</span>
              Estrogen and Serotonin
            </h4>
            <p className="text-gray-700 text-sm">
              Estrogen influences serotonin production and receptor activity in the brain. As estrogen drops, so does serotonin—your "feel-good" neurotransmitter. Lower serotonin levels are directly linked to depression, anxiety, and irritability.
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-pink-500">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-2xl mr-2">🌊</span>
              Progesterone and GABA
            </h4>
            <p className="text-gray-700 text-sm">
              Progesterone converts to allopregnanolone, which acts like a natural anti-anxiety medication by enhancing GABA (your brain's calming neurotransmitter). When progesterone plummets during menopause, you lose this built-in anxiety buffer.
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-orange-500">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-2xl mr-2">😰</span>
              Cortisol Dysregulation
            </h4>
            <p className="text-gray-700 text-sm">
              Hormonal fluctuations can disrupt your HPA axis (hypothalamic-pituitary-adrenal axis), leading to elevated cortisol levels. Chronic high cortisol contributes to anxiety, irritability, and difficulty managing stress.
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-2xl mr-2">😴</span>
              Sleep Disruption Cascade
            </h4>
            <p className="text-gray-700 text-sm">
              Night sweats and insomnia (affecting 40-60% of menopausal women) create sleep deprivation, which independently worsens mood, anxiety, and emotional regulation—creating a vicious cycle.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <h4 className="font-bold text-lg text-gray-900 mb-3">The Bottom Line:</h4>
          <p className="text-gray-700">
            Your mood changes during menopause aren't a character flaw or sign of weakness. They're the direct result of major neurochemical shifts in your brain. Understanding this is the first step toward effective management and self-compassion.
          </p>
        </div>

        {/* Recognizing the Symptoms */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          Recognizing Mood and Anxiety Symptoms
        </h2>

        <p>
          Emotional symptoms of menopause can vary widely. You might experience some, all, or fluctuate between different symptoms. Here's what to watch for:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
            <h4 className="font-bold text-gray-900 mb-3">😢 Mood Swings</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Sudden emotional shifts</li>
              <li>• Crying easily or unexpectedly</li>
              <li>• Feeling fine one moment, sad the next</li>
              <li>• Emotional reactions feel out of proportion</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-5 border border-red-200">
            <h4 className="font-bold text-gray-900 mb-3">😤 Irritability & Anger</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Short fuse or quick temper</li>
              <li>• Feeling constantly annoyed</li>
              <li>• Snapping at loved ones</li>
              <li>• Intolerance for minor frustrations</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
            <h4 className="font-bold text-gray-900 mb-3">😰 Anxiety</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Constant worry or unease</li>
              <li>• Racing thoughts</li>
              <li>• Physical symptoms (rapid heartbeat, sweating)</li>
              <li>• Panic attacks (new or worsening)</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">😔 Low Mood or Depression</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Persistent sadness or emptiness</li>
              <li>• Loss of interest in activities</li>
              <li>• Feeling hopeless or worthless</li>
              <li>• Difficulty concentrating</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5 border border-green-200">
            <h4 className="font-bold text-gray-900 mb-3">😫 Overwhelm</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Feeling like you can't cope</li>
              <li>• Easily stressed by normal tasks</li>
              <li>• Difficulty making decisions</li>
              <li>• Feeling emotionally exhausted</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-5 border border-yellow-200">
            <h4 className="font-bold text-gray-900 mb-3">😶 Emotional Numbness</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Feeling disconnected from emotions</li>
              <li>• Loss of joy or pleasure</li>
              <li>• Going through the motions</li>
              <li>• Difficulty feeling close to others</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
          <p className="text-lg font-semibold text-red-900 mb-2">
            When to Seek Professional Help
          </p>
          <p className="text-gray-700 mb-3">
            While mood changes are normal during menopause, certain symptoms warrant immediate professional support:
          </p>
          <ul className="text-gray-800 space-y-2">
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span>Thoughts of self-harm or suicide</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span>Inability to function in daily life (work, relationships, self-care)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span>Symptoms lasting more than 2 weeks without improvement</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span>Severe panic attacks or debilitating anxiety</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-bold">•</span>
              <span>Relationship breakdown due to emotional symptoms</span>
            </li>
          </ul>
        </div>

        {/* CTA Box 1 */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 my-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">
            Find Natural Solutions for Your Mood Symptoms
          </h3>
          <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
            Our free quiz identifies which natural supplements and lifestyle changes can help stabilize your mood and reduce anxiety.
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Take the Free Quiz →
          </Link>
        </div>

        {/* Natural Solutions */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          Natural Solutions: Supplements That Support Mood
        </h2>

        <p>
          Several natural supplements have strong scientific backing for mood and anxiety support during menopause. Here are the most effective options:
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          1. Ashwagandha: The Anxiety Reducer
        </h3>

        <div className="bg-green-50 rounded-lg p-6 my-6">
          <p className="text-gray-800 mb-4">
            <strong>How it helps:</strong> This adaptogenic herb directly lowers cortisol levels (by up to 30% in studies) and enhances GABA activity, providing powerful anxiety relief.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Research:</strong> A 2019 study found that 600mg of Ashwagandha daily reduced anxiety scores by 44% and improved sleep quality in stressed adults.
          </p>
          <p className="text-gray-700">
            <strong>Dosage:</strong> 300-600mg daily of standardized extract (5% withanolides). Take in the evening for best results.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          2. Magnesium: Nature's Relaxation Mineral
        </h3>

        <div className="bg-blue-50 rounded-lg p-6 my-6">
          <p className="text-gray-800 mb-4">
            <strong>How it helps:</strong> Magnesium regulates the nervous system, supports GABA production, and helps control the stress response. Deficiency is linked to anxiety and depression.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Why it matters:</strong> Up to 50% of women are magnesium-deficient, and menopause can worsen depletion.
          </p>
          <p className="text-gray-700">
            <strong>Dosage:</strong> 300-400mg daily. Magnesium glycinate is best absorbed and least likely to cause digestive issues. Take before bed for sleep benefits.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          3. B-Complex Vitamins: The Mood Supporters
        </h3>

        <div className="bg-yellow-50 rounded-lg p-6 my-6">
          <p className="text-gray-800 mb-4">
            <strong>How they help:</strong> B vitamins (especially B6, B9/folate, and B12) are essential for neurotransmitter production, including serotonin and dopamine. They also help regulate homocysteine, high levels of which are linked to depression.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Research:</strong> Studies show that B-vitamin supplementation significantly improves mood, reduces stress, and enhances cognitive function.
          </p>
          <p className="text-gray-700">
            <strong>Dosage:</strong> A high-quality B-complex daily. Look for methylated forms (methylfolate, methylcobalamin) for better absorption.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          4. Omega-3 Fatty Acids: Brain Health Essentials
        </h3>

        <div className="bg-purple-50 rounded-lg p-6 my-6">
          <p className="text-gray-800 mb-4">
            <strong>How they help:</strong> EPA and DHA (omega-3s from fish oil) are anti-inflammatory and essential for brain cell function. They support serotonin and dopamine transmission.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Research:</strong> Multiple studies show omega-3s reduce symptoms of depression and anxiety, particularly EPA at higher doses.
          </p>
          <p className="text-gray-700">
            <strong>Dosage:</strong> 1,000-2,000mg combined EPA/DHA daily. Look for high-EPA formulas for mood support.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          5. Rhodiola Rosea: The Energy & Mood Lifter
        </h3>

        <div className="bg-pink-50 rounded-lg p-6 my-6">
          <p className="text-gray-800 mb-4">
            <strong>How it helps:</strong> This adaptogen helps the body resist stress, reduces fatigue, and improves mental performance. It enhances the sensitivity of neurons to serotonin and dopamine.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Research:</strong> Studies show Rhodiola reduces stress-related fatigue and improves mood within 3 days to 2 weeks.
          </p>
          <p className="text-gray-700">
            <strong>Dosage:</strong> 200-600mg daily of standardized extract (3% rosavins, 1% salidroside). Take in the morning or early afternoon.
          </p>
        </div>

        <p className="text-sm italic text-gray-600 bg-gray-50 p-4 rounded-lg my-4">
          Want to learn more about these supplements? Check out our comprehensive guide: <Link to="/blog/natural-supplements-menopause" className="text-primary-600 font-semibold hover:underline">The Power of Nature: Top 5 Natural Supplements for Menopause Relief</Link>
        </p>

        {/* Lifestyle Strategies */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          Lifestyle Strategies for Emotional Balance
        </h2>

        <p>
          Supplements work best when combined with lifestyle changes that support your mental health. Here are evidence-based strategies:
        </p>

        <div className="space-y-4 my-8">
          <div className="flex items-start bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <span className="text-4xl mr-4">🏃‍♀️</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Exercise: The Natural Antidepressant</h4>
              <p className="text-gray-700 text-sm mb-2">
                Just 30 minutes of moderate exercise 5x/week can be as effective as antidepressants for mild to moderate depression. Exercise boosts endorphins, serotonin, and BDNF (brain-derived neurotrophic factor).
              </p>
              <p className="text-gray-600 text-sm italic">
                Try: Brisk walking, swimming, cycling, dancing, or yoga. Even 10-minute bursts help!
              </p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <span className="text-4xl mr-4">🧘‍♀️</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Mindfulness & Meditation</h4>
              <p className="text-gray-700 text-sm mb-2">
                Regular meditation practice physically changes brain structure, increasing gray matter in areas associated with emotional regulation. Even 10 minutes daily reduces anxiety and improves mood.
              </p>
              <p className="text-gray-600 text-sm italic">
                Try: Apps like Calm, Headspace, or Insight Timer. Start with just 5 minutes.
              </p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <span className="text-4xl mr-4">😴</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Prioritize Sleep</h4>
              <p className="text-gray-700 text-sm mb-2">
                Sleep deprivation amplifies emotional reactivity and anxiety. Even one night of poor sleep can increase anxiety by up to 30%.
              </p>
              <p className="text-gray-600 text-sm italic">
                Try: Consistent sleep schedule, cool bedroom (65-68°F), no screens 1 hour before bed, magnesium supplement before sleep.
              </p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <span className="text-4xl mr-4">🥗</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Eat for Your Mood</h4>
              <p className="text-gray-700 text-sm mb-2">
                Your gut produces 90% of your serotonin. A diet rich in whole foods, fermented foods, omega-3s, and fiber supports both gut and brain health.
              </p>
              <p className="text-gray-600 text-sm italic">
                Avoid: Excess sugar, caffeine, and alcohol—all can worsen mood swings and anxiety.
              </p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <span className="text-4xl mr-4">☀️</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Get Sunlight</h4>
              <p className="text-gray-700 text-sm mb-2">
                Morning sunlight regulates circadian rhythms and boosts serotonin and vitamin D production, both crucial for mood.
              </p>
              <p className="text-gray-600 text-sm italic">
                Try: 15-30 minutes outside within 2 hours of waking, or use a light therapy box in winter.
              </p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-lg p-5 shadow-sm border border-gray-200">
            <span className="text-4xl mr-4">👥</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Social Connection</h4>
              <p className="text-gray-700 text-sm mb-2">
                Isolation worsens depression and anxiety. Meaningful social connections are as important to health as not smoking.
              </p>
              <p className="text-gray-600 text-sm italic">
                Try: Join a menopause support group, schedule regular friend dates, volunteer, or take a class.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Support */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          When and How to Seek Professional Support
        </h2>

        <p>
          There's no shame in getting professional help—in fact, it's one of the most proactive things you can do for your mental health during menopause.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Therapy Options That Work
        </h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h4 className="font-bold text-lg text-primary-600 mb-3">
              Cognitive Behavioral Therapy (CBT)
            </h4>
            <p className="text-gray-700 text-sm">
              The gold standard for anxiety and depression. CBT helps you identify and change negative thought patterns and behaviors. Highly effective for menopausal mood symptoms.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h4 className="font-bold text-lg text-primary-600 mb-3">
              Menopause-Focused Counseling
            </h4>
            <p className="text-gray-700 text-sm">
              Working with a therapist who specializes in women's health and menopause provides validation, education, and targeted strategies for this specific life transition.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h4 className="font-bold text-lg text-primary-600 mb-3">
              Support Groups
            </h4>
            <p className="text-gray-700 text-sm">
              Connecting with other women going through menopause reduces isolation and provides practical coping strategies. Many groups meet online for convenience.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h4 className="font-bold text-lg text-primary-600 mb-3">
              Medication When Needed
            </h4>
            <p className="text-gray-700 text-sm">
              For severe symptoms, SSRIs or SNRIs (antidepressants) can be life-changing. Some also help with hot flashes. Talk to your doctor—there's no shame in medication.
            </p>
          </div>
        </div>

        {/* CTA Box 2 */}
        <div className="bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl p-8 my-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Create Your Personalized Mood Support Plan
          </h3>
          <p className="text-blue-50 mb-6 text-center max-w-2xl mx-auto">
            Answer a few questions about your symptoms and get personalized recommendations for supplements, lifestyle changes, and next steps to support your emotional wellbeing.
          </p>
          <div className="text-center">
            <Link
              to="/"
              className="inline-block bg-white text-primary-600 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Take the Free Quiz Now →
            </Link>
          </div>
        </div>

        {/* Quick Relief Strategies */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          Quick Relief: In-the-Moment Strategies
        </h2>

        <p>
          When you're in the middle of a mood swing, anxiety spike, or emotional meltdown, these evidence-based techniques can provide rapid relief:
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 my-8">
          <h4 className="font-bold text-xl text-gray-900 mb-6 text-center">Emergency Toolkit</h4>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
              <div>
                <h5 className="font-bold text-gray-900 mb-1">4-7-8 Breathing</h5>
                <p className="text-gray-700 text-sm">Inhale for 4 counts, hold for 7, exhale for 8. Repeat 4 times. Activates your parasympathetic nervous system instantly.</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
              <div>
                <h5 className="font-bold text-gray-900 mb-1">Cold Water on Face</h5>
                <p className="text-gray-700 text-sm">Splash cold water on your face or hold ice to your temples. Triggers the "dive reflex," instantly calming your nervous system.</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
              <div>
                <h5 className="font-bold text-gray-900 mb-1">5-4-3-2-1 Grounding</h5>
                <p className="text-gray-700 text-sm">Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. Pulls you out of anxiety and into the present.</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
              <div>
                <h5 className="font-bold text-gray-900 mb-1">Movement Break</h5>
                <p className="text-gray-700 text-sm">Walk briskly for 5-10 minutes, do 20 jumping jacks, or dance to one song. Physical movement metabolizes stress hormones.</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
              <div>
                <h5 className="font-bold text-gray-900 mb-1">Progressive Muscle Relaxation</h5>
                <p className="text-gray-700 text-sm">Tense and release each muscle group from toes to head. Releases physical tension and calms the mind.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          You're Not Alone in This Journey
        </h2>

        <p>
          Mood swings, anxiety, and emotional volatility during menopause are not signs of personal failure—they're biological realities that millions of women navigate. With the right combination of natural support, lifestyle strategies, and professional help when needed, you can absolutely feel like yourself again.
        </p>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-8 my-8 border border-pink-200">
          <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
            Key Takeaways:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 text-xl">💜</span>
              <span>Your mood changes are <strong>hormonal and biological</strong>—not your fault</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 text-xl">🌿</span>
              <span><strong>Natural supplements</strong> like Ashwagandha and Magnesium offer real relief</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 text-xl">🏃</span>
              <span><strong>Lifestyle changes</strong> (exercise, sleep, diet) are equally important</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 text-xl">🆘</span>
              <span><strong>Professional help</strong> is a sign of strength, not weakness</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 text-xl">⏰</span>
              <span>This phase is <strong>temporary</strong>—symptoms do improve</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 text-xl">🤝</span>
              <span><strong>You're not alone</strong>—support is available and effective</span>
            </li>
          </ul>
        </div>

        <p className="text-lg font-medium text-gray-800 mb-6">
          Remember: Being kind to yourself during this transition isn't self-indulgence—it's self-preservation. Your feelings are valid, your experiences are real, and support is available. You deserve to feel good again.
        </p>

        <p className="text-gray-700 mb-8">
          Ready to take the first step? Our personalized quiz will help you identify which natural solutions and strategies are most likely to help YOUR specific emotional symptoms. You've got this! 💙
        </p>

        <div className="border-t-2 border-gray-200 pt-8 mt-12">
          <p className="text-sm text-gray-600 italic">
            <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical or mental health advice. If you're experiencing severe depression, anxiety, or suicidal thoughts, please seek immediate professional help. Call the National Suicide Prevention Lifeline at 988 or go to your nearest emergency room. Always consult with qualified healthcare providers before starting any new supplement or treatment regimen.
          </p>
        </div>
      </BlogPost>
    </>
  );
};

export default MoodSwingsAnxiety;

