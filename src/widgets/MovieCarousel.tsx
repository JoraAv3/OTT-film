import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MovieCard } from '@/shared/ui/MovieCard';
import { Content } from '@/types';
import { cn } from '@/shared/lib/utils';

interface MovieCarouselProps {
  title: string;
  items: Content[];
  isContinueWatching?: boolean;
  showRank?: boolean;
}

export const MovieCarousel = ({ title, items, isContinueWatching, showRank }: MovieCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth * 0.8
        : scrollLeft + clientWidth * 0.8;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (items.length === 0) return null;

  return (
    <section className="py-4 md:py-8 group/carousel relative">
      <div className="flex items-center justify-between px-4 md:px-12 mb-4">
        <h2 className="text-lg md:text-2xl font-bold tracking-tight">{title}</h2>
        <button className="text-xs md:text-sm font-semibold text-gray-500 hover:text-accent transition-colors">
          See All
        </button>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-30 w-12 bg-black/40 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex items-center justify-center hover:bg-black/60"
        >
          <ChevronLeft size={32} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-12 no-scrollbar scroll-smooth"
        >
          {items.map((item, index) => (
            <div key={item.id} className="flex items-center">
              {showRank && (
                <span className="text-6xl md:text-8xl font-black text-gray-400/30 -mr-4 md:-mr-8 z-0 italic outline-text">
                  {index + 1}
                </span>
              )}
              <MovieCard
                content={item}
                isContinueWatching={isContinueWatching}
                progress={isContinueWatching ? 35 : undefined} // Mock progress for demo
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-30 w-12 bg-black/40 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex items-center justify-center hover:bg-black/60"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};
