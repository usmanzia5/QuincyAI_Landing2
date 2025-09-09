'use client';

export default function ProblemStatement() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Permits Taking Too Long?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Developers face <span className="text-red-400 font-semibold">months of waiting</span> and 
              high carrying costs. Building permit approvals are slow, expensive, and unpredictable.
            </p>
            
            {/* Problem statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">6-12</div>
                <div className="text-gray-300">Months average wait</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">40%</div>
                <div className="text-gray-300">Applications rejected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">$50K+</div>
                <div className="text-gray-300">Average carrying costs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}