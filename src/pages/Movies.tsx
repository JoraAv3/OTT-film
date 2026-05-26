import React, { useState, useEffect, useCallback } from 'react';
import { contentService } from '@/services/mock/content.service';
import { MovieCard } from '@/shared/ui/MovieCard';
import { FilterPanel } from '@/widgets/FilterPanel';
import { Movie } from '@/types';

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await contentService.getMovies();
      setMovies(data);
      setFilteredMovies(data);
      setIsLoading(false);
    };
    fetch();
  }, []);

  // Performance: Memoize filter handler
  const handleFilter = useCallback((filters: any) => {
    let result = [...movies];

    if (filters.genre) {
      result = result.filter(m => m.genres.includes(filters.genre));
    }
    if (filters.year) {
      result = result.filter(m => m.year === parseInt(filters.year));
    }
    if (filters.rating) {
      result = result.filter(m => m.rating >= parseFloat(filters.rating));
    }

    setFilteredMovies(result);
  }, [movies]);

  return (
    <div className="pt-24 pb-20 px-4 md:px-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Movies</h1>
          <p className="text-gray-500 mt-1">Explore our cinematic library</p>
        </div>
        <FilterPanel onFilter={handleFilter} />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="aspect-[2/3] bg-gray-200 dark:bg-[#1C1C24] animate-pulse rounded-lg" />
          ))}
        </div>
      ) : (
        <>
          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {filteredMovies.map(movie => (
                <div key={movie.id} className="w-full flex justify-center">
                  {/* Optimization: Use MovieCard directly instead of wrapping in a Carousel for grid layouts.
                      This avoids unnecessary hooks, DOM nodes, and event listeners per item. */}
                  <MovieCard content={movie} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-bold mb-2">No movies found</h3>
              <p className="text-gray-500">Try adjusting your filters.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
