import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaMicrosoft, FaAmazon, FaApple, FaFacebook } from 'react-icons/fa';

const companies = [
  { name: 'Google', icon: <FaGoogle size={28} /> },
  { name: 'Microsoft', icon: <FaMicrosoft size={28} /> },
  { name: 'Amazon', icon: <FaAmazon size={28} /> },
  { name: 'Apple', icon: <FaApple size={28} /> },
  { name: 'Meta', icon: <FaFacebook size={28} /> },
  { name: 'TCS', icon: null },
  { name: 'Infosys', icon: null },
  { name: 'Wipro', icon: null },
  { name: 'Accenture', icon: null },
];

// Duplicate the array to create a seamless infinite loop
const marqueeItems = [...companies, ...companies];

const TrustedCompanies = () => {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-[#0F172A] text-center relative z-20 overflow-hidden border-b border-gray-100 dark:border-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
          Trusted by top tech companies worldwide
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full max-w-[1600px] mx-auto flex overflow-hidden">
        
        {/* Gradient Fades for Smooth Edges */}
        <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-white dark:from-[#0F172A] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-white dark:from-[#0F172A] to-transparent z-10 pointer-events-none"></div>

        {/* Animated Track */}
        <motion.div 
          className="flex whitespace-nowrap w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {marqueeItems.map((company, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 px-8 md:px-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              {company.icon && (
                <span className="text-slate-700 dark:text-slate-300">
                  {company.icon}
                </span>
              )}
              <span className={`text-xl md:text-2xl font-extrabold text-slate-800 dark:text-slate-200 tracking-tight ${!company.icon ? 'text-2xl md:text-3xl tracking-tighter' : ''}`}>
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
