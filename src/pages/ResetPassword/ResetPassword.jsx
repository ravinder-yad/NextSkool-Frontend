import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLockClosed, HiOutlineEye } from 'react-icons/hi2';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ newPassword: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);

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
      <h2 className="text-[32px] font-black text-slate-900 dark:text-white mb-2 tracking-tight">
        Reset
      </h2>
      <p className="text-[14px] text-slate-500 dark:text-slate-400 font-medium mb-10 text-center">
        Create a new, strong password.
      </p>

      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-6">
        
        {/* New Password Input */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HiOutlineLockClosed className="text-[#8B5CF6] text-xl" />
          </div>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="New Password"
            className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-[#1E293B] rounded-[20px] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all placeholder:text-slate-400 font-medium border border-[#8B5CF6]/30 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)]"
            required
            value={formData.newPassword}
            onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
          />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#8B5CF6] hover:text-[#5B21B6] transition-colors"
          >
            <HiOutlineEye className="text-xl" />
          </button>
        </div>

        {/* Confirm Password Input */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HiOutlineLockClosed className="text-[#8B5CF6] text-xl" />
          </div>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Confirm Password"
            className="w-full pl-12 pr-12 py-3.5 bg-white dark:bg-[#1E293B] rounded-[20px] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all placeholder:text-slate-400 font-medium border border-[#8B5CF6]/30 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)]"
            required
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4 w-full flex justify-center">
          <button 
            type="submit"
            className="w-[200px] py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] hover:from-[#7C3AED] hover:to-[#2563EB] text-white text-[13px] font-extrabold tracking-widest rounded-full shadow-[0_10px_25px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_30px_rgba(139,92,246,0.4)] transition-all duration-300 uppercase"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
