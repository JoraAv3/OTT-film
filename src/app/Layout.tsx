import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { CookieBanner } from '@/features/CookieBanner';
import { useEffect } from 'react';

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0B0F] text-[#0B0B0F] dark:text-white transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white/80 dark:bg-[#14141A]/80 backdrop-blur-md border-t border-black/10 dark:border-white/10 flex items-center justify-around lg:hidden z-50">
        <MobileNavLink to="/" icon={<HomeIcon size={20} />} label="Home" />
        <MobileNavLink to="/search" icon={<SearchIcon size={20} />} label="Search" />
        <MobileNavLink to="/favorites" icon={<BookmarkIcon size={20} />} label="My List" />
        <MobileNavLink to="/profile" icon={<UserIcon size={20} />} label="Profile" />
      </nav>
    </div>
  );
};

import { NavLink } from 'react-router-dom';
import { Home as HomeIcon, Search as SearchIcon, Bookmark as BookmarkIcon, User as UserIcon } from 'lucide-react';

const MobileNavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `flex flex-col items-center gap-1 text-[10px] ${isActive ? 'text-accent' : 'text-gray-500'}`}
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);
