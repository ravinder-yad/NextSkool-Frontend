import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const AboutHero = ({ data }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white dark:bg-[#0F172A]">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              About NextSkool
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#111827] dark:text-white leading-[1.1] mb-6 tracking-tight">
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Students</span><br />
              Building Careers
            </h1>
            
            <p className="text-lg sm:text-xl text-[#6B7280] dark:text-slate-300 mb-8 leading-relaxed">
              {data?.hero?.description || "We are on a mission to democratize premium tech education and help you build a career that matters."}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/explore" className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2 group">
                Explore Courses
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-6 py-3.5 bg-white dark:bg-slate-800 text-gray-700 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all">
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-[600px] aspect-square rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-2xl">
              <img 
                src={data?.hero?.illustration || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"} 
                alt="NextSkool Students" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 sm:-left-12 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 max-w-xs"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50K+</div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">95%</div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Placement</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;