import React from 'react';
import { 
  HiOutlineCodeBracket, 
  HiOutlineCpuChip, 
  HiOutlineChartBar, 
  HiOutlineCloud,
  HiOutlinePaintBrush,
  HiOutlineDevicePhoneMobile,
  HiOutlineLockClosed,
  HiOutlineMegaphone
} from 'react-icons/hi2';

const categories = [
  { name: 'Web Development', icon: HiOutlineCodeBracket, color: 'text-blue-600 dark:text-blue-400', line: 'bg-blue-500', lightBg: 'bg-blue-50 dark:bg-blue-500/10' },
  { name: 'Artificial Intelligence', icon: HiOutlineCpuChip, color: 'text-purple-600 dark:text-purple-400', line: 'bg-purple-500', lightBg: 'bg-purple-50 dark:bg-purple-500/10' },
  { name: 'Data Science', icon: HiOutlineChartBar, color: 'text-emerald-600 dark:text-emerald-400', line: 'bg-emerald-500', lightBg: 'bg-emerald-50 dark:bg-emerald-500/10' },
  { name: 'Cloud Computing', icon: HiOutlineCloud, color: 'text-cyan-600 dark:text-cyan-400', line: 'bg-cyan-500', lightBg: 'bg-cyan-50 dark:bg-cyan-500/10' },
  { name: 'UI/UX Design', icon: HiOutlinePaintBrush, color: 'text-pink-600 dark:text-pink-400', line: 'bg-pink-500', lightBg: 'bg-pink-50 dark:bg-pink-500/10' },
  { name: 'Android', icon: HiOutlineDevicePhoneMobile, color: 'text-orange-600 dark:text-orange-400', line: 'bg-orange-500', lightBg: 'bg-orange-50 dark:bg-orange-500/10' },
  { name: 'Cyber Security', icon: HiOutlineLockClosed, color: 'text-red-600 dark:text-red-400', line: 'bg-red-500', lightBg: 'bg-red-50 dark:bg-red-500/10' },
  { name: 'Digital Marketing', icon: HiOutlineMegaphone, color: 'text-amber-600 dark:text-amber-400', line: 'bg-amber-500', lightBg: 'bg-amber-50 dark:bg-amber-500/10' },
];

const Categories = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50/50 dark:bg-[#0B1121] relative z-20 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">Explore Top Categories</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:text-lg">Discover the perfect course to advance your career. Choose from our wide range of in-demand skills.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-white dark:bg-[#0F172A] rounded-2xl p-6 md:p-8 text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-slate-800"
            >
              {/* Colorful Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 transition-transform duration-300 origin-left scale-x-75 group-hover:scale-x-100 ${cat.line}`}></div>
              
              {/* Subtle Background Glow on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${cat.lightBg} -z-10`}></div>

              <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-sm ${cat.lightBg}`}>
                <cat.icon size={36} className={`${cat.color} group-hover:rotate-6 transition-transform duration-300`} />
              </div>
              
              <h3 className="font-extrabold text-slate-900 dark:text-white text-lg md:text-xl mb-2">{cat.name}</h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">120+ Courses</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
