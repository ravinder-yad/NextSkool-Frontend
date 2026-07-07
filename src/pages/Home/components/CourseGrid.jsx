import React from 'react';
import { HiOutlineClock, HiOutlineSignal, HiArrowRight, HiOutlineUsers } from 'react-icons/hi2';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const courses = [
  { 
    id: 1, 
    title: 'Complete MERN Stack Developer Course (2026)', 
    rating: 4.9, 
    reviews: '4.2k',
    price: 499, 
    originalPrice: 2499, 
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    badge: 'BESTSELLER',
    badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
    instructor: 'Aman Sharma',
    avatar: 'https://i.pravatar.cc/150?u=aman',
    duration: '45.5 Hrs',
    level: 'Beginner'
  },
  { 
    id: 2, 
    title: 'Machine Learning & AI Mastery - Python', 
    rating: 4.8, 
    reviews: '3.1k',
    price: 599, 
    originalPrice: 2999, 
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    badge: 'HIGHEST RATED',
    badgeColor: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    instructor: 'Priya Patel',
    avatar: 'https://i.pravatar.cc/150?u=priya',
    duration: '60.0 Hrs',
    level: 'Intermediate'
  },
  { 
    id: 3, 
    title: 'Data Structures & Algorithms in Java', 
    rating: 4.9, 
    reviews: '5.8k',
    price: 399, 
    originalPrice: 1999, 
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80',
    badge: 'HOT & NEW',
    badgeColor: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    instructor: 'Rahul Verma',
    avatar: 'https://i.pravatar.cc/150?u=rahul',
    duration: '80.5 Hrs',
    level: 'Advanced'
  },
  { 
    id: 4, 
    title: 'UI/UX Design Masterclass (Figma to Webflow)', 
    rating: 4.7, 
    reviews: '1.9k',
    price: 299, 
    originalPrice: 1499, 
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    badge: 'TRENDING',
    badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    instructor: 'Neha Gupta',
    avatar: 'https://i.pravatar.cc/150?u=neha',
    duration: '22.0 Hrs',
    level: 'Beginner'
  },
];

const CourseGrid = ({ title, subtitle, bgGray }) => {
  return (
    <section className={`py-20 md:py-28 ${bgGray ? 'bg-slate-50/50 dark:bg-slate-900/40' : 'bg-white dark:bg-[#0B1121]'} relative z-20 transition-colors duration-300`}>
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl border-l-4 border-[#2563EB] pl-5">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">{title}</h2>
            <p className="text-slate-600 dark:text-slate-400 md:text-lg font-medium">{subtitle}</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-[#2563EB] dark:text-blue-400 hover:text-[#1D4ED8] dark:hover:text-blue-300 transition-colors group text-[15px]">
            Explore All Courses 
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="group flex flex-col bg-white dark:bg-[#0F172A] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(37,99,235,0.05)] border border-gray-100 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* Image & Badges */}
              <div className="relative h-[220px] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
                
                {/* Badge */}
                {course.badge && (
                  <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-black tracking-widest text-white rounded-md shadow-lg ${course.badgeColor}`}>
                    {course.badge}
                  </div>
                )}

                {/* Bottom Stats over image */}
                <div className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-between text-white backdrop-blur-sm bg-black/10 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    <HiOutlineSignal size={15} className="text-blue-400" /> 
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    <HiOutlineClock size={15} className="text-amber-400" /> 
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col">
                
                {/* Instructor */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <img src={course.avatar} alt={course.instructor} className="w-7 h-7 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm" />
                    <span className="text-[13px] font-semibold text-slate-600 dark:text-slate-400">{course.instructor}</span>
                  </div>
                  {/* Small static users count */}
                  <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
                    <HiOutlineUsers size={13} /> {course.reviews}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-slate-900 dark:text-white text-[17px] leading-snug mb-2 line-clamp-2 min-h-[46px] group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>

                {/* Ratings */}
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="font-black text-amber-500 text-sm">{course.rating}</span>
                  <div className="flex text-amber-500 text-[13px] gap-0.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <span className="text-[12px] font-semibold text-slate-400 ml-1">({course.reviews} reviews)</span>
                </div>

                <div className="mt-auto">
                  {/* Divider */}
                  <div className="w-full h-[1px] bg-gray-100 dark:bg-slate-800 mb-4"></div>

                  {/* Price Row */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-black text-slate-900 dark:text-white">₹{course.price}</span>
                    <span className="text-sm font-semibold text-slate-400 line-through">₹{course.originalPrice}</span>
                    <span className="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-md ml-auto border border-emerald-100 dark:border-emerald-500/20">
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                    </span>
                  </div>

                  {/* Enroll Button */}
                  <button className="w-full py-3 bg-[#EFF6FF] dark:bg-slate-800 text-[#2563EB] dark:text-blue-400 font-bold text-[14px] rounded-xl group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    Enroll Now <HiArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <button className="w-full mt-8 md:hidden flex items-center justify-center gap-2 font-bold text-[#2563EB] dark:text-blue-400 border-2 border-[#2563EB] dark:border-blue-500 rounded-xl px-6 py-3 hover:bg-[#2563EB] hover:text-white transition-colors">
          Explore All Courses 
          <HiArrowRight />
        </button>

      </div>
    </section>
  );
};

export default CourseGrid;
