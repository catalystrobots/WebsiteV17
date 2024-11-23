import React from 'react';
import { Wrench, Users, Lightbulb, Award } from 'lucide-react';

const values = [
  {
    icon: Wrench,
    title: 'Engineering Excellence',
    description: 'Pushing the boundaries of what is possible in animatronics and show action equipment.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Working closely with clients to bring their creative visions to life.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constantly developing new technologies and solutions for unique challenges.'
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Delivering reliable, high-performance systems that exceed expectations.'
  }
];

const ValuesSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="bg-gray-800 p-6 rounded-xl">
                <Icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;