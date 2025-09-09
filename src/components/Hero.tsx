'use client';

import SplineGreetingRobot from './SplineGreetingRobot';
import SplineErrorBoundary from './SplineErrorBoundary';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* 3D Background Placeholder - positioned for right side */}
      <div 
        id="hero-3d-placeholder" 
        className="absolute top-0 right-0 w-1/2 h-full opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 90% 60%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Animated geometric shapes - repositioned for right side */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 border border-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-40 w-60 h-60 border border-white/5 rounded-full animate-ping" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-96 h-96 border border-white/3 rounded-full animate-spin"
             style={{ animationDuration: '20s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Content */}
          <div className="text-left">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight tracking-tight max-w-[20ch]">
              AI Co-Pilot for
              <br />
              <span className="text-sky-200">Development Permits</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Navigate zoning bylaws, building codes, and approval steps with an intelligent assistant that guides you through the permitting process.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
              <button
                onClick={scrollToContact}
                className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200 transform hover:scale-105 hover:shadow-lg shadow-white/25"
              >
                Request a Demo
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 rounded-lg text-base transition-all duration-200 hover:bg-white/5"
              >
                Learn More
              </button>
            </div>

            {/* Customer Logos Placeholder */}
            <div className="mb-8">
              <p className="text-gray-500 text-xs mb-4 uppercase tracking-wide">
                Trusted by BC Developers
              </p>
              <div className="flex flex-wrap items-center gap-6 opacity-60">
                {/* Placeholder logos */}
                <div className="bg-gray-700 rounded px-4 py-2 text-gray-300 font-medium text-xs">
                  Vancouver Construction Co.
                </div>
                <div className="bg-gray-700 rounded px-4 py-2 text-gray-300 font-medium text-xs">
                  Pacific Builders
                </div>
                <div className="bg-gray-700 rounded px-4 py-2 text-gray-300 font-medium text-xs">
                  Metro Developments
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Spline 3D Greeting Robot - Single Responsive Instance */}
          <div className="flex items-center justify-center relative mt-8 lg:mt-0">
            <div 
              className="w-full max-w-md lg:max-w-none h-64 lg:h-96 relative rounded-xl lg:rounded-2xl"
              style={{ minHeight: '256px', contain: 'layout style' }}
            >
              <SplineErrorBoundary>
                <SplineGreetingRobot 
                  key="hero-spline-robot" 
                  className="w-full h-full" 
                />
              </SplineErrorBoundary>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
}