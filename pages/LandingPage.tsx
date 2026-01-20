
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MOOD_CARDS = [
  { label: 'I feel stressed', icon: '🌱', color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', prompt: 'I\'ve been feeling really stressed lately with everything going on. Can we talk about it?' },
  { label: 'Confused about future', icon: '🧭', color: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', prompt: 'I\'m looking for some career guidance. I feel a bit lost about my future.' },
  { label: 'Study guidance', icon: '📚', color: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', prompt: 'I\'m struggling with my study routine. How can I manage my learning better?' },
  { label: 'Feel low / unmotivated', icon: '🕯️', color: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', prompt: 'I\'m finding it hard to stay motivated right now. Everything feels a bit heavy.' },
];

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleMoodClick = (prompt: string) => {
    navigate('/chat', { state: { initialPrompt: prompt } });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      {/* Hero Section */}
      <section className="text-center mb-32 animate-fade-in-up">
        <div className="inline-flex items-center px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-10">
          <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2 animate-pulse"></span>
          Empathy-Powered Ecosystem
        </div>
        <h1 className="text-5xl md:text-8xl font-bold text-[var(--text-main)] font-heading mb-10 leading-[1.1] max-w-5xl mx-auto animate-fade-in-up stagger-1">
          You don’t have to figure it all out alone.
        </h1>
        <p className="text-xl md:text-3xl text-[var(--text-muted)] max-w-3xl mx-auto mb-16 leading-relaxed animate-fade-in-up stagger-2 font-light">
          A gentle, safe space for student guidance, emotional support, and academic clarity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up stagger-3">
          <Link 
            to="/chat" 
            className="w-full sm:w-auto px-12 py-6 bg-[var(--primary)] text-white text-xl font-bold rounded-[2.5rem] safe-shadow hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 text-center"
          >
            Start Chatting
          </Link>
          <Link 
            to="/resources" 
            className="w-full sm:w-auto px-12 py-6 bg-[var(--card-bg)] text-[var(--text-main)] border border-[var(--border)] text-xl font-bold rounded-[2.5rem] safe-shadow hover:bg-[var(--user-bubble)] transition-all duration-500 text-center"
          >
            Explore Resources
          </Link>
        </div>
      </section>

      {/* Mood Entry Cards */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold text-[var(--text-main)] font-heading mb-12 text-center md:text-left animate-fade-in-up stagger-4">How are you feeling right now?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOOD_CARDS.map((card, idx) => (
            <button
              key={idx}
              onClick={() => handleMoodClick(card.prompt)}
              className={`flex flex-col items-start p-10 rounded-[3rem] safe-shadow hover:translate-y-[-10px] transition-all duration-500 group ${card.color} border border-transparent hover:border-current/20 opacity-0 animate-fade-in-up stagger-${idx + 1}`}
            >
              <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">
                {card.icon}
              </div>
              <span className="text-xl font-bold text-left leading-tight group-hover:translate-x-1 transition-transform">{card.label}</span>
              <div className="h-0.5 w-0 group-hover:w-full bg-current opacity-30 mt-6 transition-all duration-700"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-6 opacity-0 group-hover:opacity-100 transition-all translate-x-[-20px] group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="grid md:grid-cols-3 gap-16 text-center md:text-left">
        <div className="p-8 group">
          <div className="text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 font-heading">Private & Secure</h3>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">Your conversations are handled with absolute care. We prioritize your privacy above all else.</p>
        </div>
        <div className="p-8 group">
          <div className="text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 font-heading">Verified Quality</h3>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">Every link and scholarship in our database is manually checked for student safety and authenticity.</p>
        </div>
        <div className="p-8 group">
          <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 font-heading">Student First</h3>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">We focus on building long-term student well-being rather than just quick academic shortcuts.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
