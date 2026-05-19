import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, X, SlidersHorizontal } from 'lucide-react';
import { contentService } from '@/services/mock/content.service';
import { MovieCard } from '@/shared/ui/MovieCard';
import { Content } from '@/types';

export const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const search = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }
      setIsLoading(true);
      const data = await contentService.searchContent(query);
      setResults(data);
      setIsLoading(false);
    };

    const timer = setTimeout(search, 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="pt-24 pb-20 px-4 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-12">
          <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={24} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, genre, or actors..."
            className="w-full pl-16 pr-16 py-6 bg-white dark:bg-[#1C1C24] border border-black/10 dark:border-white/10 rounded-2xl text-xl md:text-2xl outline-none focus:ring-2 focus:ring-accent transition-all shadow-2xl"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
            >
              <X size={24} className="text-gray-500" />
            </button>
          )}
        </div>

        {/* Results */}
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-gray-200 dark:bg-[#1C1C24] animate-pulse rounded-lg" />
            ))}
          </div>
        ) : (
          <>
            {results.length > 0 ? (
              <div>
                <h2 className="text-xl font-bold mb-6">Top Results</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {results.map(item => (
                    <MovieCard key={item.id} content={item} />
                  ))}
                </div>
              </div>
            ) : query.length >= 2 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SearchIcon size={40} className="text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No results found for "{query}"</h3>
                <p className="text-gray-500">Try searching for something else, like "Neon" or "Sci-Fi".</p>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-6">Popular Genres</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Action', 'Sci-Fi', 'Horror', 'Drama', 'Comedy', 'Thriller', 'Animation', 'Fantasy'].map(genre => (
                    <button
                      key={genre}
                      onClick={() => setQuery(genre)}
                      className="p-6 bg-white dark:bg-[#1C1C24] border border-black/10 dark:border-white/10 rounded-2xl hover:bg-accent hover:text-white transition-all font-bold text-center shadow-lg"
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
