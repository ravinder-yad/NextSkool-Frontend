import React from 'react';

const testimonials = [
  { name: 'Ravinder Kumar', text: 'Best platform to learn MERN. The instructors are amazing and the projects are very practical.', role: 'Software Engineer at TCS', img: 'https://i.pravatar.cc/150?img=11' },
  { name: 'Priya Sharma', text: 'Placement support is amazing. I got 3 offers within a month of completing my Data Science course.', role: 'Data Analyst at MuSigma', img: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Amit Patel', text: 'The live classes and lifetime access to materials make this the best investment for my career.', role: 'Frontend Developer', img: 'https://i.pravatar.cc/150?img=8' },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-brand-bg relative z-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">What Our Students Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex text-yellow-400 mb-6 text-xl">★★★★★</div>
              <p className="text-slate-700 dark:text-slate-300 mb-8 italic leading-relaxed">"{test.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={test.img} alt={test.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-primary" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{test.name}</h4>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
