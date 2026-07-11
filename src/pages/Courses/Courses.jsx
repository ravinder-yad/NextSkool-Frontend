import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { courseService } from '../../services/courseService';
import * as HiIcons from 'react-icons/hi2';

const Courses = () => {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get('category');
  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await courseService.getAllCourses(categorySlug);
        if (res.success && res.data) {
          setCourses(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch courses", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, [categorySlug]);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {categorySlug ? `Courses for ${categorySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}` : 'All Courses'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Browse our comprehensive collection of courses and start your learning journey today.
          </p>
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700">
            <HiIcons.HiOutlineArchiveBoxXMark className="mx-auto text-6xl text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Courses Found</h2>
            <p className="text-gray-500">We couldn't find any courses matching your criteria.</p>
            <Link to="/explore" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold">
              Browse Categories
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <div key={course._id} className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-slate-700 flex flex-col group">
                {/* Thumbnail placeholder */}
                <div className="h-48 bg-gray-200 dark:bg-slate-700 relative overflow-hidden">
                   {course.thumbnail ? (
                     <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                   ) : (
                     <div className="w-full h-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
                       <HiIcons.HiOutlineVideoCamera size={48} className="text-white opacity-50" />
                     </div>
                   )}
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-gray-900">
                     {course.level || 'All Levels'}
                   </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {course.exploreCategory?.title || course.category?.name || 'Uncategorized'}
                    </span>
                    <div className="flex items-center text-sm font-bold text-amber-500">
                      <HiIcons.HiStar className="mr-1" /> {course.rating || '4.5'}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">
                    {course.shortDescription || 'Learn the required skills to master this domain and build your career.'}
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6 pb-6 border-b border-gray-100 dark:border-slate-700">
                      <div className="flex items-center gap-1"><HiIcons.HiOutlineClock /> {course.duration || '20 Hours'}</div>
                      <div className="flex items-center gap-1"><HiIcons.HiOutlineUsers /> {course.students || '1k+'} Students</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-black text-gray-900 dark:text-white">
                        ₹{course.discountPrice || course.price}
                      </div>
                      <Link 
                        to={`/course/${course.slug}`}
                        className="bg-gray-100 dark:bg-slate-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-gray-900 dark:text-white px-5 py-2.5 rounded-xl font-bold transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Courses;
