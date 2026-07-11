import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';

const AboutFAQ = ({ faqs }) => {
  const [openId, setOpenId] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0B1120]">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about NextSkool.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq._id}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenId(openId === faq._id ? null : faq._id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openId === faq._id ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-gray-100 text-gray-500 dark:bg-slate-700 dark:text-gray-300'}`}>
                  <HiChevronDown size={20} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openId === faq._id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFAQ;