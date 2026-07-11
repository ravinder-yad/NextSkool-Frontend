import React, { useEffect, useState } from 'react';
import { aboutService } from '../../services/aboutService';
import AboutHero from './components/AboutHero';
import AboutStats from './components/AboutStats';
import AboutMission from './components/AboutMission';
import AboutTeam from './components/AboutTeam';
import AboutFAQ from './components/AboutFAQ';

const About = () => {
  const [data, setData] = useState({
    about: null,
    team: [],
    mentors: [],
    faqs: [],
    testimonials: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutRes, teamRes, mentorRes, faqRes, testimonialRes] = await Promise.all([
          aboutService.getAboutSettings(),
          aboutService.getTeam(false), // isMentor = false
          aboutService.getTeam(true),  // isMentor = true
          aboutService.getFAQs(),
          aboutService.getTestimonials()
        ]);
        
        setData({
          about: aboutRes.data || {},
          team: teamRes.data || [],
          mentors: mentorRes.data || [],
          faqs: faqRes.data || [],
          testimonials: testimonialRes.data || []
        });
      } catch (error) {
        console.error("Error fetching about page data", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0F172A]">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A] font-inter selection:bg-blue-500/30">
      <AboutHero data={data.about} />
      <AboutStats data={data.about} />
      <AboutMission data={data.about} />
      
      {/* Dynamic Team Section */}
      {data.team.length > 0 && <AboutTeam team={data.team} isMentor={false} />}
      
      {/* Dynamic Mentor Section */}
      {data.mentors.length > 0 && <AboutTeam team={data.mentors} isMentor={true} />}
      
      {/* FAQs */}
      {data.faqs.length > 0 && <AboutFAQ faqs={data.faqs} />}
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Start Your Journey?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of students who have transformed their careers with NextSkool.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/explore" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg w-full sm:w-auto">
            Explore Courses
          </a>
          <a href="/contact" className="px-8 py-4 bg-blue-700/50 text-white border border-blue-400/30 font-bold rounded-xl hover:bg-blue-800/50 transition-colors w-full sm:w-auto">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;