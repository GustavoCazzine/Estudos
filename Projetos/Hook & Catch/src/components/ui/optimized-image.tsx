
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
  testId?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  objectFit = 'cover',
  quality = 75,
  onLoad,
  onError,
  testId,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Process image URL function
  const getOptimizedSrc = (url: string) => {
    // If it's an Unsplash image, add quality and format parameters
    if (url.includes('unsplash.com')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}q=${quality}&auto=format&w=${typeof width === 'number' ? width : 800}`;
    }
    return url;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
    if (onError) onError();
  };

  // Image attributes
  const imgAttributes: React.ImgHTMLAttributes<HTMLImageElement> = {
    src: getOptimizedSrc(src),
    alt,
    className: `transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`,
    width,
    height,
    loading: priority ? 'eager' as const : 'lazy' as const,
    decoding: priority ? 'sync' as const : 'async' as const,
    style: { objectFit },
    onLoad: handleLoad,
    onError: handleError,
  };

  // Add the data-testid attribute if testId is provided
  if (testId) {
    imgAttributes['data-testid'] = testId;
  }

  return (
    <div className="relative overflow-hidden" style={{ width, height }}>
      {!isLoaded && !error && (
        <Skeleton className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }} />
      )}
      {error ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
          <span className="text-sm">Imagem não disponível</span>
        </div>
      ) : (
        <img {...imgAttributes} />
      )}
    </div>
  );
};

export default OptimizedImage;
