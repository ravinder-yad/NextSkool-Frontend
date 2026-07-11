import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const courseService = {
  // Get all courses, with optional category filter
  getAllCourses: async (categorySlug) => {
    try {
      const url = categorySlug ? `${API_URL}/courses?category=${categorySlug}` : `${API_URL}/courses`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching courses', error);
      throw error;
    }
  },

  // Get a single detailed course by slug
  getCourseBySlug: async (slug) => {
    try {
      const response = await axios.get(`${API_URL}/courses/${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching course with slug: ${slug}`, error);
      throw error;
    }
  }
};
