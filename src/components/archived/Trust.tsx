'use client';

export default function Trust() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Built by Experts,
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by Developers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team combines decades of BC building code expertise with cutting-edge AI technology
          </p>
        </div>

        {/* Trust Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Expertise */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Deep BC Building Code Knowledge
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Certified Building Officials</h4>
                  <p className="text-gray-300">Our team includes former municipal building officials and code experts</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Up-to-Date Regulations</h4>
                  <p className="text-gray-300">Continuously updated with the latest BC Building Code changes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Municipal Partnerships</h4>
                  <p className="text-gray-300">Working with BC municipalities to streamline the approval process</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial/Quote */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <div className="mb-6">
              <svg className="w-12 h-12 text-white opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            
            <blockquote className="text-xl text-gray-300 italic mb-6 leading-relaxed">
              &ldquo;Finally, a solution that understands BC building codes as well as we do. PermitAI has cut our approval times from months to weeks.&rdquo;
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-semibold">
                JS
              </div>
              <div className="ml-4">
                <div className="font-semibold text-white">John Smith</div>
                <div className="text-gray-400">Development Manager, Pacific Builders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}