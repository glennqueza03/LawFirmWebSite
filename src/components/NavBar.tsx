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
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#19324a]/95 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 md:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="font-serif text-2xl font-bold tracking-tight text-[#f4f1eb] transition-opacity hover:opacity-90 md:text-3xl"
          >
            <span className="text-[#e5a57f]">RGV</span>
            <span className="text-[#f4f1eb]"> Legal</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className="text-sm text-[#d8e0e4] transition-colors duration-300 hover:text-[#e5a57f]"
            >
              Home
            </a>
            <div className="relative">
              <button
                onClick={togglePracticeAreas}
                className="flex items-center text-sm text-[#d8e0e4] transition-colors duration-300 hover:text-[#e5a57f]"
              >
                Practice Areas
                <FaChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    isPracticeAreasOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isPracticeAreasOpen && (
                <div className="absolute left-0 top-full z-50 mt-2 w-56 border border-[#d8e0e4]/20 bg-[#19324a] shadow-2xl">
                  <a
                    href="/practice-areas#criminal"
                    className="block px-4 py-3 text-[#d8e0e4] transition-colors hover:bg-[#244762] hover:text-[#e5a57f]"
                  >
                    Criminal Defense
                  </a>
                  <a
                    href="/practice-areas#immigration"
                    className="block px-4 py-3 text-[#d8e0e4] transition-colors hover:bg-[#244762] hover:text-[#e5a57f]"
                  >
                    Immigration Law
                  </a>
                  <a
                    href="/practice-areas#personal-injury"
                    className="block px-4 py-3 text-[#d8e0e4] transition-colors hover:bg-[#244762] hover:text-[#e5a57f]"
                  >
                    Personal Injury
                  </a>
                </div>
              )}
            </div>
            <a
              href="/#contact"
              className="text-sm text-[#d8e0e4] transition-colors duration-300 hover:text-[#e5a57f]"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="border border-[#d8e0e4]/50 px-4 py-2 text-sm font-medium text-[#f4f1eb] transition-colors hover:border-[#e5a57f] hover:text-[#e5a57f]"
            >
              {language === "en" ? "Español" : "English"}
            </button>
            <a
              href="#consultation"
              className="flex items-center bg-[#b56b45] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#985437]"
            >
              <FaPhone className="h-4 w-4 mr-2" /> Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-[#d8e0e4] transition-colors duration-300 hover:text-[#e5a57f] lg:hidden"
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 border-t border-white/10 pb-4 lg:hidden">
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                href="/"
                className="text-[#d8e0e4] transition-colors duration-300 hover:text-[#e5a57f]"
              >
                Home
              </a>
              <button
                onClick={togglePracticeAreas}
                className="flex items-center justify-between text-[#d8e0e4] transition-colors hover:text-[#e5a57f]"
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
                    className="block text-[#b8c5cc] hover:text-[#e5a57f]"
                  >
                    Criminal Defense
                  </a>
                  <a
                    href="/practice-areas#immigration"
                    className="block text-[#b8c5cc] hover:text-[#e5a57f]"
                  >
                    Immigration Law
                  </a>
                  <a
                    href="/practice-areas#personal-injury"
                    className="block text-[#b8c5cc] hover:text-[#e5a57f]"
                  >
                    Personal Injury
                  </a>
                </div>
              )}
              <a
                href="/#contact"
                className="text-[#d8e0e4] transition-colors duration-300 hover:text-[#e5a57f]"
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <button
                  onClick={toggleLanguage}
                  className="border border-[#d8e0e4]/50 px-4 py-2 font-medium text-[#f4f1eb] transition-colors hover:border-[#e5a57f] hover:text-[#e5a57f]"
                >
                  {language === "en" ? "Español" : "English"}
                </button>
                <a
                  href="#consultation"
                  className="flex items-center justify-center bg-[#b56b45] px-4 py-2 text-center font-bold text-white transition-colors hover:bg-[#985437]"
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