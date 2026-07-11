import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { exploreService } from '../../services/exploreService';
import * as HiIcons from 'react-icons/hi2';

const ExploreDetail = () => {
  const { slug } = useParams();
  const [exploreData, setExploreData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExploreData = async () => {
      try {
        setLoading(true);
        const res = await exploreService.getExploreBySlug(slug);
        if (res.success) {
          setExploreData(res.data);
          if (res.data.seoTitle) {
            document.title = res.data.seoTitle;
          } else {
            document.title = `${res.data.title} - NextSkool`;
          }
        }
      } catch (error) {
        console.error('Failed to fetch explore details', error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) {
      fetchExploreData();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (!exploreData) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center text-center px-4 bg-gray-50 dark:bg-slate-900">
        <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full flex items-center justify-center mb-6">
          <HiIcons.HiOutlineExclamationTriangle size={48} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">404 - Category Not Found</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">We couldn't find the program category you were looking for. It might have been moved or deleted.</p>
        <Link to="/explore" className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
          Browse All Programs
        </Link>
      </div>
    );
  }

  const IconComp = HiIcons[exploreData.icon] || HiIcons.HiOutlineBookOpen;

  // Mock Data for the premium UI
  const mockCourses = [
    { id: 1, title: `Complete ${exploreData.title} Bootcamp`, rating: 4.8, students: '12.5k', price: '₹3,499' },
    { id: 2, title: `Advanced ${exploreData.title} Masterclass`, rating: 4.9, students: '8.2k', price: '₹4,999' },
    { id: 3, title: `${exploreData.title} for Beginners (2026)`, rating: 4.7, students: '24k', price: '₹2,499' }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] font-sans selection:bg-blue-500/30">
      
      {/* 🌟 HERO SECTION (Premium Glassmorphism + Gradient) */}
      <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
          {exploreData.banner && (
            <>
              <img src={`http://localhost:5000${exploreData.banner}`} alt="Banner" className="w-full h-full object-cover opacity-10 dark:opacity-20 scale-105 animate-pulse-slow" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/80 via-[#F8FAFC]/95 to-[#F8FAFC] dark:from-[#0F172A]/80 dark:via-[#0F172A]/95 dark:to-[#0F172A]"></div>
            </>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
            
            {/* Left: Icon / Image */}
            <div className="shrink-0 relative group">
              <div className="absolute inset-0 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" style={{ backgroundColor: exploreData.themeColor }}></div>
              <div 
                className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-[2rem] flex items-center justify-center shadow-2xl backdrop-blur-md border border-white/20 dark:border-white/10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
                style={{ background: `linear-gradient(135deg, ${exploreData.themeColor}20, ${exploreData.themeColor}40)` }}
              >
                {exploreData.image ? (
                  <img src={`http://localhost:5000${exploreData.image}`} alt={exploreData.title} className="w-full h-full object-cover rounded-[2rem]" />
                ) : (
                  <IconComp size={80} style={{ color: exploreData.themeColor }} className="drop-shadow-lg" />
                )}
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 flex items-center gap-2 animate-bounce-slow">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Hiring Active</span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: exploreData.themeColor }}></div>
                <span className="text-sm font-bold tracking-wide uppercase text-gray-700 dark:text-gray-300">
                  {exploreData.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Master <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${exploreData.themeColor}, #8B5CF6)` }}>
                  {exploreData.title}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl leading-relaxed font-medium">
                {exploreData.shortDescription}
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link to={`/courses?category=${exploreData.slug}`} className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-gray-900/20 dark:hover:shadow-white/20">
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out group-hover:w-full"></div>
                  <span className="relative flex items-center gap-2">
                    Explore {exploreData.courseCount} Courses <HiIcons.HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-2xl font-bold text-lg border-2 border-gray-200 dark:border-slate-700 hover:border-gray-900 dark:hover:border-white transition-all flex items-center gap-2">
                  <HiIcons.HiOutlineDocumentArrowDown className="text-xl" /> Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📊 STATS BAR */}
      <div className="border-y border-gray-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200 dark:divide-slate-800">
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-1">50K+</div>
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Learners</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-1">4.8/5</div>
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Avg Rating</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-1">8 LPA</div>
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Avg Package</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-1">300+</div>
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Hiring Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* 🚀 MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Column (Main Info & Courses) */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* About Section */}
            <section>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 rounded-full" style={{ backgroundColor: exploreData.themeColor }}></span>
                About this Path
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-loose">
                {exploreData.longDescription || "This specialized category is designed to take you from a complete beginner to an industry-ready professional. Our curriculum is constantly updated to match the latest industry trends and requirements."}
              </div>
            </section>

            {/* Featured Courses Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
                  <span className="w-1.5 h-8 rounded-full" style={{ backgroundColor: exploreData.themeColor }}></span>
                  Top Courses
                </h2>
                <Link to={`/courses?category=${exploreData.slug}`} className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1">
                  View All <HiIcons.HiOutlineArrowRight />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockCourses.map(course => (
                  <div key={course.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-xl bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300">
                        <IconComp size={24} />
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-1 rounded-lg text-sm font-bold">
                        <HiIcons.HiStar className="text-amber-500" /> {course.rating}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <HiIcons.HiOutlineUsers size={16} /> {course.students} Students
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700">
                      <span className="text-2xl font-black text-gray-900 dark:text-white">{course.price}</span>
                      <Link 
                        to={`/course/complete-web-development-bootcamp-2026`} 
                        className="bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Why Learn Card */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-slate-700 sticky top-28">
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Why Learn This?</h3>
              
              <ul className="space-y-6">
                {[
                  { icon: HiIcons.HiOutlineBriefcase, title: 'High Demand', desc: 'Millions of unfilled jobs globally.' },
                  { icon: HiIcons.HiOutlineBanknotes, title: 'Lucrative Salary', desc: 'Top tier compensation packages.' },
                  { icon: HiIcons.HiOutlineGlobeAlt, title: 'Remote Work', desc: 'Work from anywhere in the world.' },
                  { icon: HiIcons.HiOutlineArrowTrendingUp, title: 'Future Proof', desc: 'Skills that will last a lifetime.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-slate-700 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-slate-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">Ready to start your journey?</p>
                <Link to={`/courses?category=${exploreData.slug}`} className="flex justify-center items-center gap-2 w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors">
                  Get Started Today
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ExploreDetail;
