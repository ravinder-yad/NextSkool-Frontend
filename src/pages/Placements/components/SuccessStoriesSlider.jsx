import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { HiStar, HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

const SuccessStoriesSlider = () => {
  const [stories, setStories] = useState([]);
  const sliderRef = useRef(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/placements/success-stories');
        setStories(data.data || []);
      } catch (err) {
        console.error("Failed to fetch success stories", err);
      }
    };
    fetchData();
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  if (stories.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-slate-950">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900"></div>
      
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-400 text-sm font-bold mb-6 tracking-wide uppercase">
                🎉 Inspiring Journeys
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight mb-4">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Stories</span>
              </h2>
              <p className="text-lg text-[#6B7280] dark:text-gray-400 font-medium">
                Hear directly from our alumni who transformed their careers and achieved their dream jobs with our guidance.
              </p>
            </motion.div>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-3">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 flex items-center justify-center transition-all shadow-sm"
            >
              <HiArrowLeft size={20} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-blue-100 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-all shadow-sm"
            >
              <HiArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-8 pt-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stories.map((story) => (
            <motion.div 
              key={story._id} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="min-w-[320px] md:min-w-[400px] w-[320px] md:w-[400px] snap-center flex-shrink-0 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-1 text-yellow-400 mb-6 drop-shadow-sm">
                {[...Array(story.rating || 5)].map((_, i) => <HiStar key={i} size={20} />)}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">"{story.title}"</h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed italic mb-8 flex-grow">
                "{story.description}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-gray-100 dark:border-slate-800 pt-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white dark:border-slate-800">
                  {story.student.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">{story.student}</h4>
                  <p className="text-gray-500 dark:text-gray-500 text-sm font-bold tracking-wide uppercase mt-0.5">Placed Alumni</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStoriesSlider;