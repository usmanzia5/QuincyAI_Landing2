'use client';

export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Accelerated Approvals",
      description: "Reduce permit processing time by up to 90% with automated compliance checking.",
      highlight: "90% faster"
    },
    {
      icon: "✓",
      title: "Accurate Compliance Checks",
      description: "AI checks your plans against the latest BC Building Code and municipal bylaws for error-free submissions.",
      highlight: "100% BC compliant"
    },
    {
      icon: "🏗️",
      title: "3D Plan Visualization", 
      description: "View and inspect your project in 3D on our platform for better insights and understanding.",
      highlight: "Interactive 3D"
    },
    {
      icon: "📊",
      title: "Clear Reports",
      description: "Get consistent, transparent reports that pinpoint issues and guide you to resolution.",
      highlight: "Actionable insights"
    },
    {
      icon: "🔗",
      title: "City Integration",
      description: "Future-ready integration with municipal permitting systems for seamless submissions.",
      highlight: "Coming soon"
    },
    {
      icon: "🎯",
      title: "Expert Built",
      description: "Developed by BC code experts and AI engineers who understand local regulations.",
      highlight: "Local expertise"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Choose PermitAI?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI technology meets local building expertise to deliver faster, more reliable permit approvals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-black border border-gray-800 rounded-xl p-8 hover:border-white/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  {feature.highlight && (
                    <span className="text-sm bg-white/10 text-white px-2 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="border-l border-white/20 pl-6">
            <div className="text-3xl font-bold text-white mb-2">90%</div>
            <div className="text-gray-300">Faster Approvals</div>
          </div>
          <div className="border-l border-white/20 pl-6">
            <div className="text-3xl font-bold text-white mb-2">99%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="border-l border-white/20 pl-6">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Available</div>
          </div>
          <div className="border-l border-white/20 pl-6">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">BC Municipalities</div>
          </div>
        </div>
      </div>
    </section>
  );
}