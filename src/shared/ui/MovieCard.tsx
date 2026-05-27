import { Link } from 'react-router-dom';
import { Play, Plus, Star } from 'lucide-react';
import { Content } from '@/types';
import { cn } from '@/shared/lib/utils';

interface MovieCardProps {
  content: Content;
  isContinueWatching?: boolean;
  progress?: number;
}

export const MovieCard = ({ content, isContinueWatching, progress }: MovieCardProps) => {
  return (
    <div className="group relative flex-none w-[140px] md:w-[180px] transition-all duration-300 transform hover:scale-108 hover:z-20">
      <Link to={`/${content.type}/${content.id}`}>
        <div className="aspect-[2/3] rounded-lg overflow-hidden bg-gray-200 dark:bg-[#1C1C24] shadow-lg relative">
          <img
            src={content.media.posterUrl}
            alt={content.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:brightness-50"
            loading="lazy"
          />

          {isContinueWatching && progress !== undefined && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40">
              <div
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      </Link>

      {/* Hover Info Overlay */}
      <div className="absolute inset-0 p-3 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <h3 className="text-white text-sm font-bold truncate">{content.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center text-[10px] text-yellow-400">
            <Star size={10} fill="currentColor" />
            <span className="ml-0.5">{content.rating}</span>
          </div>
          <span className="text-[10px] text-gray-300">{content.year}</span>
          <span className="text-[10px] px-1 border border-gray-500 rounded text-gray-300 uppercase">{content.ageRating}</span>
        </div>

        {isContinueWatching && progress !== undefined && (
          <div className="mt-2 h-1 w-full bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        <div className="flex items-center gap-2 mt-2 pointer-events-auto">
          <Link
            to={`/watch/${content.id}`}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-accent hover:text-white transition-colors"
          >
            <Play size={14} fill="currentColor" />
          </Link>
          <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors">
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
