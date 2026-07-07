import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { HiOutlineUsers, HiOutlineBookOpen, HiOutlineAcademicCap, HiOutlineTrophy } from 'react-icons/hi2';

const CountUp = ({ from, to, duration, suffix = '' }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    const val = Math.round(latest);
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
  });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, inView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const stats = [
  { 
    label: 'Students', 
    to: 50000, 
    suffix: '+', 
    icon: <HiOutlineUsers size={40} className="text-blue-500" />
  },
  { 
    label: 'Courses', 
    to: 300, 
    suffix: '+', 
    icon: <HiOutlineBookOpen size={40} className="text-emerald-500" />
  },
  { 
    label: 'Mentors', 
    to: 120, 
    suffix: '+', 
    icon: <HiOutlineAcademicCap size={40} className="text-purple-500" />
  },
  { 
    label: 'Placement Rate', 
    to: 95, 
    suffix: '%', 
    icon: <HiOutlineTrophy size={40} className="text-amber-500" />
  },
];

const Statistics = () => {
  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-brand-bg relative z-20 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-transparent md:divide-slate-200 md:dark:divide-slate-800">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <div className="mb-4 transition-transform duration-300 hover:scale-110">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
                <CountUp from={0} to={stat.to} duration={2.5} suffix={stat.suffix} />
              </h3>
              <p className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
