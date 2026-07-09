import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineEnvelope } from 'react-icons/hi2';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/verify-otp');
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-widest uppercase">
        Recovery
      </h2>
      <p className="text-xs text-slate-400 font-medium mb-10 tracking-wide text-center px-4">
        Enter your email address to receive an OTP.
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-8">
        
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-2">
          <button 
            type="submit"
            className="px-10 py-2.5 bg-[#5A52E5] hover:bg-indigo-700 text-white text-sm font-bold rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-300 tracking-wider"
          >
            SEND OTP
          </button>
        </div>
      </form>

      <p className="mt-12 text-center text-xs text-slate-500 font-medium">
        Back to{' '}
        <Link to="/login" className="text-[#5A52E5] hover:text-indigo-700 font-bold transition-colors">
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
