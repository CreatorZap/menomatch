// Quiz questions for MenoMatch
export const questions = [
  {
    id: 'age',
    question: 'What is your age range?',
    description: 'This helps us understand where you are in your menopause journey.',
    options: [
      { value: '40-45', label: '40-45 years old' },
      { value: '46-50', label: '46-50 years old' },
      { value: '51-55', label: '51-55 years old' },
      { value: '56-60', label: '56-60 years old' },
      { value: '60+', label: '60+ years old' }
    ]
  },
  {
    id: 'hotFlashes',
    question: 'How often do you experience hot flashes or night sweats?',
    description: 'Hot flashes and night sweats are among the most common menopause symptoms.',
    options: [
      { value: 'never', label: 'Never', score: 0 },
      { value: 'rarely', label: 'Rarely (1-2 times/week)', score: 1 },
      { value: 'often', label: 'Often (3-5 times/week)', score: 3 },
      { value: 'daily', label: 'Daily', score: 4 },
      { value: 'multiple', label: 'Multiple times daily', score: 5 }
    ]
  },
  {
    id: 'sleep',
    question: 'How would you rate your sleep quality?',
    description: 'Poor sleep is a common complaint during menopause.',
    options: [
      { value: 'excellent', label: 'Excellent - I sleep soundly', score: 0 },
      { value: 'good', label: 'Good - Minor issues', score: 1 },
      { value: 'fair', label: 'Fair - Some difficulty', score: 3 },
      { value: 'poor', label: 'Poor - Frequent waking', score: 4 },
      { value: 'very-poor', label: 'Very Poor - Severe insomnia', score: 5 }
    ]
  },
  {
    id: 'mood',
    question: 'Do you experience mood swings, anxiety, or irritability?',
    description: 'Hormonal changes can significantly affect emotional wellbeing.',
    options: [
      { value: 'never', label: 'Never - Mood is stable', score: 0 },
      { value: 'rarely', label: 'Rarely - Occasional changes', score: 1 },
      { value: 'sometimes', label: 'Sometimes - Noticeable changes', score: 3 },
      { value: 'often', label: 'Often - Frequent mood shifts', score: 4 },
      { value: 'very-often', label: 'Very Often - Daily struggles', score: 5 }
    ]
  },
  {
    id: 'energy',
    question: 'How are your energy levels throughout the day?',
    description: 'Many women experience fatigue during menopause.',
    options: [
      { value: 'high', label: 'High energy - Feel great', score: 0 },
      { value: 'good', label: 'Good energy - Normal', score: 1 },
      { value: 'moderate', label: 'Moderate - Some fatigue', score: 2 },
      { value: 'low', label: 'Low energy - Often tired', score: 4 },
      { value: 'fatigued', label: 'Constantly fatigued', score: 5 }
    ]
  },
  {
    id: 'skin',
    question: 'Have you noticed changes in your skin, hair, or nails?',
    description: 'Declining estrogen affects collagen production and skin health.',
    options: [
      { value: 'no-changes', label: 'No changes', score: 0 },
      { value: 'slight', label: 'Slight changes', score: 2 },
      { value: 'moderate', label: 'Moderate changes', score: 3 },
      { value: 'significant', label: 'Significant changes', score: 4 },
      { value: 'severe', label: 'Severe changes', score: 5 }
    ]
  },
  {
    id: 'weight',
    question: 'Are you experiencing weight gain or difficulty losing weight?',
    description: 'Metabolic changes during menopause can affect weight management.',
    options: [
      { value: 'no', label: 'No issues with weight', score: 0 },
      { value: 'slight', label: 'Slight weight gain (5-10 lbs)', score: 2 },
      { value: 'moderate', label: 'Moderate weight gain (10-20 lbs)', score: 3 },
      { value: 'significant', label: 'Significant weight gain (20+ lbs)', score: 4 },
      { value: 'struggling', label: 'Struggling greatly with weight', score: 5 }
    ]
  },
  {
    id: 'joints',
    question: 'Do you experience joint pain or stiffness?',
    description: 'Joint discomfort is a lesser-known but common menopause symptom.',
    options: [
      { value: 'never', label: 'Never', score: 0 },
      { value: 'rarely', label: 'Rarely', score: 1 },
      { value: 'sometimes', label: 'Sometimes', score: 3 },
      { value: 'often', label: 'Often', score: 4 },
      { value: 'daily', label: 'Daily', score: 5 }
    ]
  },
  {
    id: 'memory',
    question: 'Have you noticed brain fog or memory issues?',
    description: 'Cognitive changes are common and can be frustrating.',
    options: [
      { value: 'never', label: 'Never - Mind is sharp', score: 0 },
      { value: 'rarely', label: 'Rarely - Minor lapses', score: 1 },
      { value: 'sometimes', label: 'Sometimes - Noticeable', score: 3 },
      { value: 'often', label: 'Often - Concerning', score: 4 },
      { value: 'very-often', label: 'Very Often - Daily impact', score: 5 }
    ]
  },
  {
    id: 'approach',
    question: 'What is your preferred approach to wellness?',
    description: 'Understanding your preferences helps us recommend the right solutions.',
    options: [
      { value: 'natural', label: 'Natural supplements only' },
      { value: 'combination', label: 'Combination approach' },
      { value: 'open', label: 'Open to all options' },
      { value: 'lifestyle', label: 'Lifestyle changes first' },
      { value: 'immediate', label: 'Need immediate relief' }
    ]
  }
];

export default questions;


