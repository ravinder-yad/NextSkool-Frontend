import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2';

const faqs = [
  { question: 'Do I need prior coding experience?', answer: 'No, our courses are designed for absolute beginners as well as professionals looking to upskill. We start from the basics.' },
  { question: 'Is there a refund policy?', answer: 'Yes, we offer a 7-day money-back guarantee if you are not completely satisfied with the course content or delivery.' },
  { question: 'Will I get placement assistance?', answer: 'Absolutely! Our dedicated placement cell helps you with resume building, mock interviews, and direct referrals to our partner companies.' },
  { question: 'Are the classes live or recorded?', answer: 'We offer a mix of both. Live interactive sessions are held on weekends for doubt clearing, and high-quality recordings are available for lifetime access.' },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/40 relative z-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden transition-all shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full px-6 py-5 flex items-center justify-between font-bold text-left text-slate-900 dark:text-white focus:outline-none"
              >
                <span className="text-base md:text-lg">{faq.question}</span>
                <span className="text-brand-primary dark:text-brand-accent shrink-0 ml-4">
                  {openIdx === idx ? <HiOutlineChevronUp size={24} /> : <HiOutlineChevronDown size={24} />}
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
