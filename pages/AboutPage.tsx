
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:py-20">
      <header className="mb-20 text-center animate-fade-in-up">
        <div className="inline-flex items-center px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8">
          Project Philosophy
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-main)] font-heading mb-6">About VidyarthiGPT</h1>
        <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
          Designed to be the "calm in the storm" for students navigating academic and emotional challenges.
        </p>
      </header>

      <div className="space-y-24">
        {/* Purpose Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up stagger-1">
          <div>
            <h2 className="text-3xl font-bold text-[var(--text-main)] font-heading mb-6">Our Purpose</h2>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
              VidyarthiGPT was born from a simple realization: while the internet is full of "homework solvers," it lacks "student supporters." 
            </p>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              We focus on <strong>guidance, not answers.</strong> We provide a non-judgmental space for thoughts, career confusion, and emotional well-being.
            </p>
          </div>
          <div className="bg-[var(--user-bubble)] rounded-[3rem] p-10 safe-shadow border border-[var(--border)]">
            <div className="text-4xl mb-6">🛡️</div>
            <h3 className="text-xl font-bold mb-4">Ethical Boundaries</h3>
            <ul className="space-y-4 text-[var(--text-muted)]">
              <li className="flex items-start">
                <span className="text-[var(--primary)] mr-2">•</span>
                <span>We do not store identifying personal data.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--primary)] mr-2">•</span>
                <span>We facilitate learning, not academic dishonesty.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--primary)] mr-2">•</span>
                <span>We prioritize empathy over efficiency.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Deployment Guide Section */}
        <section className="bg-[var(--card-bg)] border border-[var(--border)] rounded-[4rem] p-10 md:p-20 safe-shadow animate-fade-in-up stagger-2">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-main)] font-heading mb-4">Launch Your Own Version</h2>
            <p className="text-[var(--text-muted)]">Follow these steps to make this website live for free.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl">1</div>
              <h3 className="font-bold text-xl">GitHub</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Create a free account on <strong>GitHub.com</strong>. Create a "New Repository" and upload all project files.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl">2</div>
              <h3 className="font-bold text-xl">Vercel</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Sign up at <strong>Vercel.com</strong> using GitHub. Click "Add New Project" and select your repository.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center font-bold text-xl">3</div>
              <h3 className="font-bold text-xl">API Key</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                In Vercel settings, add an Environment Variable named <code>API_KEY</code> with your Gemini key. Deploy!
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20 rounded-3xl text-center">
            <p className="text-amber-800 dark:text-amber-400 text-sm font-medium">
              Pro Tip: Using Vercel ensures your API key is hidden from the public, keeping your account safe and secure.
            </p>
          </div>
        </section>

        <footer className="pt-12 border-t border-[var(--border)] text-center opacity-50">
          <p className="text-[var(--text-muted)] text-sm italic">
            "VidyarthiGPT is an AI-powered ecosystem and does not replace professional medical or academic advice."
          </p>
          <p className="text-[var(--text-muted)] text-xs mt-4">© 2024 VidyarthiGPT Project. Designed for students.</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
