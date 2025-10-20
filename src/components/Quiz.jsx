import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { questions } from '../data/questions';

const Quiz = ({ 
  currentQuestion, 
  answers, 
  onAnswer, 
  onPrevious 
}) => {
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
            <span>{Math.round(progress)}% Complete</span>
            <span>Question {currentQuestion + 1} of {questions.length}</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          {/* Question Number Badge */}
          <div className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Question {currentQuestion + 1}
          </div>

          {/* Question Text */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {question.question}
          </h2>

          {/* Question Description */}
          {question.description && (
            <p className="text-gray-600 mb-8">
              {question.description}
            </p>
          )}

          {/* Answer Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = answers[question.id] === option.value;
              
              return (
                <button
                  key={index}
                  onClick={() => onAnswer(question.id, option.value)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all font-medium ${
                    isSelected
                      ? 'border-primary-500 bg-primary-50 text-primary-900'
                      : 'border-gray-200 hover:border-primary-500 hover:bg-primary-50 text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option.label}</span>
                    {isSelected && (
                      <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          {currentQuestion > 0 ? (
            <button
              onClick={onPrevious}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous Question
            </button>
          ) : (
            <div />
          )}

          {/* Hint text */}
          <p className="text-sm text-gray-500">
            Select an option to continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;




