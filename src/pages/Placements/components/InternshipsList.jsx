import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { HiOutlineAcademicCap, HiOutlineClock, HiOutlineMapPin, HiXMark } from 'react-icons/hi2';

const InternshipsList = () => {
  const [internships, setInternships] = useState([]);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', resume: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/placements/internships');
        setInternships(data.data || []);
      } catch (err) {
        console.error("Failed to fetch internships", err);
      }
    };
    fetchData();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const handleApplyClick = (internship) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedInternship(null);
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
      await axios.post(`http://localhost:5000/api/placements/internships/${selectedInternship._id}/apply`, data, {
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

  if (internships.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-[#0B1120]">
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 text-sm font-bold mb-6 tracking-wide uppercase">
              🎓 Level Up Your Skills
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight mb-4">
              Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Opportunities</span>
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-gray-400 font-medium">
              Kickstart your career with exclusive internships from top companies.
            </p>
          </motion.div>
        </div>

        {/* Internships Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {internships.map((intern) => (
            <motion.div 
              key={intern._id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col group relative"
            >
              <div className="flex gap-4 items-start mb-6">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-100 dark:border-emerald-800/50 group-hover:scale-110 transition-transform">
                  <HiOutlineAcademicCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{intern.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-bold text-sm uppercase tracking-wider">{intern.company}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-slate-800/50 p-2.5 rounded-xl">
                  <HiOutlineClock className="text-emerald-500" size={18} />
                  <span className="font-bold">{intern.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 bg-emerald-50 dark:bg-emerald-900/10 p-2.5 rounded-xl border border-emerald-100/50 dark:border-emerald-800/30">
                  <span className="font-extrabold text-emerald-700 dark:text-emerald-400">{intern.stipend}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-slate-800/50 p-2.5 rounded-xl">
                  <HiOutlineMapPin className="text-emerald-500" size={18} />
                  <span className="font-bold truncate" title={intern.location}>{intern.location}</span>
                </div>
              </div>

              <button 
                onClick={() => handleApplyClick(intern)}
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-xl font-bold hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-gray-900 hover:text-white transition-all hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
              >
                Apply for Internship
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && selectedInternship && (
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">Apply for Internship</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-bold">{selectedInternship.title} @ {selectedInternship.company}</p>
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
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 dark:text-white transition-all font-medium"
                    placeholder="Enter your name"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                  <input 
                    type="email" required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 dark:text-white transition-all font-medium"
                    placeholder="student@example.com"
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Phone Number</label>
                  <input 
                    type="tel" required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-gray-900 dark:text-white transition-all font-medium"
                    placeholder="+91 9876543210"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Upload Resume (PDF)</label>
                  <input 
                    type="file" required accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 dark:file:bg-emerald-900/30 dark:file:text-emerald-400 cursor-pointer"
                    onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-3.5 rounded-xl font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-emerald-400 cursor-not-allowed' 
                        : 'bg-emerald-600 hover:bg-emerald-500 hover:shadow-emerald-500/30 active:scale-[0.98]'
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

export default InternshipsList;