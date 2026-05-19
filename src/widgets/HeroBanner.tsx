import { Link } from 'react-router-dom';
import { Play, Plus, Star, Info } from 'lucide-react';
import { Content } from '@/types';

interface HeroBannerProps {
  content: Content;
}

export const HeroBanner = ({ content }: HeroBannerProps) => {
  return (
    <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      {/* Background with cinematic gradient */}
      <div className="absolute inset-0">
        <img
          src={content.media.backdropUrl}
          alt={content.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F] via-[#0B0B0F]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-center px-4 md:px-12 max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2 py-1 bg-accent text-[10px] font-bold rounded uppercase tracking-wider text-white">Featured</span>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={14} fill="currentColor" />
            <span className="text-sm font-bold">{content.rating}</span>
          </div>
          <span className="text-sm text-gray-300">{content.year}</span>
          <span className="px-2 py-0.5 border border-gray-500 rounded text-xs text-gray-300 uppercase">{content.ageRating}</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter uppercase">{content.title}</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 line-clamp-3 md:line-clamp-none max-w-2xl leading-relaxed">
          {content.description}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            to={`/watch/${content.id}`}
            className="flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-accent hover:text-white font-bold rounded-xl transition-all transform hover:scale-105"
          >
            <Play size={20} fill="currentColor" />
            Watch Now
          </Link>
          <Link
            to={`/${content.type}/${content.id}`}
            className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 font-bold rounded-xl transition-all"
          >
            <Info size={20} />
            More Info
          </Link>
          <button className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all text-white">
            <Plus size={24} />
          </button>
        </div>

        <div className="mt-12 flex items-center gap-3">
          {content.genres.map(genre => (
            <span key={genre} className="text-sm font-medium text-gray-400">
              {genre} <span className="ml-3 opacity-30 last:hidden">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
