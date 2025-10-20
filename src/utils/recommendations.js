// Recommendation algorithm for MenoMatch

// Calculate symptom scores based on quiz answers
export const calculateSymptomScores = (answers) => {
  const scores = {
    hotFlashes: 0,
    sleep: 0,
    mood: 0,
    energy: 0,
    cognition: 0,
    joint: 0,
    weight: 0
  };

  // Hot flashes scoring
  if (answers.hotFlashes === 'Daily' || answers.hotFlashes === 'Multiple times daily') {
    scores.hotFlashes = 3;
  } else if (answers.hotFlashes === 'Often (3-5 times/week)') {
    scores.hotFlashes = 2;
  } else if (answers.hotFlashes === 'Rarely (1-2 times/week)') {
    scores.hotFlashes = 1;
  }

  // Sleep scoring
  if (answers.sleep === 'Very Poor' || answers.sleep === 'Poor') {
    scores.sleep = 3;
  } else if (answers.sleep === 'Fair') {
    scores.sleep = 2;
  } else if (answers.sleep === 'Good') {
    scores.sleep = 1;
  }

  // Mood scoring
  if (answers.mood === 'Very Often' || answers.mood === 'Often') {
    scores.mood = 3;
  } else if (answers.mood === 'Sometimes') {
    scores.mood = 2;
  } else if (answers.mood === 'Rarely') {
    scores.mood = 1;
  }

  // Energy scoring
  if (answers.energy === 'Constantly fatigued' || answers.energy === 'Low energy') {
    scores.energy = 3;
  } else if (answers.energy === 'Moderate') {
    scores.energy = 2;
  } else if (answers.energy === 'Good energy') {
    scores.energy = 1;
  }

  // Cognition/Brain fog scoring
  if (answers.brainFog === 'Very Often' || answers.brainFog === 'Often') {
    scores.cognition = 3;
  } else if (answers.brainFog === 'Sometimes') {
    scores.cognition = 2;
  } else if (answers.brainFog === 'Rarely') {
    scores.cognition = 1;
  }

  // Joint pain scoring
  if (answers.jointPain === 'Severe' || answers.jointPain === 'Moderate') {
    scores.joint = 3;
  } else if (answers.jointPain === 'Mild') {
    scores.joint = 2;
  } else if (answers.jointPain === 'Occasional') {
    scores.joint = 1;
  }

  // Weight changes scoring
  if (answers.weight === 'Significant gain (10+ lbs)' || answers.weight === 'Moderate gain (5-10 lbs)') {
    scores.weight = 3;
  } else if (answers.weight === 'Slight gain (1-5 lbs)') {
    scores.weight = 2;
  }

  return scores;
};

// Calculate product relevance based on symptom scores
export const calculateProductRelevance = (product, scores) => {
  let relevanceScore = 0;

  product.targetSymptoms.forEach(symptom => {
    if (scores[symptom]) {
      relevanceScore += scores[symptom];
    }
  });

  return relevanceScore;
};

// Get top 3 product recommendations
export const getRecommendations = (answers, products) => {
  const scores = calculateSymptomScores(answers);
  
  // Calculate relevance for each product
  const rankedProducts = products.map(product => ({
    ...product,
    relevanceScore: calculateProductRelevance(product, scores)
  }));

  // Sort by relevance (highest first) and return top 3
  const topProducts = rankedProducts
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 3);

  // If no products have a relevance score, return the first 3 as fallback
  if (topProducts.every(p => p.relevanceScore === 0)) {
    return products.slice(0, 3);
  }

  return topProducts;
};

// Get main symptoms to display (top 3)
export const getMainSymptoms = (answers) => {
  const scores = calculateSymptomScores(answers);
  
  const symptomNames = {
    hotFlashes: 'Hot Flashes',
    sleep: 'Sleep Issues',
    mood: 'Mood Swings',
    energy: 'Low Energy',
    cognition: 'Brain Fog',
    joint: 'Joint Pain',
    weight: 'Weight Management'
  };

  // Sort symptoms by score
  const sortedSymptoms = Object.entries(scores)
    .filter(([_, score]) => score > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([symptom, _]) => symptomNames[symptom]);

  return sortedSymptoms.length > 0 ? sortedSymptoms : ['General Wellness', 'Hormonal Balance', 'Overall Health'];
};


