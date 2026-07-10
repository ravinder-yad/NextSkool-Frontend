import React from 'react';
import { motion } from 'framer-motion';

const PlacementHero = () => {
  const floatCards = [
    { icon: '🏆', title: 'Highest Package', value: '₹24 LPA', position: 'top-[5%] -left-16 md:-left-24', delay: 0 },
    { icon: '💼', title: 'Hiring Companies', value: '500+', position: 'top-[15%] -right-12 md:-right-24', delay: 1 },
    { icon: '👨‍🎓', title: 'Placement Rate', value: '95%', position: 'bottom-[25%] -left-16 md:-left-28', delay: 2 },
    { icon: '⭐', title: 'Student Rating', value: '4.9', position: 'bottom-[10%] -right-12 md:-right-24', delay: 3 },
    { icon: '📄', title: 'Offer Letter', value: 'Verified', position: 'top-[45%] -left-20 md:-left-32', delay: 1.5 },
    { icon: '🚀', title: 'Status', value: 'Job Ready', position: 'top-[60%] -right-20 md:-right-32', delay: 2.5 },
  ];

  const bottomStats = [
    { value: '95%', label: 'Placement Rate' },
    { value: '500+', label: 'Companies' },
    { value: '₹24 LPA', label: 'Highest' },
    { value: '₹7.5 LPA', label: 'Average' },
    { value: '50K+', label: 'Students' },
  ];

  const companies = ["Google", "Amazon", "Microsoft", "Adobe", "TCS", "Infosys", "Accenture", "Capgemini"];

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 overflow-hidden bg-white dark:bg-[#0B1120]">
      
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute top-[20%] right-[0%] w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* LEFT SIDE (45%) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#111827] dark:text-white tracking-tight leading-[1.15] mb-6"
            >
              Get Hired by <br className="hidden lg:block"/>
              <span className="text-[#2563EB]">Top Companies.</span><br />
              <span className="text-3xl md:text-4xl lg:text-5xl mt-3 block">Build Skills.<br/>Crack Interviews.<br/>Start Your Dream Career.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#6B7280] dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              NextSkool Placement Cell helps students prepare for interviews, build resumes, connect with recruiters and secure high-paying jobs.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-10 text-sm font-bold text-gray-700 dark:text-gray-300"
            >
              <span className="flex items-center gap-1 text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
              <span>4.9 Rating</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>👨‍🎓 50K+ Students</span>
            </motion.div>

            {/* Company Logos Scroller */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-full overflow-hidden relative max-w-lg mx-auto lg:mx-0 mt-8"
            >
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white dark:from-[#0B1120] to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white dark:from-[#0B1120] to-transparent z-10"></div>
              <div className="flex animate-marquee whitespace-nowrap py-2">
                {[...companies, ...companies].map((company, index) => (
                  <span key={index} className="mx-6 text-xl lg:text-2xl font-black text-gray-800/80 dark:text-gray-300 uppercase tracking-[0.2em]">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE (55%) */}
          <div className="w-full lg:w-[55%] relative flex justify-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-[450px] aspect-square">
              <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-[80px]"></div>
              
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl z-10"
              >
                <img 
                  src="/src/assets/images/placement_student.jpg" 
                  alt="Student holding offer letter" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>

              {/* Floating Cards */}
              {floatCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [-5, 5, -5] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.5 + card.delay * 0.2 },
                    scale: { duration: 0.5, delay: 0.5 + card.delay * 0.2 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: card.delay } 
                  }}
                  className={`absolute ${card.position} z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/50 dark:border-gray-700 flex items-center gap-3 w-max`}
                >
                  <div className="text-2xl">{card.icon}</div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{card.title}</p>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{card.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Hero Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-24 w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-lg p-8 relative z-30"
        >
          <div className="flex flex-wrap justify-between items-center gap-6">
            {bottomStats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center flex-1 min-w-[100px]">
                  <span className="text-3xl lg:text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-[#6B7280] dark:text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
                {/* Dividers */}
                {index < bottomStats.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PlacementHero;
