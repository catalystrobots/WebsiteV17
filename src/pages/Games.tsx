import React from 'react';
import HoverBot from '../components/games/HoverBot';

const Games = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Hover Bot
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Guide your robot through the industrial facility. Dodge obstacles and collect power cores!
          </p>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
          <HoverBot />
        </div>
      </div>
    </div>
  );
};

export default Games;