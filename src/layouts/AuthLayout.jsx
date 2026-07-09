import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const AuthLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3F4F6] dark:bg-[#0B1121] relative overflow-hidden p-4 sm:p-8 pt-24 font-sans">
      <Navbar />
      
      {/* Background Decorative Circles (Optional, for flavor) */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-200/50 dark:bg-indigo-900/30 rounded-full mix-blend-multiply blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/50 dark:bg-purple-900/30 rounded-full mix-blend-multiply blur-2xl"></div>

      {/* Main Centered Floating Card */}
      <div className="w-full max-w-[1050px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(79,70,229,0.2)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row relative z-10 min-h-[640px] border border-white/50 dark:border-slate-800 font-sans">
        
        {/* LEFT SIDE: Form Container (50%) */}
        <div className="w-full md:w-1/2 p-10 sm:p-16 lg:p-20 flex flex-col justify-center relative z-20 bg-white dark:bg-slate-900">
          
          {/* Subtle decorative dot overlapping the border as seen in the image */}
          <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-white dark:bg-slate-900 rounded-full z-30 flex items-center justify-center shadow-sm">
            <div className="w-2 h-2 bg-indigo-200 rounded-full"></div>
          </div>

          <div className="w-full max-w-sm mx-auto animate-[fadeIn_0.4s_ease-out]">
            <Outlet />
          </div>
        </div>

        {/* RIGHT SIDE: Premium Image & Background (50%) */}
        <div className="hidden md:flex md:w-1/2 bg-[#5A52E5] relative items-center justify-center p-12 lg:p-16 overflow-hidden">
          
          {/* Large decorative circular background shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500 rounded-full translate-x-1/3 -translate-y-1/3 opacity-40 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-400 rounded-full -translate-x-1/3 translate-y-1/3 opacity-20 blur-2xl pointer-events-none"></div>
          
          {/* Subtle Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

          {/* Floating Image Container */}
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border-4 border-indigo-400/20 transform transition-transform duration-700 hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Student" 
              className="w-full h-full object-cover object-center"
            />
            {/* Soft gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
          </div>

          {/* Decorative element top left corner inside blue area */}
          <div className="absolute top-12 left-12 w-16 h-16 border-2 border-indigo-400 rounded-full opacity-50"></div>
          <div className="absolute top-16 left-16 w-8 h-8 bg-indigo-400 rounded-full opacity-30"></div>

        </div>

      </div>

      {/* NextSkool Contact Footer (Outside the card) */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between w-full max-w-[1000px] text-sm font-medium text-slate-500 dark:text-slate-400 z-10 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
            N
          </div>
          <span>NextSkool EdTech</span>
        </div>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="mailto:support@nextskool.com" className="hover:text-indigo-600 transition-colors">support@nextskool.com</a>
          <a href="https://nextskool.com" className="hover:text-indigo-600 transition-colors">www.nextskool.com</a>
        </div>
      </div>

      {/* Custom Animations globally if not present in tailwind.config */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </div>
  );
};

export default AuthLayout;
