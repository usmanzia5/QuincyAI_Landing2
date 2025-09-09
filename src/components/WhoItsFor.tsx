'use client';

export default function WhoItsFor() {
  const targetAudiences = [
    {
      icon: "🏢",
      title: "Developers",
      description: "Streamline large projects with an AI co-pilot that maps permits, timelines, and risks.",
      benefits: ["Shorten approvals", "Lower carrying costs", "Flag requirements early"]
    },
    {
      icon: "📐",
      title: "Consultants",
      description: "Turbocharge research with AI that parses bylaws and drafts compliance reports.",
      benefits: ["Catch compliance issues", "Cut review time", "Provide client-ready insights"]
    },
    {
      icon: "💼",
      title: "Investors",
      description: "Use AI due-diligence to de-risk sites and forecast permitting timelines.",
      benefits: ["Spot red flags", "Compare approval paths", "Make faster decisions"]
    }
  ];

  return (
    <section id="who-its-for" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
            Who&apos;s It For?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Quincy AI serves construction professionals across British Columbia
          </p>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targetAudiences.map((audience, index) => (
            <div 
              key={index} 
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-white/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {audience.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {audience.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {audience.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-xs text-gray-400">
                      <div className="w-4 h-4 bg-white/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Ready to accelerate your projects?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200 transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}