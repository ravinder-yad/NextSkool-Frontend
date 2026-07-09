import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineUser, HiOutlineLockClosed, HiOutlineEye } from 'react-icons/hi2';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-[32px] font-black text-slate-900 dark:text-white mb-2 tracking-tight">
        Hello!
      </h2>
      <p className="text-[14px] text-slate-500 dark:text-slate-400 font-medium mb-10 text-center">
        Sign in to your account
      </p>

      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-6">
        
        {/* Email Input - Exact Match */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HiOutlineUser className="text-[#8B5CF6] text-xl" />
          </div>
          <input 
            type="email" 
            placeholder="E-mail"
            className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-[#1E293B] rounded-[20px] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all placeholder:text-slate-400 font-medium border border-[#8B5CF6]/30 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)]"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        {/* Password Input - Exact Match */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HiOutlineLockClosed className="text-[#8B5CF6] text-xl" />
          </div>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Password"
            className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-[#1E293B] rounded-[20px] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all placeholder:text-slate-400 font-medium border border-[#8B5CF6]/30 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)]"
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#8B5CF6] hover:text-[#5B21B6] transition-colors"
          >
            <HiOutlineEye className="text-xl" />
          </button>
        </div>

        {/* Remember & Forgot */}
        <div className="w-full flex items-center justify-between px-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="w-4 h-4 rounded border-2 border-[#8B5CF6] flex items-center justify-center bg-transparent group-hover:bg-[#8B5CF6]/10 transition-colors">
              {/* Fake checked state for UI purposes */}
              <div className="w-2 h-2 bg-[#8B5CF6] rounded-sm opacity-100"></div>
            </div>
            <span className="text-[12px] font-semibold text-[#8B5CF6]">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-[12px] font-semibold text-[#8B5CF6] hover:text-[#5B21B6] transition-colors">
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <div className="pt-4 w-full flex justify-center">
          <button 
            type="submit"
            className="w-[200px] py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] hover:from-[#7C3AED] hover:to-[#2563EB] text-white text-[13px] font-extrabold tracking-widest rounded-full shadow-[0_10px_25px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_30px_rgba(139,92,246,0.4)] transition-all duration-300 uppercase"
          >
            Sign In
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-[12px] text-[#8B5CF6] font-medium">
        Don't have an account?{' '}
        <Link to="/register" className="font-bold hover:text-[#5B21B6] transition-colors">
          Create
        </Link>
      </p>

    </div>
  );
};

export default Login;
