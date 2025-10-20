import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import NavigatingMenopause from './articles/NavigatingMenopause';
import NaturalSupplements from './articles/NaturalSupplements';
import MoodSwingsAnxiety from './articles/MoodSwingsAnxiety';
import OvercomingInsomnia from './articles/OvercomingInsomnia';
import MenopauseDiet from './articles/MenopauseDiet';
import CollagenBenefits from './articles/CollagenBenefits';
import UnderstandingPerimenopause from './articles/UnderstandingPerimenopause';
import MenoMatchHowItWorks from './articles/MenoMatchHowItWorks';

const ArticlePage = () => {
  const { slug } = useParams();

  // Map slugs to components
  const articleComponents = {
    'navigating-menopause-guide': NavigatingMenopause,
    'natural-supplements-menopause': NaturalSupplements,
    'mood-swings-anxiety-menopause': MoodSwingsAnxiety,
    'overcoming-menopausal-insomnia': OvercomingInsomnia,
    'menopause-diet-hormone-balance': MenopauseDiet,
    'collagen-benefits-menopause': CollagenBenefits,
    'understanding-perimenopause': UnderstandingPerimenopause,
    'menomatch-how-it-works': MenoMatchHowItWorks,
  };

  const ArticleComponent = articleComponents[slug];

  // If article doesn't exist, redirect to blog index
  if (!ArticleComponent) {
    return <Navigate to="/blog" replace />;
  }

  return <ArticleComponent />;
};

export default ArticlePage;

