import React, { useState } from 'react';
import { ChevronRight, Play, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/background-loop.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Engineering the Future of
            <span className="text-gradient">
              {" "}Entertainment
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            World-class animatronics and show action equipment for leading theme parks
            and experiential marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => navigate('/contact')}
              className="inline-flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all hover-scale glow-on-hover"
            >
              Contact Us
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full backdrop-blur-sm transition-all hover-scale glow-on-hover"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Showreel
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="animate-bounce">
            <div className="w-1 h-16 rounded-full bg-gradient-to-b from-blue-500 to-transparent" />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 animate-fade-in">
          <div className="relative w-full max-w-6xl aspect-video animate-scale-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="w-full h-full">
              <video
                className="w-full h-full rounded-lg"
                controls
                autoPlay
              >
                <source src="/videos/showreel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;