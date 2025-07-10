
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image?: string;
  imageAlt?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  title, 
  company, 
  image, 
  imageAlt 
}) => {
  return (
    <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <blockquote className="text-gray-700 italic mb-6 text-lg leading-relaxed">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        {image && (
          <img 
            src={image} 
            alt={imageAlt || `${name}, ${title} at ${company}`}
            className="w-12 h-12 rounded-full mr-4 object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        <cite className="not-italic">
          <div className="font-bold text-navy">{name}</div>
          <div className="text-sm text-gray-600">{title}</div>
          <div className="text-sm text-accent font-medium">{company}</div>
        </cite>
      </div>
    </div>
  );
};

export default TestimonialCard;
