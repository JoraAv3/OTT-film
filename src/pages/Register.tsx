import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/hooks/useAuthStore';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const login = useAuthStore(state => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!formData.name || !formData.email || !formData.password || !formData.dob) {
        throw new Error('Please fill in all fields');
      }
      if (!formData.agreeToTerms) {
        throw new Error('You must agree to the Terms and Privacy Policy');
      }

      // Simple age check (TZ_LEGAL)
      const birthDate = new Date(formData.dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

      if (age < 13) throw new Error('You must be at least 13 years old to register');

      await login(formData.email, formData.name);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://picsum.photos/seed/register/1920/1080)' }}>
      <div className="w-full max-w-md p-8 bg-white dark:bg-[#14141A] rounded-2xl shadow-2xl border border-black/5 dark:border-white/5">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-500">Join Lumina today</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-500">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1C1C24] border border-black/5 dark:border-white/5 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-500">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1C1C24] border border-black/5 dark:border-white/5 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-500">Date of Birth</label>
            <input
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({...formData, dob: e.target.value})}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1C1C24] border border-black/5 dark:border-white/5 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-gray-500">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1C1C24] border border-black/5 dark:border-white/5 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-start gap-3 py-2">
            <input
              type="checkbox"
              id="terms"
              checked={formData.agreeToTerms}
              onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent"
            />
            <label htmlFor="terms" className="text-xs text-gray-500 leading-normal">
              I agree to the <Link to="/terms" className="text-accent hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>. I confirm I am of legal age.
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account? <Link to="/login" className="text-accent font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};
