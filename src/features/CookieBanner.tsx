import React, { useState, useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-12 md:right-auto md:max-w-md bg-white dark:bg-[#1C1C24] p-6 rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 z-[60] animate-in slide-in-from-bottom-10 duration-500">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-accent/10 rounded-xl text-accent flex-none">
          <ShieldCheck size={24} />
        </div>
        <div className="flex-grow">
          <h3 className="font-bold mb-2">Cookie Preferences</h3>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            We use cookies to enhance your cinematic experience, analyze site traffic, and for personalized content. By clicking "Accept All", you agree to our use of cookies.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleAccept}
              className="flex-grow py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-bold rounded-lg transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="px-4 py-2.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-sm font-bold rounded-lg transition-colors"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg text-gray-400"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};
