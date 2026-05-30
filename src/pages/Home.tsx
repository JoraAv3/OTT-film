import { useEffect, useState, useMemo } from 'react';
import { contentService } from '@/services/mock/content.service';
import { HeroBanner } from '@/widgets/HeroBanner';
import { MovieCarousel } from '@/widgets/MovieCarousel';
import { Content } from '@/types';

export const Home = () => {
  const [trending, setTrending] = useState<Content[]>([]);
  const [movies, setMovies] = useState<Content[]>([]);
  const [series, setSeries] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const [t, m, s] = await Promise.all([
        contentService.getTrending(),
        contentService.getMovies(),
        contentService.getSeries()
      ]);
      setTrending(t);
      setMovies(m);
      setSeries(s);
      setIsLoading(false);
    };
    fetch();
  }, []);

  /**
   * PERFORMANCE OPTIMIZATION: Memoize filtered lists to ensure stable array references.
   * This prevents unnecessary re-renders of the MovieCarousel components, which are
   * wrapped in React.memo. Without useMemo, a new array would be created on every
   * render, triggering a full re-render of the carousel and its cards.
   */
  const newReleases = useMemo(() => movies.filter(m => m.year === 2024), [movies]);
  const actionMovies = useMemo(() => movies.filter(m => m.genres.includes('Action')), [movies]);
  const sciFiMovies = useMemo(() => movies.filter(m => m.genres.includes('Sci-Fi')), [movies]);
  const dramaMovies = useMemo(() => movies.filter(m => m.genres.includes('Drama')), [movies]);
  const highRatedContent = useMemo(() => [...movies, ...series].filter(i => i.rating > 8.5), [movies, series]);

  if (isLoading) {
    return <div className="min-h-screen bg-[#0B0B0F] animate-pulse" />;
  }

  return (
    <div className="pb-20">
      <HeroBanner content={trending[0] || movies[0]} />

      <div className="relative z-10 -mt-24 md:-mt-48">
        <MovieCarousel title="Trending Now" items={trending} />
        <MovieCarousel title="New Releases" items={newReleases} />
        <MovieCarousel title="Binge-worthy Series" items={series} />
        <MovieCarousel title="Action & Thrills" items={actionMovies} />
        <MovieCarousel title="Sci-Fi Journeys" items={sciFiMovies} />
        <MovieCarousel title="Drama Selection" items={dramaMovies} />
        <MovieCarousel title="Lumina Originals" items={highRatedContent} />
      </div>
    </div>
  );
};
