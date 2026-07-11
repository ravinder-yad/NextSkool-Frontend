import React, { useState } from 'react';
import { contactService } from '../../../services/contactService';

const ContactForm = ({ data }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', department: 'General Inquiry', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await contactService.submitMessage(formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', department: 'General Inquiry', message: '' });
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  const departments = data?.departments?.length > 0 ? data.departments : ['General Inquiry', 'Admissions', 'Technical Support', 'Placement Cell'];

  return (
    <section className="py-16 bg-gray-50 dark:bg-[#0B1120]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">Fill out the form and our team will get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number *</label>
                  <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Department *</label>
                  <select value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white">
                    {departments.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                <input type="text" required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                <textarea rows="4" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white resize-none" />
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" required className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label className="text-sm text-gray-600 dark:text-gray-400">I agree to the Privacy Policy</label>
              </div>

              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25">
                Send Message
              </button>
              {status && <p className="text-center font-medium mt-4 text-blue-600">{status}</p>}
            </form>
          </div>

          <div className="h-full min-h-[500px] bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-700 p-2">
            <iframe 
              src={data?.office?.googleMapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.23359676775!2d75.714594646875!3d26.885141699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"}
              className="w-full h-full rounded-2xl border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;