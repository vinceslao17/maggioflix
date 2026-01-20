
import React from 'react';

const Guides: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16">
      {/* Sidebar Nav */}
      <aside className="w-full md:w-64 shrink-0 h-fit sticky top-32">
        <h4 className="text-xs font-black uppercase text-slate-500 tracking-[0.2em] mb-6">Documentation</h4>
        <nav className="space-y-4">
          <a href="#getting-started" className="block font-bold text-red-500">Getting Started</a>
          <a href="#requesting" className="block text-slate-400 hover:text-white transition-colors">Requesting Content</a>
          <a href="#plex-setup" className="block text-slate-400 hover:text-white transition-colors">Plex Configuration</a>
          <a href="#notifications" className="block text-slate-400 hover:text-white transition-colors">Push Notifications</a>
        </nav>
      </aside>

      {/* Main Doc */}
      <article className="max-w-3xl prose prose-invert prose-slate prose-headings:font-black prose-headings:tracking-tighter prose-a:text-red-500">
        <h1 className="text-5xl mb-8">Welcome to the Future of Streaming</h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-12">
          MaggioFlix is more than just a media server; it's a curated experience powered by you. 
          Follow this guide to get the most out of our network.
        </p>

        <section id="getting-started" className="mb-20">
          <h2 className="text-3xl mb-6">1. Getting Started</h2>
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5">
            <ul className="space-y-6 list-none p-0">
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold shrink-0">1</span>
                <div>
                  <h4 className="font-bold mb-1">Join Discord</h4>
                  <p className="text-slate-400 text-sm">Our community is managed through Discord. This is where you get your credentials.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold shrink-0">2</span>
                <div>
                  <h4 className="font-bold mb-1">Setup Overseerr</h4>
                  <p className="text-slate-400 text-sm">Once you have a Plex account, link it to our Overseerr instance for one-click requests.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="requesting" className="mb-20">
          <h2 className="text-3xl mb-6">2. Requesting Content</h2>
          <p className="text-slate-400">
            We use **Overseerr** to handle all content requests. It synchronizes with our automation stack 
            (Sonarr and Radarr) to grab your requested titles in the highest possible quality.
          </p>
          <div className="my-8 aspect-video rounded-3xl glass flex items-center justify-center text-slate-600 text-sm font-bold uppercase tracking-widest border-dashed border-2 border-white/10">
            Preview Image Placeholder
          </div>
          <p className="text-slate-400">
            Most requests are fulfilled within 5-15 minutes depending on availability and file size. 
            4K content may take longer due to larger file sizes.
          </p>
        </section>
      </article>
    </div>
  );
};

export default Guides;
