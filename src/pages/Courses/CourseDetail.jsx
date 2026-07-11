import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseService } from '../../services/courseService';
import * as HiIcons from 'react-icons/hi2';

const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const res = await courseService.getCourseBySlug(slug);
        if (res.success && res.data) {
          setCourse(res.data);
          document.title = `${res.data.title} - NextSkool`;
        }
      } catch (error) {
        console.error("Failed to fetch course details", error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchCourse();
  }, [slug]);

  const handleDownloadSyllabus = () => {
    // Generate a mock PDF download behavior
    const element = document.createElement("a");
    const file = new Blob([`Syllabus for ${course?.title}\n\n${course?.description}`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${course?.slug}-syllabus.txt`;
    document.body.appendChild(element);
    element.click();
    
    // Nice alert for user
    alert("Syllabus downloading started! Check your downloads folder.");
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-slate-900">
        <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
        <Link to="/courses" className="text-blue-600 font-bold">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      
      {/* 🌟 HERO SECTION */}
      <div className="bg-gray-900 text-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          
          <div className="lg:col-span-2 relative z-10">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-semibold uppercase tracking-wider">
              <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
              <span>/</span>
              <span>{course.exploreCategory?.title || 'Development'}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              {course.title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {course.shortDescription || course.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 mb-8">
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <HiIcons.HiStar className="text-lg" /> {course.rating || '4.8'}
              </div>
              <div className="flex items-center gap-1">
                <HiIcons.HiOutlineUsers className="text-lg" /> {course.students || '12.5k'} Students
              </div>
              <div className="flex items-center gap-1">
                <HiIcons.HiOutlineClock className="text-lg" /> {course.duration || '45 Hours'}
              </div>
              <div className="flex items-center gap-1">
                <HiIcons.HiOutlineChartBar className="text-lg" /> {course.level || 'All Levels'}
              </div>
              <div className="flex items-center gap-1">
                <HiIcons.HiOutlineLanguage className="text-lg" /> {course.language || 'English'}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl">
                {course.teacher?.name?.charAt(0) || 'I'}
              </div>
              <div>
                <div className="text-sm text-gray-400">Created by</div>
                <div className="font-bold">{course.teacher?.name || 'Industry Expert'}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 🚀 MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 -mt-16 bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-slate-700 relative z-10">
            
            {/* What you'll learn */}
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">What you'll learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {course.whatYouWillLearn?.length > 0 ? (
                course.whatYouWillLearn.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <HiIcons.HiCheck className="text-emerald-500 shrink-0 text-xl" />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </div>
                ))
              ) : (
                <div className="text-gray-500">Comprehensive curriculum covering all modern aspects of the field.</div>
              )}
            </div>

            {/* Syllabus Section */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">Course Syllabus</h2>
              <button onClick={handleDownloadSyllabus} className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-2 hover:underline">
                <HiIcons.HiOutlineDocumentArrowDown className="text-xl" /> Download Syllabus
              </button>
            </div>
            
            <div className="space-y-4 mb-12">
              {course.syllabus?.length > 0 ? (
                course.syllabus.map((module, idx) => (
                  <div key={idx} className="border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                    <button 
                      onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <div className="font-bold text-gray-900 dark:text-white text-left">{module.title}</div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{module.lessons?.length || 0} lessons</span>
                        <HiIcons.HiChevronDown className={`transform transition-transform ${activeModule === idx ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {activeModule === idx && (
                      <div className="p-5 bg-white dark:bg-slate-800 divide-y divide-gray-100 dark:divide-slate-700">
                        {module.lessons?.map((lesson, lIdx) => (
                          <div key={lIdx} className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-3">
                              <HiIcons.HiOutlinePlayCircle className="text-gray-400 text-xl" />
                              <span className={lesson.isPreview ? 'text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer' : 'text-gray-700 dark:text-gray-300'}>
                                {lesson.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              {lesson.isPreview && <span className="text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">Preview</span>}
                              <span className="text-sm text-gray-500">{lesson.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="p-6 bg-gray-50 dark:bg-slate-700 rounded-2xl text-center text-gray-500">
                  Syllabus is currently being updated.
                </div>
              )}
            </div>

            {/* Requirements */}
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Requirements</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 mb-12">
              {course.requirements?.length > 0 ? (
                course.requirements.map((req, idx) => <li key={idx}>{req}</li>)
              ) : (
                <li>No prior experience required! We teach you from scratch.</li>
              )}
            </ul>
            
            {/* Description */}
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Description</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-loose">
              {course.description}
            </div>
            
          </div>

          {/* Right Column (Floating Buy Card) */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-700 lg:-mt-64 overflow-hidden sticky top-28 z-20">
              
              <div className="relative h-56 bg-gray-200 dark:bg-slate-700 flex items-center justify-center group cursor-pointer">
                {course.thumbnail ? (
                  <img src={course.thumbnail} alt="Course Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                     <HiIcons.HiOutlinePlay className="text-white text-6xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all z-10" />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                )}
                <div className="absolute bottom-4 text-center w-full font-bold text-white text-sm">Preview this course</div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl font-black text-gray-900 dark:text-white">₹{course.discountPrice || course.price}</span>
                  {course.discountPrice && <span className="text-lg text-gray-400 line-through">₹{course.price}</span>}
                </div>

                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-colors mb-4 shadow-lg shadow-blue-600/20">
                  Add to Cart
                </button>
                
                <button className="w-full py-4 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-900 dark:text-white rounded-xl font-bold transition-colors">
                  Buy Now
                </button>

                <div className="text-center text-sm text-gray-500 mt-4 mb-8">
                  30-Day Money-Back Guarantee
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 dark:text-white">This course includes:</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                     <HiIcons.HiOutlineVideoCamera className="text-xl" /> {course.duration || '20 hours'} on-demand video
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                     <HiIcons.HiOutlineDocumentText className="text-xl" /> 15 articles & resources
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                     <HiIcons.HiOutlineDevicePhoneMobile className="text-xl" /> Access on mobile and TV
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                     <HiIcons.HiOutlineTrophy className="text-xl" /> Certificate of completion
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CourseDetail;
