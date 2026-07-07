import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineXMark, 
  HiOutlineMagnifyingGlass, 
  HiOutlineHome, 
  HiOutlineCog6Tooth, 
  HiOutlineArrowRightOnRectangle, 
  HiOutlineHeart, 
  HiOutlineShoppingCart,
  HiOutlineBookOpen,
  HiOutlineSquares2X2,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineInformationCircle,
  HiOutlinePhone,
  HiOutlineNewspaper,
  HiOutlineRocketLaunch
} from 'react-icons/hi2';
import Logo from '../common/Logo';

const MobileDrawer = ({ isOpen, onClose }) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', icon: HiOutlineHome },
    { name: 'Explore', path: '/explore', icon: HiOutlineBookOpen },
    { name: 'Categories', path: '/categories', icon: HiOutlineSquares2X2 },
    { name: 'Live Classes', path: '/live-classes', icon: HiOutlineUserGroup },
    { name: 'Placements', path: '/placements', icon: HiOutlineBriefcase },
    { name: 'Blog', path: '/blog', icon: HiOutlineNewspaper },
    { name: 'About', path: '/about', icon: HiOutlineInformationCircle },
    { name: 'Contact', path: '/contact', icon: HiOutlinePhone },
  ];

  const userItems = [
    { name: 'Wishlist', path: '/wishlist', icon: HiOutlineHeart },
    { name: 'Cart', path: '/cart', icon: HiOutlineShoppingCart },
    { name: 'Settings', path: '/settings', icon: HiOutlineCog6Tooth },
    { name: 'Logout', path: '/logout', icon: HiOutlineArrowRightOnRectangle, isDanger: true },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[60]"
          />

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[280px] sm:w-[320px] bg-white dark:bg-[#0F172A] z-[70] shadow-2xl flex flex-col border-r border-gray-200 dark:border-slate-800"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-slate-800">
              <Link to="/" className="flex items-center gap-2" onClick={onClose}>
                <Logo className="w-8 h-8" />
                <span className="text-xl font-bold tracking-tight text-[#111827] dark:text-white">
                  NextSkool
                </span>
              </Link>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#EFF6FF] dark:hover:bg-slate-800 text-[#6B7280] dark:text-slate-400 transition-colors hover:text-[#2563EB] dark:hover:text-white"
              >
                <HiOutlineXMark size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-6 no-scrollbar">
              
              <div className="px-2">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="AI Search..." 
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-blue-200 dark:border-slate-700 bg-[#EFF6FF] dark:bg-slate-800 text-[#111827] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:focus:ring-blue-500 placeholder:text-gray-400 dark:placeholder:text-slate-500"
                  />
                  <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] dark:text-slate-400" size={18} />
                </div>
              </div>

              <div>
                <h3 className="px-3 text-[11px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                  Menu
                </h3>
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl font-semibold transition-colors ${
                        location.pathname === item.path
                          ? 'bg-[#EFF6FF] dark:bg-blue-500/10 text-[#2563EB] dark:text-blue-400'
                          : 'text-[#6B7280] dark:text-slate-300 hover:bg-[#EFF6FF] dark:hover:bg-slate-800 hover:text-[#2563EB] dark:hover:text-blue-400'
                      }`}
                    >
                      <item.icon size={20} className={location.pathname === item.path ? 'text-[#2563EB] dark:text-blue-400' : 'text-gray-400 dark:text-slate-400'} />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <h3 className="px-3 text-[11px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                  Account
                </h3>
                <nav className="flex flex-col gap-1">
                  {userItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl font-semibold transition-colors ${
                        item.isDanger
                          ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10'
                          : 'text-[#6B7280] dark:text-slate-300 hover:bg-[#EFF6FF] dark:hover:bg-slate-800 hover:text-[#2563EB] dark:hover:text-blue-400'
                      }`}
                    >
                      <item.icon size={20} className={item.isDanger ? '' : 'text-gray-400 dark:text-slate-400'} />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-[#0F172A] flex flex-col gap-3">
              <Link to="/login" className="w-full py-2.5 text-center font-bold text-[#111827] dark:text-white bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                Login
              </Link>
              <Link to="/register" className="w-full py-2.5 text-center font-bold text-white bg-[#2563EB] rounded-md shadow-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <HiOutlineRocketLaunch size={18} />
                Get Started
              </Link>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
