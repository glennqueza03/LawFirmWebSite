'use client';

import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const ContactButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover Popup */}
        {isHovered && (
          <div 
            className="absolute bottom-full right-0 mb-0 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-4 w-64"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="text-center">
              <div className="text-gold font-bold text-lg mb-2">Contact Us</div>
              <div className="text-white mb-4">(555) 123-4567</div>
              <div className="space-y-2">
                <a 
                  href="#consultation" 
                  className="block w-full bg-gold text-black py-2 px-4 rounded-lg font-bold text-sm hover:bg-gold/90 transition-all duration-300"
                  onClick={() => setIsHovered(false)}
                >
                  Request Consultation
                </a>
                <a 
                  href="tel:+15551234567" 
                  className="block w-full border border-gold text-gold py-2 px-4 rounded-lg font-bold text-sm hover:bg-gold hover:text-black transition-all duration-300"
                  onClick={() => setIsHovered(false)}
                >
                  Call Now
                </a>
              </div>
            </div>
            {/* Arrow pointing down - positioned to connect with button */}
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
        
        {/* Phone Button */}
        <button 
          className="bg-gold text-black p-4 rounded-full shadow-lg hover:bg-gold/90 transition-all duration-300 hover:scale-110"
          onClick={() => setIsHovered(!isHovered)}
        >
          <FaPhone size={24} />
        </button>
      </div>
    </div>
  );
};

export default ContactButton; 