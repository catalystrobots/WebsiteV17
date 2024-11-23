import React from 'react';
import AboutHero from '../components/about/AboutHero';
import ValuesSection from '../components/about/ValuesSection';
import TeamSection from '../components/about/TeamSection';

const About = () => {
  return (
    <div className="pt-20">
      <AboutHero />
      <ValuesSection />
      <TeamSection />
    </div>
  );
};

export default About;