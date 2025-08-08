import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gold/20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-3xl font-serif font-bold">
              <span className="text-gold">Law</span><span className="text-white">Firm</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Dedicated to fighting for justice and protecting the rights of our clients. Your trusted legal partner with decades of experience.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300">
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300">
                <FaTwitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300">
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300">
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Practice Areas</h3>
            <ul className="space-y-3">
              <li><a href="/practice-areas#criminal" className="text-gray-400 hover:text-gold transition-colors duration-300">Criminal Defense</a></li>
              <li><a href="/practice-areas#personal-injury" className="text-gray-400 hover:text-gold transition-colors duration-300">Personal Injury</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">Real Estate Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">Business Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">Family Law</a></li>
              <li><a href="/practice-areas#immigration" className="text-gray-400 hover:text-gold transition-colors duration-300">Immigration Law</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/#about" className="text-gray-400 hover:text-gold transition-colors duration-300">About Us</a></li>
              <li><a href="/#consultation" className="text-gray-400 hover:text-gold transition-colors duration-300">Request Consultation</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-gold transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">Client Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaPhone className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">(555) 123-4567</p>
                  <p className="text-sm text-gray-400">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">glennquezada14@gmail.com</p>
                  <p className="text-sm text-gray-400">Quick Response</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">123 Legal Street, City, State 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2024 LawFirm. All rights reserved.</div>
            <div className="flex items-center space-x-3">
              <span className="text-xl text-gray-300">Created by</span>
              {/* Keep logo picture */}
              <img src="/images/croppedlogo.jpg" alt="Logo" className="h-16 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 