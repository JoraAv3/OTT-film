import { Content, Movie, Series } from '@/types';
import { MOCK_MOVIES, MOCK_SERIES } from '@/data/mocks';

const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';
const SIMULATED_DELAY = 500;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const contentService = {
  async getTrending(): Promise<Content[]> {
    if (USE_MOCK) {
      await delay(SIMULATED_DELAY);
      return [...MOCK_MOVIES, ...MOCK_SERIES].sort(() => 0.5 - Math.random()).slice(0, 10);
    }
    // Future API call
    return [];
  },

  async getMovies(): Promise<Movie[]> {
    if (USE_MOCK) {
      await delay(SIMULATED_DELAY);
      return MOCK_MOVIES;
    }
    return [];
  },

  async getSeries(): Promise<Series[]> {
    if (USE_MOCK) {
      await delay(SIMULATED_DELAY);
      return MOCK_SERIES;
    }
    return [];
  },

  async getContentById(id: string): Promise<Content | undefined> {
    if (USE_MOCK) {
      await delay(SIMULATED_DELAY);
      return [...MOCK_MOVIES, ...MOCK_SERIES].find(item => item.id === id);
    }
    return undefined;
  },

  async searchContent(query: string): Promise<Content[]> {
    if (USE_MOCK) {
      await delay(SIMULATED_DELAY);
      const q = query.toLowerCase();
      return [...MOCK_MOVIES, ...MOCK_SERIES].filter(
        item =>
          item.title.toLowerCase().includes(q) ||
          item.genres.some(g => g.toLowerCase().includes(q))
      );
    }
    return [];
  }
};
