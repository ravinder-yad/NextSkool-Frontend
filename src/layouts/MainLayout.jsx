import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* Footer will go here */}
    </div>
  );
};

export default MainLayout;
