import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/app/Layout';
import { ThemeProvider } from '@/app/ThemeProvider';
import { Home } from '@/pages/Home';
import { Movies } from '@/pages/Movies';
import { SeriesPage } from '@/pages/Series';
import { ContentDetail } from '@/pages/ContentDetail';
import { SearchPage } from '@/pages/SearchPage';
import { Favorites } from '@/pages/Favorites';
import { WatchPage } from '@/pages/WatchPage';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { ForgotPassword } from '@/pages/ForgotPassword';
import { Profile } from '@/pages/Profile';
import { Subscription } from '@/pages/Subscription';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { TermsOfService } from '@/pages/TermsOfService';
import { NotFound } from '@/pages/NotFound';
import { AdminPlaceholder } from '@/pages/Admin';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
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
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
