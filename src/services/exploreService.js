import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const exploreService = {
  // Get navbar data which includes explore items
  getNavbarData: async () => {
    try {
      const response = await axios.get(`${API_URL}/navbar`);
      return response.data;
    } catch (error) {
      console.error('Error fetching navbar data', error);
      throw error;
    }
  },

  // Get full explore details by slug for the landing page
  getExploreBySlug: async (slug) => {
    try {
      const response = await axios.get(`${API_URL}/explore/${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching explore item with slug: ${slug}`, error);
      throw error;
    }
  }
};
