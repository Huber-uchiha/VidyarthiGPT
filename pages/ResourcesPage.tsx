
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '../types';

const RESOURCES: Resource[] = [
  // Free Study Resources
  {
    id: 'ncert-epath',
    title: 'NCERT ePathshala',
    description: 'Portal with 500+ free e-textbooks (Grades 1–12), audiobooks, and videos. Available offline on the app in multiple languages.',
    category: 'Learning',
    link: '#',
    external: 'https://epathshala.nic.in/',
    icon: '📖',
    isGovt: true
  },
  {
    id: 'diksha',
    title: 'DIKSHA Platform',
    description: 'National digital infrastructure for school education. Offers curriculum-aligned videos, quizzes, and interactive lessons for all boards.',
    category: 'Learning',
    link: '#',
    external: 'https://diksha.gov.in/',
    icon: '🏫',
    isGovt: true
  },
  {
    id: 'swayam',
    title: 'SWAYAM Portal',
    description: 'MHRD initiative offering free online courses (video lectures, reading material, quizzes) from Class 9 to PG level.',
    category: 'Learning',
    link: '#',
    external: 'https://swayam.gov.in/',
    icon: '🎓',
    isGovt: true
  },
  // Scholarships
  {
    id: 'nsp',
    title: 'National Scholarship Portal',
    description: 'One-stop shop for Central and State scholarships including Merit-cum-Means, SC/ST/OBC, and more.',
    category: 'Scholarships',
    link: '#',
    external: 'https://scholarships.gov.in/',
    icon: '🏛️',
    isGovt: true
  },
  {
    id: 'vidya-lakshmi',
    title: 'Vidya Lakshmi Portal',
    description: 'Single window for student loans and scholarships. Apply and track your education financing applications.',
    category: 'Scholarships',
    link: '#',
    external: 'https://www.vidyalakshmi.co.in/',
    icon: '💰',
    isGovt: true
  },
  // Financial Literacy
  {
    id: 'rbi-fin-lit',
    title: 'RBI Financial Education',
    description: 'Dedicated portal by the Reserve Bank of India with materials on saving, budgeting, and digital security in 13 languages.',
    category: 'Financial Literacy',
    link: '#',
    external: 'https://www.rbi.org.in/commonman/English/Scripts/FinancialEducationProject.aspx',
    icon: '📉',
    isGovt: true
  },
  {
    id: 'ncfe-smart',
    title: 'MoneySmart Schools',
    description: 'NCFE curriculum teaching budgeting, saving, and insurance basics to help students avoid high-interest debt.',
    category: 'Financial Literacy',
    link: '#',
    external: 'https://www.ncfe.org.in/',
    icon: '💳',
    isGovt: true
  },
  // Health
  {
    id: 'menstrupedia',
    title: 'Menstrupedia Education',
    description: 'Friendly menstrual health education through illustrated guides and comics in 15+ languages to destigmatize periods.',
    category: 'Health',
    link: '#',
    external: 'https://www.menstrupedia.com/',
    icon: '🌸'
  },
  {
    id: 'pinkishe',
    title: 'Pinkishe Foundation',
    description: 'NGO focusing on menstrual health education and free pad donation for students in low-income communities.',
    category: 'Health',
    link: '#',
    external: 'https://www.pinkishe.org/',
    icon: '🎀'
  },
  {
    id: 'swayam-prabha',
    title: 'Swayam Prabha TV',
    description: '24×7 Educational TV channels telecasting lectures for school and college syllabus via DD FreeDish.',
    category: 'Learning',
    link: '#',
    external: 'https://www.swayamprabha.gov.in/',
    icon: '📺',
    isGovt: true
  }
];

const ResourcesPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Learning', 'Scholarships', 'Financial Literacy', 'Health'];

  const filteredResources = filter === 'All' 
    ? RESOURCES 
    : RESOURCES.filter(r => r.category === filter);

  return (
    <div className="max-w-7xl mx-auto p-6 md:py-24">
      <header className="mb-20 text-center animate-fade-in-up">
        <div className="inline-flex items-center px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
          Official & Verified
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-main)] font-heading mb-8">Resource Library</h1>
        <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed font-light">
          A curated hub of government portals and trusted NGO initiatives to support your growth, finance, and learning.
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up stagger-1">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-4 rounded-[2rem] text-sm font-bold transition-all duration-500 ${
              filter === cat 
                ? 'bg-[var(--primary)] text-white shadow-2xl shadow-blue-500/30 scale-105' 
                : 'bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--primary)]/50 hover:bg-[var(--user-bubble)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredResources.map((resource, idx) => (
          <div 
            key={resource.id} 
            className={`bg-[var(--card-bg)] p-10 rounded-[3rem] border border-[var(--border)] safe-shadow hover:translate-y-[-10px] transition-all duration-700 cursor-pointer group flex flex-col opacity-0 animate-fade-in-up stagger-${(idx % 5) + 1}`}
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 bg-[var(--user-bubble)] rounded-3xl flex items-center justify-center text-4xl group-hover:scale-125 transition-transform duration-500">
                {resource.icon}
              </div>
              {resource.isGovt && (
                <span className="px-3 py-1 bg-blue-50 text-blue-600 dark:bg-blue-900/20 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100">
                  Government
                </span>
              )}
            </div>
            
            <div className="text-[11px] font-bold text-[var(--primary)] uppercase tracking-[0.2em] mb-3">{resource.category}</div>
            <h3 className="text-2xl font-bold text-[var(--text-main)] font-heading mb-4 leading-tight group-hover:text-[var(--primary)] transition-colors">{resource.title}</h3>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-10 flex-grow">{resource.description}</p>
            
            <a 
              href={resource.external}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-5 bg-[var(--user-bubble)] text-[var(--text-main)] font-bold rounded-2xl text-center group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500 flex items-center justify-center space-x-3"
            >
              <span>Visit Official Site</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
