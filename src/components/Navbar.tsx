import React, { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // SEO titles and descriptions for each route
  const seoData = {
    '/': {
      title: 'Catalyst Engineering - World-Class Animatronics & Show Action Equipment',
      description: 'Leading provider of world-class animatronics and show action equipment for theme parks and experiential marketing.'
    },
    '/about': {
      title: 'About Catalyst Engineering - Our Story & Expertise',
      description: 'Learn about Catalyst Engineering\'s journey, expertise in animatronics, and our commitment to engineering excellence.'
    },
    '/portfolio': {
      title: 'Portfolio - Catalyst Engineering Projects & Achievements',
      description: 'Explore our portfolio of innovative animatronics and show action equipment projects for leading theme parks.'
    },
    '/services': {
      title: 'Services - Custom Animatronics & Engineering Solutions',
      description: 'Discover our comprehensive range of animatronics services, from design to installation and maintenance.'
    },
    '/proteus': {
      title: 'Proteus Platform - Advanced Animatronic Solutions',
      description: 'Learn about our Proteus platform, a configurable humanoid animatronic system for entertainment venues.'
    },
    '/contact': {
      title: 'Contact Catalyst Engineering - Get Started Today',
      description: 'Contact us to discuss your animatronics project or learn more about our engineering services.'
    },
    '/games': {
      title: 'Robot Games - Play Hover Bot',
      description: 'Play our robot-themed games including Hover Bot - guide your robot through challenging obstacles!'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>{seoData[location.pathname]?.title}</title>
        <meta name="description" content={seoData[location.pathname]?.description} />
      </Helmet>
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <img 
                  src="/images/catalyst-logo-shape.png" 
                  alt="Catalyst Engineering Logo" 
                  className="h-8 w-8"
                />
                <span className="text-white text-xl font-semibold">Catalyst Engineering</span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
                <NavLink to="/about" active={location.pathname === "/about"}>About</NavLink>
                <NavLink to="/portfolio" active={location.pathname === "/portfolio"}>Portfolio</NavLink>
                <NavLink to="/services" active={location.pathname === "/services"}>Services</NavLink>
                <NavLink to="/proteus" active={location.pathname === "/proteus"}>Proteus</NavLink>
                <NavLink to="/games" active={location.pathname === "/games"}>Games</NavLink>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 glow-on-hover"
                >
                  Contact Us
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
              <MobileNavLink to="/" active={location.pathname === "/"}>Home</MobileNavLink>
              <MobileNavLink to="/about" active={location.pathname === "/about"}>About</MobileNavLink>
              <MobileNavLink to="/portfolio" active={location.pathname === "/portfolio"}>Portfolio</MobileNavLink>
              <MobileNavLink to="/services" active={location.pathname === "/services"}>Services</MobileNavLink>
              <MobileNavLink to="/proteus" active={location.pathname === "/proteus"}>Proteus</MobileNavLink>
              <MobileNavLink to="/games" active={location.pathname === "/games"}>Games</MobileNavLink>
              <button 
                onClick={() => {
                  navigate('/contact');
                  setIsOpen(false);
                }}
                className="w-full text-left block px-3 py-2 text-base font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
      active ? 'text-blue-400' : 'text-gray-300'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
      active
        ? 'text-blue-400 bg-gray-800'
        : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;