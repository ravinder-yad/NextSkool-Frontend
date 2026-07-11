import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Home from './pages/Home/Home';
import Placements from './pages/Placements/Placements';
import Explore from './pages/Explore/Explore';
import ExploreDetail from './pages/Explore/ExploreDetail';
import Courses from './pages/Courses/Courses';
import CourseDetail from './pages/Courses/CourseDetail';
import BlogList from './pages/Blog/BlogList';
import BlogDetail from './pages/Blog/BlogDetail';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

// Auth Pages
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import VerifyOTP from './pages/VerifyOTP/VerifyOTP';
import ResetPassword from './pages/ResetPassword/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Main Website Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="placements" element={<Placements />} />
          <Route path="explore" element={<Explore />} />
          <Route path="explore/:slug" element={<ExploreDetail />} />
          <Route path="categories" element={<Navigate to="/explore" replace />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course/:slug" element={<CourseDetail />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* Add more routes here later */}
        </Route>

        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
