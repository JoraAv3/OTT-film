export type AgeRating = '0+' | '6+' | '12+' | '16+' | '18+';

export interface MediaAssets {
  posterUrl: string;
  backdropUrl: string;
  trailerUrl?: string | null;
  videoUrl?: string;
  thumbnailUrl?: string;
}

export interface Cast {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
}

export interface BaseContent {
  id: string;
  title: string;
  description: string;
  year: number;
  genres: string[];
  ageRating: AgeRating;
  rating: number;
  isDemo: boolean;
  media: MediaAssets;
  cast: Cast[];
}

export interface Movie extends BaseContent {
  type: 'movie';
  duration: number; // in seconds
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface Season {
  id: string;
  number: number;
  episodes: Episode[];
}

export interface Series extends BaseContent {
  type: 'series';
  seasons: Season[];
}

export type Content = Movie | Series;

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  subscription?: {
    planId: string;
    status: 'active' | 'expired' | 'canceled';
    validUntil: string;
  };
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface WatchProgress {
  contentId: string;
  progress: number; // 0 to 1
  lastWatchedAt: string;
}
