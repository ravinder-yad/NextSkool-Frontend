import axios from 'axios';

const API_URL = 'http://localhost:5000/api/about';

export const aboutService = {
  getAboutSettings: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching about settings:", error);
      throw error;
    }
  },

  getTeam: async (isMentor) => {
    try {
      const url = isMentor !== undefined ? `${API_URL}/team?isMentor=${isMentor}` : `${API_URL}/team`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching team:", error);
      throw error;
    }
  },

  getTestimonials: async () => {
    try {
      const response = await axios.get(`${API_URL}/testimonials`);
      return response.data;
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      throw error;
    }
  },

  getFAQs: async () => {
    try {
      const response = await axios.get(`${API_URL}/faqs`);
      return response.data;
    } catch (error) {
      console.error("Error fetching faqs:", error);
      throw error;
    }
  }
};
