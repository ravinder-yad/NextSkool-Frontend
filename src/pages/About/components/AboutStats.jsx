import React from 'react';

const AboutStats = ({ data }) => {
  const stats = data?.statistics || [
    { value: '50K+', label: 'Students' },
    { value: '300+', label: 'Courses' },
    { value: '120+', label: 'Mentors' },
    { value: '500+', label: 'Companies' }
  ];

  return (
    <section className="py-16 bg-blue-600 dark:bg-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-blue-100 font-medium text-sm md:text-base lg:text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;