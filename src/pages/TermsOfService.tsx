import { Link } from 'react-router-dom';

export const TermsOfService = () => (
  <div className="pt-32 pb-20 px-4 md:px-12 max-w-4xl mx-auto min-h-screen prose dark:prose-invert">
    <h1 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Terms of Service</h1>
    <p className="text-gray-500 italic mb-8">Last Updated: May 19, 2026</p>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
      <p>By accessing and using LUMINA ("the Service"), you agree to be bound by these terms and conditions. If you do not agree to all of these terms, do not use the Service.</p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">2. Use of the Service</h2>
      <p>You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service in any way that violates any applicable federal, state, local, or international law or regulation.</p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">3. Subscription and Billing</h2>
      <p>LUMINA offers subscription plans. By subscribing, you agree to pay all fees associated with your chosen plan. All payments are non-refundable unless required by law.</p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
      <p>The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by LUMINA or its licensors.</p>
    </section>

    <Link to="/" className="inline-block mt-8 px-8 py-3 bg-accent text-white font-bold rounded-xl">Back to Home</Link>
  </div>
);
