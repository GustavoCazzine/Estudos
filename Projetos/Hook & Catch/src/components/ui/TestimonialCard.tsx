
import React from 'react';
import { Star, User } from 'lucide-react';

export interface TestimonialProps {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  date: string;
  productName?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  location,
  rating,
  text,
  image,
  date,
  productName
}) => {
  return (
    <div className="glass p-6 rounded-xl h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-fishing-100 flex items-center justify-center">
              <User className="h-6 w-6 text-fishing-600" />
            </div>
          )}
          <div className="ml-3">
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
        <div className="text-xs text-gray-400">{date}</div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      {productName && (
        <p className="text-sm font-medium text-fishing-600 mb-2">
          About: {productName}
        </p>
      )}
      
      <p className="text-gray-700 flex-grow">{text}</p>
    </div>
  );
};

export default TestimonialCard;
