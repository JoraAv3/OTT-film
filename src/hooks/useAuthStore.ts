import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, name: string) => Promise<void>;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email, name) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        set({
          user: {
            id: 'u1',
            email,
            name,
            avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
            subscription: {
              planId: 'plan-standard',
              status: 'active',
              validUntil: '2026-01-01'
            }
          },
          isAuthenticated: true
        });
      },
      logout: () => set({ user: null, isAuthenticated: false }),
      updateUser: (data) => set((state) => ({
        user: state.user ? { ...state.user, ...data } : null
      }))
    }),
    {
      name: 'auth-storage',
    }
  )
);
