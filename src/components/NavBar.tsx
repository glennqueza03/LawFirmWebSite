'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

interface NavBarProps {
  language: string;
  setLanguage: (language: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePracticeAreas = () => {
    setIsPracticeAreasOpen(!isPracticeAreasOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="bg-black shadow-lg fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="text-xl md:text-2xl font-serif font-bold text-white hover:text-gold transition-colors duration-300">
            <span className="text-gold">Law</span>Firm
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <a href="/" className="text-white hover:text-gold transition-colors duration-300 font-medium">
              Home
            </a>
            
            {/* Practice Areas Dropdown */}
            <div className="relative">
              <button
                onClick={togglePracticeAreas}
                className="text-white hover:text-gold transition-colors duration-300 font-medium flex items-center space-x-1"
              >
                <span>Practice Areas</span>
                <FaChevronDown className={`transition-transform duration-300 ${isPracticeAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPracticeAreasOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
                  <a href="/practice-areas#criminal" className="block px-4 py-3 text-white hover:bg-gray-700 hover:text-gold transition-colors duration-300">
                    Criminal Defense
                  </a>
                  <a href="/practice-areas#immigration" className="block px-4 py-3 text-white hover:bg-gray-700 hover:text-gold transition-colors duration-300">
                    Immigration Law
                  </a>
                  <a href="/practice-areas#personal-injury" className="block px-4 py-3 text-white hover:bg-gray-700 hover:text-gold transition-colors duration-300">
                    Personal Injury
                  </a>
                </div>
              )}
            </div>
            
            <a href="/contact" className="text-white hover:text-gold transition-colors duration-300 font-medium">
              Contact
            </a>
            <a href="#consultation" className="bg-gold text-black px-4 md:px-6 py-2 rounded-lg font-bold hover:bg-gold/90 transition-all duration-300 text-sm md:text-base">
              Consultation
            </a>
            <button
              onClick={toggleLanguage}
              className="border border-gold text-gold px-3 py-2 rounded-lg font-medium hover:bg-gold hover:text-black transition-all duration-300 text-sm"
            >
              {language === 'en' ? 'Español' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gold transition-colors duration-300 p-2"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-black border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="/" className="text-white hover:text-gold transition-colors duration-300 font-medium px-4 py-2">
                Home
              </a>
              
              <div className="px-4">
                <button
                  onClick={togglePracticeAreas}
                  className="text-white hover:text-gold transition-colors duration-300 font-medium flex items-center justify-between w-full py-2"
                >
                  <span>Practice Areas</span>
                  <FaChevronDown className={`transition-transform duration-300 ${isPracticeAreasOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isPracticeAreasOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="/practice-areas#criminal" className="block text-gray-300 hover:text-gold transition-colors duration-300 py-2">
                      Criminal Defense
                    </a>
                    <a href="/practice-areas#immigration" className="block text-gray-300 hover:text-gold transition-colors duration-300 py-2">
                      Immigration Law
                    </a>
                    <a href="/practice-areas#personal-injury" className="block text-gray-300 hover:text-gold transition-colors duration-300 py-2">
                      Personal Injury
                    </a>
                  </div>
                )}
              </div>
              
              <a href="/contact" className="text-white hover:text-gold transition-colors duration-300 font-medium px-4 py-2">
                Contact
              </a>
              <a href="#consultation" className="bg-gold text-black px-4 py-3 rounded-lg font-bold text-center hover:bg-gold/90 transition-all duration-300 mx-4">
                Consultation
              </a>
              <button
                onClick={toggleLanguage}
                className="border border-gold text-gold px-4 py-3 rounded-lg font-medium hover:bg-gold hover:text-black transition-all duration-300 mx-4 text-center"
              >
                {language === 'en' ? 'Español' : 'English'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar; 