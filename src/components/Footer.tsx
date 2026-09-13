import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#35516a] bg-[#19324a] text-[#f4f1eb]">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="font-serif text-3xl font-bold">
              <span className="text-[#e5a57f]">RGV</span><span className="text-[#f4f1eb]"> Legal</span>
            </div>
            <p className="leading-relaxed text-[#b8c5cc]">
              Dedicated to fighting for justice and protecting the rights of our clients. Your trusted legal partner with decades of experience.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center bg-[#244762] text-[#e5a57f] transition-all duration-300 hover:bg-[#b56b45] hover:text-white">
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center bg-[#244762] text-[#e5a57f] transition-all duration-300 hover:bg-[#b56b45] hover:text-white">
                <FaTwitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center bg-[#244762] text-[#e5a57f] transition-all duration-300 hover:bg-[#b56b45] hover:text-white">
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center bg-[#244762] text-[#e5a57f] transition-all duration-300 hover:bg-[#b56b45] hover:text-white">
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#f4f1eb]">Practice Areas</h3>
            <ul className="space-y-3">
              <li><a href="/practice-areas#criminal" className="text-[#b8c5cc] transition-colors duration-300 hover:text-[#e5a57f]">Criminal Defense</a></li>
              <li><a href="/practice-areas#personal-injury" className="text-[#b8c5cc] transition-colors duration-300 hover:text-[#e5a57f]">Personal Injury</a></li>
              <li><a href="#" className="text-[#b8c5cc] transition-colors duration-300 hover:text-[#e5a57f]">Real Estate Law</a></li>
              <li><a href="#" className="text-[#b8c5cc] transition-colors duration-300 hover:text-[#e5a57f]">Business Law</a></li>
              <li><a href="#" className="text-[#b8c5cc] transition-colors duration-300 hover:text-[#e5a57f]">Family Law</a></li>
              <li><a href="/practice-areas#immigration" className="text-[#b8c5cc] transition-colors duration-300 hover:text-[#e5a57f]">Immigration Law</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#f4f1eb]">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/#about" className="text-[#b8c5cc] transition-colors duration-300 hover:text-[#e5a57f]">About Us</a></li>
              <li><a href="/#consultation" className="text-[#b8c5cc] transition-colors duration-300 hover:text-[#e5a57f]">Request Consultation</a></li>
              <li><a href="/#contact" className="text-[#b8c5cc] transition-colors duration-300 hover:text-[#e5a57f]">Contact</a></li>
              <li><a href="#" className="text-[#b8c5cc] transition-colors duration-300 hover:text-[#e5a57f]">Client Reviews</a></li>
              <li><a href="#" className="text-[#b8c5cc] transition-colors duration-300 hover:text-[#e5a57f]">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#f4f1eb]">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaPhone className="mt-1 h-5 w-5 flex-shrink-0 text-[#e5a57f]" />
                <div>
                  <p className="font-semibold text-[#f4f1eb]">(555) 123-4567</p>
                  <p className="text-sm text-[#b8c5cc]">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="mt-1 h-5 w-5 flex-shrink-0 text-[#e5a57f]" />
                <div>
                  <p className="text-[#f4f1eb]">glennquezada14@gmail.com</p>
                  <p className="text-sm text-[#b8c5cc]">Quick Response</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 h-5 w-5 flex-shrink-0 text-[#e5a57f]" />
                <div>
                  <p className="text-[#f4f1eb]">McAllen, Texas</p>
                  <p className="text-sm text-[#b8c5cc]">Serving the Rio Grande Valley</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#35516a] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-[#b8c5cc]">© 2024 LawFirm. All rights reserved.</div>
            <div className="flex items-center space-x-3">
              <span className="text-xl text-[#b8c5cc]">Created by</span>
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