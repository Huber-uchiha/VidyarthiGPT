
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--card-bg)]/80 backdrop-blur-md border-b border-[var(--border)] px-4 py-3 transition-colors">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex flex-col">
          <span className="text-2xl font-bold text-[var(--primary)] font-heading leading-tight">VidyarthiGPT</span>
          <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest font-medium">Student Support Ecosystem</span>
        </NavLink>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-muted)] hover:text-[var(--primary)]'}`}>Home</NavLink>
          <NavLink to="/chat" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-muted)] hover:text-[var(--primary)]'}`}>Assistant</NavLink>
          <NavLink to="/resources" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-muted)] hover:text-[var(--primary)]'}`}>Resources</NavLink>
          <NavLink to="/helplines" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-muted)] hover:text-[var(--primary)]'}`}>Helplines</NavLink>
          
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full hover:bg-[var(--user-bubble)] transition-colors text-[var(--text-muted)]"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

const MobileNav: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--card-bg)] border-t border-[var(--border)] flex justify-around items-center py-3 pb-6 transition-colors">
       <NavLink to="/" className={({ isActive }) => `flex flex-col items-center space-y-1 ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-muted)]'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <span className="text-[10px] font-medium">Home</span>
      </NavLink>
      <NavLink to="/chat" className={({ isActive }) => `flex flex-col items-center space-y-1 ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-muted)]'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        <span className="text-[10px] font-medium">Chat</span>
      </NavLink>
      <NavLink to="/resources" className={({ isActive }) => `flex flex-col items-center space-y-1 ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-muted)]'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        <span className="text-[10px] font-medium">Study</span>
      </NavLink>
      <NavLink to="/helplines" className={({ isActive }) => `flex flex-col items-center space-y-1 ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-muted)]'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        <span className="text-[10px] font-medium">Help</span>
      </NavLink>
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        {children}
      </main>
      <MobileNav />
    </div>
  );
};

export default Layout;
