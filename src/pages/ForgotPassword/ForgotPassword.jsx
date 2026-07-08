import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy send OTP logic
    navigate('/verify-otp');
  };

  return (
    <div>
      <Link to="/login" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#2563EB] font-medium transition-colors mb-8">
        <HiArrowLeft size={18} /> Back to Login
      </Link>
      
      <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
        Forgot Password?
      </h2>
      <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">
        Enter your email to receive an OTP to reset your password.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
            Email Address
          </label>
          <input 
            type="email" 
            placeholder="john@example.com"
            className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all duration-300"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
