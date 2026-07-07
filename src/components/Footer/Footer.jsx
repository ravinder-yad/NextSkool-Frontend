import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800 relative z-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Logo className="w-10 h-10" />
              <span className="text-2xl font-bold text-white tracking-tight">
                NextSkool
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Empowering students and professionals with top-tier tech education, real-world projects, and dedicated placement assistance to build the future.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"><FaFacebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"><FaTwitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"><FaLinkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"><FaYoutube size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 font-medium">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-brand-accent transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-brand-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Courses</h4>
            <ul className="space-y-3 font-medium">
              <li><Link to="/courses/web" className="hover:text-brand-accent transition-colors">Web Development</Link></li>
              <li><Link to="/courses/data" className="hover:text-brand-accent transition-colors">Data Science</Link></li>
              <li><Link to="/courses/ai" className="hover:text-brand-accent transition-colors">Artificial Intelligence</Link></li>
              <li><Link to="/courses/uiux" className="hover:text-brand-accent transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3 font-medium">
              <li><Link to="/terms" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-brand-accent transition-colors">Refund Policy</Link></li>
              <li><Link to="/support" className="hover:text-brand-accent transition-colors">Help Center</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} NextSkool. All rights reserved. Premium Learning Platform.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
