
import React, { useState } from 'react';
import { AppConfig, ContentType, ServiceStatus } from '../../types';

interface DashboardProps {
  config: AppConfig;
  updateConfig: (newConfig: AppConfig) => void;
}

const AdminDashboard: React.FC<DashboardProps> = ({ config, updateConfig }) => {
  const [activeTab, setActiveTab] = useState<'hero' | 'releases' | 'status'>('hero');

  const updateHero = (field: keyof typeof config.hero, value: string) => {
    updateConfig({
      ...config,
      hero: { ...config.hero, [field]: value }
    });
  };

  const addRelease = () => {
    const newRelease = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'New Content',
      year: 2024,
      type: ContentType.MOVIE,
      synopsis: 'Short summary...',
      tags: ['Action'],
      recommended: false,
      posterUrl: 'https://picsum.photos/400/600?random=' + Math.random()
    };
    updateConfig({ ...config, releases: [newRelease, ...config.releases] });
  };

  const deleteRelease = (id: string) => {
    updateConfig({ ...config, releases: config.releases.filter(r => r.id !== id) });
  };

  return (
    <div className="min-h-screen bg-slate-900 flex text-slate-100">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-950 border-r border-white/5 flex flex-col p-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center font-black">MF</div>
          <h2 className="text-xl font-black">STUDIO</h2>
        </div>
        
        <nav className="space-y-2 flex-grow">
          {(['hero', 'releases', 'status'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold capitalize transition-all ${
                activeTab === tab ? 'bg-red-600/10 text-red-500' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab} Editor
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/5">
          <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition-all mb-4" onClick={() => window.location.href = '/'}>
            View Site
          </button>
          <div className="text-[10px] text-slate-600 uppercase tracking-widest text-center">Version 1.0.4-Beta</div>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-grow p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {activeTab === 'hero' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <h1 className="text-4xl font-black mb-8">Hero Section</h1>
              <div className="glass p-8 rounded-3xl space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-500 mb-2">Headline</label>
                  <input 
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-500" 
                    value={config.hero.headline}
                    onChange={(e) => updateHero('headline', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase text-slate-500 mb-2">Subheadline</label>
                  <textarea 
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-500 h-32" 
                    value={config.hero.subheadline}
                    onChange={(e) => updateHero('subheadline', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-500 mb-2">Primary CTA</label>
                    <input 
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white" 
                      value={config.hero.primaryCTA}
                      onChange={(e) => updateHero('primaryCTA', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-500 mb-2">Secondary CTA</label>
                    <input 
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white" 
                      value={config.hero.secondaryCTA}
                      onChange={(e) => updateHero('secondaryCTA', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'releases' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-black">Manage Releases</h1>
                <button onClick={addRelease} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl">+ Add New</button>
              </div>
              <div className="grid gap-6">
                {config.releases.map(release => (
                  <div key={release.id} className="glass p-6 rounded-2xl flex items-center gap-6">
                    <img src={release.posterUrl} className="w-16 h-24 rounded-lg object-cover shadow-lg" alt="" />
                    <div className="flex-grow">
                      <input 
                        className="bg-transparent text-xl font-bold w-full focus:outline-none mb-1" 
                        value={release.title}
                        onChange={(e) => {
                          const updated = config.releases.map(r => r.id === release.id ? { ...r, title: e.target.value } : r);
                          updateConfig({ ...config, releases: updated });
                        }}
                      />
                      <div className="flex gap-4 text-sm text-slate-500">
                        <span>{release.year}</span>
                        <span className="uppercase text-xs font-black text-red-500">{release.type}</span>
                      </div>
                    </div>
                    <button onClick={() => deleteRelease(release.id)} className="p-4 text-slate-600 hover:text-red-500 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'status' && (
            <div className="space-y-8">
              <h1 className="text-4xl font-black mb-8">System Status</h1>
              <div className="space-y-6">
                {config.services.map(service => (
                  <div key={service.id} className="glass p-8 rounded-3xl">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold">{service.name}</h3>
                      <select 
                        className="bg-slate-950 border border-white/10 rounded-lg px-4 py-2 text-sm"
                        value={service.status}
                        onChange={(e) => {
                          const updated = config.services.map(s => s.id === service.id ? { ...s, status: e.target.value as ServiceStatus } : s);
                          updateConfig({ ...config, services: updated });
                        }}
                      >
                        <option value={ServiceStatus.OPERATIONAL}>Operational</option>
                        <option value={ServiceStatus.DEGRADED}>Degraded</option>
                        <option value={ServiceStatus.OUTAGE}>Outage</option>
                      </select>
                    </div>
                    <input 
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-sm" 
                      placeholder="Status note..."
                      value={service.note}
                      onChange={(e) => {
                        const updated = config.services.map(s => s.id === service.id ? { ...s, note: e.target.value } : s);
                        updateConfig({ ...config, services: updated });
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
