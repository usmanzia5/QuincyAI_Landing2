'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-normal text-white">Quincy <span className="text-sky-200">AI</span></h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('problem-solution')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Problem & Solution
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('who-its-for')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Who&apos;s It For
              </button>
              <button
                onClick={() => scrollToSection('founders')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Founders
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-gray-100 text-black font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800">
              <button
                onClick={() => scrollToSection('problem-solution')}
                className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Problem & Solution
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('who-its-for')}
                className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Who&apos;s It For
              </button>
              <button
                onClick={() => scrollToSection('founders')}
                className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Founders
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left bg-white hover:bg-gray-100 text-black font-semibold px-3 py-2 rounded-lg transition-colors duration-200 mt-4"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}