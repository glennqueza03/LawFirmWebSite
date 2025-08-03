'use client';

import React, { useState } from 'react';
import { FaSpinner, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

interface FormData {
  firstName: string;
  lastName: string;
  isNewClient: string;
  message: string;
  phone: string;
  email: string;
  honeypot: string;
}

interface ConsultationFormProps {
  className?: string;
  onSuccess?: () => void;
  language?: string;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ className = '', onSuccess, language = 'en' }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    isNewClient: '',
    message: '',
    phone: '',
    email: '',
    honeypot: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const translations = {
    en: {
      title: "Request a Consultation",
      firstName: "First Name *",
      lastName: "Last Name *",
      newClient: "Are you a new client? *",
      phone: "Phone Number *",
      email: "Email Address *",
      message: "Message *",
      submit: "Submit Consultation Request",
      submitting: "Submitting...",
      success: "Thank you for your consultation request. We will contact you shortly to confirm your appointment.",
      required: "* All fields are required",
      placeholder: {
        firstName: "Enter your first name",
        lastName: "Enter your last name",
        phone: "Enter your phone number",
        email: "Enter your email address",
        message: "Please describe your legal matter..."
      },
      options: {
        select: "Select an option",
        yes: "Yes",
        no: "No"
      }
    },
    es: {
      title: "Solicitar una Consulta",
      firstName: "Nombre *",
      lastName: "Apellido *",
      newClient: "¿Es un cliente nuevo? *",
      phone: "Número de Teléfono *",
      email: "Correo Electrónico *",
      message: "Mensaje *",
      submit: "Enviar Solicitud de Consulta",
      submitting: "Enviando...",
      success: "Gracias por su solicitud de consulta. Nos pondremos en contacto con usted pronto para confirmar su cita.",
      required: "* Todos los campos son obligatorios",
      placeholder: {
        firstName: "Ingrese su nombre",
        lastName: "Ingrese su apellido",
        phone: "Ingrese su número de teléfono",
        email: "Ingrese su correo electrónico",
        message: "Por favor describa su asunto legal..."
      },
      options: {
        select: "Seleccione una opción",
        yes: "Sí",
        no: "No"
      }
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          isNewClient: '',
          message: '',
          phone: '',
          email: '',
          honeypot: ''
        });
        if (onSuccess) onSuccess();
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send consultation request. Please try again.');
    }
  };

  const isFormValid = formData.firstName && formData.lastName && formData.isNewClient && 
                     formData.message && formData.phone && formData.email;

  return (
    <div className={`bg-gray-800 rounded-lg shadow-xl p-6 lg:p-8 ${className}`}>
      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gold mb-6">
        {t.title}
      </h3>
      
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-900 border border-green-600 rounded-lg flex items-center space-x-3">
          <FaCheck className="text-green-400 text-xl" />
          <p className="text-green-200 font-medium">
            {t.success}
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-900 border border-red-600 rounded-lg flex items-center space-x-3">
          <FaExclamationTriangle className="text-red-400 text-xl" />
          <p className="text-red-200 font-medium">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users but visible to bots */}
        <div className="absolute left-[-9999px] top-[-9999px]">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
              {t.firstName}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 bg-gray-700 text-white"
              placeholder={t.placeholder.firstName}
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
              {t.lastName}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 bg-gray-700 text-white"
              placeholder={t.placeholder.lastName}
            />
          </div>
        </div>

        <div>
          <label htmlFor="isNewClient" className="block text-sm font-medium text-white mb-2">
            {t.newClient}
          </label>
          <select
            id="isNewClient"
            name="isNewClient"
            value={formData.isNewClient}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 bg-gray-700 text-white"
          >
            <option value="">{t.options.select}</option>
            <option value="yes">{t.options.yes}</option>
            <option value="no">{t.options.no}</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              {t.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 bg-gray-700 text-white"
              placeholder={t.placeholder.phone}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 bg-gray-700 text-white"
              placeholder={t.placeholder.email}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-none bg-gray-700 text-white"
            placeholder={t.placeholder.message}
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid || status === 'loading'}
          className={`w-full bg-gold text-black py-3 px-6 rounded-lg font-medium hover:bg-gold/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 ${
            status === 'loading' ? 'cursor-not-allowed' : ''
          }`}
        >
          {status === 'loading' ? (
            <>
              <FaSpinner className="animate-spin" />
              <span>{t.submitting}</span>
            </>
          ) : (
            <span>{t.submit}</span>
          )}
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-4 text-center">
        {t.required}
      </p>
    </div>
  );
};

export default ConsultationForm; 