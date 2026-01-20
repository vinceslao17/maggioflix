
import React from 'react';
import { AppConfig } from '../types';

interface HomeProps {
  config: AppConfig;
}

const Home: React.FC<HomeProps> = ({ config }) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 -z-10"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-red-500 uppercase border border-red-500/30 rounded-full animate-pulse">
            Now Live: 4K Library Enhanced
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            {config.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {config.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl text-lg font-black transition-all transform hover:scale-105 shadow-2xl shadow-red-600/20 uppercase tracking-tight">
              {config.hero.primaryCTA}
            </button>
            <button className="glass hover:bg-white/10 text-white px-10 py-5 rounded-2xl text-lg font-black transition-all transform hover:scale-105 uppercase tracking-tight">
              {config.hero.secondaryCTA}
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {config.features.map((feature) => (
              <div key={feature.id} className="p-10 rounded-[2rem] glass group hover:border-red-500/50 transition-all duration-500">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Releases Preview */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black mb-4 tracking-tight">Newly Added</h2>
              <p className="text-slate-400">Available to request and stream right now</p>
            </div>
            <button className="text-red-500 font-bold hover:text-red-400 flex items-center gap-2 group">
              Browse All <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {config.releases.slice(0, 5).map((release) => (
              <div key={release.id} className="group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4 shadow-xl">
                  <img 
                    src={release.posterUrl} 
                    alt={release.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <button className="bg-red-600 text-white w-full py-2 rounded-lg font-bold text-sm">Request</button>
                  </div>
                  {release.recommended && (
                    <div className="absolute top-4 right-4 bg-red-600 text-[10px] font-black uppercase px-2 py-1 rounded">Recommended</div>
                  )}
                </div>
                <h4 className="font-bold text-lg group-hover:text-red-500 transition-colors truncate">{release.title}</h4>
                <p className="text-slate-500 text-sm">{release.year} • {release.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-16 rounded-[3rem] glass border-red-500/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] -z-10"></div>
            <h2 className="text-4xl font-black mb-6">Ready to start watching?</h2>
            <p className="text-slate-400 mb-10 text-lg">Join our community Discord and get your login credentials in minutes.</p>
            <button className="bg-white text-slate-950 px-10 py-4 rounded-2xl font-black hover:bg-slate-200 transition-colors uppercase tracking-tight">
              Join Discord Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
