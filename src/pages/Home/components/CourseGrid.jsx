import React from 'react';

const courses = [
  { id: 1, title: 'Complete MERN Stack Developer Course', rating: 4.9, students: 1200, price: 499, originalPrice: 999, img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80' },
  { id: 2, title: 'Machine Learning & AI Mastery', rating: 4.8, students: 950, price: 599, originalPrice: 1299, img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80' },
  { id: 3, title: 'Data Structures & Algorithms in Java', rating: 4.9, students: 2100, price: 399, originalPrice: 799, img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80' },
  { id: 4, title: 'UI/UX Design Masterclass (Figma)', rating: 4.7, students: 800, price: 299, originalPrice: 599, img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80' },
];

const CourseGrid = ({ title, subtitle, bgGray }) => {
  return (
    <section className={`py-20 ${bgGray ? 'bg-slate-50 dark:bg-slate-900/40' : 'bg-white dark:bg-brand-bg'} relative z-20`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{title}</h2>
            <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
          </div>
          <button className="text-brand-primary dark:text-brand-accent font-semibold hover:underline">
            View All Courses →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/70 backdrop-blur px-2.5 py-1 rounded-lg text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1 shadow-sm">
                  <span className="text-yellow-500">★</span> {course.rating}
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">{course.students} Students Enrolled</p>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-snug mb-4 line-clamp-2">{course.title}</h3>
                
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold text-slate-900 dark:text-white">₹{course.price}</span>
                    <span className="text-sm font-medium text-slate-400 line-through">₹{course.originalPrice}</span>
                  </div>
                </div>
                
                <button className="w-full py-2.5 text-center font-bold text-brand-primary dark:text-white bg-blue-50 dark:bg-slate-700 hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary transition-colors rounded-xl border border-transparent dark:border-slate-600">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
