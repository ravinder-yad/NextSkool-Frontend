import React from 'react';
import { 
  HiOutlineCodeBracket, 
  HiOutlineCpuChip, 
  HiOutlineChartBar, 
  HiOutlineCloud,
  HiOutlinePaintBrush,
  HiOutlineDevicePhoneMobile,
  HiOutlineLockClosed,
  HiOutlineMegaphone,
  HiArrowRight
} from 'react-icons/hi2';

const categories = [
  { name: 'Web Development', icon: HiOutlineCodeBracket, color: 'text-blue-600 dark:text-blue-400', line: 'bg-blue-500', lightBg: 'bg-blue-50 dark:bg-blue-500/20' },
  { name: 'Artificial Intelligence', icon: HiOutlineCpuChip, color: 'text-purple-600 dark:text-purple-400', line: 'bg-purple-500', lightBg: 'bg-purple-50 dark:bg-purple-500/20' },
  { name: 'Data Science', icon: HiOutlineChartBar, color: 'text-emerald-600 dark:text-emerald-400', line: 'bg-emerald-500', lightBg: 'bg-emerald-50 dark:bg-emerald-500/20' },
  { name: 'Cloud Computing', icon: HiOutlineCloud, color: 'text-cyan-600 dark:text-cyan-400', line: 'bg-cyan-500', lightBg: 'bg-cyan-50 dark:bg-cyan-500/20' },
  { name: 'UI/UX Design', icon: HiOutlinePaintBrush, color: 'text-pink-600 dark:text-pink-400', line: 'bg-pink-500', lightBg: 'bg-pink-50 dark:bg-pink-500/20' },
  { name: 'Android', icon: HiOutlineDevicePhoneMobile, color: 'text-orange-600 dark:text-orange-400', line: 'bg-orange-500', lightBg: 'bg-orange-50 dark:bg-orange-500/20' },
  { name: 'Cyber Security', icon: HiOutlineLockClosed, color: 'text-red-600 dark:text-red-400', line: 'bg-red-500', lightBg: 'bg-red-50 dark:bg-red-500/20' },
  { name: 'Digital Marketing', icon: HiOutlineMegaphone, color: 'text-amber-600 dark:text-amber-400', line: 'bg-amber-500', lightBg: 'bg-amber-50 dark:bg-amber-500/20' },
];

const Categories = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50/50 dark:bg-[#0B1121] relative z-20 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Explore Top Categories</h2>
            <p className="text-slate-600 dark:text-slate-400 md:text-lg">Discover the perfect course to advance your career. Choose from our wide range of in-demand skills.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-[#2563EB] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group">
            View All Categories 
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-white dark:bg-[#0F172A] rounded-2xl p-6 md:p-8 text-left hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(37,99,235,0.05)] border border-gray-100 dark:border-slate-800"
            >
              {/* Colorful Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 ${cat.line}`}></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm ${cat.lightBg}`}>
                  <cat.icon size={28} className={`${cat.color}`} />
                </div>
                
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 dark:bg-slate-800 text-slate-400 group-hover:text-white transition-colors duration-300 ${cat.line.replace('bg-', 'group-hover:bg-')}`}>
                  <HiArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" size={18} />
                </div>
              </div>
              
              <h3 className="font-extrabold text-slate-900 dark:text-white text-lg md:text-xl mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cat.name}</h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">120+ Courses Available</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
