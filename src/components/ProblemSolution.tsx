'use client';

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="scroll-target section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section */}
        <div className="text-center section-gap">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-2 font-medium text-white mb-6">
              The Pain
            </h2>
            <p className="text-body-lg text-gray-300 mb-8 lg:mb-12">
              BC&apos;s permitting process is slow, complex, and costly. Developers face maze-like regulations, endless forms, and approval times that can stretch nearly a year. Every month of delay drives up carrying costs and stalls projects.
            </p>
            
            {/* Problem Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-semibold text-red-400 mb-2">13-14</div>
                <div className="text-sm text-gray-300">Months for rezoning & DP approvals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-red-400 mb-2">~11</div>
                <div className="text-sm text-gray-300">Months for BC building permits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-red-400 mb-2">1-3%</div>
                <div className="text-sm text-gray-300">Extra carrying cost per year from delays</div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto mb-8 lg:mb-16">
            <h2 className="text-display-2 font-medium text-white mb-6">
              The Solution
            </h2>
            <p className="text-body-lg text-gray-300">
              Quincy AI is your permitting co-pilot. It instantly interprets zoning bylaws, building codes, and application requirements, giving you clear answers and compliance checks that normally take weeks. By flagging risks early and guiding you step-by-step, Quincy shortens timelines, reduced uncertainty, and helps you get to &ldquo;yes&rdquo; faster.
            </p>
          </div>

          {/* Solution Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l border-white/20 pl-6">
              <div className="text-2xl font-semibold text-white mb-2">80%</div>
              <div className="text-sm text-gray-300">Research time cut</div>
            </div>
            <div className="border-l border-white/20 pl-6">
              <div className="text-2xl font-semibold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-300">Guidance available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}