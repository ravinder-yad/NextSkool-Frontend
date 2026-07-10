import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { HiOutlineBriefcase, HiOutlineCurrencyRupee, HiOutlineMapPin, HiOutlineClock, HiArrowRight, HiXMark } from 'react-icons/hi2';

const JobOpportunitiesList = () => {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/placements/jobs');
        setJobs(data.data || []);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      }
    };
    fetchData();
  }, []);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', resume: null });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setFormData({ name: '', email: '', phone: '', resume: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.resume) {
      toast.error('Please upload your resume');
      return;
    }

    setIsSubmitting(true);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('resume', formData.resume);

    try {
      await axios.post(`http://localhost:5000/api/placements/jobs/${selectedJob._id}/apply`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success('Application submitted successfully!');
      closeModal();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (jobs.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/3"></div>
      
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-400 text-sm font-bold mb-6 tracking-wide uppercase">
              🚀 Active Openings
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight mb-4">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Job Opportunities</span>
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-gray-400 font-medium">
              Exclusive full-time roles and fresh opportunities tailored for NextSkool alumni and current students.
            </p>
          </motion.div>
        </div>

        {/* Jobs Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {jobs.map((job) => {
            const formattedDate = job.lastDate 
              ? new Date(job.lastDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
              : 'N/A';

            return (
              <motion.div 
                variants={itemVariants}
                key={job._id} 
                className="group relative bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Header: Logo & Company */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 shadow-inner border border-blue-100/50 dark:border-slate-600/50">
                      <HiOutlineBriefcase size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#111827] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                        {job.title}
                      </h3>
                      <p className="text-base font-bold text-gray-500 dark:text-gray-400 mt-1">{job.company}</p>
                    </div>
                  </div>

                  {/* Badges Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="flex flex-col bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl border border-gray-100 dark:border-slate-700/50">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1"><HiOutlineBriefcase size={14}/> Experience</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{job.experience}</span>
                    </div>
                    <div className="flex flex-col bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl border border-gray-100 dark:border-slate-700/50">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1"><HiOutlineMapPin size={14}/> Location</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white truncate" title={job.location}>{job.location}</span>
                    </div>
                    <div className="flex flex-col bg-emerald-50/50 dark:bg-emerald-900/10 p-3 rounded-xl border border-emerald-100/50 dark:border-emerald-800/30 col-span-2">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest mb-1"><HiOutlineCurrencyRupee size={14}/> Salary Package</span>
                      <span className="text-sm font-black text-emerald-700 dark:text-emerald-400">{job.salary}</span>
                    </div>
                  </div>

                  {/* Footer (Deadline & Apply) */}
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100 dark:border-slate-800">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <HiOutlineClock /> Apply By
                      </p>
                      <p className="text-sm font-bold text-rose-500 dark:text-rose-400">{formattedDate}</p>
                    </div>
                    
                    <button 
                      onClick={() => handleApplyClick(job)}
                      className="group/btn relative overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2.5 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 group-hover/btn:text-white transition-colors">Apply Now</span>
                      <HiArrowRight className="relative z-10 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" size={16} />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            ></motion.div>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-slate-800 z-10 overflow-hidden"
            >
              {/* Modal Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">Apply for Job</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold">{selectedJob.title} @ {selectedJob.company}</p>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full text-gray-500 transition-colors"
                >
                  <HiXMark size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
                  <input 
                    type="text" required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 dark:text-white transition-all font-medium"
                    placeholder="Enter your name"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                  <input 
                    type="email" required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 dark:text-white transition-all font-medium"
                    placeholder="student@example.com"
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Phone Number</label>
                  <input 
                    type="tel" required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 dark:text-white transition-all font-medium"
                    placeholder="+91 9876543210"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Upload Resume (PDF)</label>
                  <input 
                    type="file" required accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900/30 dark:file:text-blue-400 cursor-pointer"
                    onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-3.5 rounded-xl font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-[0.98]'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : 'Submit Application'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default JobOpportunitiesList;