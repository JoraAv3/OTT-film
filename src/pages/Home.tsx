import { useEffect, useState } from 'react';
import { contentService } from '@/services/mock/content.service';
import { HeroBanner } from '@/widgets/HeroBanner';
import { MovieCarousel } from '@/widgets/MovieCarousel';
import { Content } from '@/types';

export const Home = () => {
  const [trending, setTrending] = useState<Content[]>([]);
  const [movies, setMovies] = useState<Content[]>([]);
  const [series, setSeries] = useState<Content[]>([]);
  const [continueWatching, setContinueWatching] = useState<{ content: Content; progress: number }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const [t, m, s, cw] = await Promise.all([
        contentService.getTrending(),
        contentService.getMovies(),
        contentService.getSeries(),
        contentService.getWatchProgress()
      ]);
      setTrending(t);
      setMovies(m);
      setSeries(s);
      setContinueWatching(cw);
      setIsLoading(false);
    };
    fetch();
  }, []);

  if (isLoading) {
    return <div className="min-h-screen bg-[#0B0B0F] animate-pulse" />;
  }

  return (
    <div className="pb-20">
      <HeroBanner content={trending[0] || movies[0]} />

      <div className="relative z-10 -mt-24 md:-mt-48">
        <MovieCarousel title="Trending Now" items={trending} />

        {continueWatching.length > 0 && (
          <MovieCarousel
            title="Continue Watching"
            items={continueWatching.map(cw => cw.content)}
          />
        )}

        <MovieCarousel title="New Releases" items={movies.filter(m => m.year === 2024)} />
        <MovieCarousel title="Popular Movies" items={[...movies].sort((a, b) => b.rating - a.rating).slice(0, 10)} />
        <MovieCarousel title="TV Series" items={series} />
        <MovieCarousel title="Recommended For You" items={[...movies, ...series].sort(() => 0.5 - Math.random()).slice(0, 10)} />
        <MovieCarousel title="Top 10" items={[...movies, ...series].sort((a, b) => b.rating - a.rating).slice(0, 10)} />
      </div>
    </div>
  );
};
