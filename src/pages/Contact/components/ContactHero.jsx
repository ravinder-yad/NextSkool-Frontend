import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = ({ data }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white dark:bg-[#0F172A]">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] dark:text-white leading-[1.1] mb-6 tracking-tight">
              {data?.hero?.title || 'Contact NextSkool'}
            </h1>
            <p className="text-lg sm:text-xl text-[#6B7280] dark:text-slate-300 mb-8 leading-relaxed">
              {data?.hero?.subtitle || "We are Here To Help You."} <br/>
              {data?.hero?.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;