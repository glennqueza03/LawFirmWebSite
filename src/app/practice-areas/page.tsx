'use client';

import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ContactButton from '../../components/ContactButton';
import PracticeCard from '../../components/PracticeCard';

const practiceAreas = [
  {
    id: 'criminal',
    title: 'Criminal Defense',
    description: 'Facing criminal charges? Our criminal defense attorneys provide aggressive representation to protect your rights and freedom.',
    icon: '⚖️',
    image: '/images/criminal.jpg',
    longDescription: 'Our experienced criminal defense attorneys are dedicated to protecting your constitutional rights and ensuring you receive a fair trial. We handle all types of criminal cases including DUI, drug offenses, assault, theft, and more. With our aggressive defense strategies and deep understanding of criminal law, we work tirelessly to achieve the best possible outcome for your case.'
  },
  {
    id: 'immigration',
    title: 'Immigration Law',
    description: 'Navigating immigration law can be complex. We help families and individuals with visas, green cards, citizenship, and deportation defense.',
    icon: '🌍',
    image: '/images/immigration.jpg',
    longDescription: 'Immigration law is complex and constantly changing. Our immigration attorneys provide comprehensive legal services for individuals and families seeking to navigate the U.S. immigration system. We handle visa applications, green card petitions, citizenship applications, deportation defense, and more. We understand the emotional and financial stakes involved in immigration cases and provide compassionate, effective representation.'
  },
  {
    id: 'personal-injury',
    title: 'Personal Injury',
    description: 'We help victims of accidents and injuries get the compensation they deserve. Our experienced attorneys handle car accidents, slip and falls, medical malpractice, and more.',
    icon: '🏥',
    image: '/images/carinjury.jpg',
    longDescription: 'If you\'ve been injured due to someone else\'s negligence, you deserve compensation for your medical bills, lost wages, and pain and suffering. Our personal injury attorneys have successfully recovered millions of dollars for our clients. We handle car accidents, slip and falls, medical malpractice, workplace injuries, and other personal injury cases. We work on a contingency fee basis, meaning you don\'t pay unless we win.'
  }
];

export default function PracticeAreas() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Handle anchor scrolling
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <NavBar language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 text-gold">
              Practice Areas
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-300">
              Comprehensive legal services for all your needs
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Sections */}
      {practiceAreas.map((area, index) => (
        <section key={area.id} id={area.id} className={`py-20 ${index % 2 === 0 ? 'bg-gray-900' : 'bg-black'}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <h2 className="text-4xl font-serif font-bold text-gold mb-6">
                  {area.title}
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  {area.longDescription}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-gold text-xl">✓</span>
                    <span className="text-gray-300">Free consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gold text-xl">✓</span>
                    <span className="text-gray-300">Experienced attorneys</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gold text-xl">✓</span>
                    <span className="text-gray-300">Aggressive representation</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="#consultation" className="bg-gold text-black py-3 px-8 rounded-lg font-bold text-lg hover:bg-gold/90 transition-all duration-300">
                    Get Free Consultation
                  </a>
                </div>
              </div>
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-gold">
            Need Legal Help?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today for a consultation about your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gold text-black py-4 px-8 rounded-lg font-bold text-lg hover:bg-gold/90 transition-all duration-300">
              Contact Us
            </a>
            <a href="tel:+15551234567" className="border-2 border-gold text-gold py-4 px-8 rounded-lg font-bold text-lg hover:bg-gold hover:text-black transition-all duration-300">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ContactButton />
    </div>
  );
} 