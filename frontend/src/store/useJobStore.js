import { create } from 'zustand';
import axios from 'axios';

export const useJobStore = create((set) => ({
  jobs: [],
  search: '',
  setSearch: (newSearch) => set({ search: newSearch }),
  getJobsData: async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Corrected line
    try {
      const response = await axios.get(`${backendUrl}/api/v1/jobs/list`);
      set({ jobs: response.data.jobs });
    } catch (error) {
      console.error('Error in fetching jobs:', error);
      set({ jobs: [], error: error.message });
    }
  },
}));
