import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedImage from './AnimatedImage';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useParallax } from '../hooks/useParallax';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isVisible] = useIntersectionObserver();
  const parallaxRef = useParallax({ speed: 0.3 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        relative group bg-gray-800 rounded-xl overflow-hidden cursor-pointer
        transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden bg-gray-700">
        <div ref={parallaxRef as React.RefObject<HTMLDivElement>}>
          <AnimatedImage
            src={image}
            alt={title}
            className={`w-full h-full transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-2 transition-transform duration-300">
          {title}
        </h3>
        <p className={`
          text-gray-300 transition-all duration-500
          ${isHovered ? 'opacity-100 max-h-32 translate-y-0' : 'opacity-0 max-h-0 translate-y-4'}
        `}>
          {description}
        </p>
        {link && (
          <button className={`
            mt-4 text-blue-400 hover:text-blue-300 flex items-center gap-2
            transition-all duration-300 btn-interaction
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            Read more
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;