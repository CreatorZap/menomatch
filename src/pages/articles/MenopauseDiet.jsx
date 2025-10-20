import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../../components/BlogPost';
import { ArrowRight } from 'lucide-react';

const MenopauseDiet = () => {
  const relatedArticles = [
    {
      id: 2,
      slug: 'natural-supplements-menopause',
      title: 'The Power of Nature: Top 5 Natural Supplements for Menopause Relief',
      image: 'https://via.placeholder.com/400x300/ADD8E6/FFFFFF?text=Natural+Supplements',
      readTime: '7 min read'
    },
    {
      id: 4,
      slug: 'overcoming-menopausal-insomnia',
      title: 'Sleep Like a Baby: Overcoming Menopausal Insomnia Naturally',
      image: 'https://via.placeholder.com/400x300/ADD8E6/FFFFFF?text=Sleep+Solutions',
      readTime: '7 min read'
    },
    {
      id: 1,
      slug: 'navigating-menopause-guide',
      title: 'Navigating Menopause: Your Essential Guide to Symptoms and Solutions',
      image: 'https://via.placeholder.com/400x300/ADD8E6/FFFFFF?text=Essential+Guide',
      readTime: '8 min read'
    }
  ];

  return (
    <BlogPost
      title="Your Menopause Diet: Eating for Energy and Hormone Balance"
      excerpt="Nutritional guidance for women in menopause, including foods to favor and avoid."
      author="MenoMatch Team"
      date="2025-01-16"
      readTime="9 min read"
      category="Nutrition"
      image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=400&fit=crop"
      keywords="menopause diet, hormone balance diet, nutrition for menopause, weight gain menopause, phytoestrogens, menopause nutrition"
      relatedArticles={relatedArticles}
    >
      {/* Introduction */}
      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        <strong>"You are what you eat"</strong>—and during menopause, this old saying has never been more true. Research shows that <strong>dietary changes can reduce menopause symptoms by up to 50%</strong>, making nutrition one of your most powerful tools for navigating this transition.
      </p>

      <p className="mb-6">
        The right foods can help balance hormones, maintain a healthy weight, boost energy, improve sleep, stabilize mood, and even reduce the frequency and severity of hot flashes. The wrong foods? They can make every symptom worse—triggering hot flashes, disrupting sleep, causing energy crashes, and accelerating weight gain.
      </p>

      <p className="mb-8">
        In this comprehensive guide, you'll discover exactly which foods to embrace and which to limit, along with practical meal plans and strategies for managing specific symptoms. <strong>Food is medicine</strong>—let's use it wisely! 🥗
      </p>

      {/* How Menopause Changes Nutritional Needs */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How Menopause Changes Your Nutritional Needs</h2>

      <p className="mb-6">
        Your body's nutritional requirements shift significantly during menopause. Understanding these changes helps you adapt your diet accordingly.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Metabolic Shift</h3>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
        <ul className="space-y-2 text-gray-700">
          <li><strong>Metabolism slows by 5-10%</strong> after age 40, making weight management more challenging</li>
          <li><strong>Muscle mass decreases</strong> (sarcopenia), further slowing metabolism</li>
          <li><strong>Fat distribution changes</strong>—hello, belly fat! Estrogen loss shifts fat storage to the abdomen</li>
          <li><strong>Insulin sensitivity decreases</strong>, increasing risk of blood sugar imbalances and type 2 diabetes</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Nutrient Requirements Change</h3>

      <p className="mb-4">
        As estrogen declines, your body needs different amounts of key nutrients:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-bold text-primary-600 mb-2">📈 Need MORE:</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Calcium:</strong> 1,200mg daily (bone density decreases)</li>
            <li><strong>Protein:</strong> 0.8-1g per lb body weight (preserve muscle)</li>
            <li><strong>Fiber:</strong> 25-30g daily (digestive changes, weight management)</li>
            <li><strong>Antioxidants:</strong> Combat increased inflammation</li>
            <li><strong>Omega-3s:</strong> Brain health, heart health, mood</li>
          </ul>
        </div>

        <div className="bg-orange-50 rounded-lg p-4">
          <h4 className="font-bold text-secondary-600 mb-2">📉 Need LESS:</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Calories:</strong> Slower metabolism = lower needs</li>
            <li><strong>Refined carbs:</strong> Blood sugar sensitivity increases</li>
            <li><strong>Sodium:</strong> Risk of high blood pressure rises</li>
            <li><strong>Processed foods:</strong> Increase inflammation</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Hormonal Impact of Food</h3>

      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Phytoestrogens</strong> (plant compounds) can help balance declining estrogen</li>
        <li><strong>Blood sugar stability</strong> directly affects hot flash frequency and mood</li>
        <li><strong>Gut health</strong> influences how your body metabolizes hormones (estrogen is processed in the gut!)</li>
      </ul>

      {/* Foods That Fight Menopause Symptoms */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Foods That Fight Menopause Symptoms</h2>

      <p className="mb-6">
        These seven food categories should form the foundation of your menopause diet:
      </p>

      {/* 1. Phytoestrogens */}
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-green-800 mb-4">1. 🌱 Phytoestrogen-Rich Foods (Natural Hormone Balance)</h3>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Soy Products:</h4>
          <p className="text-gray-700 mb-2">Tofu, tempeh, edamame, soy milk</p>
          <p className="text-sm mb-1"><strong>Benefit:</strong> Can reduce hot flashes by 20-50% in studies</p>
          <p className="text-sm mb-1"><strong>How much:</strong> 1-2 servings daily (15-25g soy protein)</p>
          <p className="text-sm text-gray-600"><em>Tip: Choose organic, fermented soy when possible (better digestion)</em></p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Flaxseeds:</h4>
          <p className="text-gray-700 mb-2">Ground flaxseeds (must be ground for absorption!)</p>
          <p className="text-sm mb-1"><strong>Benefit:</strong> Lignans mimic estrogen + omega-3s + fiber</p>
          <p className="text-sm mb-1"><strong>How much:</strong> 2 tablespoons daily</p>
          <p className="text-sm text-gray-600"><em>Use in: Smoothies, yogurt, oatmeal, baked goods</em></p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Other Sources:</h4>
          <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
            <li>Chickpeas, lentils, black beans</li>
            <li>Sesame seeds, tahini</li>
            <li>Whole grains (oats, barley, brown rice)</li>
          </ul>
        </div>
      </div>

      {/* 2. Calcium */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">2. 🦴 Calcium-Rich Foods (Bone Health)</h3>
        
        <div className="bg-blue-100 rounded-lg p-4 mb-4">
          <p className="font-bold text-lg text-blue-900">Daily Target: 1,200mg after menopause</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Dairy Sources:</h4>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
              <li>Greek yogurt (1 cup = 300mg)</li>
              <li>Cheese (1 oz = 200mg)</li>
              <li>Milk (1 cup = 300mg)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Non-Dairy Sources:</h4>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
              <li>Kale, collard greens, bok choy</li>
              <li>Fortified plant milks</li>
              <li>Sardines with bones (325mg per 3 oz)</li>
              <li>Almonds (1 oz = 75mg)</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4"><em>💡 Absorption Tip: Pair calcium with vitamin D (sunlight, supplements, or fortified foods) for better absorption.</em></p>
      </div>

      {/* 3. Protein */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">3. 💪 Protein Powerhouses (Muscle Preservation)</h3>
        
        <div className="bg-purple-100 rounded-lg p-4 mb-4">
          <p className="font-bold text-lg text-purple-900">Daily Target: 0.8-1g per pound of body weight</p>
          <p className="text-sm text-purple-800">(150 lb woman = 120-150g protein daily)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Animal Sources:</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Chicken breast (4 oz = 35g)</li>
              <li>• Salmon (4 oz = 30g)</li>
              <li>• Eggs (1 egg = 6g)</li>
              <li>• Greek yogurt (1 cup = 20g)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Plant Sources:</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Lentils (1 cup = 18g)</li>
              <li>• Chickpeas (1 cup = 15g)</li>
              <li>• Quinoa (1 cup = 8g)</li>
              <li>• Tofu (4 oz = 10g)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Why It Matters:</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Preserves muscle mass</li>
              <li>• Boosts metabolism</li>
              <li>• Increases satiety</li>
              <li>• Supports bone health</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-600"><em>⚡ Distribution Tip: Spread protein across all meals—aim for 30g per meal rather than loading it all at dinner.</em></p>
      </div>

      {/* 4. Healthy Fats */}
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-green-800 mb-4">4. 🥑 Healthy Fats (Hormone Production & Brain Health)</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Omega-3 Fatty Acids:</h4>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
              <li>Fatty fish (salmon, sardines, mackerel) 2-3x/week</li>
              <li>Walnuts (1 oz daily)</li>
              <li>Chia seeds (1 tbsp)</li>
              <li>Hemp seeds</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Monounsaturated Fats:</h4>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
              <li>Avocados (½ daily)</li>
              <li>Extra virgin olive oil (2 tbsp)</li>
              <li>Almonds, cashews</li>
              <li>Olives</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 rounded-lg p-4 mt-4">
          <p className="font-semibold text-green-900">Why Healthy Fats Matter:</p>
          <p className="text-sm text-green-800">Essential for hormone production, reduce inflammation, improve mood and cognitive function, support heart health, and help absorb fat-soluble vitamins (A, D, E, K).</p>
        </div>
      </div>

      {/* 5. Fiber */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">5. 🌾 Fiber-Rich Foods (Digestive Health & Weight Management)</h3>
        
        <div className="bg-orange-100 rounded-lg p-4 mb-4">
          <p className="font-bold text-lg text-orange-900">Daily Target: 25-30g</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Best Sources:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><strong>Vegetables:</strong> Broccoli, Brussels sprouts, cauliflower, carrots</li>
            <li><strong>Fruits:</strong> Berries, apples with skin, pears</li>
            <li><strong>Whole grains:</strong> Oats, quinoa, brown rice, whole wheat</li>
            <li><strong>Legumes:</strong> Lentils (15g per cup!), beans, chickpeas</li>
            <li><strong>Seeds:</strong> Chia (10g per 2 tbsp), flax, pumpkin</li>
          </ul>
        </div>

        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-semibold text-gray-900 mb-2">Benefits of Fiber:</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>✓ Regulates blood sugar (prevents crashes)</li>
            <li>✓ Aids weight management (increases satiety)</li>
            <li>✓ Removes excess estrogen from the body</li>
            <li>✓ Feeds beneficial gut bacteria</li>
            <li>✓ Prevents constipation (common during menopause)</li>
          </ul>
        </div>
      </div>

      {/* 6. Antioxidants */}
      <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-purple-800 mb-4">6. 🍓 Antioxidant-Rich Foods (Fight Inflammation)</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Berries (ORAC Superstars):</h4>
            <p className="text-sm text-gray-700">Blueberries, strawberries, raspberries, blackberries—combat oxidative stress and aging</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Colorful Vegetables:</h4>
            <p className="text-sm text-gray-700">Sweet potatoes, beets, carrots, bell peppers, tomatoes—eat the rainbow!</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Dark Leafy Greens:</h4>
            <p className="text-sm text-gray-700">Spinach, kale, Swiss chard—packed with vitamins, minerals, and phytonutrients</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Powerful Spices:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Turmeric (anti-inflammatory)</li>
              <li>• Ginger (reduces nausea, inflammation)</li>
              <li>• Cinnamon (blood sugar control)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 7. Hydration */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">7. 💧 Water & Hydration (The Forgotten Essential)</h3>
        
        <div className="bg-blue-100 rounded-lg p-4 mb-4">
          <p className="font-bold text-lg text-blue-900">Daily Target: 8-10 glasses (64-80 oz)</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Why It's MORE Important During Menopause:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Dry skin and vaginal dryness are common</li>
            <li>Hot flashes cause dehydration</li>
            <li>Constipation becomes more frequent</li>
            <li>Helps with weight management (often mistaken for hunger)</li>
            <li>Supports cognitive function (brain fog prevention)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Hydrating Foods:</h4>
          <p className="text-sm text-gray-700">Cucumber, watermelon, celery, lettuce, coconut water, herbal teas (chamomile, peppermint)</p>
        </div>
      </div>

      {/* CTA Box 1 */}
      <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-8 text-center my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Want a Personalized Supplement Plan to Complement Your Diet?</h3>
        <p className="text-gray-700 mb-6">
          While food should always come first, the right supplements can fill nutritional gaps and provide targeted symptom relief.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors"
        >
          Take Our Free 2-Minute Quiz
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

      {/* Foods to Limit or Avoid */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Foods to Limit or Avoid</h2>

      <p className="mb-6">
        These foods can worsen menopause symptoms. You don't have to eliminate them completely, but <strong>reducing intake makes a noticeable difference</strong>:
      </p>

      <div className="space-y-6 mb-8">
        {/* Refined Sugars */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6">
          <h3 className="text-xl font-bold text-red-800 mb-3">1. 🚫 Refined Sugars & Carbs</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Why Avoid:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Blood sugar spikes → energy crashes</li>
                <li>• Worsen mood swings and irritability</li>
                <li>• Increase inflammation throughout body</li>
                <li>• Lead to weight gain (especially belly fat)</li>
                <li>• Increase hot flash frequency</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Swap This → For This:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• White bread → Whole grain bread</li>
                <li>• White pasta → Quinoa, brown rice pasta</li>
                <li>• Cookies/cakes → Fresh fruit, dark chocolate</li>
                <li>• Sweetened yogurt → Plain yogurt + berries</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Caffeine */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-3">2. ☕ Caffeine (Limit, Don't Eliminate)</h3>
          <div className="mb-3">
            <h4 className="font-semibold text-gray-900 mb-2">Why Be Cautious:</h4>
            <p className="text-sm text-gray-700 mb-2">Triggers hot flashes in 65% of menopausal women, interferes with sleep, depletes calcium, and increases anxiety.</p>
          </div>
          <div className="bg-orange-100 rounded p-3">
            <h4 className="font-semibold text-gray-900 mb-2">Smart Guidelines:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Limit to 1-2 cups before noon</li>
              <li>✓ Switch to green tea (lower caffeine, antioxidants)</li>
              <li>✓ Try herbal teas (no caffeine)</li>
              <li>✗ Avoid energy drinks completely</li>
            </ul>
          </div>
        </div>

        {/* Alcohol */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6">
          <h3 className="text-xl font-bold text-red-800 mb-3">3. 🍷 Alcohol (Moderation is Key)</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Why Limit:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Major hot flash trigger</li>
                <li>• Disrupts sleep cycles (REM sleep)</li>
                <li>• Affects hormone metabolism in liver</li>
                <li>• Empty calories (weight gain)</li>
                <li>• Increases breast cancer risk</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Smart Guidelines:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Max 3-4 drinks per week</li>
                <li>• Choose red wine if drinking (resveratrol benefits)</li>
                <li>• Never drink 3 hours before bed</li>
                <li>• Stay well-hydrated when drinking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Spicy Foods */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-3">4. 🌶️ Spicy Foods</h3>
          <p className="text-sm text-gray-700 mb-2"><strong>Why Caution:</strong> Major hot flash trigger for many women, can worsen night sweats, and cause digestive upset.</p>
          <p className="text-sm text-gray-700"><strong>Strategy:</strong> Track your personal triggers (not all women affected), use milder spices like turmeric and cumin instead, save spicy meals for lunch rather than dinner.</p>
        </div>

        {/* High Sodium */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6">
          <h3 className="text-xl font-bold text-red-800 mb-3">5. 🧂 High-Sodium Foods</h3>
          <div className="mb-3">
            <p className="text-sm text-gray-700 mb-2"><strong>Why Avoid:</strong> Causes water retention/bloating, increases blood pressure (risk rises during menopause), depletes calcium from bones.</p>
          </div>
          <div className="bg-red-100 rounded p-3">
            <h4 className="font-semibold text-gray-900 mb-2">Hidden High-Sodium Culprits:</h4>
            <p className="text-sm text-gray-700">Processed foods, restaurant meals, canned soups, deli meats, cheese, bread, condiments</p>
            <p className="text-sm text-gray-700 mt-2"><strong>Limit:</strong> 2,300mg daily (1,500mg if high blood pressure)</p>
          </div>
        </div>

        {/* Processed & Fried */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6">
          <h3 className="text-xl font-bold text-red-800 mb-3">6. 🍟 Processed & Fried Foods</h3>
          <p className="text-sm text-gray-700"><strong>Why Avoid:</strong> Trans fats increase inflammation and worsen all menopause symptoms, accelerate weight gain (especially belly fat), increase heart disease risk (which rises significantly after menopause).</p>
          <p className="text-sm text-gray-700 mt-2"><strong>Examples:</strong> Fast food, packaged snacks, fried foods, margarine, shortening, most baked goods</p>
        </div>
      </div>

      {/* Sample Meal Plans */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3-Day Sample Meal Plan</h2>

      <p className="mb-6">
        Here are three days of balanced, menopause-friendly meals to inspire your own menu planning:
      </p>

      {/* Day 1 */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-primary-600 mb-4">📅 Day 1: Hormone Balance Focus</h3>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">🌅 Breakfast (7:30 AM): Greek Yogurt Parfait</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 1 cup plain Greek yogurt (20g protein, 300mg calcium)</li>
              <li>• ½ cup mixed berries (antioxidants)</li>
              <li>• 2 tbsp ground flaxseeds (phytoestrogens, omega-3s)</li>
              <li>• Handful walnuts (omega-3s)</li>
              <li>• Drizzle honey</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">☕ Mid-Morning Snack (10:30 AM)</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Apple slices with 2 tbsp almond butter</li>
              <li>• Green tea (antioxidants, mild caffeine)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">🥗 Lunch (1:00 PM): Salmon Power Bowl</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 4 oz grilled salmon (omega-3s, 30g protein)</li>
              <li>• Mixed greens, cucumber, cherry tomatoes</li>
              <li>• ½ cup cooked quinoa (complete protein, fiber)</li>
              <li>• Olive oil + lemon dressing</li>
              <li>• Side: Steamed edamame (phytoestrogens)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">🥕 Afternoon Snack (4:00 PM)</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Hummus with carrot and celery sticks</li>
              <li>• Handful raw almonds</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">🍽️ Dinner (6:30 PM): Asian-Inspired Stir-Fry</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 4 oz tofu or chicken (protein)</li>
              <li>• Broccoli, bell peppers, bok choy (cruciferous veggies)</li>
              <li>• ½ cup brown rice (whole grain)</li>
              <li>• Sesame seeds sprinkled on top</li>
              <li>• Ginger-garlic sauce (anti-inflammatory)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">🌙 Evening (8:00 PM)</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Chamomile tea (promotes sleep)</li>
              <li>• Small square dark chocolate 70%+ (antioxidants, magnesium)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Day 2 */}
      <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-green-600 mb-4">📅 Day 2: Energy Boost Focus</h3>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">🌅 Breakfast: Power Smoothie</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 1 banana (potassium)</li>
              <li>• Handful spinach (iron, folate)</li>
              <li>• ½ cup mixed berries</li>
              <li>• 1 scoop protein powder (25g protein)</li>
              <li>• 1 tbsp chia seeds (omega-3s, fiber)</li>
              <li>• 1 cup unsweetened almond milk</li>
              <li>• 1 tbsp almond butter (healthy fats)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">🥗 Lunch: Mediterranean Chickpea Bowl</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 1 cup chickpeas (phytoestrogens, protein, fiber)</li>
              <li>• ½ cup quinoa</li>
              <li>• Cucumber, tomatoes, red onion, Kalamata olives</li>
              <li>• Crumbled feta cheese</li>
              <li>• Tahini-lemon dressing</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">🍽️ Dinner: Herb-Roasted Chicken & Veggies</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 4 oz baked chicken breast (lean protein)</li>
              <li>• Roasted sweet potato (complex carbs, vitamin A)</li>
              <li>• Steamed broccoli and kale (calcium, antioxidants)</li>
              <li>• Side salad with avocado (healthy fats)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Day 3 */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-bold text-purple-600 mb-4">📅 Day 3: Anti-Inflammatory Focus</h3>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">🌅 Breakfast: Overnight Oats</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• ½ cup rolled oats (fiber, whole grain)</li>
              <li>• 1 tbsp chia seeds</li>
              <li>• ½ cup blueberries (antioxidants)</li>
              <li>• Sprinkle cinnamon (blood sugar control)</li>
              <li>• Chopped walnuts (omega-3s)</li>
              <li>• Almond milk</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">🥗 Lunch: Hearty Lentil Soup</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 1½ cups lentil soup (protein, fiber, iron)</li>
              <li>• Whole grain crackers with hummus</li>
              <li>• Side salad with avocado and pumpkin seeds</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">🍽️ Dinner: Grilled Fish & Rainbow Veggies</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 4 oz grilled tuna or mackerel (omega-3s)</li>
              <li>• Roasted vegetables: carrots, beets, Brussels sprouts, bell peppers</li>
              <li>• ½ cup wild rice</li>
              <li>• Drizzle with turmeric-ginger sauce</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Eating Strategies for Specific Symptoms */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Eating Strategies for Specific Symptoms</h2>

      <p className="mb-6">
        Tailor your diet to target your most bothersome symptoms:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-700 mb-3">🔥 For Hot Flashes:</h3>
          <div className="space-y-2 text-sm">
            <p><strong>✅ Eat:</strong> Cooling foods (cucumber, watermelon, mint), small frequent meals, increase soy intake</p>
            <p><strong>❌ Avoid:</strong> Caffeine, alcohol, spicy foods, hot beverages</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-700 mb-3">⚖️ For Weight Gain:</h3>
          <div className="space-y-2 text-sm">
            <p><strong>✅ Eat:</strong> High protein breakfast (30g), eat every 3-4 hours, focus on fiber, practice portion control</p>
            <p><strong>❌ Avoid:</strong> Skipping meals (slows metabolism further)</p>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3">😢 For Mood Swings:</h3>
          <div className="space-y-2 text-sm">
            <p><strong>✅ Eat:</strong> Complex carbs (stable blood sugar), omega-3s, B vitamins (whole grains, leafy greens), tryptophan foods (turkey, eggs)</p>
            <p><strong>❌ Avoid:</strong> Sugar crashes, caffeine overload</p>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-700 mb-3">😴 For Sleep Issues:</h3>
          <div className="space-y-2 text-sm">
            <p><strong>✅ Eat:</strong> Tart cherry juice (natural melatonin), magnesium-rich foods (almonds, spinach), light dinner 3 hours before bed</p>
            <p><strong>❌ Avoid:</strong> Heavy meals, caffeine, alcohol at night</p>
            <p className="mt-2"><em>For more sleep tips, read our <Link to="/blog/overcoming-menopausal-insomnia" className="text-green-700 font-semibold underline">complete sleep guide</Link>.</em></p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-yellow-700 mb-3">🧠 For Brain Fog:</h3>
          <div className="space-y-2 text-sm">
            <p><strong>✅ Eat:</strong> Omega-3 fatty fish, berries (antioxidants), green leafy vegetables, stay well-hydrated!</p>
            <p><strong>❌ Avoid:</strong> Processed foods, excess sugar</p>
          </div>
        </div>
      </div>

      {/* Supplements vs Food */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Supplements vs. Food: What You Need to Know</h2>

      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🥗 Food First Philosophy</h3>
        <ul className="space-y-2 text-gray-700 mb-4">
          <li><strong>✓ Whole foods provide synergistic nutrients</strong> that work better together</li>
          <li><strong>✓ Better absorption</strong> from food vs. isolated supplements</li>
          <li><strong>✓ Additional benefits:</strong> fiber, phytonutrients, satiety</li>
          <li><strong>✓ More satisfying</strong> and sustainable long-term</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">💊 When Supplements Help</h3>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Calcium:</strong> Hard to get 1,200mg daily from diet alone</li>
          <li><strong>Vitamin D:</strong> Especially if you have limited sun exposure</li>
          <li><strong>Omega-3s:</strong> If you don't eat fatty fish 2-3x per week</li>
          <li><strong>Specific symptom relief:</strong> Magnesium for sleep, Black Cohosh for hot flashes</li>
        </ul>

        <p className="text-center font-bold text-gray-900 mt-6 text-lg">
          Remember: Supplements <em>complement</em>, not replace, a healthy diet!
        </p>
      </div>

      {/* CTA Box 2 */}
      <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-8 text-center my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Take Our Quiz to Find Which Supplements Can Support Your Diet!</h3>
        <p className="text-gray-700 mb-6">
          Get personalized supplement recommendations based on your specific symptoms and dietary gaps.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors"
        >
          Get My Personalized Recommendations
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

      {/* Practical Tips */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Practical Tips for Success</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border-2 border-primary-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary-600 mb-4">🍱 Meal Prep Strategies</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>• Batch cook:</strong> Sunday meal prep saves time and ensures healthy options</li>
            <li><strong>• Pre-chop veggies:</strong> For the entire week—makes cooking faster</li>
            <li><strong>• Portion snacks:</strong> Pre-portion nuts, hummus to prevent overeating</li>
            <li><strong>• Keep it simple:</strong> 5-ingredient meals are your friend</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-secondary-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-secondary-600 mb-4">🛒 Grocery Shopping Tips</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>• Shop the perimeter:</strong> Fresh foods are on the edges</li>
            <li><strong>• Read labels:</strong> Avoid added sugars, trans fats, high sodium</li>
            <li><strong>• Buy in season:</strong> Cheaper, tastier, more nutritious</li>
            <li><strong>• Never shop hungry!</strong> You'll buy junk food</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-600 mb-4">🍽️ Dining Out Smart</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>• Check menu online first:</strong> Plan your order in advance</li>
            <li><strong>• Ask for modifications:</strong> Dressing on side, grilled not fried</li>
            <li><strong>• Choose wisely:</strong> Grilled fish/chicken, extra veggies</li>
            <li><strong>• Watch alcohol:</strong> Stick to 1 drink or skip</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-600 mb-4">🧘 Mindful Eating</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>• Eat slowly:</strong> Take 20+ minutes per meal</li>
            <li><strong>• Chew thoroughly:</strong> Aids digestion and satisfaction</li>
            <li><strong>• No screens:</strong> Be present with your food</li>
            <li><strong>• Listen to hunger cues:</strong> Stop at 80% full</li>
          </ul>
        </div>
      </div>

      {/* 4-Week Transition Plan */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Your 4-Week Menopause Diet Transition Plan</h2>

      <p className="mb-6">
        Don't try to change everything overnight. Use this gradual approach:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-green-50 border-l-4 border-green-500 p-6">
          <h3 className="text-xl font-bold text-green-800 mb-2">Week 1: ADD</h3>
          <ul className="space-y-1 text-gray-700">
            <li>✓ Add 2 servings of vegetables per day</li>
            <li>✓ Add 1 serving of phytoestrogen foods (soy, flax)</li>
            <li>✓ Add 2 tbsp ground flaxseeds to breakfast</li>
            <li>✓ Increase water intake to 8 glasses</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Week 2: SWAP</h3>
          <ul className="space-y-1 text-gray-700">
            <li>✓ White bread/pasta → Whole grain versions</li>
            <li>✓ Sugary snacks → Fresh fruit with nuts</li>
            <li>✓ Soda/juice → Herbal tea or sparkling water</li>
            <li>✓ Fried foods → Grilled or baked</li>
          </ul>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
          <h3 className="text-xl font-bold text-orange-800 mb-2">Week 3: ELIMINATE</h3>
          <ul className="space-y-1 text-gray-700">
            <li>✓ Reduce caffeine by 50% (one cup before noon only)</li>
            <li>✓ Cut back alcohol to 3x per week max</li>
            <li>✓ Minimize processed foods (read labels!)</li>
            <li>✓ Reduce added sugars significantly</li>
          </ul>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
          <h3 className="text-xl font-bold text-purple-800 mb-2">Week 4: OPTIMIZE</h3>
          <ul className="space-y-1 text-gray-700">
            <li>✓ Track symptoms and food intake (identify personal triggers)</li>
            <li>✓ Establish meal prep routine (Sunday prep)</li>
            <li>✓ Fine-tune portions based on hunger cues</li>
            <li>✓ Establish consistent eating schedule</li>
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Your Food, Your Power</h2>

      <p className="mb-4">
        <strong>Food is one of the most powerful tools you have</strong> for managing menopause symptoms. While it's not a magic cure-all, the right diet can reduce symptom severity by up to 50%—and that can mean the difference between suffering through menopause and thriving through it.
      </p>

      <p className="mb-4">
        The key is consistency and patience. <strong>Give dietary changes 2-4 weeks</strong> to see results. Your body needs time to adjust, balance hormones, and respond to the nutrient-dense foods you're providing.
      </p>

      <p className="mb-4">
        Remember: <strong>every woman's menopause journey is unique.</strong> What works perfectly for your friend might not work for you. Use this guide as a starting point, then experiment to find your personal formula. Track what you eat and how you feel—you'll start to notice patterns.
      </p>

      <p className="mb-4">
        <strong>Focus on progress, not perfection.</strong> You don't have to eat perfectly 100% of the time. An 80/20 approach (healthy 80% of the time, flexible 20%) is sustainable and effective. One "bad" meal doesn't ruin everything—just get back on track at the next meal.
      </p>

      <p className="mb-8">
        Combine your healthy eating with the <Link to="/blog/natural-supplements-menopause" className="text-primary-600 hover:text-primary-700 font-semibold">right supplements</Link> for comprehensive symptom management. Together, nutrition and targeted supplementation create a powerful foundation for your menopause wellness journey.
      </p>

      <p className="mb-8 text-lg font-semibold text-gray-900">
        You've got this! Every healthy choice you make is an investment in feeling your best. 🌟
      </p>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-8 md:p-12 text-white text-center my-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready for a Complete Menopause Wellness Plan?
        </h3>
        <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
          While diet is crucial, the right supplements can fill nutritional gaps and provide targeted symptom relief. Take our free 2-minute quiz to get personalized supplement recommendations!
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-bold rounded-full shadow-lg text-white hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
        >
          Get My Personalized Supplement Plan Now
          <ArrowRight className="ml-3 w-5 h-5" />
        </Link>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mt-12">
        <p className="text-center text-gray-700 font-semibold">
          Want more menopause wellness tips? Explore our <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-bold underline">complete blog library</Link> for evidence-based guides on supplements, sleep, mood, and more.
        </p>
      </div>
    </BlogPost>
  );
};

export default MenopauseDiet;

