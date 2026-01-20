
import React from 'react';
import { Helpline } from '../types';

const CATEGORIES = [
  {
    title: "Student Support & Education",
    items: [
      {
        name: 'TN School Helpline',
        number: '14417',
        description: '24×7 education helpline run by the TN School Education Dept. for exam stress, academic doubts, or school issues.',
        type: 'Govt Helpline',
        tags: ['Academic Stress', '24/7'],
        isGovt: true
      },
      {
        name: 'Manodarpan National',
        number: '8448440632',
        description: 'Toll-free counselling by Ministry of Education, providing psychosocial support on academic stress and well-being.',
        type: 'National Govt Support',
        tags: ['Psychosocial', 'Parents'],
        isGovt: true
      },
      {
        name: 'ChildLine 1098',
        number: '1098',
        description: '24×7 emergency helpline for any child or youth in distress. Covers protection, counseling, abuse, and neglect.',
        type: 'National Emergency',
        tags: ['Child Rights', '24/7'],
        isGovt: true
      }
    ]
  },
  {
    title: "Mental Health & Crisis Intervention",
    items: [
      {
        name: 'Tele-MANAS',
        number: '14416',
        description: 'Free, 24×7 national mental health helpline. Immediate psychological support in 20+ Indian languages.',
        type: 'Govt Crisis Support',
        tags: ['Depression', 'Suicide Risk'],
        isGovt: true
      },
      {
        name: 'KIRAN Helpline',
        number: '1800-599-0019',
        description: '24×7 toll-free mental health rehabilitation helpline (Ministry of Social Justice) available in 13 Indian languages.',
        type: 'Govt Rehabilitation',
        tags: ['Crisis', 'Anxiety'],
        isGovt: true
      },
      {
        name: 'AASRA (NGO)',
        number: '+91-22-27546669',
        description: '24×7 confidential helpline staffed by volunteers offering emotional support and suicide intervention.',
        type: 'NGO Suicide Prevention',
        tags: ['Anonymous', '24/7'],
        isGovt: false
      },
      {
        name: 'Snehi (NGO)',
        number: '+91-9582208181',
        description: 'Delhi mental health NGO offering 24×7 telephonic counseling and referral support for psychological distress.',
        type: 'NGO Counseling',
        tags: ['Distress', '24/7'],
        isGovt: false
      },
      {
        name: 'Sumaitri (NGO)',
        number: '011-23389090',
        description: 'Delhi crisis intervention center providing anonymous 24/7 counseling to those feeling depressed or suicidal.',
        type: 'Anonymous Crisis',
        tags: ['Crisis', 'Suicide'],
        isGovt: false
      }
    ]
  },
  {
    title: "Health & Menstrual Support",
    items: [
      {
        name: 'Pinkishe Helpline',
        number: '8800990626',
        description: 'Non-profit working on menstrual health education and free pad donation. Offers workshops and hygiene support.',
        type: 'NGO Support',
        tags: ['Period Health', 'Education'],
        isGovt: false
      },
      {
        name: 'Free Pads For India',
        number: '9892690011',
        description: 'NGO that distributes free menstrual products and works to destigmatize menstruation across India.',
        type: 'NGO Period Support',
        tags: ['Free Pads', 'Hygiene'],
        isGovt: false
      }
    ]
  }
];

const HelplinesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 md:py-24">
      <header className="mb-24 text-center">
        <div className="w-24 h-24 bg-rose-50 text-rose-500 dark:bg-rose-900/20 rounded-[3rem] flex items-center justify-center mx-auto mb-10 safe-shadow animate-fade-in-up">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-[var(--text-main)] font-heading mb-8 animate-fade-in-up stagger-1">Safe Harbor</h1>
        <p className="text-xl md:text-3xl text-[var(--text-muted)] max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
          Your wellbeing is our only priority. These verified helplines are run by experts who listen with empathy and zero judgment.
        </p>
      </header>

      <div className="space-y-32">
        {CATEGORIES.map((category, catIdx) => (
          <section key={catIdx} className="animate-fade-in-up" style={{ animationDelay: `${0.2 * catIdx}s` }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-[var(--border)] pb-6">
              <h2 className="text-4xl font-bold text-[var(--text-main)] font-heading">{category.title}</h2>
              <span className="text-[12px] text-[var(--text-muted)] font-bold tracking-widest uppercase">Verified Contact Points</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {category.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="bg-[var(--card-bg)] rounded-[3rem] p-10 md:p-14 border border-[var(--border)] safe-shadow hover:scale-[1.02] transition-all duration-700 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${item.isGovt ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'}`}>
                        {item.type}
                      </span>
                      {item.isGovt && (
                        <span className="flex items-center space-x-1">
                          <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                          <span className="text-[10px] font-bold text-amber-600">Govt of India</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-3xl font-bold text-[var(--text-main)] font-heading mb-6 group-hover:text-[var(--primary)] transition-colors">{item.name}</h3>
                    <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-10">{item.description}</p>
                    <div className="flex flex-wrap gap-3 mb-10">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-medium text-[var(--text-muted)] px-4 py-1.5 rounded-full bg-[var(--user-bubble)]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-[var(--border)]">
                    <div className="text-3xl md:text-4xl font-bold text-[var(--primary)] font-heading tracking-tight">
                      {item.number}
                    </div>
                    <a 
                      href={`tel:${item.number.replace(/[^0-9]/g, '')}`} 
                      className="w-full md:w-auto px-16 py-6 bg-[var(--primary)] text-white text-xl font-bold rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 text-center active:scale-95"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-32 p-16 md:p-24 bg-[var(--card-bg)] border border-[var(--border)] rounded-[4rem] safe-shadow animate-fade-in-up">
        <h4 className="text-4xl font-bold text-[var(--text-main)] mb-10 font-heading">Mental Health is Essential</h4>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="flex items-start group">
              <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center font-bold text-2xl mr-6 shrink-0 safe-shadow group-hover:scale-110 transition-transform">1</div>
              <div>
                <h5 className="font-bold text-xl mb-3">24/7 National Access</h5>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">Most government numbers (14416, 14417, 1098) are available across all Indian states and languages.</p>
              </div>
            </div>
            <div className="flex items-start group">
              <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center font-bold text-2xl mr-6 shrink-0 safe-shadow group-hover:scale-110 transition-transform">2</div>
              <div>
                <h5 className="font-bold text-xl mb-3">Total Privacy</h5>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">NGOs like AASRA and Sumaitri offer complete anonymity if you prefer not to share your identity.</p>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="flex items-start group">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center font-bold text-2xl mr-6 shrink-0 safe-shadow group-hover:scale-110 transition-transform">3</div>
              <div>
                <h5 className="font-bold text-xl mb-3">Student Focus</h5>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">Manodarpan and TN Helpline are specifically optimized for academic and adolescent psychological support.</p>
              </div>
            </div>
            <div className="flex items-start group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center font-bold text-2xl mr-6 shrink-0 safe-shadow group-hover:scale-110 transition-transform">4</div>
              <div>
                <h5 className="font-bold text-xl mb-3">Immediate Response</h5>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed">If you feel you are in immediate life-threatening risk, call <strong>112</strong> immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelplinesPage;
