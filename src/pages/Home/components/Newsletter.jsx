import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-white dark:bg-brand-bg relative z-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-brand-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.15),transparent)]"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Newsletter</h2>
            <p className="text-blue-100 mb-8 text-lg">Get the latest updates on new courses, tech news, and exclusive discounts directly in your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-xl text-slate-900 border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-xl transition-colors whitespace-nowrap shadow-xl"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
