import React from 'react';

const Logo = ({ className = "w-10 h-10 xl:w-11 xl:h-11" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="24" fill="#2563EB" />
      <path 
        d="M32 72V28L68 72V28" 
        stroke="white" 
        strokeWidth="11" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M51 45L68 28L85 45" 
        stroke="white" 
        strokeWidth="11" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default Logo;
