import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (testimonialId) => {
    setImageErrors(prev => ({ ...prev, [testimonialId]: true }));
  };

  return (
    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Women Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of women who've found relief with our personalized recommendations
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary-200 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {/* Avatar with Photo or Fallback to Initials */}
                <div className="relative w-12 h-12 flex-shrink-0">
                  {!imageErrors[testimonial.id] && testimonial.image ? (
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover border-2 border-primary-200 shadow-sm"
                      onError={() => handleImageError(testimonial.id)}
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                      {testimonial.initials}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.age} • {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Symptoms Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {testimonial.symptoms.map((symptom, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">• Based on 10,000+ reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;




