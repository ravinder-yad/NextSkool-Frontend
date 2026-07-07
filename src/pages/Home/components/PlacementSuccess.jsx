import React from 'react';

const PlacementSuccess = () => {
  return (
    <section className="py-20 bg-blue-50 dark:bg-blue-900/10 relative z-20">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Students collaborating" className="rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-800" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Your Success is Our Priority</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Our dedicated placement cell works tirelessly to connect you with top tech companies. With resume building, mock interviews, and direct referrals, we ensure you land your dream job.
          </p>
          <ul className="space-y-5 mb-10">
            <li className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium">
              <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-brand-success flex items-center justify-center font-bold shadow-sm">✓</span>
              Resume & Portfolio Review
            </li>
            <li className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium">
              <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-brand-success flex items-center justify-center font-bold shadow-sm">✓</span>
              1-on-1 Mock Interviews
            </li>
            <li className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium">
              <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-brand-success flex items-center justify-center font-bold shadow-sm">✓</span>
              Direct Hiring Drives & Referrals
            </li>
          </ul>
          <button className="px-8 py-4 bg-brand-primary text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-colors">
            Explore Placement Record
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlacementSuccess;
