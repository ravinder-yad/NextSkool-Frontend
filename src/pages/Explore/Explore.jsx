import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { exploreService } from '../../services/exploreService';
import * as HiIcons from 'react-icons/hi2';

const Explore = () => {
  const [exploreItems, setExploreItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExploreData = async () => {
      try {
        setLoading(true);
        // We can reuse the navbar data since it fetches all active explore items
        const res = await exploreService.getNavbarData();
        if (res.success && res.data && res.data.explore) {
          setExploreItems(res.data.explore);
        }
      } catch (error) {
        console.error('Failed to fetch explore items', error);
      } finally {
        setLoading(false);
      }
    };
    fetchExploreData();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Explore All Programs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Discover your path with our industry-leading courses and categories.</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : exploreItems.length === 0 ? (
          <div className="text-center text-gray-500 py-12 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
            No programs available right now. Please check back later.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {exploreItems.map((item) => {
              const IconComp = HiIcons[item.icon] || HiIcons.HiOutlineBookOpen;
              return (
                <Link 
                  key={item._id} 
                  to={`/explore/${item.slug}`}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-slate-700 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: `${item.themeColor}15`, color: item.themeColor }}>
                     <IconComp size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {item.shortDescription || `Explore our ${item.title} programs`}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                    View Programs <HiIcons.HiOutlineArrowRight className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
