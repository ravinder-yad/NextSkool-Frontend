import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineUser, HiOutlineLockClosed, HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2';

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
    navigate('/verify-otp');
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-widest uppercase">
        Sign Up
      </h2>
      <p className="text-xs text-slate-400 font-medium mb-8 tracking-wide text-center">
        Create an account to start learning.
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-5">
        
        {/* Full Name Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
            <HiOutlineUser className="text-slate-400 text-lg" />
          </div>
          <input 
            type="text" 
            placeholder="Full Name"
            className="w-full pl-8 pr-3 py-2 bg-transparent border-b-2 border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors placeholder:text-slate-400 font-medium"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
            <HiOutlineEnvelope className="text-slate-400 text-lg" />
          </div>
          <input 
            type="email" 
            placeholder="Email Address"
            className="w-full pl-8 pr-3 py-2 bg-transparent border-b-2 border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors placeholder:text-slate-400 font-medium"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        {/* Phone Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
            <HiOutlinePhone className="text-slate-400 text-lg" />
          </div>
          <input 
            type="tel" 
            placeholder="Phone Number"
            className="w-full pl-8 pr-3 py-2 bg-transparent border-b-2 border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors placeholder:text-slate-400 font-medium"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        {/* Password Inputs in one row if desired, but column is safer for this narrow layout */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
            <HiOutlineLockClosed className="text-slate-400 text-lg" />
          </div>
          <input 
            type="password" 
            placeholder="Password"
            className="w-full pl-8 pr-3 py-2 bg-transparent border-b-2 border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors placeholder:text-slate-400 font-medium"
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
            <HiOutlineLockClosed className="text-slate-400 text-lg" />
          </div>
          <input 
            type="password" 
            placeholder="Confirm Password"
            className="w-full pl-8 pr-3 py-2 bg-transparent border-b-2 border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors placeholder:text-slate-400 font-medium"
            required
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <button 
            type="submit"
            className="px-10 py-2.5 bg-[#5A52E5] hover:bg-indigo-700 text-white text-sm font-bold rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-300 tracking-wider"
          >
            SIGN UP
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-xs text-slate-500 font-medium">
        Already have an account?{' '}
        <Link to="/login" className="text-[#5A52E5] hover:text-indigo-700 font-bold transition-colors">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
