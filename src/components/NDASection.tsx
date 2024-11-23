import React from 'react';
import { Lock } from 'lucide-react';

const NDASection = () => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-4">
        <Lock className="h-8 w-8 text-blue-400" />
        <h2 className="text-2xl font-bold text-white">Confidential Excellence</h2>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed">
        Many of our creations are under NDA, built for the world's leading theme parks and entertainment brands. 
        While we can't share specifics, our animated figures and show equipment bring stories to life for iconic attractions enjoyed by millions worldwide.
      </p>
    </div>
  );
};

export default NDASection;