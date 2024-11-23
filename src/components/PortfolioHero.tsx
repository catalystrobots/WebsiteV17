import React from 'react';

const PortfolioHero = () => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/517090081.sd.mp4?s=60b9a4d2ce47c741af56dd1d70c2f5f8fc184d1c&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Our Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Creating World-Class Animatronics and Show Action Equipment
        </p>
      </div>
    </div>
  );
};

export default PortfolioHero;