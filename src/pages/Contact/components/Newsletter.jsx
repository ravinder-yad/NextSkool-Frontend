import React, { useState } from 'react';
import { contactService } from '../../../services/contactService';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactService.subscribeNewsletter(email);
      setStatus('Subscribed!');
      setEmail('');
    } catch (error) {
      setStatus('Error or already subscribed.');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-center px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Stay Updated</h2>
      <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
        Subscribe to our newsletter for the latest courses, tech news, and placement updates.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
        <input 
          type="email" 
          required 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-6 py-4 rounded-xl text-gray-900 outline-none focus:ring-4 focus:ring-white/20"
        />
        <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
          Subscribe
        </button>
      </form>
      {status && <p className="mt-4 text-white font-medium">{status}</p>}
    </section>
  );
};

export default Newsletter;