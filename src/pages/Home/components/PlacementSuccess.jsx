import React from 'react';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi2';

const PlacementSuccess = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50 dark:bg-[#0B1121] relative z-20 border-t border-slate-100 dark:border-slate-800/60 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Clean Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Students collaborating" 
              className="w-full h-auto max-h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          
          {/* Subtle Decorative Background */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </div>

        {/* Right Side: Clean Typography & True Bullet Points */}
        <div className="w-full lg:w-1/2">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#2563EB]"></span>
            <span className="text-[#2563EB] dark:text-blue-400 font-bold uppercase tracking-widest text-sm">Placement Cell</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Your Success is Our <span className="text-[#2563EB] dark:text-blue-500">Priority</span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed max-w-xl">
            We don't just teach you skills; we make sure you get hired. From the day you enroll to your first offer letter, we stand by your side.
          </p>
          
          {/* TRUE Bullet Points (Single Line) */}
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-4">
              <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <HiCheckCircle size={24} />
              </div>
              <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">Resume & Portfolio Review</span>
            </li>
            
            <li className="flex items-center gap-4">
              <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <HiCheckCircle size={24} />
              </div>
              <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">1-on-1 Mock Interviews</span>
            </li>
            
            <li className="flex items-center gap-4">
              <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <HiCheckCircle size={24} />
              </div>
              <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">Direct Hiring Drives & Referrals</span>
            </li>
          </ul>

          <button className="flex items-center gap-3 px-8 py-4 bg-[#2563EB] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 w-fit">
            Explore Placement Record
            <HiArrowRight size={20} />
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default PlacementSuccess;
