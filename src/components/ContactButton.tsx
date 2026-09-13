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
            className="absolute bottom-full right-0 mb-0 w-64 border border-[#c9bcae] bg-[#f4f1eb] p-4 shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="text-center">
              <div className="mb-2 text-lg font-bold text-[#19324a]">Contact Us</div>
              <div className="mb-4 text-[#52616b]">(555) 123-4567</div>
              <div className="space-y-2">
                <a 
                  href="#consultation" 
                  className="block w-full bg-[#b56b45] px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-[#985437]"
                  onClick={() => setIsHovered(false)}
                >
                  Request Consultation
                </a>
                <a 
                  href="tel:+15551234567" 
                  className="block w-full border border-[#19324a] px-4 py-2 text-sm font-bold text-[#19324a] transition-all duration-300 hover:bg-[#19324a] hover:text-white"
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
          className="rounded-full bg-[#b56b45] p-4 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#985437]"
          onClick={() => setIsHovered(!isHovered)}
        >
          <FaPhone size={24} />
        </button>
      </div>
    </div>
  );
};

export default ContactButton; 