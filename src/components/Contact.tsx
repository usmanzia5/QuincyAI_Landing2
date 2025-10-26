'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-phone-number-input/style.css';
import './PhoneInputStyles.css';

// Dynamic import to avoid SSR issues
const PhoneInput = dynamic(() => import('react-phone-number-input'), {
  ssr: false,
});

const MAX_CHARACTERS = 900;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [characterCount, setCharacterCount] = useState(0);
  const [submitState, setSubmitState] = useState({
    status: 'idle' as 'idle' | 'submitting' | 'success' | 'error',
    message: '',
    timestamp: null as number | null
  });
  const formRef = useRef<HTMLFormElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

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

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    // Prevent typing beyond limit (but always allow deletion)
    if (newValue.length <= MAX_CHARACTERS) {
      setFormData({
        ...formData,
        message: newValue
      });
      setCharacterCount(newValue.length);
    }
  };

  const getCounterColor = (count: number): string => {
    if (count >= 851) return 'text-red-400';
    if (count >= 701) return 'text-yellow-400';
    return 'text-gray-400';
  };

  // Initialize timestamp for spam protection
  useEffect(() => {
    setSubmitState(prev => ({ ...prev, timestamp: Date.now() }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email) {
      setSubmitState({
        status: 'error',
        message: 'Please enter your email address',
        timestamp: submitState.timestamp
      });
      return;
    }

    // Email format validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitState({
        status: 'error',
        message: 'Please enter a valid email address',
        timestamp: submitState.timestamp
      });
      return;
    }

    // Spam protection: minimum time check (3 seconds)
    if (submitState.timestamp && Date.now() - submitState.timestamp < 3000) {
      setSubmitState({
        status: 'error',
        message: 'Please wait a moment before submitting',
        timestamp: submitState.timestamp
      });
      return;
    }

    setSubmitState(prev => ({ ...prev, status: 'submitting', message: '' }));

    try {
      const response = await fetch('https://formspree.io/f/mdkljqdb', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
          _gotcha: '' // Honeypot field
        })
      });

      if (response.ok) {
        setSubmitState({
          status: 'success',
          message: 'Thank you! We\'ll be in touch soon to get you set up with early access.',
          timestamp: submitState.timestamp
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
        setCharacterCount(0);

        // Focus first field after brief delay
        setTimeout(() => {
          firstFieldRef.current?.focus();
        }, 100);

        // Auto-dismiss success message after 5 seconds
        setTimeout(() => {
          setSubmitState(prev => prev.status === 'success' ? { ...prev, status: 'idle', message: '' } : prev);
        }, 5000);

      } else {
        const errorData = await response.json();
        setSubmitState({
          status: 'error',
          message: errorData.errors?.[0]?.message || 'Something went wrong. Please try again.',
          timestamp: submitState.timestamp
        });
      }
    } catch {
      setSubmitState({
        status: 'error',
        message: 'Network error. Please check your connection and try again.',
        timestamp: submitState.timestamp
      });
    }
  };

  return (
    <section id="contact" className="scroll-target section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display-2 font-medium text-white mb-6">
            Ready to Speed Up
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Permits?
            </span>
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            Join the Private Beta and receive early access with a concierge onboarding for your first project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
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
                  <p className="text-gray-300 text-xs">How Tribunus plugs into your current docs/tools and where it saves research and rework.</p>
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
            {/* Success/Error Banner */}
            {submitState.status !== 'idle' && (
              <div
                className={`mb-6 p-4 rounded-lg border transition-all duration-300 ${
                  submitState.status === 'success'
                    ? 'bg-green-900/20 border-green-500/30 text-green-400'
                    : submitState.status === 'error'
                    ? 'bg-red-900/20 border-red-500/30 text-red-400'
                    : 'bg-blue-900/20 border-blue-500/30 text-blue-400'
                }`}
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {submitState.status === 'success' ? (
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : submitState.status === 'error' ? (
                      <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-blue-400 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {submitState.status === 'submitting'
                        ? 'Submitting your request...'
                        : submitState.message
                      }
                    </p>
                    {submitState.status === 'error' && (
                      <button
                        type="button"
                        onClick={() => setSubmitState(prev => ({ ...prev, status: 'idle', message: '' }))}
                        className="mt-2 text-xs text-red-300 hover:text-red-200 underline transition-colors"
                      >
                        Try again
                      </button>
                    )}
                  </div>
                  {submitState.status === 'success' && (
                    <button
                      type="button"
                      onClick={() => setSubmitState(prev => ({ ...prev, status: 'idle', message: '' }))}
                      className="flex-shrink-0 text-green-400 hover:text-green-300 transition-colors"
                      aria-label="Dismiss success message"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/mdkljqdb"
              method="POST"
              acceptCharset="UTF-8"
              autoComplete="on"
              className="space-y-6"
            >
              {/* Honeypot field to reduce spam */}
              <input type="text" name="_gotcha" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  ref={firstFieldRef}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className="tap-target w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
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
                  inputMode="email"
                  autoComplete="email"
                  required
                  className="tap-target w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
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
                  autoComplete="organization"
                  className="tap-target w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
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
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Enter phone number"
                  className="phone-input-container"
                />
                {/* Hidden input for Formspree phone submission */}
                <input type="hidden" name="phone" value={formData.phone} />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleMessageChange}
                  rows={4}
                  maxLength={900}
                  autoComplete="off"
                  className="tap-target w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors min-h-[96px] max-h-48 overflow-y-auto resize-none"
                  placeholder="What type of projects do you work on? How many permits do you apply for annually?"
                  aria-describedby="message-counter"
                />
                <div className="flex justify-end mt-1">
                  <span
                    id="message-counter"
                    className={`text-xs ${getCounterColor(characterCount)}`}
                    aria-live="polite"
                  >
                    {characterCount}/{MAX_CHARACTERS} characters
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitState.status === 'submitting'}
                className={`tap-target w-full font-semibold py-3 sm:py-4 px-6 rounded-lg text-sm sm:text-base transition-all duration-200 ${
                  submitState.status === 'submitting'
                    ? 'bg-gray-400 cursor-not-allowed text-gray-700'
                    : 'bg-white hover:bg-gray-100 text-black transform hover:scale-105'
                }`}
              >
                {submitState.status === 'submitting' ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </span>
                ) : (
                  'Request Early Access'
                )}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}