import React, { useState, useEffect } from 'react';
import { contentService } from '@/services/mock/content.service';
import { MovieCard } from '@/shared/ui/MovieCard';
import { FilterPanel } from '@/widgets/FilterPanel';
import { Series } from '@/types';

export const SeriesPage = () => {
  const [series, setSeries] = useState<Series[]>([]);
  const [filteredSeries, setFilteredSeries] = useState<Series[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await contentService.getSeries();
      setSeries(data);
      setFilteredSeries(data);
      setIsLoading(false);
    };
    fetch();
  }, []);

  const handleFilter = (filters: any) => {
    let result = [...series];
    if (filters.genre) result = result.filter(m => m.genres.includes(filters.genre));
    if (filters.year) result = result.filter(m => m.year === parseInt(filters.year));
    if (filters.rating) result = result.filter(m => m.rating >= parseFloat(filters.rating));
    setFilteredSeries(result);
  };

  return (
    <div className="pt-24 pb-20 px-4 md:px-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">TV Series</h1>
          <p className="text-gray-500 mt-1">Epic sagas and binge-worthy shows</p>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredSeries.map(item => (
            <MovieCard key={item.id} content={item} className="w-full" />
          ))}
        </div>
      )}
    </div>
  );
};
