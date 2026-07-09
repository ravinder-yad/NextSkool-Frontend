import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <h2 className="text-[32px] font-black text-slate-900 dark:text-white mb-2 tracking-tight">
        Verification
      </h2>
      <p className="text-[14px] text-slate-500 dark:text-slate-400 font-medium mb-10 text-center">
        Enter the 6-digit code sent to your email.
      </p>

      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-8">
        
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
              className="w-10 h-12 text-center text-xl font-bold bg-white dark:bg-[#1E293B] rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all border border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
            />
          ))}
        </div>

        {/* Submit Button */}
        <div className="pt-2 w-full flex justify-center">
          <button 
            type="submit"
            className="w-[200px] py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] hover:from-[#7C3AED] hover:to-[#2563EB] text-white text-[13px] font-extrabold tracking-widest rounded-full shadow-[0_10px_25px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_30px_rgba(139,92,246,0.4)] transition-all duration-300 uppercase"
          >
            Verify OTP
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-[12px] text-[#8B5CF6] font-medium">
        Didn't receive code?{' '}
        <button className="font-bold hover:text-[#5B21B6] transition-colors">
          Resend
        </button>
      </p>
    </div>
  );
};

export default VerifyOTP;
