'use client';

export default function Founders() {
  const founders = [
    {
      name: "Samuel J. Howard",
      role: "Co-Founder & CEO",
      background: "",
      image: "SH",
      bio: "Samuel J. Howard comes from a family with deep roots in B.C. real estate dating back to 1969. His inspiration for Quincy came from years of observing and contributing to development projects, where he saw how municipal processes create costly delays and uncertainty for builders. As an active real estate investor, he brings personal experience with the pressures of navigating complex approvals. Samuel adds strong financial and regulatory expertise to the team."
    },
    {
      name: "M. Usman Zia",
      role: "Co-Founder & CTO", 
      background: "",
      image: "UZ",
      bio: "M. Usman Zia has a background in Computer Engineering and experience working on advanced AI systems for data centers at AMD. While navigating a large-scale commercial development, he faced firsthand the inefficiencies and roadblocks in municipal permitting, giving him direct insight into the problem Quincy is solving. He also built a strong foundation in finance through CFA studies, complementing his technical expertise with analytical perspective."
    }
  ];

  const expertise = [
    {
      title: "AI-Powered Code Intelligence",
      description: "Trained on BC zoning bylaws and building codes to surface compliance requirements instantly."
    },
    {
      title: "Continuously Updated Knowledge",
      description: "Regularly refreshed with the latest municipal regulations and policy changes across BC."
    },
    {
      title: "Developer-Focused Partnerships",
      description: "Built in collaboration with local developers and consultants to solve real permitting pain points."
    }
  ];

  return (
    <section id="founders" className="scroll-target section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center section-gap">
          <h2 className="text-display-2 font-medium text-white mb-6">
            Meet the Founders
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            Built by experts who understand both BC building codes and cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Founder Profiles */}
          <div className="space-y-10">
            {founders.map((founder, index) => (
              <div key={index} className="bg-black border border-gray-800 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  {/* Profile Image Placeholder */}
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {founder.image}
                  </div>
                  
                  {/* Founder Info */}
                  <div className="flex-1">
                    <h3 className="text-display-3 font-semibold text-white mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-white/80 font-medium mb-1 text-sm">
                      {founder.role}
                    </p>
                    <p className="text-gray-400 text-xs mb-3">
                      {founder.background}
                    </p>
                    <p className="text-body-base text-gray-300">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Company Expertise */}
          <div>
            <h3 className="text-display-3 font-semibold text-white mb-6 lg:mb-8">
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
                    <p className="text-body-base text-gray-300">{item.description}</p>
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
                &ldquo;Finally, a solution that navigates BC building codes with us. Quincy AI flags red-flags early, reduces costly re-submissions, and saves weeks of research time.&rdquo;
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  JS
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-white text-sm">John Smith</div>
                  <div className="text-gray-400 text-xs">Development Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}