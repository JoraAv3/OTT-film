import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, User, Menu, X, Sun, Moon, LogOut } from 'lucide-react';
import { useAuthStore } from '@/hooks/useAuthStore';
import { useThemeStore } from '@/hooks/useThemeStore';
import { cn } from '@/shared/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();
  const { theme, setTheme } = useThemeStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-12 h-16 md:h-20 flex items-center justify-between",
        isScrolled ? "bg-white/90 dark:bg-[#14141A]/90 backdrop-blur-md shadow-lg" : "bg-gradient-to-b from-black/50 to-transparent"
      )}
    >
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-accent flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white italic">L</div>
          <span className="hidden sm:inline">LUMINA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-accent", isActive ? "text-accent" : "text-gray-200")}>Home</NavLink>
          <NavLink to="/movies" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-accent", isActive ? "text-accent" : "text-gray-200")}>Movies</NavLink>
          <NavLink to="/series" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-accent", isActive ? "text-accent" : "text-gray-200")}>Series</NavLink>
          <NavLink to="/favorites" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-accent", isActive ? "text-accent" : "text-gray-200")}>My List</NavLink>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/search" className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Search size={20} className="text-gray-200" />
        </Link>

        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} className="text-gray-200" /> : <Moon size={20} className="text-gray-200" />}
        </button>

        {isAuthenticated ? (
          <div className="relative group">
            <button className="flex items-center gap-2 p-1 rounded-full hover:bg-white/10 transition-colors">
              <img
                src={user?.avatarUrl}
                alt={user?.name}
                className="w-8 h-8 rounded-full border-2 border-accent/50"
              />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1C1C24] rounded-xl shadow-2xl border border-black/5 dark:border-white/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
              <div className="p-4 border-b border-black/5 dark:border-white/5">
                <p className="text-sm font-bold truncate">{user?.name}</p>
                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              </div>
              <div className="p-2">
                <Link to="/profile" className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <User size={16} /> Profile
                </Link>
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-red-500 hover:bg-red-500/10 transition-colors"
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="hidden sm:block px-5 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-bold rounded-lg transition-all transform hover:scale-105"
          >
            Sign In
          </Link>
        )}

        <button
          className="lg:hidden p-2 text-gray-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={cn(
        "fixed inset-0 bg-white dark:bg-[#0B0B0F] z-40 transition-transform duration-500 lg:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col p-8 pt-24 gap-6">
          <NavLink to="/" className="text-2xl font-bold">Home</NavLink>
          <NavLink to="/movies" className="text-2xl font-bold">Movies</NavLink>
          <NavLink to="/series" className="text-2xl font-bold">Series</NavLink>
          <NavLink to="/favorites" className="text-2xl font-bold">My List</NavLink>
          {!isAuthenticated && (
            <Link to="/login" className="mt-4 px-6 py-3 bg-accent text-white text-center font-bold rounded-xl">Sign In</Link>
          )}
        </div>
      </div>
    </header>
  );
};
