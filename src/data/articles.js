// Blog articles data for MenoMatch

export const articles = [
  {
    id: 1,
    slug: "navigating-menopause-guide",
    title: "Navigating Menopause: Your Essential Guide to Symptoms and Solutions",
    excerpt: "A comprehensive guide to understanding menopause symptoms and finding effective natural solutions.",
    keywords: "menopause symptoms, perimenopause, menopause guide, hot flashes, night sweats",
    category: "Guides",
    readTime: "8 min read",
    author: "MenoMatch Team",
    date: "2025-01-15",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 2,
    slug: "natural-supplements-menopause",
    title: "The Power of Nature: Top 5 Natural Supplements for Menopause Relief",
    excerpt: "Discover the most effective natural supplements backed by science to relieve menopause symptoms.",
    keywords: "natural menopause relief, black cohosh, maca for menopause, menopause supplements",
    category: "Supplements",
    readTime: "7 min read",
    author: "MenoMatch Team",
    date: "2025-01-12",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 3,
    slug: "mood-swings-anxiety-menopause",
    title: "Beyond Hot Flashes: Addressing Mood Swings and Anxiety During Menopause",
    excerpt: "Learn how to manage emotional and psychological aspects of menopause with proven strategies.",
    keywords: "menopause mood swings, anxiety menopause, ashwagandha menopause, magnesium for mood",
    category: "Mental Health",
    readTime: "6 min read",
    author: "MenoMatch Team",
    date: "2025-01-10",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 4,
    slug: "overcoming-menopausal-insomnia",
    title: "Sleep Like a Baby: Overcoming Menopausal Insomnia Naturally",
    excerpt: "Practical tips and natural remedies to improve sleep quality during menopause.",
    keywords: "menopause insomnia, natural sleep aids, sleep hygiene menopause, valerian root",
    category: "Sleep",
    readTime: "7 min read",
    author: "MenoMatch Team",
    date: "2025-01-08",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 5,
    slug: "menopause-diet-hormone-balance",
    title: "Your Menopause Diet: Eating for Energy and Hormone Balance",
    excerpt: "Nutritional guidance for women in menopause, including foods to favor and avoid.",
    keywords: "menopause diet, hormone balance diet, nutrition for menopause, weight gain menopause",
    category: "Nutrition",
    readTime: "9 min read",
    author: "MenoMatch Team",
    date: "2025-01-05",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 6,
    slug: "collagen-benefits-menopause",
    title: "Why Collagen is Your New Best Friend During Menopause (and Beyond)",
    excerpt: "Explore the benefits of collagen for skin, hair, nails, and joint health during menopause.",
    keywords: "collagen for menopause, skin health menopause, hair loss menopause, joint pain menopause",
    category: "Beauty & Wellness",
    readTime: "6 min read",
    author: "MenoMatch Team",
    date: "2025-01-03",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 7,
    slug: "understanding-perimenopause",
    title: "Understanding Perimenopause: The Early Signs and How to Prepare",
    excerpt: "Learn about the often-confusing perimenopause phase and proactive steps to take.",
    keywords: "perimenopause symptoms, early menopause signs, preparing for menopause",
    category: "Education",
    readTime: "8 min read",
    author: "MenoMatch Team",
    date: "2025-01-01",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 8,
    slug: "menomatch-how-it-works",
    title: "MenoMatch: Your Personalized Path to Menopause Wellness",
    excerpt: "Discover how MenoMatch quiz provides tailored supplement recommendations for your unique needs.",
    keywords: "MenoMatch, personalized menopause solutions, menopause quiz, wellness recommendations",
    category: "About MenoMatch",
    readTime: "5 min read",
    author: "MenoMatch Team",
    date: "2024-12-28",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop",
    featured: false
  }
];

// Helper function to get article by slug
export const getArticleBySlug = (slug) => {
  return articles.find(article => article.slug === slug);
};

// Helper function to get featured articles
export const getFeaturedArticles = () => {
  return articles.filter(article => article.featured);
};

// Helper function to get articles by category
export const getArticlesByCategory = (category) => {
  return articles.filter(article => article.category === category);
};

// Get all unique categories
export const getCategories = () => {
  return [...new Set(articles.map(article => article.category))];
};

