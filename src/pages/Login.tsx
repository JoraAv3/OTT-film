import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/hooks/useAuthStore';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const login = useAuthStore(state => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!email || !password) throw new Error('Please fill in all fields');
      await login(email, email.split('@')[0]);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://picsum.photos/seed/login/1920/1080)' }}>
      <div className="w-full max-w-md p-8 bg-white dark:bg-[#14141A] rounded-2xl shadow-2xl border border-black/5 dark:border-white/5">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-500">Sign in to your Lumina account</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-500">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1C1C24] border border-black/5 dark:border-white/5 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1.5">
              <label className="block text-sm font-medium text-gray-500">Password</label>
              <Link to="/forgot-password" className="text-xs text-accent hover:underline">Forgot password?</Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1C1C24] border border-black/5 dark:border-white/5 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          New to Lumina? <Link to="/register" className="text-accent font-bold hover:underline">Create an account</Link>
        </p>
      </div>
    </div>
  );
};
