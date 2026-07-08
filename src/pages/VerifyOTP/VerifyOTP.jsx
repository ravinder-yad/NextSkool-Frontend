import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Auto-focus prev input on backspace if current is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if(otpValue.length === 6) {
      navigate('/reset-password'); // or dashboard depending on flow
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  };

  return (
    <div>
      <Link to="/forgot-password" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#2563EB] font-medium transition-colors mb-8">
        <HiArrowLeft size={18} /> Back
      </Link>

      <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
        Verify OTP
      </h2>
      <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">
        We've sent a 6-digit verification code to your email.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex justify-between gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-bold rounded-xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
            />
          ))}
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all duration-300"
        >
          Verify OTP
        </button>
      </form>

      <p className="mt-8 text-center text-slate-600 dark:text-slate-400 font-medium">
        Didn't receive the code?{' '}
        <button className="text-[#2563EB] hover:text-blue-700 font-bold transition-colors">
          Resend
        </button>
      </p>
    </div>
  );
};

export default VerifyOTP;
