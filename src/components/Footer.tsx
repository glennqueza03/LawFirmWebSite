import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gold" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gold" />
                <span>glennquezada14@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-gold" />
                <span>123 Legal Street, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>Immigration Law</li>
              <li>Family Law</li>
              <li>Criminal Defense</li>
              <li>Business Law</li>
              <li>Real Estate Law</li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <div className="space-y-2">
              <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
              <div>Saturday: 10:00 AM - 2:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>&copy; 2024 Law Office. All rights reserved.</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <span className="text-sm text-gray-300">Created by</span>
            <img 
              src="/images/croppedlogo.png" 
              alt="Logo" 
              className="h-24 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 