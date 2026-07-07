import React from 'react';
import HeroSection from './components/HeroSection';
import TrustedCompanies from './components/TrustedCompanies';
import Statistics from './components/Statistics';
import Categories from './components/Categories';
import CourseGrid from './components/CourseGrid';
import WhyNextSkool from './components/WhyNextSkool';
import LearningProcess from './components/LearningProcess';
import PlacementSuccess from './components/PlacementSuccess';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="bg-white dark:bg-brand-bg transition-colors duration-300">
      <HeroSection />
      <TrustedCompanies />
      <Statistics />
      <Categories />
      <CourseGrid title="Popular Courses" subtitle="Top rated by our students" />
      <CourseGrid title="Trending Courses" subtitle="Most enrolled this week" bgGray={true} />
      <WhyNextSkool />
      <LearningProcess />
      <PlacementSuccess />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
