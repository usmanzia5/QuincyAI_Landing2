'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -64; // Account for fixed nav height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-normal text-white">Tribunus <span className="text-sky-200">Labs</span></h1>
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
              className="tap-target inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
            <div className="px-2 pt-3 pb-4 space-y-2 sm:px-3 border-t border-gray-800 bg-black/95 backdrop-blur-sm">
              <button
                onClick={() => scrollToSection('problem-solution')}
                className="tap-target block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-3 text-base font-medium transition-colors duration-200 rounded-lg"
              >
                Problem & Solution
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="tap-target block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-3 text-base font-medium transition-colors duration-200 rounded-lg"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('who-its-for')}
                className="tap-target block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-3 text-base font-medium transition-colors duration-200 rounded-lg"
              >
                Who&apos;s It For
              </button>
              <button
                onClick={() => scrollToSection('founders')}
                className="tap-target block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-3 text-base font-medium transition-colors duration-200 rounded-lg"
              >
                Founders
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="tap-target block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-3 text-base font-medium transition-colors duration-200 rounded-lg"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="tap-target block w-full text-left bg-white hover:bg-gray-100 text-black font-semibold px-3 py-3 rounded-lg transition-colors duration-200 mt-3"
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