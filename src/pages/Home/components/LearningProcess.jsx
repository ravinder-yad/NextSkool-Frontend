import React from 'react';
import { 
  HiOutlineCursorArrowRays, 
  HiOutlineComputerDesktop, 
  HiOutlineCodeBracketSquare, 
  HiOutlineTrophy 
} from 'react-icons/hi2';

const steps = [
  { 
    num: '01', 
    title: 'Enroll in Course', 
    desc: 'Browse our catalog, pick the skill you want to master, and join the program.', 
    icon: HiOutlineCursorArrowRays,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    ring: 'ring-blue-100 dark:ring-blue-500/20'
  },
  { 
    num: '02', 
    title: 'Learn from Experts', 
    desc: 'Attend live interactive classes and watch high-quality recorded sessions.', 
    icon: HiOutlineComputerDesktop,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-500/10',
    ring: 'ring-purple-100 dark:ring-purple-500/20'
  },
  { 
    num: '03', 
    title: 'Build Projects', 
    desc: 'Apply your theoretical knowledge by building real-world, industry-level projects.', 
    icon: HiOutlineCodeBracketSquare,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10',
    ring: 'ring-emerald-100 dark:ring-emerald-500/20'
  },
  { 
    num: '04', 
    title: 'Get Certified', 
    desc: 'Clear the exams, earn your certificate, and sit for guaranteed placement drives.', 
    icon: HiOutlineTrophy,
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-500/10',
    ring: 'ring-amber-100 dark:ring-amber-500/20'
  },
];

const LearningProcess = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50 dark:bg-[#0B1121] relative z-20 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#2563EB] dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">
            Our Learning Process
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:text-lg">
            A highly structured, proven path designed to take you from a complete beginner to a highly-paid, industry-ready professional.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
          
          {/* Dashed Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] border-t-2 border-dashed border-slate-300 dark:border-slate-700/60 z-0"></div>
          
          {/* Connecting Line (Mobile Vertical) */}
          <div className="block md:hidden absolute top-0 bottom-0 left-[39px] border-l-2 border-dashed border-slate-300 dark:border-slate-700/60 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center group">
              
              {/* Icon / Number Node */}
              <div className="shrink-0 relative mb-0 md:mb-6 mr-6 md:mr-0">
                <div className="absolute inset-0 rounded-full bg-white dark:bg-[#0B1121] -z-10"></div> {/* Covers the dashed line */}
                <div className={`w-[80px] h-[80px] md:w-[88px] md:h-[88px] rounded-full ${step.bg} flex items-center justify-center border-[6px] border-white dark:border-[#0B1121] ring-1 ring-slate-200 dark:ring-slate-800 group-hover:ring-4 ${step.ring} transition-all duration-300 cursor-default`}>
                  <step.icon size={36} className={`${step.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                {/* Step Number Badge */}
                <div className={`absolute -bottom-2 -right-2 md:-bottom-2 md:right-0 w-8 h-8 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 font-black text-sm border-[3px] border-white dark:border-[#0B1121] shadow-sm`}>
                  {idx + 1}
                </div>
              </div>
              
              {/* Text Content */}
              <div className="pt-2 md:pt-0">
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm md:text-[15px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed max-w-[240px] mx-auto md:mx-auto">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningProcess;
