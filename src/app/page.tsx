'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactButton from '../components/ContactButton';
import ConsultationForm from '../components/ConsultationForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaChevronLeft, FaChevronRight, FaStar, FaComments, FaArrowDown } from 'react-icons/fa';

// Translation data
const translations = {
  en: {
    hero: {
      title: "LOCAL COUNSEL. SERIOUS ADVOCACY.",
      subtitle: "A steady voice for South Texas",
      tagline: "Serving McAllen, Edinburg, Mission, and the Rio Grande Valley.",
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
      address1: "McAllen office",
      address2: "Serving the Rio Grande Valley",
      hours1: "Monday - Friday: 9:00 AM - 6:00 PM",
      hours2: "Saturday: 10:00 AM - 2:00 PM",
      hours3: "Sunday: Closed"
    },
    consultation: {
      title: "Request a Consultation",
      subtitle: "Get the legal help you need. Fill out the form below and we'll get back to you promptly."
    },
    prep: {
      eyebrow: "Make your first meeting count",
      title: "Bring the facts. We will help with the rest.",
      subtitle: "A few simple details can help us understand what you are facing and point you toward the right next step.",
      items: [
        { number: "01", title: "Tell us what happened", text: "Write down the timeline, key dates, and what outcome you need." },
        { number: "02", title: "Gather your documents", text: "Bring notices, reports, contracts, photos, or court paperwork." },
        { number: "03", title: "Ask every question", text: "Your consultation is a place to get clear about options, costs, and timing." }
      ],
      note: "We serve clients across Hidalgo, Starr, Cameron, and Willacy counties."
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
      title: "ABOGADOS LOCALES. DEFENSA SERIA.",
      subtitle: "Una voz firme para el sur de Texas",
      tagline: "Sirviendo a McAllen, Edinburg, Mission y todo el Valle del Río Grande.",
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
      address1: "Oficina en McAllen",
      address2: "Sirviendo al Valle del Río Grande",
      hours1: "Lunes - Viernes: 9:00 AM - 6:00 PM",
      hours2: "Sábado: 10:00 AM - 2:00 PM",
      hours3: "Domingo: Cerrado"
    },
    consultation: {
      title: "Solicitar una Consulta",
      subtitle: "Obtén la ayuda legal que necesitas. Completa el formulario a continuación y te contactaremos pronto."
    },
    prep: {
      eyebrow: "Aprovecha tu primera reunión",
      title: "Trae los hechos. Nosotros te ayudamos con lo demás.",
      subtitle: "Unos detalles sencillos pueden ayudarnos a entender tu situación y orientarte hacia el siguiente paso.",
      items: [
        { number: "01", title: "Cuéntanos qué pasó", text: "Anota la cronología, fechas importantes y el resultado que necesitas." },
        { number: "02", title: "Reúne tus documentos", text: "Trae avisos, reportes, contratos, fotos o documentos de la corte." },
        { number: "03", title: "Haz todas tus preguntas", text: "Tu consulta es para entender tus opciones, costos y tiempos." }
      ],
      note: "Atendemos clientes en los condados de Hidalgo, Starr, Cameron y Willacy."
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
    <div className="min-h-screen bg-[#f4f1eb] text-[#172536]">
      <NavBar language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section id="home" className="relative flex min-h-[calc(100vh-4.5rem)] items-end overflow-hidden bg-[#19324a] pt-28 text-[#f4f1eb]">
        <div className="absolute inset-0 z-10 bg-[linear-gradient(110deg,rgba(25,50,74,0.82)_24%,rgba(25,50,74,0.52)_58%,rgba(25,50,74,0.2))]" />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/images/videos/vecteezy_lawyer-statue-on-desk_77281615.mp4" type="video/mp4" />
          <source src="/images/videos/vecteezy_lawyer-statue-on-desk_77281615.MOV" type="video/quicktime" />
        </video>

        <div className="container relative z-20 mx-auto w-full px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 items-end gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: Headline, subheadline, CTA */}
            <div className="max-w-3xl space-y-8 text-center lg:text-left">
              <div className="space-y-5">
                <p className="eyebrow hero-reveal hero-reveal-delay-1 text-[#e5a57f]">South Texas counsel · RGV rooted</p>
                <h1 className="hero-reveal hero-reveal-delay-2 text-5xl font-normal leading-[1.05] text-[#f4f1eb] md:text-7xl lg:text-8xl">
                  {t.hero.title}
                </h1>
                <p className="hero-reveal hero-reveal-delay-3 max-w-xl text-lg leading-8 text-[#d8e0e4] md:text-xl">
                  {t.hero.tagline} {t.hero.subtitle}.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="hero-reveal hero-reveal-delay-4 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a href="#consultation" className="interactive-lift flex items-center justify-center bg-[#b56b45] px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#985437]">
                  {t.hero.consultationBtn} <span className="ml-3">→</span>
                </a>
                <a href="tel:+15551234567" className="interactive-lift flex items-center justify-center border border-[#d8e0e4]/60 px-7 py-4 text-base font-bold text-[#f4f1eb] transition-colors hover:border-white hover:bg-white/10">
                  {t.hero.callBtn} <span className="ml-3">↗</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="hero-reveal hero-reveal-delay-5 flex items-center justify-center space-x-6 border-t border-white/20 pt-7 lg:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#e5a57f]">25+</div>
                  <div className="text-xs uppercase tracking-wider text-[#b8c5cc]">Years advocating</div>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#e5a57f]">500+</div>
                  <div className="text-xs uppercase tracking-wider text-[#b8c5cc]">Cases handled</div>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#e5a57f]">24/7</div>
                  <div className="text-xs uppercase tracking-wider text-[#b8c5cc]">Emergency line</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 animate-bounce">
          <FaArrowDown className="h-5 w-5 text-[#e5a57f]" />
        </div>
      </section>

      {/* Spanish Banner */}
      <section className="border-b border-[#c9bcae] bg-[#e8e1d7] py-4">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex items-center justify-center gap-3 text-center">
            <span className="h-px w-10 bg-[#b56b45]" />
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#19324a] md:text-base">
              ¡Se Habla Español!
            </p>
            <span className="h-px w-10 bg-[#b56b45]" />
          </div>
        </div>
      </section>

      {/* Consultation Preparation Section */}
      <section className="relative overflow-hidden border-b border-[#c9bcae] bg-[#f4f1eb] py-20 md:py-28">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[#e8e1d7]/60 [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%)]" />
        <div className="container relative z-10 mx-auto px-6 md:px-10">
          <div className="mb-12 max-w-2xl scroll-animate translate-y-[40px] opacity-0">
            <p className="eyebrow">{t.prep.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-normal text-[#19324a] md:text-5xl">{t.prep.title}</h2>
            <p className="mt-5 text-base leading-7 text-[#52616b] md:text-lg">{t.prep.subtitle}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {t.prep.items.map((item) => (
              <div key={item.number} className="scroll-animate translate-y-[40px] border-t-2 border-[#b56b45] pt-5 opacity-0">
                <span className="font-mono text-sm font-bold tracking-[0.2em] text-[#b56b45]">{item.number}</span>
                <h3 className="mt-5 text-xl font-bold text-[#19324a]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#52616b]">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 border-l-2 border-[#b56b45] pl-4 text-sm font-semibold text-[#19324a]">{t.prep.note}</p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative overflow-hidden bg-[#f4f1eb] py-20 md:py-28">
        {/* Background Elements */}
        <div className="container relative z-10 mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 scroll-animate transform translate-x-[-100px] opacity-0 transition-all duration-1000">
              <div className="space-y-6">
                <p className="eyebrow">The firm</p>
                <h2 className="mt-4 text-3xl font-normal text-[#19324a] md:text-5xl">
                  {t.about.title}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-[#52616b] md:text-lg">
                  <p>{t.about.description1}</p>
                  <p>{t.about.description2}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                  <div className="border-t border-[#c9bcae] py-5">
                  <div className="mb-2 text-2xl font-bold text-[#b56b45] md:text-3xl">500+</div>
                  <div className="text-sm text-[#52616b]">{t.about.casesWon}</div>
                </div>
                <div className="border-t border-[#c9bcae] py-5">
                  <div className="mb-2 text-2xl font-bold text-[#b56b45] md:text-3xl">25+</div>
                  <div className="text-sm text-[#52616b]">{t.about.yearsExp}</div>
                </div>
                <div className="border-t border-[#c9bcae] py-5">
                  <div className="mb-2 text-2xl font-bold text-[#b56b45] md:text-3xl">100%</div>
                  <div className="text-sm text-[#52616b]">{t.about.satisfaction}</div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#b56b45] text-[#b56b45]">
                    <span>01</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#19324a]">Trusted Defense</h3>
                    <p className="text-sm text-[#52616b]">Protecting your rights</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#b56b45] text-[#b56b45]">
                    <span>02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#19324a]">Award Winning</h3>
                    <p className="text-sm text-[#52616b]">Recognized excellence</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#b56b45] text-[#b56b45]">
                    <span>03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#19324a]">Client Focused</h3>
                    <p className="text-sm text-[#52616b]">Your success is our priority</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#b56b45] text-[#b56b45]">
                    <span>04</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#19324a]">Fair Justice</h3>
                    <p className="text-sm text-[#52616b]">Fighting for what's right</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Layered image */}
            <div className="relative scroll-animate transform translate-x-[100px] opacity-0 transition-all duration-1000">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent rounded-2xl transform -rotate-3" />
                <div className="absolute inset-0 bg-gold/10 rounded-2xl transform rotate-1" />
                  <Image
                  src="/images/aboutus.jpg"
                  alt="Senior partner in law office"
                  width={600}
                  height={800}
                    className="content-image relative rounded-2xl shadow-2xl w-full h-auto object-cover border-2 border-gold/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="bg-[#19324a] py-20 text-[#f4f1eb] md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-8 md:mb-12">
            <p className="eyebrow text-[#e5a57f]">Where we help</p>
            <h2 className="mb-4 mt-4 text-3xl font-normal text-[#f4f1eb] md:text-5xl scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              {t.practice.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[#b8c5cc] md:text-lg scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              {t.practice.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000 border-t border-[#d8e0e4]/30 p-6 md:p-8 transition-colors duration-300 hover:bg-[#244762] group">
              <div className="mb-4 overflow-hidden">
                <Image 
                  src="/images/criminal.jpg" 
                  alt="Criminal Defense" 
                  width={400}
                  height={300}
                  className="mb-4 h-40 w-full object-cover grayscale transition-transform duration-300 group-hover:scale-105 md:h-48"
                />
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#e5a57f] md:text-xl">{t.practice.criminal.title}</h3>
              <p className="mb-4 text-sm text-[#b8c5cc] md:text-base">
                {t.practice.criminal.description}
              </p>
              <a href="/practice-areas#criminal" className="text-sm font-semibold text-[#f4f1eb] hover:text-[#e5a57f] md:text-base">
                {t.practice.criminal.learnMore}
              </a>
            </div>
            
            <div className="scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000 border-t border-[#d8e0e4]/30 p-6 md:p-8 transition-colors duration-300 hover:bg-[#244762] group">
              <div className="mb-4 overflow-hidden">
                <Image 
                  src="/images/immigration.jpg" 
                  alt="Immigration Law" 
                  width={400}
                  height={300}
                  className="mb-4 h-40 w-full object-cover grayscale transition-transform duration-300 group-hover:scale-105 md:h-48"
                />
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#e5a57f] md:text-xl">{t.practice.immigration.title}</h3>
              <p className="mb-4 text-sm text-[#b8c5cc] md:text-base">
                {t.practice.immigration.description}
              </p>
              <a href="/practice-areas#immigration" className="text-sm font-semibold text-[#f4f1eb] hover:text-[#e5a57f] md:text-base">
                {t.practice.immigration.learnMore}
              </a>
            </div>
            
            <div className="scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000 border-t border-[#d8e0e4]/30 p-6 md:p-8 transition-colors duration-300 hover:bg-[#244762] group md:col-span-2 lg:col-span-1">
              <div className="mb-4 overflow-hidden">
                <Image 
                  src="/images/carinjury.jpg" 
                  alt="Personal Injury" 
                  width={400}
                  height={300}
                  className="mb-4 h-40 w-full object-cover grayscale transition-transform duration-300 group-hover:scale-105 md:h-48"
                />
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#e5a57f] md:text-xl">{t.practice.personalInjury.title}</h3>
              <p className="mb-4 text-sm text-[#b8c5cc] md:text-base">
                {t.practice.personalInjury.description}
              </p>
              <a href="/practice-areas#personal-injury" className="text-sm font-semibold text-[#f4f1eb] hover:text-[#e5a57f] md:text-base">
                {t.practice.personalInjury.learnMore}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-[#e8e1d7] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-8 md:mb-12">
            <p className="eyebrow">Client perspective</p>
            <h2 className="mb-4 mt-4 text-3xl font-normal text-[#19324a] md:text-5xl scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              {t.testimonials.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[#52616b] md:text-lg scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
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
                    <div className="h-full border-t-2 border-[#b56b45] bg-[#f4f1eb] p-6 shadow-sm md:p-8">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-[#b56b45] text-lg" />
                        ))}
                      </div>
                      <p className="mb-6 text-sm italic leading-7 text-[#52616b] md:text-base">
                        "{testimonial.text}"
                      </p>
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-sm font-bold text-[#19324a] md:text-base">{testimonial.name}</p>
                        <p className="text-xs text-[#52616b] md:text-sm">{testimonial.case}</p>
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
                className="border border-[#19324a] p-3 text-[#19324a] transition-all duration-300 hover:bg-[#19324a] hover:text-white"
              >
                <FaChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="border border-[#19324a] p-3 text-[#19324a] transition-all duration-300 hover:bg-[#19324a] hover:text-white"
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
                    index === currentTestimonialIndex ? 'bg-[#b56b45]' : 'bg-[#b8aa9b]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#f4f1eb] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-8 md:mb-12">
            <p className="eyebrow">Start a conversation</p>
            <h2 className="mb-4 mt-4 text-3xl font-normal text-[#19324a] md:text-5xl scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              {t.contact.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[#52616b] md:text-lg scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              {t.contact.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center space-x-4">
                  <FaPhone className="flex-shrink-0 text-xl text-[#b56b45] md:text-2xl" />
                  <div>
                    <h3 className="text-base font-bold text-[#19324a] md:text-lg">{t.contact.phone}</h3>
                    <p className="text-base text-[#52616b] md:text-lg">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="flex-shrink-0 text-xl text-[#b56b45] md:text-2xl" />
                  <div>
                    <h3 className="text-base font-bold text-[#19324a] md:text-lg">{t.contact.email}</h3>
                    <p className="text-base text-[#52616b] md:text-lg">glennquezada14@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="flex-shrink-0 text-xl text-[#b56b45] md:text-2xl" />
                  <div>
                    <h3 className="text-base font-bold text-[#19324a] md:text-lg">{t.contact.address}</h3>
                    <p className="text-base text-[#52616b] md:text-lg">McAllen, Texas</p>
                    <p className="text-base text-[#52616b] md:text-lg">{t.contact.address2}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaClock className="flex-shrink-0 text-xl text-[#b56b45] md:text-2xl" />
                  <div>
                    <h3 className="text-base font-bold text-[#19324a] md:text-lg">{t.contact.hours}</h3>
                    <p className="text-sm text-[#52616b] md:text-base">{t.contact.hours1}</p>
                    <p className="text-sm text-[#52616b] md:text-base">{t.contact.hours2}</p>
                    <p className="text-sm text-[#52616b] md:text-base">{t.contact.hours3}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
              <div className="h-64 overflow-hidden border border-[#c9bcae] bg-[#e8e1d7] shadow-sm md:h-96">
                <iframe
                  src="https://www.google.com/maps?q=McAllen%2C%20Texas&output=embed"
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
      <section id="consultation" className="bg-[#19324a] py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <p className="eyebrow text-[#e5a57f]">Confidential and straightforward</p>
              <h2 className="mb-4 mt-4 text-3xl font-normal text-[#f4f1eb] md:text-5xl scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
                {t.consultation.title}
              </h2>
              <p className="text-base text-[#b8c5cc] md:text-lg scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
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
      <section className="bg-[#b56b45] py-20 text-white md:py-28">
        <div className="container mx-auto px-6 text-center md:px-10">
          <p className="eyebrow text-white/80">The next step is simple</p>
          <h2 className="mb-6 mt-4 text-3xl font-normal text-white md:text-5xl scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
            {t.cta.title}
          </h2>
          <p className="mb-6 text-lg text-white/85 md:mb-8 md:text-xl scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate transform translate-y-[50px] opacity-0 transition-all duration-1000">
            <a href="/#contact" className="bg-[#19324a] px-6 py-3 text-base font-bold text-white transition-all duration-300 hover:bg-[#244762] md:px-8 md:py-4 md:text-lg">
              {t.cta.contactBtn}
            </a>
            <a href="tel:+15551234567" className="border border-white px-6 py-3 text-base font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#19324a] md:px-8 md:py-4 md:text-lg">
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