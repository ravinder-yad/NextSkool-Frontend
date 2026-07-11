import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HiOutlineMagnifyingGlass, 
  HiOutlineBell, 
  HiOutlineHeart, 
  HiOutlineShoppingCart,
  HiOutlineBars3,
  HiChevronDown,
  HiOutlineRocketLaunch,
  HiOutlineBookOpen
} from 'react-icons/hi2';
import * as HiIcons from 'react-icons/hi2';
import ThemeToggle from '../Buttons/ThemeToggle';
import MobileDrawer from './MobileDrawer';
import Logo from '../common/Logo';
import { exploreService } from '../../services/exploreService';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Explore', path: '/explore', hasDropdown: true },
  { name: 'All Courses', path: '/courses' },
  { name: 'Live Classes', path: '/live-classes' },
  { name: 'Placements', path: '/placements' },
  { name: 'More', isMoreMenu: true, hasDropdown: true },
];

// Remove courseCategories as we'll fetch exploreItems dynamically

const moreLinks = [
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [exploreItems, setExploreItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        const res = await exploreService.getNavbarData();
        if (res.success && res.data && res.data.explore) {
          setExploreItems(res.data.explore);
        }
      } catch (error) {
        console.error("Failed to load navbar data", error);
      }
    };
    fetchNavbarData();

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md shadow-sm py-0 border-b border-gray-200 dark:border-slate-800' : 'bg-white dark:bg-[#0F172A] py-1 border-b border-gray-100 dark:border-slate-800/50'}`}>
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-16 xl:h-20 gap-3 xl:gap-8">
            
            {/* Left: Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <button 
                onClick={() => setIsMobileDrawerOpen(true)}
                className="lg:hidden p-2 text-[#111827] dark:text-white rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                <HiOutlineBars3 size={28} />
              </button>
              
              <Link to="/" className="flex items-center gap-2 xl:gap-2.5">
                <div className="scale-90 xl:scale-100 origin-left"><Logo /></div>
                <span className="text-lg lg:text-xl xl:text-2xl font-extrabold tracking-tight text-[#111827] dark:text-white">
                  NextSkool
                </span>
              </Link>
            </div>

            {/* Center: Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 flex-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  {link.isMoreMenu ? (
                    <button
                      className="relative py-2 font-semibold text-[13px] lg:text-[14px] xl:text-[15px] flex items-center gap-1 xl:gap-1.5 transition-colors whitespace-nowrap text-[#6B7280] dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-blue-400"
                    >
                      {link.name}
                      <HiChevronDown size={14} className="mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative py-2 font-semibold text-[13px] lg:text-[14px] xl:text-[15px] flex items-center gap-1 xl:gap-1.5 transition-colors whitespace-nowrap
                        ${isActive(link.path) 
                          ? 'text-[#2563EB] dark:text-blue-400' 
                          : 'text-[#6B7280] dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-blue-400'
                        }`}
                    >
                      {link.name}
                      {link.hasDropdown && <HiChevronDown size={14} className="mt-0.5 transition-transform duration-300 group-hover:rotate-180" />}
                      
                      {/* Hover Underline Animation */}
                      <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-[#2563EB] dark:bg-blue-400 transition-all duration-300 rounded-t-full ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                  )}
                  
                  {/* Dropdowns */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 xl:w-64 bg-white dark:bg-slate-900 rounded-2xl p-2 xl:p-3 z-50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-blue-900/10 border border-gray-100 dark:border-slate-800 animate-in fade-in slide-in-from-top-4 duration-200">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-900 rotate-45 border-l border-t border-gray-100 dark:border-slate-800"></div>
                      <div className="grid grid-cols-1 gap-1 relative bg-white dark:bg-slate-900 z-10">
                        {link.isMoreMenu ? (
                           moreLinks.map((subLink, idx) => (
                            <Link 
                              key={idx} 
                              to={subLink.path}
                              className="px-3 xl:px-4 py-2 xl:py-3 text-[13px] xl:text-sm font-semibold rounded-xl text-[#6B7280] dark:text-slate-300 hover:bg-[#EFF6FF] dark:hover:bg-slate-800 hover:text-[#2563EB] dark:hover:text-blue-400 transition-all flex items-center justify-between group/item"
                            >
                              {subLink.name}
                              <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#2563EB] dark:text-blue-400">→</span>
                            </Link>
                          ))
                        ) : (
                          <div className="grid grid-cols-2 gap-2 p-2">
                            {exploreItems.length > 0 ? (
                              exploreItems.slice(0, 16).map((item) => {
                                const IconComp = HiIcons[item.icon] || HiOutlineBookOpen;
                                return (
                                  <Link 
                                    key={item._id} 
                                    to={`/explore/${item.slug}`}
                                    className="px-3 py-2 text-[13px] xl:text-sm font-semibold rounded-xl text-[#6B7280] dark:text-slate-300 hover:bg-[#EFF6FF] dark:hover:bg-slate-800 hover:text-[#2563EB] dark:hover:text-blue-400 transition-all flex items-center gap-2 group/item"
                                  >
                                    <IconComp size={16} className="text-[#2563EB] dark:text-blue-400 opacity-70 group-hover/item:opacity-100" />
                                    <span className="truncate">{item.title}</span>
                                  </Link>
                                );
                              })
                            ) : (
                              <div className="col-span-2 p-4 text-center text-sm text-gray-500">Loading programs...</div>
                            )}
                            <div className="col-span-2 mt-2 pt-2 border-t border-gray-100 dark:border-slate-800">
                              <Link to="/explore" className="text-sm font-bold text-[#2563EB] dark:text-blue-400 hover:underline flex items-center justify-center gap-1">
                                View All Programs <span className="text-lg leading-none">→</span>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 xl:gap-5 shrink-0">
              {/* Search Box */}
              <div className="hidden lg:flex relative group/search">
                <input 
                  type="text" 
                  placeholder="AI Search..." 
                  className="pl-9 pr-3 xl:pl-11 xl:pr-4 py-2 xl:py-2.5 rounded-full border border-blue-100 dark:border-slate-700 bg-[#EFF6FF]/50 dark:bg-slate-800 text-[#111827] dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-[#2563EB] dark:focus:border-blue-400 focus:bg-white w-32 lg:w-40 xl:w-56 transition-all duration-300 placeholder:text-[#6B7280] dark:placeholder:text-slate-400 text-[13px] xl:text-sm font-medium shadow-inner shadow-blue-900/5 dark:shadow-none"
                />
                <HiOutlineMagnifyingGlass className="absolute left-3 xl:left-4 top-1/2 -translate-y-1/2 text-[#6B7280] dark:text-slate-400 group-focus-within/search:text-[#2563EB] dark:group-focus-within/search:text-blue-400 transition-colors" size={16} />
              </div>
              
              <ThemeToggle isScrolled={isScrolled} />

              <div className="hidden md:flex items-center gap-1 xl:gap-1.5">
                <button className="p-2 xl:p-2.5 rounded-full text-[#6B7280] dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-blue-400 hover:bg-[#EFF6FF] dark:hover:bg-slate-800 transition-all relative">
                  <HiOutlineBell size={20} className="xl:w-[22px] xl:h-[22px]" />
                  <span className="absolute top-1.5 xl:top-2 right-1.5 xl:right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                </button>
                
                <button className="p-2 xl:p-2.5 rounded-full text-[#6B7280] dark:text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all">
                  <HiOutlineHeart size={20} className="xl:w-[22px] xl:h-[22px]" />
                </button>
                
                <button className="p-2 xl:p-2.5 rounded-full text-[#6B7280] dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-blue-400 hover:bg-[#EFF6FF] dark:hover:bg-slate-800 transition-all relative">
                  <HiOutlineShoppingCart size={20} className="xl:w-[22px] xl:h-[22px]" />
                  <span className="absolute top-0 right-0 bg-[#2563EB] dark:bg-blue-500 text-white text-[9px] xl:text-[10px] font-bold w-4 h-4 xl:w-[18px] xl:h-[18px] flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900 shadow-sm">0</span>
                </button>
              </div>

              <div className="h-6 xl:h-8 w-px bg-gray-200 dark:bg-slate-700 hidden sm:block mx-1 xl:mx-2"></div>

              {/* Authentication Actions */}
              <div className="hidden sm:flex items-center gap-3 xl:gap-4 shrink-0">
                <Link to="/login" className="font-bold text-[14px] xl:text-[15px] text-[#111827] dark:text-white hover:text-[#2563EB] dark:hover:text-blue-400 transition-colors">
                  Login
                </Link>
                <Link to="/register" className="px-4 xl:px-6 py-2 xl:py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white text-[13px] xl:text-[15px] font-bold rounded-md shadow-sm transition-all flex items-center gap-1.5 xl:gap-2 whitespace-nowrap">
                  <HiOutlineRocketLaunch size={16} className="xl:w-[18px] xl:h-[18px]" />
                  <span>Get Started</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer 
        isOpen={isMobileDrawerOpen} 
        onClose={() => setIsMobileDrawerOpen(false)} 
      />
    </>
  );
};

export default Navbar;
