import React from 'react';
import { HiOutlineRocketLaunch, HiOutlineEye } from 'react-icons/hi2';

const AboutMission = ({ data }) => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0B1120]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="bg-white dark:bg-slate-800 p-8 lg:p-12 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-50 dark:bg-blue-500/10 rounded-full transition-transform group-hover:scale-150 duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <HiOutlineRocketLaunch size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {data?.mission?.description || "To provide quality education, real-world projects, industry mentors, and unmatched placement support to every aspiring tech professional."}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 lg:p-12 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-purple-50 dark:bg-purple-500/10 rounded-full transition-transform group-hover:scale-150 duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <HiOutlineEye size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {data?.vision?.description || "To become India's most trusted learning platform where talent meets opportunity seamlessly."}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMission;