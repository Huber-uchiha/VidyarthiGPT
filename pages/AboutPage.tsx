
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-800 font-heading mb-4">About VidyarthiGPT</h1>
        <p className="text-slate-500 text-lg">Guidance for the heart and mind of every student.</p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-800 font-heading mb-4">Our Purpose</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            VidyarthiGPT was born from a simple realization: students often feel lost in the noise of academic competition. 
            While there are plenty of tools to help you solve a math problem, there aren't enough tools to help you solve 
            the "life problems" that come with being a student.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We focus on <strong>guidance, not answers.</strong> We are here to support your emotional well-being, 
            help you navigate career confusion, and provide a non-judgmental space for your thoughts.
          </p>
        </section>

        <section className="bg-white border border-slate-100 rounded-3xl p-8 safe-shadow">
          <h2 className="text-2xl font-bold text-slate-800 font-heading mb-4">Ethical Boundaries</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">1</div>
              <p className="text-slate-600 text-sm">We do not store your personal conversations with identifying information. Your safety and privacy are paramount.</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">2</div>
              <p className="text-slate-600 text-sm">We will never provide direct answers to homework or exams. Our role is to facilitate the learning process, not bypass it.</p>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">3</div>
              <p className="text-slate-600 text-sm">We prioritize human empathy over algorithmic efficiency.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-800 font-heading mb-4">Limitations</h2>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
            <p className="text-amber-800 text-sm leading-relaxed font-medium italic">
              "This AI does not replace teachers, counselors, doctors, or professionals."
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            VidyarthiGPT is an AI-powered ecosystem. While it is trained to be supportive and helpful, 
            it is not a licensed medical professional or a human counselor. It can occasionally make mistakes 
            or provide general advice that may not fit your specific local context.
          </p>
        </section>

        <footer className="pt-12 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm">© 2024 VidyarthiGPT Project. Designed with love for students everywhere.</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
