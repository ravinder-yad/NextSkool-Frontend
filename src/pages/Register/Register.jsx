import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '', 
    phone: '', 
    password: '', 
    confirmPassword: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Dummy register logic
    navigate('/verify-otp');
  };

  return (
    <div>
      <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
        Create Your Account
      </h2>
      <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">
        Join NextSkool and accelerate your tech career.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Full Name */}
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Full Name
          </label>
          <input 
            type="text" 
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>

        {/* Email & Phone Row */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Phone Number
            </label>
            <input 
              type="tel" 
              placeholder="+91 9876543210"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        {/* Password Row */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Confirm Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-4 mt-4 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all duration-300"
        >
          Create Account
        </button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">OR</span>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
      </div>

      <div className="flex gap-3">
        <button className="w-1/2 py-3 px-4 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-bold shadow-sm">
          <FcGoogle size={20} />
          Google
        </button>
        <button className="w-1/2 py-3 px-4 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-bold shadow-sm">
          <FaGithub size={20} className="text-slate-900 dark:text-white" />
          GitHub
        </button>
      </div>

      <p className="mt-8 text-center text-slate-600 dark:text-slate-400 font-medium">
        Already have an account?{' '}
        <Link to="/login" className="text-[#2563EB] hover:text-blue-700 font-bold transition-colors">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
