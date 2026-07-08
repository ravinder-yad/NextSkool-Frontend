import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Home from './pages/Home/Home';

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
