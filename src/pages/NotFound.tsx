import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFound = () => (
  <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-[#0B0B0F]">
    {/* Cinematic background effect */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://picsum.photos/seed/404/1920/1080"
        className="w-full h-full object-cover opacity-20 grayscale"
        alt="404 Background"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent" />
    </div>

    <div className="relative z-10 text-center max-w-2xl">
      <h1 className="text-9xl font-black text-white/5 absolute -top-20 left-1/2 -translate-x-1/2 select-none">404</h1>
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter uppercase">Scene Not Found</h2>
      <p className="text-xl text-gray-400 mb-10 leading-relaxed">
        It seems the film reel has run out or this page has been cut from the final edit. Let's get you back to the main feature.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 px-10 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-all transform hover:scale-105"
        >
          <Home size={20} />
          Back to Home
        </Link>
        <Link
          to="/search"
          className="px-10 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-md border border-white/10"
        >
          Search Library
        </Link>
      </div>
    </div>
  </div>
);
