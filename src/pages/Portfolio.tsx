import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import NDASection from '../components/NDASection';

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Roz from The Wild Robot Movie',
      description: 'Commissioned by DreamWorks, Roz and BrightBill toured Comic Con, the Wild Robot Red Carpet Premiere, and more. Built with electric actuators, LEDs and audio, Roz captivated audiences with lifelike movements and interactive shows.',
      image: '/images/portfolio/roz.png',
      link: '/projects/roz'
    },
    {
      title: 'Animatronic Knight (Proteus Platform)',
      description: 'Built on the Catalyst Engineering Proteus platform, this lifelike animatronic debuted at IAAPA 2023, showcasing advanced robotics for themed entertainment.',
      image: '/images/portfolio/knight.jpg',
      link: '/projects/knight'
    },
    {
      title: 'Caterpillar Automaton',
      description: 'Using a single servomotor and cam mechanism, this automaton mimics caterpillar motion with engineering simplicity and precision.',
      image: '/images/portfolio/caterpillar.png',
      link: '/projects/caterpillar'
    },
    {
      title: 'Snoopy Soap Box Racers SAE',
      description: 'Catalyst designed the sensor-driven equipment that spins Snoopy as the coaster races by, enhancing the iconic ride experience.',
      image: '/images/portfolio/snoopy.png',
      link: '/projects/snoopy'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Creating World-Class Animatronics and Show Action Equipment
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              style={{ animationDelay: `${0.1 * (index + 2)}s` }}
            />
          ))}
        </div>

        <div className="mb-16">
          <NDASection />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in learning more?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Contact us to see how Catalyst can bring your vision to life.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all hover:scale-105"
          >
            Get in Touch
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;