import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Play, Plus, Star, ChevronLeft, Clock, Calendar, Shield } from 'lucide-react';
import { contentService } from '@/services/mock/content.service';
import { MovieCarousel } from '@/widgets/MovieCarousel';
import { Content, Movie, Series } from '@/types';
import { formatDuration } from '@/shared/lib/utils';

export const ContentDetail = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [content, setContent] = useState<Content | undefined>(undefined);
  const [related, setRelated] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      if (!id) return;
      const data = await contentService.getContentById(id);
      if (!data) {
        navigate('/404');
        return;
      }
      setContent(data);

      const all = await (data.type === 'movie' ? contentService.getMovies() : contentService.getSeries());
      setRelated(all.filter(item => item.id !== id).slice(0, 10));
      setIsLoading(false);
    };
    fetch();
  }, [id, navigate]);

  if (isLoading || !content) {
    return <div className="min-h-screen bg-[#0B0B0F] animate-pulse" />;
  }

  const isMovie = content.type === 'movie';

  return (
    <div className="pb-20">
      {/* Backdrop Hero */}
      <div className="relative h-[60vh] md:h-[80vh] w-full">
        <div className="absolute inset-0">
          <img
            src={content.media.backdropUrl}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/60 to-transparent" />
        </div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-4 md:left-12 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all z-10"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Content Info */}
      <div className="px-4 md:px-12 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Poster */}
          <div className="hidden md:block w-72 flex-none">
            <div className="aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img src={content.media.posterUrl} alt={content.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Details */}
          <div className="flex-grow pt-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={20} fill="currentColor" />
                <span className="text-xl font-bold">{content.rating}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={16} />
                <span>{content.year}</span>
              </div>
              {isMovie && (
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock size={16} />
                  <span>{formatDuration((content as Movie).duration)}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-gray-400">
                <Shield size={16} />
                <span className="px-1.5 py-0.5 border border-gray-600 rounded text-xs uppercase font-bold">{content.ageRating}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase">{content.title}</h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
              {content.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                to={`/watch/${content.id}`}
                className="flex items-center gap-2 px-10 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all transform hover:scale-105"
              >
                <Play size={20} fill="currentColor" />
                Watch Now
              </Link>
              <button className="flex items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 font-bold rounded-xl transition-all">
                <Plus size={20} />
                Add to List
              </button>
            </div>

            {/* Cast */}
            {content.cast.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Top Cast</h3>
                <div className="flex flex-wrap gap-4">
                  {content.cast.map(person => (
                    <div key={person.id} className="flex items-center gap-3 bg-white/5 p-2 pr-6 rounded-full border border-white/5">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                        {person.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{person.name}</p>
                        <p className="text-xs text-gray-500">{person.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Series Episodes */}
        {!isMovie && (content as Series).seasons.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8">Episodes</h3>
            <div className="space-y-4 max-w-4xl">
              {(content as Series).seasons[0].episodes.map(episode => (
                <Link
                  key={episode.id}
                  to={`/watch/${content.id}?e=${episode.id}`}
                  className="flex flex-col sm:flex-row gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className="w-full sm:w-48 aspect-video rounded-lg overflow-hidden flex-none relative">
                    <img src={episode.thumbnailUrl} alt={episode.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play size={24} className="text-white fill-white" />
                    </div>
                  </div>
                  <div className="flex-grow py-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold">{episode.number}. {episode.title}</h4>
                      <span className="text-sm text-gray-500">{formatDuration(episode.duration)}</span>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">{episode.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related */}
        <div className="mt-20">
          <MovieCarousel title="You May Also Like" items={related} />
        </div>
      </div>
    </div>
  );
};
