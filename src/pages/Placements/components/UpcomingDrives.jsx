import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineCalendarDays, HiOutlineMapPin, HiOutlineBriefcase, HiOutlineCurrencyRupee, HiArrowRight, HiXMark, HiOutlineDocumentArrowUp } from 'react-icons/hi2';

const UpcomingDrives = () => {
  const [drives, setDrives] = useState([]);
  const [selectedDrive, setSelectedDrive] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/placements/drives');
        setDrives(data.data || []);
      } catch (err) {}
    };
    fetchData();
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedDrive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedDrive]);

  if (drives.length === 0) return null;

  const handleApplyClick = (drive) => {
    setSelectedDrive(drive);
    setSubmitSuccess(false);
    setErrorMsg('');
    setFormData({ name: '', email: '', phone: '' });
    setResumeFile(null);
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setErrorMsg('Please upload your resume.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('resume', resumeFile);

    try {
      await axios.post(`http://localhost:5000/api/placements/drives/${selectedDrive._id}/apply`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSubmitSuccess(true);
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-[#0B1120] border-t border-gray-100 dark:border-slate-800/50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-400 text-sm font-bold mb-6 tracking-wide uppercase">
              🚀 Hiring Now
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight mb-4">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Placement Drives</span>
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-gray-400 font-medium">
              Don't miss out on these exclusive campus recruitment opportunities. Register now to secure your interview slot.
            </p>
          </motion.div>
        </div>

        {/* Drives Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {drives.map((drive) => {
            const formattedDate = new Date(drive.date).toLocaleDateString('en-US', {
              day: 'numeric', month: 'short', year: 'numeric'
            });

            return (
              <motion.div 
                variants={itemVariants}
                key={drive._id} 
                className="group relative bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full flex-grow">
                  {/* Header: Company & Badges */}
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <h3 className="text-xl font-extrabold text-[#111827] dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {drive.company}
                      </h3>
                      <div className="flex flex-col gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-bold w-max">
                          <HiOutlineBriefcase size={14} />
                          {drive.jobRole}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-xs font-bold w-max">
                          <HiOutlineCurrencyRupee size={14} />
                          {drive.salaryPackage}
                        </span>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                      Open
                    </span>
                  </div>

                  {/* Details Grid (Stacked for narrow cards) */}
                  <div className="flex flex-col gap-3 mb-6 p-4 bg-gray-50/50 dark:bg-slate-800/30 rounded-2xl border border-gray-100 dark:border-slate-700/50 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-500 shadow-sm border border-gray-100 dark:border-slate-700 shrink-0">
                        <HiOutlineCalendarDays size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">Date</p>
                        <p className="text-xs font-bold text-gray-900 dark:text-white">{formattedDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-indigo-500 shadow-sm border border-gray-100 dark:border-slate-700 shrink-0">
                        <HiOutlineMapPin size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">Venue</p>
                        <p className="text-xs font-bold text-gray-900 dark:text-white line-clamp-1" title={`${drive.mode} - ${drive.venue}`}>{drive.mode} - {drive.venue}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-auto">
                  <button 
                    onClick={() => handleApplyClick(drive)}
                    className="w-full group/btn relative overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3.5 rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 group-hover/btn:text-white transition-colors">Apply for Drive</span>
                    <HiArrowRight className="relative z-10 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" size={20} />
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
        {selectedDrive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitting && setSelectedDrive(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-800 z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedDrive(null)}
                disabled={isSubmitting}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full flex items-center justify-center text-gray-500 transition-colors z-20 disabled:opacity-50"
              >
                <HiXMark size={24} />
              </button>

              <div className="p-8">
                {submitSuccess ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                      🎉
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Application Submitted!</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      Your application for {selectedDrive.company} has been sent to the placement cell.
                    </p>
                    <button 
                      onClick={() => setSelectedDrive(null)}
                      className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">Apply for {selectedDrive.company}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Role: {selectedDrive.jobRole} • {selectedDrive.salaryPackage}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {errorMsg && (
                        <div className="p-3 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-medium">
                          {errorMsg}
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Email</label>
                          <input 
                            type="email" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                          <input 
                            type="tel" 
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Upload Resume (PDF/DOC)</label>
                        <div className="relative border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-xl p-6 text-center hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                          <input 
                            type="file" 
                            required
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <div className="pointer-events-none flex flex-col items-center">
                            <HiOutlineDocumentArrowUp size={32} className="text-gray-400 mb-2" />
                            {resumeFile ? (
                              <p className="text-blue-600 font-bold">{resumeFile.name}</p>
                            ) : (
                              <>
                                <p className="text-gray-600 dark:text-gray-300 font-medium">Click or drag file to upload</p>
                                <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default UpcomingDrives;