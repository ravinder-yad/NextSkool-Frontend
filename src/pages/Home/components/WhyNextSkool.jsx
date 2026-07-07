import React from 'react';
import { 
  HiOutlineVideoCamera, 
  HiOutlineAcademicCap, 
  HiOutlineBriefcase, 
  HiOutlineFolderOpen,
  HiOutlineUserGroup,
  HiOutlineDevicePhoneMobile
} from 'react-icons/hi2';

const features = [
  { 
    title: 'Live Interactive Classes', 
    icon: HiOutlineVideoCamera, 
    desc: 'Join real-time sessions with industry experts. Ask questions, participate in discussions, and clear your doubts instantly.', 
    color: 'text-blue-600 dark:text-blue-400', 
    bg: 'bg-blue-50 dark:bg-blue-500/10' 
  },
  { 
    title: 'Recognized Certifications', 
    icon: HiOutlineAcademicCap, 
    desc: 'Earn certificates that are valued by top tech companies worldwide and add significant weight to your resume.', 
    color: 'text-purple-600 dark:text-purple-400', 
    bg: 'bg-purple-50 dark:bg-purple-500/10' 
  },
  { 
    title: '100% Placement Assistance', 
    icon: HiOutlineBriefcase, 
    desc: 'Get dedicated career support including resume building, LinkedIn profile optimization, and mock interviews.', 
    color: 'text-emerald-600 dark:text-emerald-400', 
    bg: 'bg-emerald-50 dark:bg-emerald-500/10' 
  },
  { 
    title: 'Real-World Projects', 
    icon: HiOutlineFolderOpen, 
    desc: 'Don\'t just watch tutorials. Build a strong portfolio with hands-on, industry-level applications.', 
    color: 'text-orange-600 dark:text-orange-400', 
    bg: 'bg-orange-50 dark:bg-orange-500/10' 
  },
  { 
    title: 'Top 1% Industry Mentors', 
    icon: HiOutlineUserGroup, 
    desc: 'Learn directly from veteran developers and designers working in top product companies like Google and Microsoft.', 
    color: 'text-pink-600 dark:text-pink-400', 
    bg: 'bg-pink-50 dark:bg-pink-500/10' 
  },
  { 
    title: 'Lifetime Course Access', 
    icon: HiOutlineDevicePhoneMobile, 
    desc: 'Learn at your own pace anytime, anywhere with lifetime access to all recorded sessions and study materials.', 
    color: 'text-indigo-600 dark:text-indigo-400', 
    bg: 'bg-indigo-50 dark:bg-indigo-500/10' 
  },
];

const WhyNextSkool = () => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0B1121] relative z-20 border-t border-slate-100 dark:border-slate-800/60">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">
            Why Choose NextSkool?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:text-lg">
            We provide the perfect ecosystem to accelerate your tech career. Stop watching random tutorials and start structured learning.
          </p>
        </div>
        
        {/* Features Grid - No bulky cards, just clean layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
          {features.map((feat, idx) => (
            <div key={idx} className="flex gap-5 group cursor-default">
              
              {/* Icon Container */}
              <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${feat.bg} transition-transform duration-300 group-hover:-translate-y-1`}>
                <feat.icon size={32} className={`${feat.color} transition-transform duration-300 group-hover:scale-110`} />
              </div>
              
              {/* Text Content */}
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyNextSkool;
