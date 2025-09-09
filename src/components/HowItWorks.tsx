'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Plans",
      description: "Upload your drawings (PDF, CAD, BIM) to our platform with simple drag-and-drop",
      icon: "📋"
    },
    {
      number: "02", 
      title: "AI Review",
      description: "Our AI instantly checks compliance with BC codes and bylaws, highlighting issues",
      icon: "🤖"
    },
    {
      number: "03",
      title: "Get Results",
      description: "Receive a detailed report and fix issues fast. Submit to the city with confidence",
      icon: "✅"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Our AI-powered platform streamlines the permit approval process in three simple steps
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
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-white/30 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{step.icon}</div>
                  <div className="text-2xl font-semibold text-white">{step.number}</div>
                </div>

                {/* Step Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200 transform hover:scale-105"
          >
            See It In Action
          </button>
        </div>
      </div>
    </section>
  );
}