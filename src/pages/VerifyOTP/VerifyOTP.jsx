import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if(otpValue.length === 6) {
      navigate('/reset-password');
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-widest uppercase">
        Verification
      </h2>
      <p className="text-xs text-slate-400 font-medium mb-10 tracking-wide text-center px-4">
        Enter the 6-digit code sent to your email.
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-8 flex flex-col items-center">
        
        <div className="flex justify-center gap-2 sm:gap-3 w-full">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-10 h-12 text-center text-xl font-bold bg-transparent border-b-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors"
            />
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-2">
          <button 
            type="submit"
            className="px-10 py-2.5 bg-[#5A52E5] hover:bg-indigo-700 text-white text-sm font-bold rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-300 tracking-wider"
          >
            VERIFY
          </button>
        </div>
      </form>

      <p className="mt-12 text-center text-xs text-slate-500 font-medium">
        Didn't receive code?{' '}
        <button className="text-[#5A52E5] hover:text-indigo-700 font-bold transition-colors">
          Resend
        </button>
      </p>
    </div>
  );
};

export default VerifyOTP;
