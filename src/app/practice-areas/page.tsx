'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ContactButton from '../../components/ContactButton';

const practiceAreas = [
  {
    id: 'criminal',
    title: 'Criminal Defense',
    description: 'Facing criminal charges in South Texas? We provide focused representation to protect your rights and freedom.',
    icon: '⚖️',
    image: '/images/criminal.jpg',
    longDescription: 'Our criminal defense team helps clients across Hidalgo, Starr, Cameron, and Willacy counties navigate high-stakes moments. We handle DWI, drug offenses, assault, theft, and other charges with a clear strategy built around your rights and your future.'
  },
  {
    id: 'immigration',
    title: 'Immigration Law',
    description: 'Clear guidance for families and individuals navigating the U.S. immigration system in the Rio Grande Valley.',
    icon: '🌍',
    image: '/images/immigration.jpg',
    longDescription: 'Immigration decisions affect entire families. We help with family petitions, visas, green cards, citizenship applications, and deportation defense, combining careful preparation with responsive communication in English and Spanish.'
  },
  {
    id: 'personal-injury',
    title: 'Personal Injury',
    description: 'When an injury changes your life, we help you pursue the compensation and answers you deserve.',
    icon: '🏥',
    image: '/images/carinjury.jpg',
    longDescription: 'After a crash, workplace injury, or serious accident, the paperwork and pressure can pile up quickly. We help document your losses, communicate with insurers, and pursue fair compensation. We work on a contingency fee basis, so you do not pay attorney fees unless we recover for you.'
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.practice-reveal').forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#172536]">
      <NavBar language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="relative mt-16 overflow-hidden bg-[#19324a] py-24 text-[#f4f1eb] md:py-32">
        <Image src="/images/aboutus.jpg" alt="RGV Legal office" fill priority className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-[#19324a]/80" />
        <div className="container relative z-10 mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="hero-reveal hero-reveal-delay-1 eyebrow text-[#e5a57f]">RGV Legal · McAllen, Texas</p>
            <h1 className="hero-reveal hero-reveal-delay-2 mt-5 text-4xl font-normal leading-tight md:text-7xl">
              Practice areas built around your next step.
            </h1>
            <p className="hero-reveal hero-reveal-delay-3 mt-6 max-w-2xl text-lg leading-8 text-[#d8e0e4] md:text-xl">
              Practical legal guidance for people and families across the Rio Grande Valley. Se habla español.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Sections */}
      {practiceAreas.map((area, index) => (
        <section key={area.id} id={area.id} className={`scroll-mt-20 border-b border-[#c9bcae] py-20 md:py-28 ${index % 2 === 0 ? 'bg-[#f4f1eb]' : 'bg-[#e8e1d7]'}`}>
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className={`practice-reveal order-2 translate-y-[40px] opacity-0 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <p className="eyebrow">0{index + 1} · RGV practice</p>
                <h2 className="mt-4 text-3xl font-normal text-[#19324a] md:text-5xl">
                  {area.title}
                </h2>
                <p className="mt-6 text-base leading-8 text-[#52616b] md:text-lg">
                  {area.longDescription}
                </p>
                <div className="mt-8 space-y-4 border-t border-[#c9bcae] pt-6">
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-[#b56b45]">+</span>
                    <span className="text-[#19324a]">Free initial consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-[#b56b45]">+</span>
                    <span className="text-[#19324a]">Straightforward communication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-[#b56b45]">+</span>
                    <span className="text-[#19324a]">Service across South Texas</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="/#consultation" className="inline-flex items-center bg-[#b56b45] px-6 py-3 font-bold text-white transition-colors hover:bg-[#985437]">
                    Start with a consultation <span className="ml-3">→</span>
                  </a>
                </div>
              </div>
              <div className={`practice-reveal order-1 translate-y-[40px] opacity-0 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <Image 
                  src={area.image} 
                  alt={area.title} 
                  width={600}
                  height={400}
                  className="content-image h-80 w-full object-cover shadow-2xl grayscale transition duration-700 hover:grayscale-0 md:h-[28rem]"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className="bg-[#19324a] py-20 text-[#f4f1eb] md:py-28">
        <div className="container mx-auto px-6 text-center md:px-10">
          <p className="eyebrow text-[#e5a57f]">The next step is simple</p>
          <h2 className="mt-4 text-3xl font-normal md:text-5xl">
            Not sure where your case fits?
          </h2>
          <p className="mx-auto mb-8 mt-5 max-w-2xl text-lg text-[#b8c5cc]">
            Tell us what is happening. We will help you understand the next step and whether our team is the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#consultation" className="bg-[#b56b45] px-8 py-4 font-bold text-white transition-colors hover:bg-[#985437]">
              Request a consultation
            </a>
            <a href="tel:+15551234567" className="border border-[#d8e0e4]/60 px-8 py-4 font-bold text-[#f4f1eb] transition-colors hover:border-white hover:bg-white/10">
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