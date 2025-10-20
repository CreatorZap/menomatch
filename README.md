# 🧡 MenoMatch - Personalized Menopause Wellness Platform

![MenoMatch](https://img.shields.io/badge/Status-MVP-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3.2-blue)

**MenoMatch** is a personalized menopause wellness platform that helps women find the perfect natural supplements based on their unique symptoms through an intelligent quiz system.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18+ ([Download here](https://nodejs.org/))
- **npm** or **yarn**
- **Git**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/menomatch.git
cd menomatch

# 2. Install dependencies
npm install

# 3. Create .env file
cp env.example .env
# Edit .env with your actual API keys

# 4. Start development server
npm start
```

The app will open at `http://localhost:3000`

---

## 📁 Project Structure

```
menomatch/
├── public/
│   ├── index.html              # HTML template with SEO meta tags
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Landing.jsx         # Landing page component
│   │   ├── Quiz.jsx            # Interactive quiz component
│   │   ├── Results.jsx         # Results page with recommendations
│   │   └── EmailModal.jsx      # Email capture modal
│   ├── data/
│   │   ├── questions.js        # Quiz questions data
│   │   └── products.js         # Product database with affiliate links
│   ├── utils/
│   │   ├── recommendations.js  # Recommendation algorithm
│   │   └── emailService.js     # Email service integrations
│   ├── App.jsx                 # Main app component
│   ├── index.js                # React entry point
│   └── index.css               # Global styles with Tailwind
├── env.example                 # Environment variables template
├── .gitignore
├── package.json
├── tailwind.config.js          # Tailwind configuration
└── README.md                   # This file
```

---

## 🎨 Features

### ✅ Implemented (MVP)

- **Landing Page** - Professional, conversion-optimized design
- **Interactive Quiz** - 10 questions with progress tracking
- **Smart Recommendations** - Personalized product suggestions based on symptoms
- **Email Capture** - Beautiful modal for lead generation
- **Affiliate Integration** - 12 real affiliate links (ClickBank, Amazon, Digistore24)
- **Responsive Design** - Mobile-first, works on all devices
- **Analytics Ready** - Google Analytics 4 integration
- **AdSense Ready** - Google AdSense integration placeholders
- **Multiple Email Services** - Mailchimp, ConvertKit, Custom API support

### 🔜 Coming Soon

- User accounts with saved results
- Email automation sequences
- Blog section with SEO articles
- A/B testing capabilities
- Advanced analytics dashboard
- PDF report generation
- Multi-language support

---

## 🔧 Configuration

### 1. Environment Variables

Create a `.env` file from the template:

```bash
cp env.example .env
```

**Required Variables:**

```env
# Google Analytics 4
REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX

# Email Service (Choose one)
# Option 1: Mailchimp
REACT_APP_MAILCHIMP_API_KEY=your_api_key
REACT_APP_MAILCHIMP_LIST_ID=your_list_id
REACT_APP_MAILCHIMP_SERVER_PREFIX=us1

# Option 2: ConvertKit (Recommended)
REACT_APP_CONVERTKIT_API_KEY=your_api_key
REACT_APP_CONVERTKIT_FORM_ID=your_form_id

# Google AdSense (Optional)
REACT_APP_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```

### 2. Google Analytics Setup

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add it to your `.env` file
4. Uncomment the GA4 script in `public/index.html`
5. Replace `G-XXXXXXXXXX` with your actual ID

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Email Service Integration

#### Option A: ConvertKit (Recommended for beginners)

1. Get API key from [ConvertKit Settings](https://app.convertkit.com/account/edit)
2. Create a form and get Form ID
3. Add credentials to `.env`
4. Update `App.jsx`:

```javascript
import { submitToConvertKit } from './utils/emailService';

const handleEmailSubmit = async (email) => {
  try {
    await submitToConvertKit(email, answers);
    alert(`Thank you! Results sent to ${email}`);
    setShowEmailModal(false);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

#### Option B: Mailchimp

1. Get API key from Mailchimp account
2. Get List ID from your audience
3. Add credentials to `.env`
4. Use `submitToMailchimp` in `App.jsx`

#### Option C: Custom API

Implement your own backend:

```javascript
import { submitToCustomAPI } from './utils/emailService';

const handleEmailSubmit = async (email) => {
  return await submitToCustomAPI(email, answers);
};
```

### 4. Google AdSense Setup

1. Apply for Google AdSense at [adsense.google.com](https://adsense.google.com)
2. Wait for approval (24-48 hours)
3. Get your AdSense Client ID
4. Uncomment the AdSense script in `public/index.html`
5. Add ad units to your components

---

## 🎯 Recommendation Algorithm

The recommendation engine in `src/utils/recommendations.js` uses a scoring system:

1. **Calculates symptom severity** (0-5 scale) based on quiz answers
2. **Matches products** to user symptoms
3. **Ranks products** by relevance score
4. **Applies bonus scoring** for comprehensive products
5. **Returns top 4** most relevant recommendations

### Example Flow:

```
User Answer: "Daily hot flashes" → Hot Flash Score: 5
Product: Black Cohosh → Targets: [hotFlashes, sleep]
Relevance Score: 5 (hot flashes) + 0 (no sleep issue) = 5
```

Products with highest relevance scores are recommended first.

**Fallback System:** If fewer than 4 products match, top-rated products are added as fallbacks.

---

## 📊 Analytics Events

The app tracks these events automatically:

| Event | Description | Tracked Data |
|-------|-------------|--------------|
| `page_view` | Page/step changes | page_title, page_location |
| `quiz_started` | User starts quiz | quiz_version |
| `quiz_completed` | User finishes quiz | total_questions |
| `email_captured` | Email submitted | source |
| `affiliate_click` | Product link clicked | product_id, product_name, platform |

### Custom Event Tracking:

```javascript
// Add this anywhere in your components:
if (window.gtag) {
  window.gtag('event', 'custom_event_name', {
    category: 'engagement',
    label: 'button_click'
  });
}
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel

# 4. Add environment variables in Vercel dashboard
# Project Settings → Environment Variables

# 5. Add custom domain (optional)
vercel domains add getmenomatch.com
```

### Deploy to Netlify

```bash
# 1. Build the project
npm run build

# 2. Install Netlify CLI
npm install -g netlify-cli

# 3. Login
netlify login

# 4. Deploy
netlify deploy --prod --dir=build

# 5. Add environment variables in Netlify dashboard
# Site Settings → Build & Deploy → Environment
```

### Environment Variables in Production

**Important:** Add all environment variables from your `.env` file to your hosting platform dashboard.

---

## 🔐 Security & Privacy

- **No sensitive data stored** - Quiz answers stored in session only
- **HTTPS enforced** - SSL automatic with Vercel/Netlify
- **GDPR compliant** - Add cookie consent banner if targeting EU
- **Affiliate disclosure** - Included in footer
- **Email validation** - Regex validation before submission
- **Error handling** - Try/catch blocks on all async operations

### Privacy Policy (Required)

Create a privacy policy page that covers:
- Data collection (email addresses, quiz answers)
- Cookie usage
- Analytics tracking (Google Analytics)
- Affiliate relationships
- User rights (unsubscribe, data deletion)

Use a generator like [TermsFeed](https://www.termsfeed.com/privacy-policy-generator/)

---

## 📈 SEO Optimization

### Current SEO Features:

✅ Meta tags for all pages  
✅ Open Graph tags (Facebook)  
✅ Twitter Card tags  
✅ Semantic HTML  
✅ Mobile-responsive  
✅ Fast load times  
✅ Optimized images (lazy loading)

### Next Steps:

1. **Create sitemap.xml**
```bash
npm install --save-dev sitemap
```

2. **Submit to Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your property
   - Submit sitemap

3. **Add schema markup** (JSON-LD for Quiz, FAQ)

4. **Create robots.txt** in `/public`:
```
User-agent: *
Allow: /
Sitemap: https://getmenomatch.com/sitemap.xml
```

5. **Optimize Core Web Vitals**
   - Largest Contentful Paint (LCP) < 2.5s
   - First Input Delay (FID) < 100ms
   - Cumulative Layout Shift (CLS) < 0.1

---

## 🎨 Customization

### Update Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#3b82f6', // Your primary color
      },
      secondary: {
        500: '#f97316', // Your secondary color
      }
    }
  }
}
```

### Add More Products

Edit `src/data/products.js`:

```javascript
{
  id: 'new-product',
  name: 'Product Name',
  description: 'Full description',
  benefits: ['Benefit 1', 'Benefit 2'],
  link: 'https://your-affiliate-link.com',
  platform: 'Platform Name',
  targetSymptoms: ['symptom1', 'symptom2'],
  category: 'category',
  price: '$$',
  rating: 4.5
}
```

### Modify Quiz Questions

Edit `src/data/questions.js` to change or add questions with scores.

---

## 🐛 Troubleshooting

### Issue: Tailwind styles not working

**Solution:**
```bash
# Reinstall Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Make sure tailwind.config.js has correct content paths
content: ["./src/**/*.{js,jsx,ts,tsx}"]
```

### Issue: Analytics not tracking

**Solution:**
- Check browser console for errors
- Verify GA4 ID is correct in `.env` and `index.html`
- Disable ad blockers for testing
- Check if script is loaded in Network tab
- Wait 24-48 hours for data to appear in GA dashboard

### Issue: Email submission fails

**Solution:**
- Verify API keys in `.env` are correct
- Check console for error messages
- Test with Postman first
- Ensure CORS is configured on backend (if using custom API)

### Issue: Build fails

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Affiliate links not tracking

**Solution:**
- Test links in incognito mode
- Verify `handleAffiliateClick` function is called
- Check affiliate platform dashboard (can take 24-48h)
- Ensure tracking parameters are in URLs

---

## 📝 License

This project is proprietary and confidential.

---

## 🤝 Support

For issues or questions:
- Create an issue on GitHub
- Email: support@getmenomatch.com

---

## 🎉 Next Steps After Setup

### Development Checklist:
- [ ] Complete `.env` configuration
- [ ] Test quiz flow thoroughly
- [ ] Test all affiliate links
- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Test email capture and submission

### Pre-Launch Checklist:
- [ ] Setup Google Analytics 4
- [ ] Apply for Google AdSense (if desired)
- [ ] Configure email service (Mailchimp/ConvertKit)
- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Create Affiliate Disclosure page
- [ ] Add cookie consent banner (if targeting EU)
- [ ] Create custom favicon and logos
- [ ] Create social media share images (og-image.jpg)

### Launch Checklist:
- [ ] Deploy to production (Vercel/Netlify)
- [ ] Add custom domain
- [ ] Configure SSL certificate (automatic)
- [ ] Submit to Google Search Console
- [ ] Create and submit sitemap.xml
- [ ] Test all functionality in production
- [ ] Setup monitoring (Sentry, LogRocket, etc.)
- [ ] Create backup strategy

### Post-Launch:
- [ ] Monitor analytics daily
- [ ] A/B test headlines and CTAs
- [ ] Collect user feedback
- [ ] Monitor affiliate commissions
- [ ] Optimize conversion rate
- [ ] Create content marketing plan
- [ ] Build backlinks for SEO
- [ ] Engage with users via email sequences

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Google Analytics 4](https://support.google.com/analytics)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [ConvertKit API Docs](https://developers.convertkit.com/)
- [Mailchimp API Docs](https://mailchimp.com/developer/)
- [Lucide React Icons](https://lucide.dev/)

---

## 🏆 Performance

Current Lighthouse Scores (estimated):
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

**Built with ❤️ for women's wellness**

MenoMatch © 2025
