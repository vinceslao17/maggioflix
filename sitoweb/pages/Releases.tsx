
import React, { useState } from 'react';
import { AppConfig, ContentType } from '../types';

interface ReleasesProps {
  config: AppConfig;
}

const Releases: React.FC<ReleasesProps> = ({ config }) => {
  const [filter, setFilter] = useState<'all' | ContentType>('all');
  const [search, setSearch] = useState('');

  const filteredReleases = config.releases.filter(r => {
    const matchesFilter = filter === 'all' || r.type === filter;
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <h1 className="text-5xl font-black mb-4 tracking-tighter">Content Library</h1>
          <p className="text-slate-400">Discover what's available on the MaggioFlix network.</p>
        </div>
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Search titles..." 
            className="bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-red-500 flex-grow"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex bg-slate-900 p-1 rounded-xl border border-white/10">
            {(['all', ContentType.MOVIE, ContentType.SERIES] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-sm font-bold capitalize transition-all ${
                  filter === f ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {filteredReleases.map((release) => (
          <div key={release.id} className="group relative">
            <div className="aspect-[2/3] rounded-3xl overflow-hidden glass border-white/5 shadow-2xl">
              <img src={release.posterUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={release.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {release.tags.map(t => (
                    <span key={t} className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold uppercase">{t}</span>
                  ))}
                </div>
                <button className="bg-white text-slate-950 font-black py-3 rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">Request Now</button>
              </div>
            </div>
            <div className="mt-4 px-2">
               <h3 className="font-bold text-xl mb-1 truncate">{release.title}</h3>
               <div className="flex justify-between items-center text-slate-500 text-sm">
                 <span>{release.year}</span>
                 <span className="uppercase text-[10px] font-black tracking-widest bg-slate-800 px-2 py-0.5 rounded text-slate-300">{release.type}</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      {filteredReleases.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 text-xl">No titles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Releases;
