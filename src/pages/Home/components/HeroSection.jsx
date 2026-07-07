import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlinePlayCircle, HiOutlineRocketLaunch } from 'react-icons/hi2';
import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa';
import heroIllustration from '../../../assets/images/hero-illustration.jpg';

const rotatingTexts = ["Industry Experts.", "Top Tech Mentors.", "Real-World Projects."];

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white dark:bg-[#0F172A] transition-colors duration-300 min-h-[90vh] flex items-center">
      
      {/* Subtle Background Decorative Circles */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[#EFF6FF] dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-50 dark:bg-blue-800/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16">
          
          {/* LEFT SIDE (Content) */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center text-center lg:text-left mt-8 lg:mt-0">
            
            {/* Heading - Fully Responsive Typography */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[40px] leading-[1.1] sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-[72px] font-bold tracking-tight mb-6 flex flex-col"
            >
              <span className="text-[#111827] dark:text-white mb-2 xl:mb-3">Learn Without Limits.</span>
              <span className="text-[#2563EB] mb-2 xl:mb-3">Build Your Future With</span>
              <div className="text-[#111827] dark:text-white min-h-[50px] sm:min-h-[80px] lg:min-h-[60px] xl:min-h-[80px] 2xl:min-h-[100px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={textIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {rotatingTexts[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg xl:text-xl text-[#6B7280] dark:text-slate-400 mb-8 xl:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Master MERN Stack, AI, Data Science, Cyber Security and more with live classes, real-world projects, certificates, and placement assistance.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button className="w-full sm:w-auto px-6 py-3 xl:px-8 xl:py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-md shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-base xl:text-[17px]">
                <HiOutlineRocketLaunch size={22} />
                Start Learning
              </button>
              <button className="w-full sm:w-auto px-6 py-3 xl:px-8 xl:py-4 bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#111827] dark:text-white font-bold rounded-md border-2 border-gray-200 dark:border-slate-700 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 text-base xl:text-[17px]">
                <HiOutlinePlayCircle size={24} className="text-[#111827] dark:text-white" />
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* RIGHT SIDE (Visual) - Responsive Circular Image with Orbiting Icons */}
          <div className="w-full lg:w-[45%] flex justify-center items-center relative mt-12 lg:mt-0">
            {/* Responsive container size to prevent overflow on laptops */}
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[380px] lg:h-[380px] xl:w-[480px] xl:h-[480px] 2xl:w-[540px] 2xl:h-[540px]">
              
              {/* Circular Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-5 sm:inset-8 lg:inset-10 xl:inset-12 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-50 dark:ring-slate-800 z-10 bg-white"
              >
                <img 
                  src={heroIllustration} 
                  alt="Student learning coding on laptop" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
                />
              </motion.div>

              {/* Decorative Dashed Orbit Ring */}
              <div className="absolute inset-0 border-2 border-dashed border-blue-200 dark:border-slate-700 rounded-full z-0 opacity-50"></div>

              {/* Orbiting Icons Container */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute inset-0 z-20"
              >
                {/* Top Icon - React */}
                <div className="absolute -top-4 sm:-top-6 lg:-top-5 xl:-top-7 left-1/2 -translate-x-1/2">
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }} 
                    className="w-10 h-10 sm:w-14 sm:h-14 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-white dark:bg-slate-800 rounded-full shadow-xl border border-slate-100 dark:border-slate-700 flex items-center justify-center text-[#61DAFB] text-2xl sm:text-3xl xl:text-4xl"
                  >
                    <FaReact />
                  </motion.div>
                </div>

                {/* Right Icon - Node.js */}
                <div className="absolute top-1/2 -right-4 sm:-right-6 lg:-right-5 xl:-right-7 -translate-y-1/2">
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }} 
                    className="w-10 h-10 sm:w-14 sm:h-14 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-white dark:bg-slate-800 rounded-full shadow-xl border border-slate-100 dark:border-slate-700 flex items-center justify-center text-[#339933] text-2xl sm:text-3xl xl:text-4xl"
                  >
                    <FaNodeJs />
                  </motion.div>
                </div>

                {/* Bottom Icon - Python */}
                <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-5 xl:-bottom-7 left-1/2 -translate-x-1/2">
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }} 
                    className="w-10 h-10 sm:w-14 sm:h-14 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-white dark:bg-slate-800 rounded-full shadow-xl border border-slate-100 dark:border-slate-700 flex items-center justify-center text-[#3776AB] text-2xl sm:text-3xl xl:text-4xl"
                  >
                    <FaPython />
                  </motion.div>
                </div>

                {/* Left Icon - AWS */}
                <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-5 xl:-left-7 -translate-y-1/2">
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }} 
                    className="w-10 h-10 sm:w-14 sm:h-14 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-white dark:bg-slate-800 rounded-full shadow-xl border border-slate-100 dark:border-slate-700 flex items-center justify-center text-[#FF9900] text-2xl sm:text-3xl xl:text-4xl"
                  >
                    <FaAws />
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
