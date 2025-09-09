'use client';

// Icon Components
const ConstructionIcon = () => (
  <svg 
    className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    strokeWidth={2}
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-label="Construction building"
  >
    <path d="M3 21h18" />
    <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
    <path d="M9 9h1" />
    <path d="M9 13h1" />
    <path d="M9 17h1" />
    <path d="M14 9h1" />
    <path d="M14 13h1" />
    <path d="M14 17h1" />
  </svg>
);

const ClipboardIcon = () => (
  <svg 
    className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    strokeWidth={2}
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-label="AI-generated gameplan and roadmap"
  >
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M9 10h6" />
    <path d="M9 14h6" />
    <path d="M9 18h3" />
  </svg>
);

const TargetIcon = () => (
  <svg 
    className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    strokeWidth={2}
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-label="Target goal achievement"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
  </svg>
);

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell Quincy About Your Project",
      description: "Share your site address, lot details, and vision. Quincy's AI instantly ingests your inputs and pulls the right zoning bylaws, codes, and requirements for your property.",
      keyBenefit: "Instant property intelligence",
      icon: <ConstructionIcon />
    },
    {
      number: "02", 
      title: "Get an AI-Generated Permitting Gameplan",
      description: "In seconds, Quincy's AI analyzes your project and produces a tailored roadmap: permits, fees, timelines, and draft forms. It's like having a senior permitting expert on call 24/7.",
      keyBenefit: "Complete roadmap in seconds",
      icon: <ClipboardIcon />
    },
    {
      number: "03",
      title: "AI Co-Pilot Through to Approval",
      description: "Quincy stays by your side—answering code questions, flagging risks, and formatting submission packages. The AI acts as a knowledgeable co-pilot, guiding you confidently to \"yes.\"",
      keyBenefit: "Expert guidance to approval",
      icon: <TargetIcon />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From project vision to permit approval in three intelligent steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent transform translate-x-4" />
              )}
              
              {/* Step Card */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-white/30 hover:bg-gray-800/50 transition-all duration-300 h-full group">
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div>{step.icon}</div>
                  <div className="text-3xl font-light text-gray-600 group-hover:text-white/60 transition-colors duration-300">{step.number}</div>
                </div>

                {/* Step Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 leading-tight">
                    {step.title}
                  </h3>
                  
                  {/* Key Benefit Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-white">{step.keyBenefit}</span>
                  </div>
                  
                  <p className="text-gray-300 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="mb-6">
            <p className="text-gray-400 mb-2">Ready to experience the future of permitting?</p>
            <p className="text-sm text-gray-500">Join BC developers who are already building faster</p>
          </div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-white/25"
          >
            See Quincy In Action
          </button>
        </div>
      </div>
    </section>
  );
}