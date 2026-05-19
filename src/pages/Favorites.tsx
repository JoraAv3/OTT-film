import React, { useState, useEffect } from 'react';
import { useFavoritesStore } from '@/hooks/useFavoritesStore';
import { contentService } from '@/services/mock/content.service';
import { MovieCard } from '@/shared/ui/MovieCard';
import { Content } from '@/types';
import { Bookmark, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Favorites = () => {
  const { favorites } = useFavoritesStore();
  const [items, setItems] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const all = await Promise.all(favorites.map(id => contentService.getContentById(id)));
      setItems(all.filter((item): item is Content => !!item));
      setIsLoading(false);
    };
    fetch();
  }, [favorites]);

  return (
    <div className="pt-24 pb-20 px-4 md:px-12 min-h-screen">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">My List</h1>
        <p className="text-gray-500 mt-1">Saved movies and shows for later</p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[2/3] bg-gray-200 dark:bg-[#1C1C24] animate-pulse rounded-lg" />
          ))}
        </div>
      ) : (
        <>
          {items.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {items.map(item => (
                <MovieCard key={item.id} content={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 max-w-md mx-auto">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8">
                <Bookmark size={48} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Your list is empty</h3>
              <p className="text-gray-500 mb-8">Explore our catalog and add your favorite movies and shows to watch them later.</p>
              <Link
                to="/movies"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-all"
              >
                Browse Catalog
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};
