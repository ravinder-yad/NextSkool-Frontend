import React from 'react';

const steps = [
  { num: '01', title: 'Enroll in Course', desc: 'Choose your desired skill and enroll.' },
  { num: '02', title: 'Learn from Experts', desc: 'Attend live classes & watch recorded videos.' },
  { num: '03', title: 'Build Projects', desc: 'Apply knowledge to real-world projects.' },
  { num: '04', title: 'Get Certified & Placed', desc: 'Clear the exam and get placement support.' },
];

const LearningProcess = () => {
  return (
    <section className="py-20 bg-white dark:bg-brand-bg relative z-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Learning Process</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">A structured path designed to take you from a beginner to an industry-ready professional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center text-2xl font-bold border-4 border-white dark:border-brand-bg mb-6 shadow-lg shadow-blue-500/20">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningProcess;
