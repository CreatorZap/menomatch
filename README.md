# 🌸 MenoMatch

> Personalized menopause wellness recommendations for every woman's unique journey.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/menomatch)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-61dafb.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8.svg)](https://tailwindcss.com/)

---

## 🎯 About MenoMatch

MenoMatch is a comprehensive web application designed to help women navigate menopause with personalized supplement recommendations, educational content, and evidence-based wellness strategies.

### ✨ Key Features

- 🎯 **Personalized Quiz** - 10-question assessment for tailored recommendations
- 💊 **Product Recommendations** - Curated supplements based on symptoms
- 📚 **Educational Blog** - 8 comprehensive articles on menopause wellness
- 📱 **Responsive Design** - Beautiful experience on all devices
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and Schema.org markup
- 📊 **Analytics Ready** - Google Analytics 4 integration

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/menomatch.git

# Navigate to project directory
cd menomatch

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
MenoMatch/
├── public/                 # Static files
│   ├── index.html         # HTML template with GA4
│   ├── logo192.png        # App logo
│   ├── logo512.png        # PWA icon
│   ├── manifest.json      # PWA manifest
│   └── og-image.jpg       # Social media preview
│
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.jsx     # Navigation with mobile menu
│   │   ├── Landing.jsx    # Hero section
│   │   ├── Quiz.jsx       # Interactive quiz
│   │   ├── Results.jsx    # Personalized results
│   │   ├── EmailModal.jsx # Email capture
│   │   └── BlogPost.jsx   # Blog post template
│   │
│   ├── pages/            # Page components
│   │   ├── About.jsx     # About page
│   │   ├── BlogIndex.jsx # Blog listing
│   │   ├── ArticlePage.jsx # Dynamic article router
│   │   └── articles/     # 8 full blog articles
│   │       ├── NavigatingMenopause.jsx
│   │       ├── NaturalSupplements.jsx
│   │       ├── MoodSwingsAnxiety.jsx
│   │       ├── OvercomingInsomnia.jsx
│   │       ├── MenopauseDiet.jsx
│   │       ├── CollagenBenefits.jsx
│   │       ├── UnderstandingPerimenopause.jsx
│   │       └── MenoMatchHowItWorks.jsx
│   │
│   ├── data/             # Application data
│   │   ├── questions.js  # Quiz questions
│   │   ├── products.js   # Product database
│   │   └── articles.js   # Blog article metadata
│   │
│   ├── App.jsx           # Main app with routing
│   ├── index.js          # React entry point
│   └── index.css         # Tailwind CSS imports
│
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── vercel.json           # Vercel deployment config
└── DEPLOYMENT.md         # Deployment guide
```

---

## 🛠️ Built With

### Core Technologies

- **[React](https://reactjs.org/)** - UI library
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[React Helmet Async](https://github.com/staylor/react-helmet-async)** - SEO meta tags

### Development Tools

- **Create React App** - Zero-config setup
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixes

---

## 📝 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (irreversible)
npm run eject
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

**Or use the Vercel Dashboard:**
1. Import your Git repository
2. Vercel auto-detects Create React App
3. Click **Deploy**!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 🌐 Environment Variables

Create a `.env.local` file for local development:

```env
# Google Analytics
REACT_APP_GA_MEASUREMENT_ID=G-0MWJ1MZHS0

# Site URL (for SEO)
REACT_APP_SITE_URL=https://menomatch.com

# ConvertKit (optional)
REACT_APP_CONVERTKIT_API_KEY=your_api_key
REACT_APP_CONVERTKIT_FORM_ID=your_form_id
```

**Note:** All environment variables must start with `REACT_APP_` to be accessible in React.

---

## 📚 Content

### Quiz

- **10 Questions** covering:
  - Age range
  - Hot flashes frequency
  - Sleep quality
  - Mood changes
  - Energy levels
  - Physical changes
  - Weight management
  - Joint pain
  - Brain fog
  - Wellness preferences

### Blog Articles

1. **Navigating Menopause** - Essential guide to symptoms and solutions
2. **Natural Supplements** - Top 5 evidence-based supplements
3. **Mood & Anxiety** - Managing emotional aspects
4. **Sleep Solutions** - Overcoming menopausal insomnia
5. **Menopause Diet** - Nutrition for hormone balance
6. **Collagen Benefits** - Skin, hair, and joint health
7. **Understanding Perimenopause** - Early signs and preparation
8. **How MenoMatch Works** - Personalized approach explanation

### Product Categories

- Comprehensive menopause support
- Energy and vitality boosters
- Natural herbal remedies
- Hormonal balance support
- Sleep aids

---

## 🎨 Design System

### Colors

- **Primary:** Blue (`#3B82F6`)
- **Secondary:** Coral/Orange (`#F97316`)
- **Accents:** Purple, Pink, Green

### Typography

- **Font Family:** Inter (from Google Fonts)
- **Headings:** Bold, large sizes
- **Body:** Regular, optimized for readability

### Components

- Responsive navigation with mobile hamburger menu
- Animated progress bars
- Card-based layouts
- Gradient CTAs
- Modal overlays

---

## 📊 SEO & Analytics

### Built-in SEO Features

- ✅ Dynamic meta tags per page
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Schema.org structured data
- ✅ Semantic HTML
- ✅ Mobile-optimized
- ✅ Fast load times

### Analytics

- Google Analytics 4 tracking
- Event tracking for:
  - Quiz starts/completions
  - Email captures
  - Affiliate clicks
  - Page views

---

## 🔒 Security

- X-Frame-Options header (prevent clickjacking)
- X-Content-Type-Options header (prevent MIME sniffing)
- X-XSS-Protection header
- HTTPS enforced on Vercel
- No sensitive data in client-side code

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

Developed with 💜 by the MenoMatch Team

---

## 🙏 Acknowledgments

- Design inspiration from modern wellness platforms
- Content based on evidence-based menopause research
- Icons from [Lucide Icons](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

---

## 📞 Support

For support, email support@menomatch.com or open an issue on GitHub.

---

## 🗺️ Roadmap

- [ ] User accounts and saved results
- [ ] Email integration with ConvertKit
- [ ] Advanced filtering on blog
- [ ] Symptom tracker
- [ ] Community features
- [ ] Mobile app (React Native)

---

**⭐ Star this repo if you find it helpful!**

---

*Last updated: October 2025*
