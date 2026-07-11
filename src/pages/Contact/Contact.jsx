import React, { useEffect, useState } from 'react';
import { contactService } from '../../services/contactService';
import ContactHero from './components/ContactHero';
import ContactCards from './components/ContactCards';
import ContactForm from './components/ContactForm';
import Newsletter from './components/Newsletter';

const Contact = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await contactService.getSettings();
        setData(response.data || {});
      } catch (error) {
        console.error("Error fetching contact page data", error);
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
      <ContactHero data={data} />
      <ContactCards data={data} />
      <ContactForm data={data} />
      <Newsletter />
    </div>
  );
};

export default Contact;