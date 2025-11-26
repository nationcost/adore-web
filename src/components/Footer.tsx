import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-12 mt-12 border-t border-dark-600 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm text-gray-400">
          <NavLink to="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </NavLink>
          <span className="w-px h-4 bg-dark-600"></span>
          <NavLink to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </NavLink>
        </div>
        <div className="text-sm text-gray-500">
          All rights reserved ©2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;