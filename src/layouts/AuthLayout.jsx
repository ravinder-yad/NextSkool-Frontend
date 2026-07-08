import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { HiOutlineAcademicCap, HiOutlineTrophy, HiOutlineStar, HiOutlineCheckBadge, HiOutlineUsers } from 'react-icons/hi2';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex w-full bg-white dark:bg-[#0B1121] overflow-hidden">
      
      {/* LEFT SIDE: Image & Floating Cards (60%) */}
      <div className="hidden lg:flex lg:w-[60%] relative bg-[#EFF6FF] dark:bg-slate-900 overflow-hidden items-center justify-center p-12">
        
        {/* Background Gradients & Circles */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-slate-900 dark:to-slate-800 pointer-events-none"></div>
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-lighten pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-600/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-lighten pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-2xl h-full flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
          {/* Main Illustration / Image */}
          <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50 dark:border-slate-800/50 backdrop-blur-sm">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Student learning" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
          </div>

          {/* Floating Card 1 */}
          <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-[float_5s_ease-in-out_infinite_0.5s] border border-slate-100 dark:border-slate-700">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
              <HiOutlineAcademicCap size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Courses</p>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">300+</h4>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute top-1/3 -left-12 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-[float_6s_ease-in-out_infinite_1s] border border-slate-100 dark:border-slate-700">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
              <HiOutlineUsers size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Students</p>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">50K+</h4>
            </div>
          </div>

          {/* Floating Card 3 */}
          <div className="absolute -bottom-8 right-12 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-[float_7s_ease-in-out_infinite_1.5s] border border-slate-100 dark:border-slate-700">
            <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center">
              <HiOutlineTrophy size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Placement</p>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">95%</h4>
            </div>
          </div>

          {/* Floating Card 4 */}
          <div className="absolute bottom-1/4 -left-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-[float_5s_ease-in-out_infinite_2s] border border-slate-100 dark:border-slate-700">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
              <HiOutlineStar size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Rating</p>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">4.9/5.0</h4>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Auth Form (40%) */}
      <div className="w-full lg:w-[40%] flex flex-col justify-between min-h-screen bg-white dark:bg-[#0B1121] relative z-20 shadow-[-20px_0_40px_rgba(0,0,0,0.05)] dark:shadow-none border-l border-slate-100 dark:border-slate-800">
        
        {/* Top Branding */}
        <div className="p-8 pb-0">
          <Link to="/" className="flex items-center gap-2 group w-fit">
            <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              N
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-[#2563EB] transition-colors">
              NextSkool
            </span>
          </Link>
        </div>

        {/* Dynamic Form Content */}
        <div className="flex-1 flex items-center justify-center p-8 sm:p-12">
          <div className="w-full max-w-md animate-[fadeIn_0.5s_ease-out]">
            <Outlet />
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-0">
          <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
              <p>📧 support@nextskool.com</p>
              <p>📞 +91 98765 43210</p>
              <a href="https://nextskool.com" className="hover:text-[#2563EB] transition-colors">🌐 www.nextskool.com</a>
            </div>
          </div>
        </div>

      </div>

      {/* Add Custom Animations globally if not present in tailwind.config */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default AuthLayout;
