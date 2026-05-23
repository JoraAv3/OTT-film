import React, { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/app/Layout';
import { ThemeProvider } from '@/app/ThemeProvider';
import './index.css';

/**
 * BOLT OPTIMIZATION: Route-based Code Splitting
 *
 * By using React.lazy, we split the application into smaller chunks.
 * Each page is only loaded when the user navigates to it.
 * This significantly reduces the initial bundle size, especially by deferring
 * heavy dependencies like 'react-player' used in the WatchPage.
 */

const Home = lazy(() => import('@/pages/Home').then(m => ({ default: m.Home })));
const Movies = lazy(() => import('@/pages/Movies').then(m => ({ default: m.Movies })));
const SeriesPage = lazy(() => import('@/pages/Series').then(m => ({ default: m.SeriesPage })));
const ContentDetail = lazy(() => import('@/pages/ContentDetail').then(m => ({ default: m.ContentDetail })));
const SearchPage = lazy(() => import('@/pages/SearchPage').then(m => ({ default: m.SearchPage })));
const Favorites = lazy(() => import('@/pages/Favorites').then(m => ({ default: m.Favorites })));
const WatchPage = lazy(() => import('@/pages/WatchPage').then(m => ({ default: m.WatchPage })));
const Login = lazy(() => import('@/pages/Login').then(m => ({ default: m.Login })));
const Register = lazy(() => import('@/pages/Register').then(m => ({ default: m.Register })));
const Profile = lazy(() => import('@/pages/Profile').then(m => ({ default: m.Profile })));
const Subscription = lazy(() => import('@/pages/Subscription').then(m => ({ default: m.Subscription })));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('@/pages/TermsOfService').then(m => ({ default: m.TermsOfService })));
const NotFound = lazy(() => import('@/pages/NotFound').then(m => ({ default: m.NotFound })));
const AdminPlaceholder = lazy(() => import('@/pages/Admin').then(m => ({ default: m.AdminPlaceholder })));

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="series" element={<SeriesPage />} />
              <Route path="movie/:id" element={<ContentDetail />} />
              <Route path="series/:id" element={<ContentDetail />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="profile" element={<Profile />} />
              <Route path="subscription" element={<Subscription />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="terms" element={<TermsOfService />} />
              <Route path="admin" element={<AdminPlaceholder />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/watch/:id" element={<WatchPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
