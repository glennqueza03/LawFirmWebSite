"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaPhone } from "react-icons/fa";

interface NavBarProps {
  language: string;
  setLanguage: (language: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const togglePracticeAreas = () => setIsPracticeAreasOpen(!isPracticeAreasOpen);
  const toggleLanguage = () => setLanguage(language === "en" ? "es" : "en");

  return (
    <nav className="bg-black/95 backdrop-blur-md border-b border-gold/20 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl md:text-3xl font-serif font-bold text-gold hover:opacity-90 transition-opacity"
          >
            <span className="text-gold">Law</span>
            <span className="text-white">Firm</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-gold transition-colors duration-300"
            >
              Home
            </a>
            <div className="relative">
              <button
                onClick={togglePracticeAreas}
                className="flex items-center text-gray-300 hover:text-gold transition-colors duration-300"
              >
                Practice Areas
                <FaChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    isPracticeAreasOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isPracticeAreasOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50">
                  <a
                    href="/practice-areas#criminal"
                    className="block px-4 py-3 text-gray-200 hover:bg-gray-800 hover:text-gold transition-colors"
                  >
                    Criminal Defense
                  </a>
                  <a
                    href="/practice-areas#immigration"
                    className="block px-4 py-3 text-gray-200 hover:bg-gray-800 hover:text-gold transition-colors"
                  >
                    Immigration Law
                  </a>
                  <a
                    href="/practice-areas#personal-injury"
                    className="block px-4 py-3 text-gray-200 hover:bg-gray-800 hover:text-gold transition-colors"
                  >
                    Personal Injury
                  </a>
                </div>
              )}
            </div>
            <a
              href="/#contact"
              className="text-gray-300 hover:text-gold transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="border border-gold text-gold px-4 py-2 rounded-md font-medium hover:bg-gold hover:text-black transition-colors"
            >
              {language === "en" ? "Español" : "English"}
            </button>
            <a
              href="#consultation"
              className="bg-gold text-black px-4 py-2 rounded-md font-bold hover:bg-gold/90 transition-colors flex items-center"
            >
              <FaPhone className="h-4 w-4 mr-2" /> Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-300 hover:text-gold transition-colors duration-300"
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gold/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                href="/"
                className="text-gray-300 hover:text-gold transition-colors duration-300"
              >
                Home
              </a>
              <button
                onClick={togglePracticeAreas}
                className="flex items-center justify-between text-gray-300 hover:text-gold transition-colors"
              >
                Practice Areas
                <FaChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    isPracticeAreasOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isPracticeAreasOpen && (
                <div className="ml-4 space-y-2">
                  <a
                    href="/practice-areas#criminal"
                    className="block text-gray-400 hover:text-gold"
                  >
                    Criminal Defense
                  </a>
                  <a
                    href="/practice-areas#immigration"
                    className="block text-gray-400 hover:text-gold"
                  >
                    Immigration Law
                  </a>
                  <a
                    href="/practice-areas#personal-injury"
                    className="block text-gray-400 hover:text-gold"
                  >
                    Personal Injury
                  </a>
                </div>
              )}
              <a
                href="/#contact"
                className="text-gray-300 hover:text-gold transition-colors duration-300"
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <button
                  onClick={toggleLanguage}
                  className="border border-gold text-gold px-4 py-2 rounded-md font-medium hover:bg-gold hover:text-black transition-colors"
                >
                  {language === "en" ? "Español" : "English"}
                </button>
                <a
                  href="#consultation"
                  className="bg-gold text-black px-4 py-2 rounded-md font-bold hover:bg-gold/90 transition-colors text-center flex items-center justify-center"
                >
                  <FaPhone className="h-4 w-4 mr-2" /> Consultation
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar; 