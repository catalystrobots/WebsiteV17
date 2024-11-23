import React from 'react';

const TeamSection = () => {
  return (
    <div className="bg-gray-800/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8 animate-fade-in-up">Our Team</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Our team of engineers and designers brings decades of combined experience
          in robotics, mechanical engineering, and show control systems.
        </p>
        <div className="overflow-hidden">
          <img
            src="/images/about/team3.png"
            alt="Catalyst Engineering Team"
            className="rounded-xl shadow-lg mx-auto animate-fade-in"
            style={{ animationDelay: '0.4s' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;