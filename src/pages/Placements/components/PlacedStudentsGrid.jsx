import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMapPin, HiOutlineBriefcase, HiOutlineCurrencyRupee, HiXMark } from 'react-icons/hi2';

const PlacedStudentsGrid = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/placements/students');
        setStudents(data.data || []);
      } catch (err) {
        console.error("Failed to fetch students", err);
      }
    };
    fetchData();
  }, []);

  // Ensure modal background lock
  useEffect(() => {
    if (selectedStudent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedStudent]);

  if (students.length === 0) return null;

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

  // Generate a random gradient for avatars based on the student's name length or index
  const getAvatarGradient = (index) => {
    const gradients = [
      'from-blue-500 to-indigo-500',
      'from-purple-500 to-pink-500',
      'from-emerald-400 to-teal-500',
      'from-orange-400 to-rose-400',
      'from-cyan-400 to-blue-500',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-400 text-sm font-bold mb-6 tracking-wide uppercase">
              ⭐ Alumni Success
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Shining Stars</span>
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-gray-400 font-medium">
              Meet our recent graduates who have secured high-paying roles in top companies globally.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {students.map((student, index) => (
            <motion.div 
              variants={itemVariants}
              key={student._id} 
              onClick={() => setSelectedStudent({ ...student, avatarIndex: index })}
              className="group cursor-pointer relative bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                
                {/* Header (Avatar & Name) */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl font-bold text-white shadow-md bg-gradient-to-br ${getAvatarGradient(index)}`}>
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#111827] dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {student.name}
                    </h3>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">
                      {student.course}
                    </p>
                  </div>
                </div>

                {/* Company & Role Badge */}
                <div className="mb-6 p-4 bg-gray-50/50 dark:bg-slate-800/30 rounded-2xl border border-gray-100 dark:border-slate-700/50">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-2.5">
                      <HiOutlineBriefcase className="text-blue-500 shrink-0 mt-0.5" size={16} />
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Role at {student.company}</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{student.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2.5">
                      <HiOutlineMapPin className="text-indigo-500 shrink-0 mt-0.5" size={16} />
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Location</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{student.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer (Package) */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-dashed border-gray-200 dark:border-slate-700">
                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                    <HiOutlineCurrencyRupee size={16} />
                    <span className="text-xs font-bold tracking-wide uppercase">Package</span>
                  </div>
                  <span className="text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                    {student.package}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Student Details Modal */}
      <AnimatePresence>
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudent(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-800 z-10"
            >
              <button 
                onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full flex items-center justify-center text-gray-500 transition-colors z-20"
              >
                <HiXMark size={24} />
              </button>

              {/* Modal Header */}
              <div className={`pt-12 pb-6 px-8 bg-gradient-to-br ${getAvatarGradient(selectedStudent.avatarIndex)} relative overflow-hidden text-center`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="w-24 h-24 mx-auto rounded-full bg-white dark:bg-slate-900 border-4 border-white/20 dark:border-slate-900/50 shadow-xl flex items-center justify-center text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-900 dark:from-white dark:to-gray-200 relative z-10 mb-4">
                  {selectedStudent.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-extrabold text-white relative z-10">{selectedStudent.name}</h3>
                <p className="text-white/80 font-medium relative z-10 mt-1">{selectedStudent.course}</p>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="space-y-6">
                  
                  {/* Highlight Box */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-4 border border-emerald-100 dark:border-emerald-800/30 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">Secured Package</p>
                      <p className="text-2xl font-black text-emerald-700 dark:text-emerald-300">{selectedStudent.package}</p>
                    </div>
                    <div className="w-12 h-12 bg-white dark:bg-emerald-900/50 rounded-full flex items-center justify-center text-emerald-500 shadow-sm border border-emerald-100 dark:border-emerald-800/50">
                      <HiOutlineCurrencyRupee size={24} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4 border border-gray-100 dark:border-slate-700/50">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><HiOutlineBriefcase /> Company</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{selectedStudent.company}</p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4 border border-gray-100 dark:border-slate-700/50">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><HiOutlineBriefcase /> Role</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{selectedStudent.role}</p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4 border border-gray-100 dark:border-slate-700/50 sm:col-span-2">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><HiOutlineMapPin /> Job Location</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{selectedStudent.location}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default PlacedStudentsGrid;