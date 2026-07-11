import React from 'react';
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin, HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2';

const ContactCards = ({ data }) => {
  const cards = [
    { title: 'Call Us', info: data?.office?.phone || '+91 9876543210', icon: <HiOutlinePhone size={24} />, color: 'blue' },
    { title: 'Email', info: data?.office?.email || 'support@nextskool.com', icon: <HiOutlineEnvelope size={24} />, color: 'purple' },
    { title: 'Office', info: data?.office?.address || 'Jaipur, Rajasthan', icon: <HiOutlineMapPin size={24} />, color: 'emerald' },
    { title: 'Live Chat', info: 'Available 24x7', icon: <HiOutlineChatBubbleLeftEllipsis size={24} />, color: 'orange' }
  ];

  return (
    <section className="relative -mt-16 z-20 pb-16">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-slate-700 hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                card.color === 'blue' ? 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' :
                card.color === 'purple' ? 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400' :
                card.color === 'emerald' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' :
                'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400'
              }`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{card.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;