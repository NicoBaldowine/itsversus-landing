"use client";

import React, { useState } from 'react';
import { Header, Footer } from "@/components/ui";

export default function Contact() {
  const [formData, setFormData] = useState({
    requestType: 'Help',
    title: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    message: ''
  });

  const handleButtonClick = () => {
    console.log("Download App clicked!");
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear errors when user starts typing
    if (field === 'email' && errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
    if (field === 'message' && errors.message) {
      setErrors(prev => ({ ...prev, message: '' }));
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = { email: '', message: '' };
    let hasErrors = false;

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
      hasErrors = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      hasErrors = true;
    }

    // Validate message length
    if (formData.message.length > 500) {
      newErrors.message = 'Message must be 500 characters or less';
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('/api/contact/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
          // Reset form
          setFormData({
            requestType: 'Help',
            title: '',
            email: '',
            message: ''
          });
        } else {
          const errorData = await response.json();
          alert('Hubo un error al enviar tu mensaje. Por favor intenta nuevamente más tarde.');
          console.error('Submit error:', errorData);
        }
      } catch (error) {
        alert('Hubo un error al enviar tu mensaje. Por favor intenta nuevamente más tarde.');
        console.error('Network error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header 
        buttonText="Download App"
        onButtonClick={handleButtonClick}
      />
      
      <main className="w-full">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-extrabold font-inter-tight text-black text-4xl md:text-5xl mb-8 text-center">
              Contact Us
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Request Type Dropdown */}
              <div>
                <label htmlFor="requestType" className="block text-lg font-bold text-black mb-2">
                  Request
                </label>
                <select
                  id="requestType"
                  value={formData.requestType}
                  onChange={(e) => handleInputChange('requestType', e.target.value)}
                  className="w-full px-4 py-3 border border-black/[0.2] rounded-lg bg-white text-black font-inter-tight focus:outline-none focus:border-black/[0.5] transition-colors"
                >
                  <option value="Help">Help</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Report a bug">Report a bug</option>
                </select>
              </div>

              {/* Title Field */}
              <div>
                <label htmlFor="title" className="block text-lg font-bold text-black mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-4 py-3 border border-black/[0.2] rounded-lg bg-white text-black font-inter-tight focus:outline-none focus:border-black/[0.5] transition-colors"
                  placeholder="Enter a title for your request"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-lg font-bold text-black mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg bg-white text-black font-inter-tight focus:outline-none transition-colors ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-black/[0.2] focus:border-black/[0.5]'
                  }`}
                  placeholder="your.email@example.com"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-lg font-bold text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={6}
                  maxLength={500}
                  className={`w-full px-4 py-3 border rounded-lg bg-white text-black font-inter-tight focus:outline-none transition-colors resize-vertical ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-black/[0.2] focus:border-black/[0.5]'
                  }`}
                  placeholder="Tell us about your request..."
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                  <p className={`text-sm ml-auto ${
                    formData.message.length > 450 ? 'text-red-500' : 'text-black/[0.6]'
                  }`}>
                    {formData.message.length}/500 characters
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white font-extrabold font-inter-tight px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            {/* Additional Contact Info */}
            {/*
            <div className="mt-12 text-center p-6 bg-black/[0.05] rounded-2xl">
              <p className="text-lg text-black mb-2">
                You can also reach us directly at:
              </p>
              <p className="text-lg text-black">
                📧 <a href="mailto:quizlandhelp@gmail.com" className="text-black underline font-bold">quizlandhelp@gmail.com</a>
              </p>
            </div>
            */}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 