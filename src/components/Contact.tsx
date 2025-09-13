'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { isValidPhoneNumber, formatNumber } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';
import './PhoneInputStyles.css';

// Dynamic import to avoid SSR issues
const PhoneInput = dynamic(() => import('react-phone-number-input'), {
  ssr: false,
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email) {
      alert('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Phone validation (only if phone is provided)
    if (formData.phone && !isValidPhoneNumber(formData.phone)) {
      alert('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);

    // Prepare submission data with normalized phone in E.164 format
    const submissionData = {
      ...formData,
      phoneE164: formData.phone ? formatNumber(formData.phone, 'E.164') : null,
    };

    // Simulate form submission (TODO: integrate with backend or Formspree)
    setTimeout(() => {
      console.log('Form submission data:', submissionData);
      alert('Thank you! We&apos;ll be in touch soon to get you set up with early access.');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData({
      ...formData,
      phone: value || ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
            Ready to Speed Up
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Permits?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Join the Private Beta and receive early access with a concierge onboarding for your first project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-white mb-8">
              What you&apos;ll get
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1 text-sm">Concierge Onboarding</h4>
                  <p className="text-gray-300 text-xs">Brief intake on your project and permitting pain points.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1 text-sm">AI Feasibility Snapshot</h4>
                  <p className="text-gray-300 text-xs">A high-level, clause-cited outline of permits, requirements, and likely pitfalls for a representative project (no auto-submission claims).</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1 text-sm">Workflow Fit & Integration Plan</h4>
                  <p className="text-gray-300 text-xs">How Quincy plugs into your current docs/tools and where it saves research and rework.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1 text-sm">Priority Early Access</h4>
                  <p className="text-gray-300 text-xs">A reserved spot in the beta plus influence on our roadmap.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-black border border-gray-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-gray-300 mb-2">
                  Phone (optional)
                </label>
                <PhoneInput
                  country="CA"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  name="phone"
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Enter phone number"
                  className="phone-input-container"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
                  placeholder="What type of projects do you work on? How many permits do you apply for annually?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-gray-100 disabled:bg-gray-400 text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed text-base"
              >
                {isSubmitting ? 'Submitting...' : 'Request Early Access'}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}