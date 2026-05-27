import { useEffect, useState } from 'react';
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

  if (isLoading) {
    return <div className="min-h-screen bg-[#0B0B0F] animate-pulse" />;
  }

  // JULES_TZ.md Home content rows:
  // 1. Trending Now
  // 2. New Releases
  // 3. Popular Movies
  // 4. TV Series
  // 5. Continue Watching (progress bar)
  // 6. Recommended For You
  // 7. Top 10

  const newReleases = movies.filter(m => m.year === 2024);
  const popularMovies = movies.filter(m => m.rating >= 8.0);
  const top10 = [...movies, ...series].sort((a, b) => b.rating - a.rating).slice(0, 10);
  const recommended = [...movies, ...series].sort(() => 0.5 - Math.random()).slice(0, 15);
  const continueWatching = movies.slice(0, 3); // Mocking continue watching with first 3 movies

  return (
    <div className="pb-20">
      <HeroBanner content={trending[0] || movies[0]} />

      <div className="relative z-10 -mt-24 md:-mt-48">
        <MovieCarousel title="Trending Now" items={trending} />
        <MovieCarousel title="New Releases" items={newReleases} />
        <MovieCarousel title="Popular Movies" items={popularMovies} />
        <MovieCarousel title="TV Series" items={series} />
        <MovieCarousel title="Continue Watching" items={continueWatching} isContinueWatching />
        <MovieCarousel title="Recommended For You" items={recommended} />
        <MovieCarousel title="Top 10" items={top10} showRank />
      </div>
    </div>
  );
};
