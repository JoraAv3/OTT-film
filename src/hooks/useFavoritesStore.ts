import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[]; // Content IDs
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (id) => {
        const { favorites } = get();
        if (favorites.includes(id)) {
          set({ favorites: favorites.filter(fid => fid !== id) });
        } else {
          set({ favorites: [...favorites, id] });
        }
      },
      isFavorite: (id) => get().favorites.includes(id)
    }),
    {
      name: 'favorites-storage',
    }
  )
);
