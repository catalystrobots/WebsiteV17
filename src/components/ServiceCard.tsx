import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, LucideIcon } from 'lucide-react';
import AnimatedImage from './AnimatedImage';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  buttonText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, image, buttonText = 'Contact Us' }) => {
  const navigate = useNavigate();
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        bg-gray-800 rounded-xl overflow-hidden transition-all duration-500 card-hover
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
    >
      <div className="h-48 overflow-hidden">
        <AnimatedImage
          src={image}
          alt={title}
          className="w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="h-6 w-6 text-blue-400 animate-pulse-slow" />
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>
        </div>
        <p className="text-gray-400 mb-6">
          {description}
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="text-blue-400 hover:text-blue-300 flex items-center gap-2 btn-interaction"
        >
          {buttonText}
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;