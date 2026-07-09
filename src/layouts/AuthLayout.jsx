import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEF2F6] dark:bg-[#0B1121] relative overflow-hidden font-sans transition-colors duration-300">
      
      {/* Navbar at the top */}
      <div className="w-full z-50 bg-white dark:bg-[#0F172A] shadow-sm transition-colors duration-300">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
        
        {/* Neumorphic Card */}
        <div className="w-full max-w-[1000px] h-auto min-h-[580px] bg-white dark:bg-[#1E293B] rounded-[30px] shadow-[0_20px_50px_rgb(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row relative z-10 transition-colors duration-300">
          
          {/* Sharp Vector Background Waves (Purple Gradients) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6D28D9" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            {/* Top-Right Wave - Pushed higher and more to the right */}
            <path d="M550,0 C600,20 620,80 700,70 C780,60 820,20 900,40 C950,55 980,100 1000,120 L1000,0 Z" fill="url(#waveGrad)" opacity="0.95" />
            
            {/* Bottom-Right to Bottom-Left Wave - Pushed lower */}
            <path d="M1000,420 C940,440 900,520 800,520 C720,520 680,450 580,470 C480,490 400,600 300,600 L1000,600 Z" fill="url(#waveGrad)" opacity="0.95" />
          </svg>

          {/* Left Side: Form Container */}
          <div className="w-full md:w-[50%] h-full flex flex-col justify-center items-center relative z-20 py-12 px-6 md:px-12">
            <div className="w-full max-w-[360px] mx-auto animate-[fadeIn_0.4s_ease-out]">
              <Outlet />
            </div>
          </div>
          
          {/* Right Side: Welcome Text */}
          <div className="hidden md:flex w-[50%] h-full flex-col justify-center items-center text-center p-12 relative z-20">
            <div className="max-w-md animate-[fadeIn_0.6s_ease-out] mt-12">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                Welcome Back!
              </h2>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed px-4">
                NextSkool is your ultimate platform for mastering modern tech skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra magna nisl, at posuere sem dapibus sed.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Simple Footer Text */}
      <div className="w-full text-center py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 relative z-10 flex justify-between px-8">
        <span>N NextSkool EdTech</span>
        <div className="flex gap-4">
          <span>support@nextskool.com</span>
          <span>www.nextskool.com</span>
        </div>
      </div>

    </div>
  );
};

export default AuthLayout;
