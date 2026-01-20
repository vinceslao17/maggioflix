
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppConfig } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  config: AppConfig;
}

export const Layout: React.FC<LayoutProps> = ({ children, config }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-600/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-white/5 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-12">
              <Link to="/" className="text-2xl font-black tracking-tighter text-red-600 hover:text-red-500 transition-colors uppercase">
                MaggioFlix
              </Link>
              <div className="hidden md:flex space-x-8">
                {config.navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === item.path ? 'text-red-500' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
               <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
                Request a Title
              </button>
              <Link to="/admin" className="p-2 text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-red-600 mb-6 uppercase tracking-widest">MaggioFlix</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-slate-400 text-sm">
            <Link to="/releases" className="hover:text-white transition-colors">Latest Releases</Link>
            <Link to="/guides" className="hover:text-white transition-colors">How it Works</Link>
            <Link to="/status" className="hover:text-white transition-colors">Server Status</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Community Blog</Link>
          </div>
          <p className="text-slate-500 text-xs max-w-xl mx-auto leading-relaxed">
            MaggioFlix is a private community initiative. We do not host content directly. This portal serves as a gateway to community tools. Respect the rules and enjoy the quality.
          </p>
          <div className="mt-8 pt-8 border-t border-white/5 text-slate-600 text-[10px] uppercase tracking-widest">
            © 2024 MaggioFlix Studio • Handcrafted for cinematic joy
          </div>
        </div>
      </footer>
    </div>
  );
};
