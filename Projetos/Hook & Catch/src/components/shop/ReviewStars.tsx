
import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface ReviewStarsProps {
  rating: number;
  size?: number;
}

const ReviewStars: React.FC<ReviewStarsProps> = ({ rating, size = 4 }) => {
  // Convert rating to array of stars (full, half, or empty)
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push('full');
  }
  
  // Add half star if needed
  if (hasHalfStar) {
    stars.push('half');
  }
  
  // Add empty stars to complete 5
  while (stars.length < 5) {
    stars.push('empty');
  }

  return (
    <div className="flex">
      {stars.map((type, index) => {
        if (type === 'full') {
          return (
            <Star 
              key={index} 
              className={`h-${size} w-${size} text-amber-400 fill-amber-400`} 
            />
          );
        } else if (type === 'half') {
          return (
            <div key={index} className="relative">
              <Star 
                className={`h-${size} w-${size} text-gray-300 fill-gray-300`} 
              />
              <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                <Star 
                  className={`h-${size} w-${size} text-amber-400 fill-amber-400`} 
                />
              </div>
            </div>
          );
        } else {
          return (
            <Star 
              key={index} 
              className={`h-${size} w-${size} text-gray-300 fill-gray-300`} 
            />
          );
        }
      })}
    </div>
  );
};

export default ReviewStars;
