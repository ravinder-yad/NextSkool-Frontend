import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blogs';

export const blogService = {
  getAllBlogs: async (category = '') => {
    try {
      const url = category ? `${API_URL}?category=${category}&status=published` : `${API_URL}?status=published`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  getFeaturedBlogs: async () => {
    try {
      const response = await axios.get(`${API_URL}/featured`);
      return response.data;
    } catch (error) {
      console.error('Error fetching featured blogs:', error);
      throw error;
    }
  },

  getBlogBySlug: async (slug) => {
    try {
      const response = await axios.get(`${API_URL}/${slug}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching blog details:', error);
      throw error;
    }
  }
};
