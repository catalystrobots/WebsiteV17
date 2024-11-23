import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/about/hero.jpg"
          alt="Engineering workshop"
          className="w-full h-full object-cover animate-fade-in"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">About Catalyst Engineering</h1>
        <p className="text-xl text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Pioneering the future of entertainment through innovative engineering and creative excellence.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;