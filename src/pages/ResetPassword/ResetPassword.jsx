import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ newPassword: '', confirmPassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.newPassword !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Dummy reset logic
    alert("Password updated successfully!");
    navigate('/login');
  };

  return (
    <div>
      <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
        Reset Password
      </h2>
      <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">
        Create a strong and secure new password.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
            New Password
          </label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
            required
            value={formData.newPassword}
            onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
            Confirm Password
          </label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
            required
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full py-4 mt-4 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all duration-300"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
