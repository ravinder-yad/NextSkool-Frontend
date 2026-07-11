import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogService } from '../../services/blogService';
import { 
  HiOutlineMagnifyingGlass,
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineClock
} from 'react-icons/hi2';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const [blogsRes, featuredRes] = await Promise.all([
          blogService.getAllBlogs(),
          blogService.getFeaturedBlogs()
        ]);
        
        if (blogsRes.success) setBlogs(blogsRes.data);
        if (featuredRes.success) setFeatured(featuredRes.data);
      } catch (error) {
        console.error('Failed to load blogs', error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  const filteredBlogs = blogs.filter(b => 
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-12">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
          NextSkool <span className="text-blue-600">Blog</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          Stay Updated With Technology, Programming, Career Tips and Industry Insights.
        </p>
        <div className="max-w-xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 transition-colors shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Blogs */}
        {!search && featured.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-blue-600 pl-4">Featured Reads</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featured.map(blog => (
                <Link key={blog._id} to={`/blog/${blog.slug}`} className="group relative rounded-3xl overflow-hidden shadow-lg h-96 flex items-end">
                  <div className="absolute inset-0">
                    <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  </div>
                  <div className="relative z-10 p-8 w-full">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-4">
                      {blog.category?.name || 'Featured'}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-300 text-sm mt-4">
                      <div className="flex items-center gap-1"><HiOutlineUser /> {blog.author?.name}</div>
                      <div className="flex items-center gap-1"><HiOutlineCalendar /> {new Date(blog.publishedAt).toLocaleDateString()}</div>
                      <div className="flex items-center gap-1"><HiOutlineClock /> {blog.readingTime} min read</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Latest Blogs */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-blue-600 pl-4">
              {search ? 'Search Results' : 'Latest Articles'}
            </h2>
            
            {loading ? (
              <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div></div>
            ) : filteredBlogs.length === 0 ? (
              <div className="text-center py-12 text-gray-500">No articles found matching your criteria.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredBlogs.map(blog => (
                  <Link key={blog._id} to={`/blog/${blog.slug}`} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all flex flex-col">
                    <div className="h-56 relative overflow-hidden bg-gray-200 dark:bg-slate-700">
                      <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                        {blog.category?.name}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 flex-1">
                        {blog.shortDescription}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-slate-700 text-xs text-gray-500 font-medium">
                        <div className="flex items-center gap-2">
                          <img src={blog.author?.photo} alt={blog.author?.name} className="w-6 h-6 rounded-full" />
                          <span>{blog.author?.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <HiOutlineClock /> {blog.readingTime} min
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-12">
            
            <div className="bg-gray-50 dark:bg-slate-800 rounded-3xl p-8 border border-gray-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Popular Categories</h3>
              <div className="flex flex-col gap-3">
                <Link to="#" className="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-blue-600 font-medium">
                  <span>Technology</span>
                  <span className="bg-white dark:bg-slate-700 px-2 py-1 rounded text-xs">12</span>
                </Link>
                <Link to="#" className="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-blue-600 font-medium">
                  <span>Programming</span>
                  <span className="bg-white dark:bg-slate-700 px-2 py-1 rounded text-xs">8</span>
                </Link>
                <Link to="#" className="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-blue-600 font-medium">
                  <span>Career Advice</span>
                  <span className="bg-white dark:bg-slate-700 px-2 py-1 rounded text-xs">15</span>
                </Link>
              </div>
            </div>

            <div className="bg-blue-600 rounded-3xl p-8 text-white text-center shadow-xl shadow-blue-600/20">
              <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
              <p className="text-blue-100 mb-6 text-sm">Subscribe to our newsletter for the latest tech news and tutorials.</p>
              <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-lg text-gray-900 mb-3 focus:outline-none focus:ring-2 focus:ring-white" />
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 rounded-lg transition-colors">
                Subscribe Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogList;
