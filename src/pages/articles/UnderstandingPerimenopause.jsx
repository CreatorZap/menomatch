import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../../components/BlogPost';
import { ArrowRight } from 'lucide-react';

const UnderstandingPerimenopause = () => {
  const relatedArticles = [
    {
      id: 1,
      slug: 'navigating-menopause-guide',
      title: 'Navigating Menopause: Your Essential Guide to Symptoms and Solutions',
      image: 'https://via.placeholder.com/400x300/ADD8E6/FFFFFF?text=Essential+Guide',
      readTime: '8 min read'
    },
    {
      id: 3,
      slug: 'mood-swings-anxiety-menopause',
      title: 'Beyond Hot Flashes: Addressing Mood Swings and Anxiety During Menopause',
      image: 'https://via.placeholder.com/400x300/ADD8E6/FFFFFF?text=Mood+%26+Anxiety',
      readTime: '6 min read'
    },
    {
      id: 2,
      slug: 'natural-supplements-menopause',
      title: 'The Power of Nature: Top 5 Natural Supplements for Menopause Relief',
      image: 'https://via.placeholder.com/400x300/ADD8E6/FFFFFF?text=Natural+Supplements',
      readTime: '7 min read'
    }
  ];

  return (
    <BlogPost
      title="Understanding Perimenopause: The Early Signs and How to Prepare"
      excerpt="Learn about the often-confusing perimenopause phase and proactive steps to take."
      author="MenoMatch Team"
      date="2025-01-18"
      readTime="8 min read"
      category="Education"
      image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=400&fit=crop"
      keywords="perimenopause symptoms, early menopause signs, preparing for menopause, hormone changes, irregular periods"
      relatedArticles={relatedArticles}
    >
      {/* Introduction */}
      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        <strong>Think menopause starts at 50? Think again.</strong> For most women, the transition begins much earlier—typically in your 40s, but it can start as early as your mid-30s. This phase is called <strong>perimenopause</strong>, and it's often the most confusing part of the entire menopause journey.
      </p>

      <p className="mb-6">
        Perimenopause is the transitional period when your body gradually shifts toward menopause. It can last anywhere from 2 to 10 years (average: 4-5 years), bringing a rollercoaster of physical and emotional changes that catch many women off guard.
      </p>

      <p className="mb-8">
        But here's the empowering part: <strong>knowledge is power.</strong> Understanding what perimenopause is, recognizing the early signs, and knowing how to prepare can transform this confusing phase into a manageable—even positive—transition. Your symptoms are real, they're valid, and you're not alone. Let's dive in. 🌟
      </p>

      {/* What is Perimenopause */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What is Perimenopause?</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Definition</h3>

      <p className="mb-4">
        The word "perimenopause" comes from the Greek prefix <strong>"peri"</strong> meaning "around" or "near." So perimenopause literally means <strong>"around menopause"</strong>—the transition phase that happens BEFORE menopause officially begins.
      </p>

      <p className="mb-6">
        During perimenopause, your ovaries gradually produce less estrogen and progesterone. This decline isn't smooth or linear—hormone levels fluctuate wildly from day to day and month to month, which is why symptoms can be so unpredictable.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Technical Timeline</h3>

      <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-xl p-8 mb-6">
        <h4 className="text-xl font-bold text-center text-gray-900 mb-6">The Three Stages of the Menopause Transition</h4>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="bg-purple-200 rounded-lg p-4 text-center flex-1">
            <p className="font-bold text-purple-900 text-lg">Perimenopause</p>
            <p className="text-sm text-purple-800">(The Transition)</p>
            <p className="text-xs text-purple-700 mt-2">4-8 years average</p>
          </div>
          
          <div className="text-3xl text-gray-600">→</div>
          
          <div className="bg-pink-200 rounded-lg p-4 text-center flex-1">
            <p className="font-bold text-pink-900 text-lg">Menopause</p>
            <p className="text-sm text-pink-800">(One Single Day)</p>
            <p className="text-xs text-pink-700 mt-2">12 months after last period</p>
          </div>
          
          <div className="text-3xl text-gray-600">→</div>
          
          <div className="bg-orange-200 rounded-lg p-4 text-center flex-1">
            <p className="font-bold text-orange-900 text-lg">Postmenopause</p>
            <p className="text-sm text-orange-800">(Rest of Life)</p>
            <p className="text-xs text-orange-700 mt-2">After menopause day</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <p className="font-semibold text-gray-900 mb-2">Important Clarification:</p>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Menopause is ONE DAY</strong>—specifically, it's the day that marks exactly 12 months since your last menstrual period. That's it!
          </p>
          <p className="text-sm text-gray-700">
            Everything before that day is perimenopause. Everything after is postmenopause. Most women use "menopause" to refer to the whole transition, but technically, it's just that one marker day.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h4 className="font-bold text-blue-900 mb-3">Real-Life Example:</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Last period:</strong> January 15, 2024</li>
          <li>• <strong>Menopause day:</strong> January 15, 2025 (exactly 12 months later)</li>
          <li>• <strong>Everything after January 15, 2025:</strong> Postmenopause</li>
          <li>• <strong>Everything before (those 4-8 years of symptoms):</strong> Perimenopause</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When Does Perimenopause Start?</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 rounded-lg p-6">
          <h4 className="font-bold text-green-800 mb-3">Average Age: 45-47 years</h4>
          <p className="text-sm text-gray-700 mb-3"><strong>Typical Range:</strong></p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Early 40s</strong> (most common)</li>
            <li>• <strong>Late 30s</strong> (10-15% of women)</li>
            <li>• <strong>Early 50s</strong> (some women)</li>
          </ul>
        </div>

        <div className="bg-orange-50 rounded-lg p-6">
          <h4 className="font-bold text-orange-800 mb-3">Duration: 4-8 years average</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Short:</strong> 2-3 years (lucky!)</li>
            <li>• <strong>Average:</strong> 4-5 years</li>
            <li>• <strong>Long:</strong> 10+ years (yes, really)</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h4 className="font-semibold text-gray-900 mb-3">Factors That Affect Timing:</h4>
        <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
          <li>• <strong>Genetics:</strong> When did your mother start?</li>
          <li>• <strong>Smoking:</strong> Can start 1-2 years earlier</li>
          <li>• <strong>Never been pregnant:</strong> May start earlier</li>
          <li>• <strong>Medical treatments:</strong> Chemotherapy, surgery</li>
        </ul>
      </div>

      {/* Early Signs */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">8 Early Signs of Perimenopause</h2>

      <p className="mb-6">
        Perimenopause symptoms can vary dramatically from woman to woman. Here are the most common early signs:
      </p>

      <div className="space-y-6 mb-8">
        {/* Sign 1: Irregular Periods */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
            <span className="text-3xl mr-3">🌙</span> 1. Irregular Periods (THE Classic Sign)
          </h3>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">What Changes:</h4>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Cycles get <strong>shorter</strong> first (21-25 days instead of 28)</li>
              <li>• Then cycles get <strong>longer</strong> (35-60+ days)</li>
              <li>• Flow varies: heavy one month, light the next</li>
              <li>• Completely unpredictable timing</li>
              <li>• May skip months entirely</li>
            </ul>
          </div>

          <div className="bg-red-100 rounded-lg p-4">
            <p className="text-sm text-gray-800">
              <strong>Why It Happens:</strong> Ovulation becomes irregular, causing wild hormone fluctuations. This is the #1 sign that you're entering perimenopause.
            </p>
            <p className="text-sm text-gray-800 mt-2">
              <strong>Note:</strong> This is completely normal, but track your patterns and discuss with your doctor if bleeding is extremely heavy.
            </p>
          </div>
        </div>

        {/* Sign 2: Hot Flashes */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-orange-700 mb-3 flex items-center">
            <span className="text-2xl mr-2">🔥</span> 2. Hot Flashes & Night Sweats
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Early Perimenopause:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Less frequent (1-2x per week)</li>
                <li>• Milder intensity</li>
                <li>• Often occur at night</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">As It Progresses:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Increase in frequency</li>
                <li>• Longer duration</li>
                <li>• More intense</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-3"><strong>Statistic:</strong> 75% of perimenopausal women experience hot flashes or night sweats</p>
        </div>

        {/* Sign 3: Sleep */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
            <span className="text-2xl mr-2">😴</span> 3. Sleep Disturbances
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Difficulty falling asleep</strong> (racing thoughts)</li>
            <li>• <strong>Night sweats wake you up</strong> (need to change sheets)</li>
            <li>• <strong>Early morning waking</strong> (3-4 AM, can't fall back asleep)</li>
            <li>• <strong>Restless, non-restorative sleep</strong></li>
          </ul>
          <p className="text-sm text-gray-700 mt-3"><strong>Impact:</strong> Chronic fatigue, irritability, difficulty concentrating during the day</p>
          <p className="text-sm text-blue-700 mt-2"><em>Read our <Link to="/blog/overcoming-menopausal-insomnia" className="underline font-semibold">complete sleep guide</Link> for solutions.</em></p>
        </div>

        {/* Sign 4: Mood */}
        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3 flex items-center">
            <span className="text-2xl mr-2">😢</span> 4. Mood Changes & Emotional Symptoms
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Irritability</strong> (short fuse, low tolerance for annoyances)</li>
            <li>• <strong>Anxiety</strong> (new anxiety or worsening of existing)</li>
            <li>• <strong>Depression or sadness</strong> (feeling low for no reason)</li>
            <li>• <strong>Mood swings</strong> (emotional rollercoaster)</li>
            <li>• <strong>"Not feeling like myself"</strong> (the most common description)</li>
          </ul>
          <p className="text-sm text-purple-800 mt-3 bg-purple-100 rounded p-3">
            <strong>Why It Happens:</strong> Estrogen directly affects serotonin (your brain's mood regulator). As estrogen fluctuates, so does your mood.
          </p>
        </div>

        {/* Sign 5: Brain Fog */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-yellow-700 mb-3 flex items-center">
            <span className="text-2xl mr-2">🧠</span> 5. Brain Fog & Memory Issues
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Forgetfulness</strong> (walk into a room, forget why)</li>
            <li>• <strong>Difficulty concentrating</strong> on tasks</li>
            <li>• <strong>Word-finding problems</strong> ("What's that thing called?")</li>
            <li>• <strong>Mental fuzziness</strong> or feeling "foggy"</li>
          </ul>
          <div className="bg-yellow-100 rounded p-3 mt-3">
            <p className="text-sm text-yellow-900">
              <strong>Reassurance:</strong> This is temporary! Brain fog typically improves after menopause. You're not developing dementia—it's just hormones.
            </p>
          </div>
        </div>

        {/* Sign 6: Physical Changes */}
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center">
            <span className="text-2xl mr-2">💪</span> 6. Physical & Body Changes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Weight Changes:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Weight gain (especially belly fat)</li>
                <li>• Harder to lose weight</li>
                <li>• Metabolism slows down</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Body Composition:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Muscle loss (sarcopenia)</li>
                <li>• Fat redistribution (waist)</li>
                <li>• Changes in shape</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sign 7: Sexual */}
        <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-pink-700 mb-3 flex items-center">
            <span className="text-2xl mr-2">👩</span> 7. Vaginal & Sexual Changes
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Vaginal dryness</strong> (uncomfortable, itchy)</li>
            <li>• <strong>Discomfort during sex</strong></li>
            <li>• <strong>Decreased libido</strong> (lower sex drive)</li>
            <li>• <strong>Changes in orgasm</strong> (harder to achieve)</li>
          </ul>
          <p className="text-sm text-gray-700 mt-3">
            <strong>Why:</strong> Lower estrogen causes vaginal tissue to thin and produce less natural lubrication
          </p>
        </div>

        {/* Sign 8: Other */}
        <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
            <span className="text-2xl mr-2">🦴</span> 8. Other Physical Symptoms
          </h3>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
            <ul className="space-y-1">
              <li>• Joint pain and stiffness</li>
              <li>• Headaches or worsening migraines</li>
              <li>• Breast tenderness</li>
              <li>• Heart palpitations</li>
            </ul>
            <ul className="space-y-1">
              <li>• Dry skin and hair</li>
              <li>• Thinning hair</li>
              <li>• Increased facial hair</li>
              <li>• Digestive changes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 rounded-lg p-6 mb-8">
        <p className="text-center font-bold text-blue-900 text-lg">
          💙 Every Woman is Different
        </p>
        <p className="text-center text-blue-800 mt-2">
          You may have 2-3 symptoms or 10+. Both are completely normal! The experience varies dramatically from woman to woman.
        </p>
      </div>

      {/* Perimenopause vs PMS */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Perimenopause vs. PMS: Know the Difference</h2>

      <p className="mb-6">
        Many perimenopause symptoms overlap with PMS, which can be confusing. Here's how to tell them apart:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-pink-50 border-2 border-pink-300 rounded-lg p-6">
          <h3 className="font-bold text-pink-800 text-xl mb-4">PMS (Premenstrual Syndrome)</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ <strong>Predictable:</strong> Same time each month (before period)</li>
            <li>✓ <strong>Tied to cycle:</strong> Resolves when period starts</li>
            <li>✓ <strong>Consistent symptoms:</strong> Same symptoms every month</li>
            <li>✓ <strong>Any age:</strong> Can occur from teens to 40s</li>
            <li>✓ <strong>Pattern:</strong> Follows menstrual cycle closely</li>
          </ul>
        </div>

        <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
          <h3 className="font-bold text-purple-800 text-xl mb-4">Perimenopause</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ <strong>Unpredictable:</strong> Random timing, no pattern</li>
            <li>✓ <strong>Persistent:</strong> Symptoms don't resolve with period</li>
            <li>✓ <strong>New symptoms:</strong> May have never had them before</li>
            <li>✓ <strong>Age factor:</strong> Typically 40+ years old</li>
            <li>✓ <strong>Pattern:</strong> Doesn't follow cycle (or no cycle!)</li>
          </ul>
        </div>
      </div>

      <div className="bg-orange-100 rounded-lg p-6 mb-8">
        <p className="font-semibold text-orange-900 mb-2">🔑 Key Distinguisher:</p>
        <p className="text-gray-800">
          If you've <strong>never had PMS before</strong> and suddenly experience these symptoms in your 40s, it's almost certainly perimenopause. If symptoms <strong>persist throughout your cycle</strong> (not just before your period), that's perimenopause.
        </p>
      </div>

      {/* Diagnosing */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Diagnosing Perimenopause</h2>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
        <h3 className="font-bold text-yellow-900 mb-3">The Challenge</h3>
        <p className="text-gray-700 text-sm">
          There's <strong>no single definitive test</strong> for perimenopause. Hormone levels fluctuate wildly from day to day (and even hour to hour!), so blood tests aren't always accurate. Diagnosis is typically based on age, symptoms, and menstrual pattern changes.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-4">How Doctors Diagnose</h3>

      <div className="space-y-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h4 className="font-bold text-blue-800 mb-2">1. Age + Symptoms (Most Reliable)</h4>
          <p className="text-sm text-gray-700">
            If you're <strong>over 40 + experiencing irregular periods + have multiple symptoms</strong> from the list above, you're almost certainly in perimenopause. This is the most reliable diagnostic approach.
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h4 className="font-bold text-green-800 mb-2">2. Tracking Patterns</h4>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Period tracking:</strong> 3-6 months of data showing irregular cycles
          </p>
          <p className="text-sm text-gray-700">
            <strong>Symptom diary:</strong> Log symptoms, intensity, timing
          </p>
        </div>

        <div className="bg-purple-50 rounded-lg p-6">
          <h4 className="font-bold text-purple-800 mb-2">3. Blood Tests (Optional, Not Always Accurate)</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <strong>• FSH (Follicle-Stimulating Hormone):</strong> High FSH = low estrogen = perimenopause likely. But it fluctuates daily, so one test isn't definitive.
            </li>
            <li>
              <strong>• Estradiol (Estrogen):</strong> Low levels suggest perimenopause, but again, it fluctuates constantly.
            </li>
          </ul>
          <p className="text-xs text-purple-700 mt-2 italic">
            Note: Blood tests can be helpful but aren't necessary for diagnosis in most cases.
          </p>
        </div>

        <div className="bg-orange-50 rounded-lg p-6">
          <h4 className="font-bold text-orange-800 mb-2">4. Rule Out Other Causes</h4>
          <p className="text-sm text-gray-700">
            Your doctor may test for conditions with similar symptoms:
          </p>
          <ul className="text-sm text-gray-700 mt-2 space-y-1">
            <li>• Thyroid disorders (very common, similar symptoms!)</li>
            <li>• PCOS (polycystic ovary syndrome)</li>
            <li>• Pregnancy (yes, still possible during perimenopause!)</li>
            <li>• Anemia, vitamin deficiencies</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-100 rounded-lg p-6 mb-8">
        <p className="font-semibold text-blue-900 text-center">
          ✅ Bottom Line: Clinical diagnosis based on age + symptoms is usually sufficient. You don't need extensive testing to confirm perimenopause.
        </p>
      </div>

      {/* How to Prepare */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Prepare for Perimenopause</h2>

      <p className="mb-6">
        The best time to prepare for perimenopause is <strong>before</strong> symptoms become severe. Here are 7 proactive steps:
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-3">1. 📱 Track Your Cycle</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Use:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Period tracking apps (Flo, Clue)</li>
                <li>• Paper calendar</li>
                <li>• Symptom journal</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Track:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Period dates and flow</li>
                <li>• Physical symptoms</li>
                <li>• Mood changes</li>
                <li>• Sleep quality</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-blue-800 mt-3">
            <strong>Why:</strong> Helps identify patterns and provides valuable data for your doctor.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6">
          <h3 className="text-xl font-bold text-green-800 mb-3">2. 👥 Build Your Support Team</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Healthcare Providers:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Gynecologist (primary care)</li>
                <li>• Primary care doctor</li>
                <li>• Menopause specialist (if available)</li>
                <li>• Mental health professional</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Personal Support:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Partner (educate them!)</li>
                <li>• Friends experiencing it</li>
                <li>• Online communities</li>
                <li>• Family members</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6">
          <h3 className="text-xl font-bold text-purple-800 mb-3">3. 💪 Optimize Your Lifestyle NOW</h3>
          
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Diet Priorities:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Calcium:</strong> 1,000-1,200mg daily (bone health)</li>
                <li>• <strong>Vitamin D:</strong> 2,000 IU (calcium absorption)</li>
                <li>• <strong>Protein:</strong> 0.8-1g per lb body weight (muscle preservation)</li>
                <li>• <strong>Phytoestrogens:</strong> Soy, flax, chickpeas (hormone balance)</li>
                <li>• <strong>Reduce:</strong> Caffeine and alcohol (trigger hot flashes)</li>
              </ul>
              <p className="text-sm text-purple-700 mt-2">
                <em>Read our <Link to="/blog/menopause-diet-hormone-balance" className="underline font-semibold">complete diet guide</Link>.</em>
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Exercise Essentials:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Strength training:</strong> 3x per week (CRUCIAL for muscle/bone)</li>
                <li>• <strong>Cardio:</strong> 150 minutes per week</li>
                <li>• <strong>Flexibility:</strong> Yoga, stretching</li>
                <li>• <strong>Weight-bearing:</strong> Walking, dancing (bone density)</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Sleep Hygiene:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Consistent sleep schedule (even weekends)</li>
                <li>• Cool bedroom (65°F ideal)</li>
                <li>• Dark, quiet environment</li>
                <li>• Limit screens 1 hour before bed</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Stress Management:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Daily meditation or mindfulness (even 5 minutes)</li>
                <li>• Deep breathing exercises</li>
                <li>• Hobbies and activities you enjoy</li>
                <li>• Set boundaries (learn to say no)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-3">4. 💊 Consider Supplements Early</h3>
          <p className="text-sm text-gray-700 mb-3">
            A proactive approach with key supplements can help minimize symptoms before they become severe:
          </p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Magnesium:</strong> Sleep, mood, muscle relaxation</li>
            <li>• <strong>Omega-3s:</strong> Brain health, heart health, inflammation</li>
            <li>• <strong>Vitamin D + K2:</strong> Bone density (take together)</li>
            <li>• <strong>B-Complex:</strong> Energy, mood, brain function</li>
            <li>• <strong>Probiotics:</strong> Gut health, immune support</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-6">
          <h3 className="text-xl font-bold text-pink-800 mb-3">5. 💆‍♀️ Update Your Self-Care Routine</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Skincare:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Increase moisturizer use</li>
                <li>• Add retinol (collagen boost)</li>
                <li>• SPF daily (protect collagen)</li>
                <li>• Consider collagen supplements</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Body Care:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Vaginal moisturizer (preventive)</li>
                <li>• Water-based lubricant</li>
                <li>• Pelvic floor exercises</li>
                <li>• Gentle, sulfate-free haircare</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-6">
          <h3 className="text-xl font-bold text-teal-800 mb-3">6. 💰 Financial Planning</h3>
          <p className="text-sm text-gray-700 mb-2">
            Budget for potential perimenopause-related expenses:
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Supplements: $50-100/month</li>
            <li>• Doctor visits (may increase frequency)</li>
            <li>• Potential treatments (HRT, therapy, etc.)</li>
            <li>• Check health insurance coverage</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-6">
          <h3 className="text-xl font-bold text-indigo-800 mb-3">7. 💬 Educate Your Partner</h3>
          <p className="text-sm text-gray-700 mb-3">
            Having your partner's understanding and support is crucial:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Share:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• What perimenopause is</li>
                <li>• Symptoms you may experience</li>
                <li>• How they can support you</li>
                <li>• That it's temporary but real</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">Communication Tips:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Be open about symptoms</li>
                <li>• Ask for understanding</li>
                <li>• Mood changes aren't personal</li>
                <li>• Request practical help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-8 text-center my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Not Sure Which Supplements to Start?</h3>
        <p className="text-gray-700 mb-6">
          Take our personalized quiz to get supplement recommendations tailored to your current symptoms and stage of perimenopause.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors"
        >
          Get Personalized Recommendations
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

      {/* Treatment Options */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Treatment Options for Perimenopause</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 rounded-xl p-6">
          <h3 className="font-bold text-green-800 text-xl mb-4">🌿 Natural Approaches</h3>
          
          <div className="mb-4">
            <p className="font-semibold text-gray-900 mb-2 text-sm">Supplements:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Black cohosh:</strong> Hot flashes</li>
              <li>• <strong>Maca root:</strong> Hormonal balance</li>
              <li>• <strong>Evening primrose oil:</strong> Breast tenderness</li>
              <li>• <strong>Magnesium:</strong> Sleep and mood</li>
            </ul>
            <p className="text-sm text-green-700 mt-2">
              <em>Read more: <Link to="/blog/natural-supplements-menopause" className="underline font-semibold">Natural Supplements Guide</Link></em>
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-900 mb-2 text-sm">Lifestyle:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Regular exercise (crucial!)</li>
              <li>• Stress reduction techniques</li>
              <li>• Adequate sleep (7-9 hours)</li>
              <li>• Balanced, nutritious diet</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="font-bold text-blue-800 text-xl mb-4">💊 Medical Treatments</h3>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-gray-900 text-sm mb-1">1. Hormonal Birth Control</p>
              <p className="text-xs text-gray-700">Low-dose pills regulate periods, reduce symptoms, and provide contraception (still possible to get pregnant in perimenopause!)</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 text-sm mb-1">2. Hormone Replacement Therapy (HRT)</p>
              <p className="text-xs text-gray-700">Usually for menopause but sometimes late perimenopause. Estrogen +/- progesterone. Highly effective. Discuss risks/benefits with doctor.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 text-sm mb-1">3. Non-Hormonal Medications</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• SSRIs/SNRIs (mood, hot flashes)</li>
                <li>• Gabapentin (hot flashes, sleep)</li>
                <li>• Blood pressure meds (hot flashes)</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 text-sm mb-1">4. Targeted Treatments</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Vaginal estrogen (dryness)</li>
                <li>• Sleep aids (if needed)</li>
                <li>• Anti-anxiety meds (severe cases)</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-blue-700 mt-4 font-semibold">
            Important: Work with your healthcare provider to find what's right for YOUR unique situation.
          </p>
        </div>
      </div>

      {/* When to See Doctor */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
          <span className="text-3xl mr-3">⚠️</span> When to See a Doctor
        </h2>
        
        <p className="text-sm text-gray-700 mb-4"><strong>See your doctor if you experience:</strong></p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Extremely heavy periods</strong> (soaking pad/tampon every hour)</li>
            <li>• <strong>Bleeding lasting more than 7 days</strong></li>
            <li>• <strong>Bleeding between periods</strong></li>
            <li>• <strong>Bleeding after 12+ months without a period</strong></li>
          </ul>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Severe symptoms</strong> affecting quality of life</li>
            <li>• <strong>Depression or severe anxiety</strong></li>
            <li>• <strong>New, concerning symptoms</strong></li>
            <li>• <strong>Symptoms you can't manage alone</strong></li>
          </ul>
        </div>

        <div className="bg-red-100 rounded-lg p-4 mt-4">
          <p className="font-semibold text-red-900 mb-2">Annual Checkups Should Include:</p>
          <ul className="text-sm text-red-800 space-y-1">
            <li>• Pelvic exam and Pap smear (as recommended)</li>
            <li>• Breast exam</li>
            <li>• Discussion of perimenopause symptoms (be open!)</li>
            <li>• Bone density scan (age 65+ or earlier if risk factors)</li>
          </ul>
        </div>
      </div>

      {/* The Positive Side */}
      <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">🌈 The Positive Side (Yes, There Is One!)</h2>
        
        <p className="text-center text-gray-700 mb-6 text-lg">
          It's not all bad! Here are some unexpected upsides to perimenopause and beyond:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg p-6">
            <h3 className="font-bold text-orange-800 mb-3">Practical Perks:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>🎉 <strong>No more periods!</strong> (eventually)</li>
              <li>🎉 <strong>No more PMS</strong></li>
              <li>🎉 <strong>No pregnancy worries</strong></li>
              <li>🎉 <strong>No need for birth control</strong></li>
              <li>🎉 <strong>Savings on menstrual products</strong></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="font-bold text-pink-800 mb-3">Emotional Growth:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>💪 <strong>More confidence and self-awareness</strong></li>
              <li>💪 <strong>"Not giving a f**k" freedom</strong></li>
              <li>💪 <strong>Wisdom and perspective on life</strong></li>
              <li>💪 <strong>Liberation from expectations</strong></li>
              <li>💪 <strong>Permission to prioritize yourself</strong></li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-300">
          <h3 className="font-bold text-yellow-900 mb-3 text-center">The "Meno-Pause" Mindset 🧘‍♀️</h3>
          <p className="text-center text-gray-700 mb-3">
            Think of perimenopause as a <strong>pause</strong> to:
          </p>
          <ul className="text-sm text-gray-700 space-y-1 max-w-md mx-auto">
            <li>✨ Prioritize yourself (finally!)</li>
            <li>✨ Slow down and reassess life</li>
            <li>✨ Embrace a new chapter with confidence</li>
            <li>✨ Grow into the woman you're meant to be</li>
          </ul>
          <p className="text-center font-semibold text-yellow-900 mt-4">
            This is a transition, not an ending. It's an opportunity for growth! 🌱
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">You've Got This!</h2>

      <p className="mb-4">
        Perimenopause is the <strong>transition</strong>, not the destination. While it can be challenging and confusing, remember that <strong>early awareness equals better preparation</strong>. The more you understand what's happening in your body, the more empowered you'll feel to manage it.
      </p>

      <p className="mb-4">
        Every woman's journey through perimenopause is unique—some sail through with minimal symptoms, while others face more significant challenges. <strong>Both experiences are completely normal.</strong> Your symptoms are real, they're valid, and they deserve attention and care.
      </p>

      <p className="mb-4">
        The good news? <strong>Help is available</strong>—both natural and medical approaches can significantly ease symptoms. You don't have to suffer in silence. Build your support team, optimize your lifestyle, explore treatment options, and most importantly, be kind to yourself during this transition.
      </p>

      <p className="mb-8 text-lg font-semibold text-gray-900">
        Remember: This phase will pass. Millions of women are going through this right now. You're not alone, and you absolutely have the strength to navigate this journey. 💪💖
      </p>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-8 md:p-12 text-white text-center my-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Take Control of Your Perimenopause Journey?
        </h3>
        <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
          Get personalized supplement recommendations based on your unique symptoms and stage. Our free 2-minute quiz will help you identify the best natural support for YOUR journey.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-bold rounded-full shadow-lg text-white hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
        >
          Get My Personalized Plan Now
          <ArrowRight className="ml-3 w-5 h-5" />
        </Link>
      </div>

      <div className="bg-purple-50 rounded-lg p-6 mt-12">
        <p className="text-center text-gray-700 font-semibold">
          Want more perimenopause and menopause support? Explore our <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-bold underline">complete blog library</Link> for evidence-based guides on symptoms, nutrition, supplements, and more.
        </p>
      </div>
    </BlogPost>
  );
};

export default UnderstandingPerimenopause;

