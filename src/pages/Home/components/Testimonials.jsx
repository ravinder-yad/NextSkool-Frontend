import React, { useRef } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

const testimonials = [
  { 
    name: 'Ravinder Kumar', 
    text: 'Best platform to learn MERN stack. The instructors are amazing and the projects are very practical. I cracked a 12 LPA package thanks to their placement cell!', 
    role: 'Software Engineer at TCS', 
    img: 'https://i.pravatar.cc/150?img=11' 
  },
  { 
    name: 'Priya Sharma', 
    text: 'Placement support is unbelievable. I got 3 offers within a month of completing my Data Science course. The mock interviews helped me overcome my anxiety.', 
    role: 'Data Analyst at MuSigma', 
    img: 'https://i.pravatar.cc/150?img=5' 
  },
  { 
    name: 'Amit Patel', 
    text: 'The live classes and lifetime access to materials make this the best investment for my career. The mentors actually care about your progress.', 
    role: 'Frontend Developer', 
    img: 'https://i.pravatar.cc/150?img=8' 
  },
  { 
    name: 'Neha Gupta', 
    text: 'I transitioned from a non-IT background to a Full Stack Developer in just 6 months. The curriculum is perfectly structured for beginners.', 
    role: 'SDE-1 at Amazon', 
    img: 'https://i.pravatar.cc/150?img=9' 
  },
  { 
    name: 'Rahul Verma', 
    text: 'The UI/UX design course is top-notch. Building a real-world portfolio during the course got me hired immediately after graduation.', 
    role: 'Product Designer', 
    img: 'https://i.pravatar.cc/150?img=13' 
  },
  { 
    name: 'Anjali Desai', 
    text: 'The 24/7 doubt support is a game changer. Whenever I got stuck on a bug in my React project, a mentor was there to guide me.', 
    role: 'React Developer', 
    img: 'https://i.pravatar.cc/150?img=1' 
  },
  { 
    name: 'Vikas Singh', 
    text: 'Their advanced system design modules are exactly what product companies ask in interviews. Highly recommend to anyone looking to upskill.', 
    role: 'Backend Engineer', 
    img: 'https://i.pravatar.cc/150?img=12' 
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Cards are 320px wide + 24px gap = 344px to slide exactly 1 card
      const scrollAmount = direction === 'left' ? -344 : 344;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0B1121] relative z-20 overflow-hidden border-t border-slate-800">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Section with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#2563EB] dark:text-blue-400 text-sm font-bold tracking-widest uppercase mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              What Our Students Say
            </h2>
          </div>
          
          {/* Custom Slider Navigation */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 text-white flex items-center justify-center hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
            >
              <HiArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 text-white flex items-center justify-center hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
            >
              <HiArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel / Slider Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />

          {testimonials.map((test, idx) => (
            <div 
              key={idx} 
              // Set strict width to 320px for desktop to fit ~4 cards in container, and 85vw for mobile
              className="snap-start shrink-0 w-[85vw] md:w-[320px] bg-[#0F172A] p-7 md:p-8 rounded-[2rem] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col relative"
            >
              {/* Massive Quote Icon in Background */}
              <div className="absolute top-4 right-6 text-8xl text-slate-800/30 font-serif leading-none select-none pointer-events-none">
                "
              </div>
              
              <div className="flex text-yellow-400 mb-5 text-base gap-1 relative z-10">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              
              <p className="text-slate-300 mb-8 text-[14px] leading-relaxed relative z-10 font-medium line-clamp-4">
                "{test.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto relative z-10 pt-5 border-t border-slate-800">
                <img 
                  src={test.img} 
                  alt={test.name} 
                  className="w-12 h-12 rounded-full object-cover border border-slate-700 p-0.5" 
                />
                <div>
                  <h4 className="font-bold text-white text-[15px]">{test.name}</h4>
                  <p className="text-xs font-medium text-slate-400">{test.role}</p>
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
