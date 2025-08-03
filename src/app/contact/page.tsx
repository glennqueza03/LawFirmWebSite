'use client';

import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ContactButton from '../../components/ContactButton';
import ConsultationForm from '../../components/ConsultationForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Get in touch for a consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-gold text-xl" />
                  <div>
                    <h3 className="font-bold text-navy">Phone</h3>
                    <p className="text-steel">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-gold text-xl" />
                  <div>
                    <h3 className="font-bold text-navy">Email</h3>
                    <p className="text-steel">glennquezada14@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-gold text-xl" />
                  <div>
                    <h3 className="font-bold text-navy">Address</h3>
                    <p className="text-steel">123 Legal Street, City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaClock className="text-gold text-xl" />
                  <div>
                    <h3 className="font-bold text-navy">Office Hours</h3>
                    <p className="text-steel">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-steel">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-steel">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div>
              <ConsultationForm language={language} />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">
              Visit Our Office
            </h2>
            <p className="text-steel">
              Located in the heart of the city for your convenience
            </p>
          </div>
          
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-steel">Map placeholder - Add your actual map integration here</p>
          </div>
        </div>
      </section>

      <Footer />
      <ContactButton />
    </div>
  );
} 