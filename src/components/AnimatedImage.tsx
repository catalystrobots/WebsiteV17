import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ImageOff } from 'lucide-react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`overflow-hidden ${className}`}
    >
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          className={`
            w-full h-full object-cover transition-all duration-700
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            ${isLoaded ? '' : 'blur-sm'}
          `}
          onError={() => setImageError(true)}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-800">
          <ImageOff className="h-12 w-12 text-gray-500" />
        </div>
      )}
    </div>
  );
};

export default AnimatedImage;