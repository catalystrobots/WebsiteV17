import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="w-48 h-auto mb-4">
              <img 
                src="/images/catalyst-logo-full.png" 
                alt="Catalyst Engineering" 
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              World-class animatronics and show action equipment for leading theme parks and experiential marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/proteus" className="text-gray-400 hover:text-white transition-colors">Proteus Platform</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@catalystrobots.com" className="hover:text-white transition-colors">
                  info@catalystrobots.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <p>2258 Holly Springs Pkwy</p>
                  <p>Suite 100</p>
                  <p>Canton, GA 30115</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social and Robot Lab */}
          <div>
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/catalystrobots" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.youtube.com/@CatalystRobotLab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Bot className="h-5 w-5 text-blue-400" />
                <span className="text-white font-medium group-hover:opacity-0 transition-opacity">
                  Catalyst Robot Lab
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Coming Soon
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Catalyst Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;