import { useState, useEffect } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

const ThemeToggle = ({ isScrolled = true }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-200 text-[#6B7280] hover:text-[#2563EB] hover:bg-[#EFF6FF]"
      aria-label="Toggle Theme"
    >
      {isDark ? <HiOutlineSun size={22} /> : <HiOutlineMoon size={22} />}
    </button>
  );
};

export default ThemeToggle;
