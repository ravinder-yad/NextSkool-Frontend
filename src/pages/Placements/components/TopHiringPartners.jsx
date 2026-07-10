import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineBuildingOffice2, HiXMark, HiOutlineMapPin, HiOutlineGlobeAlt, HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

const API_URL = 'http://localhost:5000/api/placements/companies';

const TopHiringPartners = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const { data } = await axios.get(API_URL);
        // Only show Active and Hiring companies
        const activeCompanies = data.data.filter(c => c.hiringStatus !== 'Inactive');
        setCompanies(activeCompanies);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCompany) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCompany]);

  if (loading || companies.length === 0) return null;

  // Duplicate heavily to ensure smooth continuous marquee even on ultra-wide screens
  const marqueeItems = [...companies, ...companies, ...companies, ...companies, ...companies, ...companies];

  return (
    <section className="py-24 bg-white dark:bg-[#0B1120] border-t border-gray-100 dark:border-slate-800/50 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-[radial-gradient(ellipse_at_top,#eff6ff_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,#1e3a8a20_0%,transparent_70%)] opacity-70"></div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 mb-16 text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
            💼 500+ Hiring Partners
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight mb-6 leading-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Industry Leaders</span>
          </h2>
          <p className="text-lg md:text-xl text-[#6B7280] dark:text-slate-400 max-w-3xl font-medium">
            Our graduates are highly sought after by top MNCs, fast-growing startups, and global tech giants.
          </p>
        </motion.div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex flex-col gap-6 overflow-x-hidden group">
        {/* Edge Gradient Masks for smooth fade out */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-[#0B1120] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-[#0B1120] to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Track 1 (Moves Left) */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-6 whitespace-nowrap py-4 z-10">
          {marqueeItems.map((company, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedCompany(company)}
              className="group/card relative flex items-center gap-5 px-8 py-5 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent dark:from-blue-900/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 group-hover/card:bg-white dark:group-hover/card:bg-slate-900 group-hover/card:shadow-md transition-all duration-300">
                {company.logo ? (
                  <img src={company.logo} alt={company.name} className="w-10 h-10 object-contain" />
                ) : (
                  <HiOutlineBuildingOffice2 size={32} />
                )}
              </div>
              
              <div className="relative z-10 pr-4">
                <h3 className="font-extrabold text-[#111827] dark:text-white text-2xl tracking-tight mb-1">{company.name}</h3>
                <p className="text-xs font-bold text-[#6B7280] dark:text-slate-400 uppercase tracking-widest">{company.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Details Modal */}
      <AnimatePresence>
        {selectedCompany && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCompany(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-800 z-10"
            >
              <button 
                onClick={() => setSelectedCompany(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full flex items-center justify-center text-gray-500 transition-colors z-20"
              >
                <HiXMark size={24} />
              </button>

              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-slate-700 shrink-0 shadow-sm">
                    {selectedCompany.logo ? (
                      <img src={selectedCompany.logo} alt={selectedCompany.name} className="w-12 h-12 object-contain" />
                    ) : (
                      <HiOutlineBuildingOffice2 size={40} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-1">{selectedCompany.name}</h3>
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider rounded-full">
                      {selectedCompany.industry}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {selectedCompany.location && (
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <HiOutlineMapPin size={20} className="text-blue-500" />
                      <span className="font-medium">{selectedCompany.location}</span>
                    </div>
                  )}
                  {selectedCompany.description && (
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                      {selectedCompany.description}
                    </p>
                  )}
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-slate-800 flex gap-4">
                  {selectedCompany.website ? (
                    <a 
                      href={selectedCompany.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-bold transition-colors"
                    >
                      <HiOutlineGlobeAlt size={20} />
                      Visit Website
                    </a>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-slate-800 text-gray-400 py-3 px-4 rounded-xl font-bold cursor-not-allowed">
                      Website Not Available
                    </div>
                  )}
                  {selectedCompany.careerUrl && (
                    <a 
                      href={selectedCompany.careerUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 py-3 px-4 rounded-xl font-bold transition-colors"
                    >
                      Careers Page
                      <HiOutlineArrowTopRightOnSquare size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default TopHiringPartners;
