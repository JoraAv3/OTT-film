import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0F] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex text-3xl font-bold tracking-tighter text-accent items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white italic text-xl">L</div>
            LUMINA
          </Link>
          <h1 className="text-3xl font-bold mb-3">Reset Password</h1>
          <p className="text-gray-500">Enter your email and we'll send you instructions to reset your password.</p>
        </div>

        <div className="bg-white dark:bg-[#14141A] p-8 rounded-3xl shadow-2xl border border-black/5 dark:border-white/5">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-accent focus:bg-white dark:focus:bg-[#1C1C24] rounded-xl py-3 pl-12 pr-4 outline-none transition-all"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl shadow-lg shadow-accent/20 transition-all transform active:scale-95"
              >
                Send Reset Link
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Check your email</h3>
              <p className="text-gray-500 mb-8">We've sent a password reset link to <span className="text-black dark:text-white font-semibold">{email}</span></p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-accent font-bold hover:underline"
              >
                Didn't receive the email? Try again
              </button>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5 text-center">
            <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-accent transition-colors">
              <ArrowLeft size={16} />
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
