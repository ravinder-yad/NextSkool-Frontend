import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLockClosed } from 'react-icons/hi2';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ newPassword: '', confirmPassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.newPassword !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert("Password updated successfully!");
    navigate('/login');
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-widest uppercase">
        Reset
      </h2>
      <p className="text-xs text-slate-400 font-medium mb-10 tracking-wide text-center px-4">
        Create a new, strong password.
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        
        {/* New Password Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
            <HiOutlineLockClosed className="text-slate-400 text-lg" />
          </div>
          <input 
            type="password" 
            placeholder="New Password"
            className="w-full pl-8 pr-3 py-2 bg-transparent border-b-2 border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors placeholder:text-slate-400 font-medium"
            required
            value={formData.newPassword}
            onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
          />
        </div>

        {/* Confirm Password Input */}
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
        <div className="flex justify-center pt-4">
          <button 
            type="submit"
            className="px-10 py-2.5 bg-[#5A52E5] hover:bg-indigo-700 text-white text-sm font-bold rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-300 tracking-wider"
          >
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
