import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Check } from 'lucide-react';

const Proteus = () => {
  const navigate = useNavigate();

  const features = [
    'Male and female designs available',
    '25 advanced actuation functions',
    'Precise individual actuator control',
    'Smooth, high-quality motion',
    'Aerospace-grade bearings',
    'Strain wave gearheads',
    'Innovative ankle pivot design',
    '24VDC low voltage actuators',
    'Integrated onboard audio',
    'Compact control cabinet',
    'Adaptable to show requirements',
    'Scalable design',
    'Adjustable Heights',
    'Configurable foot location',
    'Animation services',
    'Custom Figure Finish'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full">
            <img
              src="/images/proteus/proteus2.png"
              alt="Proteus Platform"
              className="w-full h-full object-cover object-center opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]"
              style={{ minHeight: '100%', minWidth: '100%' }}
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            Proteus: The Future of Animatronics
          </h1>
          <p className="text-xl text-gray-300 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards_0.2s]">
            Customize your animatronics to perfection with Proteus, a configurable humanoid platform.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
              The Proteus platform offers a range of features to bring your characters to life. 
              Let your creativity soar as you craft unforgettable moments 
              that leave an indelible mark on your audience.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            Features and Customizable Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 opacity-0"
                style={{ animation: `fadeInUp 0.8s ease-out forwards ${index * 0.1}s` }}
              >
                <Check className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.6s' }}>
            <p className="text-xl text-gray-300 mb-6">
              Don't see what you need? Ask us here!
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all hover:scale-105 glow-on-hover"
            >
              Schedule Your Configuration Appointment
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proteus;