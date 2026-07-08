import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaMicrosoft } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login logic
    navigate('/');
  };

  return (
    <div>
      <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
        Welcome Back 👋
      </h2>
      <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">
        Continue your learning journey with NextSkool.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
            Email Address
          </label>
          <input 
            type="email" 
            placeholder="john@example.com"
            className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
            Password
          </label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>

        <div className="flex items-center justify-between text-sm font-medium">
          <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400 cursor-pointer select-none">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]" />
            Remember Me
          </label>
          <Link to="/forgot-password" className="text-[#2563EB] hover:text-blue-700 transition-colors">
            Forgot Password?
          </Link>
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
        >
          🚀 Login
        </button>
      </form>

      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">OR</span>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
      </div>

      <div className="space-y-3">
        <button className="w-full py-3.5 px-4 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-bold shadow-sm">
          <FcGoogle size={22} />
          Continue with Google
        </button>
        <button className="w-full py-3.5 px-4 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-bold shadow-sm">
          <FaGithub size={22} className="text-slate-900 dark:text-white" />
          Continue with GitHub
        </button>
        <button className="w-full py-3.5 px-4 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-bold shadow-sm">
          <FaMicrosoft size={20} className="text-[#00a4ef]" />
          Continue with Microsoft
        </button>
      </div>

      <p className="mt-8 text-center text-slate-600 dark:text-slate-400 font-medium">
        Don't have an account?{' '}
        <Link to="/register" className="text-[#2563EB] hover:text-blue-700 font-bold transition-colors">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
