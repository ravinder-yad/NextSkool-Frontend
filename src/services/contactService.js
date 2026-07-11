import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contact';

export const contactService = {
  getSettings: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching contact settings:", error);
      throw error;
    }
  },

  submitMessage: async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/message`, formData);
      return response.data;
    } catch (error) {
      console.error("Error submitting message:", error);
      throw error;
    }
  },

  subscribeNewsletter: async (email) => {
    try {
      const response = await axios.post(`${API_URL}/newsletter`, { email });
      return response.data;
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      throw error;
    }
  }
};
