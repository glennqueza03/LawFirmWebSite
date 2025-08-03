'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactButton from '../components/ContactButton';
import ConsultationForm from '../components/ConsultationForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

// Translation data
const translations = {
  en: {
    hero: {
      title: "THE PEOPLE'S LAWYER",
      subtitle: "Passionately Fighting For You",
      tagline: "You want experience, you got it. Qué más quieres!",
      stats: "MILLIONS RECOVERED FOR CLIENTS",
      consultationBtn: "Get Free Consultation",
      callBtn: "Call Now"
    },
    about: {
      title: "About Our Law Firm",
      description1: "With decades of combined experience, our dedicated team of attorneys provides comprehensive legal services with unwavering commitment to our clients' success.",
      description2: "We understand that legal matters can be complex and stressful. That's why we take a personalized approach to every case, ensuring you receive the attention and representation you deserve.",
      casesWon: "Cases Won",
      yearsExp: "Years Experience",
      satisfaction: "Client Satisfaction"
    },
    practice: {
      title: "Our Practice Areas",
      subtitle: "Comprehensive legal services across multiple practice areas to meet all your legal needs.",
      criminal: {
        title: "Criminal Defense",
        description: "Aggressive defense to protect your rights and freedom.",
        learnMore: "Learn More →"
      },
      immigration: {
        title: "Immigration Law",
        description: "Expert guidance on visas, green cards, citizenship, and deportation defense.",
        learnMore: "Learn More →"
      },
      personalInjury: {
        title: "Personal Injury",
        description: "We help victims of accidents and injuries get the compensation they deserve.",
        learnMore: "Learn More →"
      }
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Real stories from real clients who trusted us with their cases."
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with our experienced legal team for a consultation.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      hours: "Office Hours",
      address1: "123 Legal Street",
      address2: "City, State 12345",
      hours1: "Monday - Friday: 9:00 AM - 6:00 PM",
      hours2: "Saturday: 10:00 AM - 2:00 PM",
      hours3: "Sunday: Closed"
    },
    consultation: {
      title: "Request a Consultation",
      subtitle: "Get the legal help you need. Fill out the form below and we'll get back to you promptly."
    },
    cta: {
      title: "Ready to Get Started?",
      subtitle: "Contact us today for a consultation about your case.",
      contactBtn: "Contact Us",
      callBtn: "Call Now"
    }
  },
  es: {
    hero: {
      title: "EL ABOGADO DEL PUEBLO",
      subtitle: "Luchando Apasionadamente Por Ti",
      tagline: "Quieres experiencia, la tienes. ¡Qué más quieres!",
      stats: "MILLONES RECUPERADOS PARA CLIENTES",
      consultationBtn: "Obtener Consulta Gratuita",
      callBtn: "Llamar Ahora"
    },
    about: {
      title: "Sobre Nuestro Bufete de Abogados",
      description1: "Con décadas de experiencia combinada, nuestro dedicado equipo de abogados proporciona servicios legales integrales con un compromiso inquebrantable con el éxito de nuestros clientes.",
      description2: "Entendemos que los asuntos legales pueden ser complejos y estresantes. Por eso tomamos un enfoque personalizado para cada caso, asegurando que recibas la atención y representación que mereces.",
      casesWon: "Casos Ganados",
      yearsExp: "Años de Experiencia",
      satisfaction: "Satisfacción del Cliente"
    },
    practice: {
      title: "Nuestras Áreas de Práctica",
      subtitle: "Servicios legales integrales en múltiples áreas de práctica para satisfacer todas sus necesidades legales.",
      criminal: {
        title: "Defensa Criminal",
        description: "Defensa agresiva para proteger tus derechos y libertad.",
        learnMore: "Saber Más →"
      },
      immigration: {
        title: "Ley de Inmigración",
        description: "Orientación experta en visas, tarjetas verdes, ciudadanía y defensa de deportación.",
        learnMore: "Saber Más →"
      },
      personalInjury: {
        title: "Lesiones Personales",
        description: "Ayudamos a las víctimas de accidentes y lesiones a obtener la compensación que merecen.",
        learnMore: "Saber Más →"
      }
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Historias reales de clientes reales que confiaron en nosotros con sus casos."
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Ponte en contacto con nuestro experimentado equipo legal para una consulta.",
      phone: "Teléfono",
      email: "Correo Electrónico",
      address: "Dirección",
      hours: "Horario de Oficina",
      address1: "123 Calle Legal",
      address2: "Ciudad, Estado 12345",
      hours1: "Lunes - Viernes: 9:00 AM - 6:00 PM",
      hours2: "Sábado: 10:00 AM - 2:00 PM",
      hours3: "Domingo: Cerrado"
    },
    consultation: {
      title: "Solicitar una Consulta",
      subtitle: "Obtén la ayuda legal que necesitas. Completa el formulario a continuación y te contactaremos pronto."
    },
    cta: {
      title: "¿Listo para Comenzar?",
      subtitle: "Contáctanos hoy para una consulta sobre tu caso.",
      contactBtn: "Contáctanos",
      callBtn: "Llamar Ahora"
    }
  }
};

// Testimonials data
interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  case: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Rodriguez",
    rating: 5,
    text: "The team at LawFirm was incredible! They helped me through a difficult immigration case and got me my green card. Professional, caring, and always available when I needed them.",
    case: "Immigration Law"
  },
  {
    id: 2,
    name: "James Thompson",
    rating: 5,
    text: "After my car accident, I was overwhelmed with medical bills. LawFirm fought hard and got me the compensation I deserved. I can't thank them enough!",
    case: "Personal Injury"
  },
  {
    id: 3,
    name: "Carlos Mendez",
    rating: 5,
    text: "When I was facing criminal charges, I was scared and didn't know what to do. The attorneys at LawFirm were aggressive in my defense and got my case dismissed.",
    case: "Criminal Defense"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    rating: 5,
    text: "The consultation was free and they explained everything clearly. They helped me understand my rights and got me a great settlement. Highly recommend!",
    case: "Personal Injury"
  },
  {
    id: 5,
    name: "Roberto Silva",
    rating: 5,
    text: "My family's immigration case was complex, but LawFirm handled everything professionally. They kept us informed every step of the way and we got our visas approved.",
    case: "Immigration Law"
  },
  {
    id: 6,
    name: "Michael Davis",
    rating: 5,
    text: "I was facing serious charges and thought my life was over. LawFirm's criminal defense team was amazing. They proved my innocence and I'm forever grateful.",
    case: "Criminal Defense"
  }
];

export default function Home() {
  const [language, setLanguage] = useState('en');
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    }, { threshold: 0.1 });

    // Observe all sections
    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Create a continuous loop by duplicating testimonials
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="min-h-screen bg-black">
      <NavBar language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 md:py-32 mt-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="scroll-animate transform translate-x-[-100px] opacity-0 transition-all duration-1000">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold mb-6 md:mb-8 text-gold">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-4 text-white">
                {t.hero.subtitle}
              </p>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-white">
                {t.hero.tagline}
              </p>
              <div className="flex items-center space-x-2 text-white mb-6 md:mb-8">
                <span className="text-base md:text-lg">{t.hero.stats}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#consultation" className="bg-gold text-black py-3 md:py-4 px-6 md:px-8 rounded-lg font-bold text-base md:text-lg hover:bg-gold/90 transition-all duration-300 text-center">
                  {t.hero.consultationBtn}
                </a>
                <a href="tel:+15551234567" className="border-2 border-gold text-gold py-3 md:py-4 px-6 md:px-8 rounded-lg font-bold text-base md:text-lg hover:bg-gold hover:text-black transition-all duration-300 text-center">
                  {t.hero.callBtn}
                </a>
              </div>
            </div>
            <div className="scroll-animate transform translate-x-[100px] opacity-0 transition-all duration-1000">
              <div className="border-4 border-gold rounded-lg p-2">
                <Image 
                  src="/images/croppedlawyers.png" 
                  alt="Professional lawyers" 
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spanish Banner */}
      <section className="bg-gold py-3">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-black font-bold text-lg md:text-xl">
              ¡Se Habla Español!
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="scroll-animate transform translate-x-[-100px] opacity-0 transition-all duration-1000">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6 md:mb-8">
                  {t.about.title}
                </h2>
                <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">
                  {t.about.description1}
                </p>
                <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">
                  {t.about.description2}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gold mb-2">500+</div>
                    <div className="text-gray-300 text-sm md:text-base">{t.about.casesWon}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gold mb-2">25+</div>
                    <div className="text-gray-300 text-sm md:text-base">{t.about.yearsExp}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gold mb-2">100%</div>
                    <div className="text-gray-300 text-sm md:text-base">{t.about.satisfaction}</div>
                  </div>
                </div>
              </div>
              <div className="scroll-animate transform translate-x-[100px] opacity-0 transition-all duration-1000">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold/50 to-gold/20 rounded-lg transform rotate-3 scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-lg transform -rotate-1 scale-105"></div>
                  <img 
                    src="/images/aboutus.png" 
                    alt="About our law firm" 
                    className="relative w-full h-auto rounded-lg shadow-2xl border-4 border-gold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4 scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              {t.practice.title}
            </h2>
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              {t.practice.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000 bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src="/images/criminal.png" 
                  alt="Criminal Defense" 
                  className="w-full h-40 md:h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gold mb-3">{t.practice.criminal.title}</h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                {t.practice.criminal.description}
              </p>
              <a href="/practice-areas#criminal" className="text-gold font-semibold hover:underline text-sm md:text-base">
                {t.practice.criminal.learnMore}
              </a>
            </div>
            
            <div className="scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000 bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src="/images/immigration.png" 
                  alt="Immigration Law" 
                  className="w-full h-40 md:h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gold mb-3">{t.practice.immigration.title}</h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                {t.practice.immigration.description}
              </p>
              <a href="/practice-areas#immigration" className="text-gold font-semibold hover:underline text-sm md:text-base">
                {t.practice.immigration.learnMore}
              </a>
            </div>
            
            <div className="scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000 bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src="/images/carcrash.png" 
                  alt="Personal Injury" 
                  className="w-full h-40 md:h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gold mb-3">{t.practice.personalInjury.title}</h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                {t.practice.personalInjury.description}
              </p>
              <a href="/practice-areas#personal-injury" className="text-gold font-semibold hover:underline text-sm md:text-base">
                {t.practice.personalInjury.learnMore}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4 scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              {t.testimonials.title}
            </h2>
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              {t.testimonials.subtitle}
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Testimonials Carousel */}
            <div className="overflow-hidden mb-8">
              <div 
                className="flex transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonialIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3))}%)`
                }}
              >
                {loopedTestimonials.map((testimonial, index) => (
                  <div key={`${testimonial.id}-${index}`} className="w-full md:w-1/3 flex-shrink-0 px-4">
                    <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg h-full">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-gold text-lg" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 text-sm md:text-base italic">
                        "{testimonial.text}"
                      </p>
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gold font-bold text-sm md:text-base">{testimonial.name}</p>
                        <p className="text-gray-400 text-xs md:text-sm">{testimonial.case}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-gold text-black p-3 rounded-full shadow-lg hover:bg-gold/90 transition-all duration-300"
              >
                <FaChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="bg-gold text-black p-3 rounded-full shadow-lg hover:bg-gold/90 transition-all duration-300"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex ? 'bg-gold' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4 scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              {t.contact.title}
            </h2>
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              {t.contact.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-gold text-xl md:text-2xl flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gold text-base md:text-lg">{t.contact.phone}</h3>
                    <p className="text-gray-300 text-base md:text-lg">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-gold text-xl md:text-2xl flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gold text-base md:text-lg">{t.contact.email}</h3>
                    <p className="text-gray-300 text-base md:text-lg">glennquezada14@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-gold text-xl md:text-2xl flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gold text-base md:text-lg">{t.contact.address}</h3>
                    <p className="text-gray-300 text-base md:text-lg">{t.contact.address1}</p>
                    <p className="text-gray-300 text-base md:text-lg">{t.contact.address2}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaClock className="text-gold text-xl md:text-2xl flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gold text-base md:text-lg">{t.contact.hours}</h3>
                    <p className="text-gray-300 text-sm md:text-base">{t.contact.hours1}</p>
                    <p className="text-gray-300 text-sm md:text-base">{t.contact.hours2}</p>
                    <p className="text-gray-300 text-sm md:text-base">{t.contact.hours3}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              <div className="bg-gray-800 h-64 md:h-96 rounded-lg shadow-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="consultation" className="py-16 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4 scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
                {t.consultation.title}
              </h2>
              <p className="text-base md:text-lg text-white scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
                {t.consultation.subtitle}
              </p>
            </div>
            
            <div className="scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              <ConsultationForm language={language} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000 text-gold">
            {t.cta.title}
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300 scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
            <a href="/contact" className="bg-gold text-black py-3 md:py-4 px-6 md:px-8 rounded-lg font-bold text-base md:text-lg hover:bg-gold/90 transition-all duration-300">
              {t.cta.contactBtn}
            </a>
            <a href="tel:+15551234567" className="border-2 border-gold text-gold py-3 md:py-4 px-6 md:px-8 rounded-lg font-bold text-base md:text-lg hover:bg-gold hover:text-black transition-all duration-300">
              {t.cta.callBtn}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ContactButton />
    </div>
  );
} 