import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogService } from '../../services/blogService';
import { 
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineHeart,
  HiOutlineEye,
  HiOutlineShare,
  HiArrowLeft
} from 'react-icons/hi2';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await blogService.getBlogBySlug(slug);
        if (res.success) {
          setBlog(res.data);
          document.title = `${res.data.title} - NextSkool Blog`;
        }
      } catch (error) {
        console.error('Failed to load blog', error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-slate-900">
        <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
        <Link to="/blog" className="text-blue-600 font-bold">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-12">
      
      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline">
            <HiArrowLeft /> Back to Blog
          </Link>
        </div>
        
        <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
          {blog.category?.name || 'Uncategorized'}
        </span>
        
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-8">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <img src={blog.author?.photo} alt={blog.author?.name} className="w-10 h-10 rounded-full" />
            <div className="text-left">
              <div className="text-gray-900 dark:text-white font-bold">{blog.author?.name}</div>
              <div className="text-xs">Author</div>
            </div>
          </div>
          <div className="h-8 w-px bg-gray-200 dark:bg-slate-700 hidden sm:block"></div>
          <div className="flex items-center gap-1"><HiOutlineCalendar size={18} /> {new Date(blog.publishedAt).toLocaleDateString()}</div>
          <div className="flex items-center gap-1"><HiOutlineClock size={18} /> {blog.readingTime} min read</div>
          <div className="flex items-center gap-1"><HiOutlineEye size={18} /> {blog.views} views</div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[21/9]">
          <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Actions Bar */}
        <div className="flex items-center justify-between py-4 border-y border-gray-100 dark:border-slate-800 mb-10">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
              <HiOutlineHeart size={24} /> <span className="font-medium">{blog.likes}</span>
            </button>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors font-medium">
              <HiOutlineShare size={20} /> Share
            </button>
          </div>
        </div>

        {/* Content (Render Markdown simply for mock) */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          {blog.content.split('\\n').map((paragraph, index) => {
            if (paragraph.startsWith('# ')) return <h1 key={index} className="text-3xl font-black mb-6 mt-10 text-gray-900 dark:text-white">{paragraph.replace('# ', '')}</h1>;
            if (paragraph.startsWith('## ')) return <h2 key={index} className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-white">{paragraph.replace('## ', '')}</h2>;
            if (paragraph.trim() === '') return <br key={index} />;
            return <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{paragraph}</p>;
          })}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-16">
          <span className="font-bold text-gray-900 dark:text-white mr-2">Tags:</span>
          {blog.tags?.map(tag => (
            <span key={tag._id} className="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Author Box */}
        <div className="bg-gray-50 dark:bg-slate-800 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left border border-gray-100 dark:border-slate-700 mb-16">
          <img src={blog.author?.photo} alt={blog.author?.name} className="w-24 h-24 rounded-full shadow-lg" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Written by {blog.author?.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{blog.author?.bio}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;
