'use client';

export default function Founders() {
  const founders = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Former BC Building Official",
      image: "SC",
      bio: "15+ years in municipal permitting and building code expertise across Metro Vancouver"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder", 
      background: "AI/ML Engineering Lead",
      image: "MR",
      bio: "Previously led AI initiatives at tech companies, specializing in document processing and compliance automation"
    }
  ];

  const expertise = [
    {
      title: "Certified Building Officials",
      description: "Our team includes former municipal building officials and code experts"
    },
    {
      title: "Up-to-Date Regulations", 
      description: "Continuously updated with the latest BC Building Code changes"
    },
    {
      title: "Municipal Partnerships",
      description: "Working with BC municipalities to streamline the approval process"
    }
  ];

  return (
    <section id="founders" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">
            Meet the Founders
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Built by experts who understand both BC building codes and cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Founder Profiles */}
          <div className="space-y-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-black border border-gray-800 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  {/* Profile Image Placeholder */}
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {founder.image}
                  </div>
                  
                  {/* Founder Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-white/80 font-medium mb-1 text-sm">
                      {founder.role}
                    </p>
                    <p className="text-gray-400 text-xs mb-3">
                      {founder.background}
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Company Expertise */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">
              Deep BC Building Code Knowledge
            </h3>
            
            <div className="space-y-6">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1 text-sm">{item.title}</h4>
                    <p className="text-gray-300 text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-8 bg-black border border-gray-800 rounded-xl p-6">
              <div className="mb-4">
                <svg className="w-8 h-8 text-white opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              <blockquote className="text-gray-300 italic mb-4 leading-relaxed text-sm">
                &ldquo;Finally, a solution that understands BC building codes as well as we do. Quincy AI has cut our approval times from months to weeks.&rdquo;
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  JS
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-white text-sm">John Smith</div>
                  <div className="text-gray-400 text-xs">Development Manager, Pacific Builders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}