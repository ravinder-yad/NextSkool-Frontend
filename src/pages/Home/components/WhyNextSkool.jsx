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
  { title: 'Live Classes', icon: HiOutlineVideoCamera, desc: 'Interactive sessions with industry experts to clear your doubts instantly.' },
  { title: 'Industry Certificate', icon: HiOutlineAcademicCap, desc: 'Earn certificates recognized by top tech companies worldwide.' },
  { title: 'Placement Assistance', icon: HiOutlineBriefcase, desc: 'Dedicated career support, resume building, and mock interviews.' },
  { title: 'Real Projects', icon: HiOutlineFolderOpen, desc: 'Build a strong portfolio with hands-on, real-world applications.' },
  { title: 'Expert Mentors', icon: HiOutlineUserGroup, desc: 'Learn directly from veterans working in top product companies.' },
  { title: 'Lifetime Access', icon: HiOutlineDevicePhoneMobile, desc: 'Learn anytime, anywhere with lifetime access to recorded sessions.' },
];

const WhyNextSkool = () => {
  return (
    <section className="py-20 bg-slate-900 dark:bg-slate-950 text-white relative z-20 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NextSkool?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">We provide the best environment and resources for you to succeed in your tech career.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="flex gap-4 p-6 md:p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors group">
              <div className="shrink-0 w-14 h-14 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                <feat.icon size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNextSkool;
