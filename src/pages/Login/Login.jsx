import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineUser, HiOutlineLockClosed } from 'react-icons/hi2';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-wider uppercase">
        Login
      </h2>
      <p className="text-sm md:text-base text-slate-500 font-medium mb-10 tracking-wide text-center">
        Welcome to NextSkool. Please login to continue.
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-8">
        
        {/* Email Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
            <HiOutlineUser className="text-slate-400 text-xl md:text-2xl" />
          </div>
          <input 
            type="email" 
            placeholder="Email ID"
            className="w-full pl-10 pr-3 py-3 bg-transparent border-b-2 border-slate-200 dark:border-slate-700 text-base md:text-lg text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors placeholder:text-slate-400 font-medium"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
            <HiOutlineLockClosed className="text-slate-400 text-xl md:text-2xl" />
          </div>
          <input 
            type="password" 
            placeholder="Password"
            className="w-full pl-10 pr-3 py-3 bg-transparent border-b-2 border-slate-200 dark:border-slate-700 text-base md:text-lg text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors placeholder:text-slate-400 font-medium"
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>

        {/* Links */}
        <div className="flex justify-between items-center text-sm md:text-base font-medium w-full mt-4">
          <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded-sm border-slate-300 text-indigo-600 focus:ring-indigo-500" />
            Remember
          </label>
          <Link to="/forgot-password" className="text-slate-400 hover:text-indigo-600 transition-colors">
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <button 
            type="submit"
            className="px-12 py-3.5 md:py-4 bg-[#5A52E5] hover:bg-indigo-700 text-white text-base md:text-lg font-bold rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 tracking-wider w-full max-w-[200px]"
          >
            LOGIN
          </button>
        </div>
      </form>

      {/* Social Logins */}
      <div className="mt-12 flex flex-col items-center">
        <p className="text-sm text-slate-400 font-medium mb-5">Or sign in with</p>
        <div className="flex gap-5">
          <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm bg-white">
            <FcGoogle size={22} />
          </button>
          <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 bg-[#1877F2] flex items-center justify-center hover:bg-[#166FE5] transition-colors shadow-sm text-white">
            <FaFacebookF size={20} />
          </button>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-slate-500 font-medium">
        Don't have an account?{' '}
        <Link to="/register" className="text-[#5A52E5] hover:text-indigo-700 font-bold transition-colors">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
