
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  title, 
  company, 
  avatar 
}) => {
  return (
    <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Quote className="w-8 h-8 text-accent mb-4" />
      <blockquote className="text-gray-700 mb-6 italic">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        {avatar && (
          <img 
            src={avatar} 
            alt={name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <cite className="not-italic">
          <div className="font-semibold text-navy">{name}</div>
          <div className="text-sm text-gray-600">{title}</div>
          <div className="text-sm text-accent font-medium">{company}</div>
        </cite>
      </div>
    </div>
  );
};

export default TestimonialCard;
