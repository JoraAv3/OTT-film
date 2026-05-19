import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => (
  <div className="pt-32 pb-20 px-4 md:px-12 max-w-4xl mx-auto min-h-screen prose dark:prose-invert">
    <h1 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Privacy Policy</h1>
    <p className="text-gray-500 italic mb-8">Last Updated: May 19, 2026</p>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
      <p>Welcome to LUMINA. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">2. The Data We Collect</h2>
      <p>Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).</p>
      <ul>
        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, and date of birth.</li>
        <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
        <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">3. Demo Platform Disclaimer</h2>
      <p className="p-4 bg-accent/5 border border-accent/20 rounded-xl font-bold">LUMINA is currently a demonstration platform. No real personal data is shared with third parties, and all content provided is for illustrative purposes only.</p>
    </section>

    <Link to="/" className="inline-block mt-8 px-8 py-3 bg-accent text-white font-bold rounded-xl">Back to Home</Link>
  </div>
);
