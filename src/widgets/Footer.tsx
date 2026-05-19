import { Link } from 'react-router-dom';
import { Twitter, Instagram, Youtube, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0B0B0F] border-t border-black/5 dark:border-white/5 pt-16 pb-24 md:pb-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-accent flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white italic text-base">L</div>
              LUMINA
            </Link>
            <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
              Experience the next generation of premium streaming. Cinematic masterpieces, award-winning series, and original content, all in one place.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Twitter size={20} />} />
              <SocialLink icon={<Instagram size={20} />} />
              <SocialLink icon={<Youtube size={20} />} />
              <SocialLink icon={<Facebook size={20} />} />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/movies" className="hover:text-accent transition-colors">Movies</Link></li>
              <li><Link to="/series" className="hover:text-accent transition-colors">TV Series</Link></li>
              <li><Link to="/search" className="hover:text-accent transition-colors">Search</Link></li>
              <li><Link to="/favorites" className="hover:text-accent transition-colors">My List</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Account</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/profile" className="hover:text-accent transition-colors">My Profile</Link></li>
              <li><Link to="/subscription" className="hover:text-accent transition-colors">Subscription</Link></li>
              <li><Link to="/login" className="hover:text-accent transition-colors">Sign In</Link></li>
              <li><Link to="/register" className="hover:text-accent transition-colors">Register</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 LUMINA CINEMATICS. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            DEMO PLATFORM. CONTENT IS NOT COMMERCIALLY LICENSED.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 bg-black/5 dark:bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent hover:text-white transition-all">
    {icon}
  </a>
);
