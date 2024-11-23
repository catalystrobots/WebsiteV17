import React from 'react';

const stats = [
  { label: 'Global Installations', value: '100+' },
  { label: 'Satisfied Clients', value: '50+' },
  { label: 'Countries Served', value: '15+' },
  { label: 'Team Members', value: '20+' }
];

const StatsSection = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;