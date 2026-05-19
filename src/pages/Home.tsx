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

  return (
    <div className="pb-20">
      <HeroBanner content={trending[0] || movies[0]} />

      <div className="relative z-10 -mt-24 md:-mt-48">
        <MovieCarousel title="Trending Now" items={trending} />
        <MovieCarousel title="New Releases" items={movies.filter(m => m.year === 2024)} />
        <MovieCarousel title="Binge-worthy Series" items={series} />
        <MovieCarousel title="Action & Thrills" items={movies.filter(m => m.genres.includes('Action'))} />
        <MovieCarousel title="Sci-Fi Journeys" items={movies.filter(m => m.genres.includes('Sci-Fi'))} />
        <MovieCarousel title="Drama Selection" items={movies.filter(m => m.genres.includes('Drama'))} />
        <MovieCarousel title="Lumina Originals" items={[...movies, ...series].filter(i => i.rating > 8.5)} />
      </div>
    </div>
  );
};
