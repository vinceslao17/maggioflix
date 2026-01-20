
import React from 'react';
import { AppConfig } from '../types';

const Blog: React.FC<{ config: AppConfig }> = ({ config }) => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-black mb-6 tracking-tighter">Insights & Updates</h1>
        <p className="text-slate-400 text-xl">Monthly news from the MaggioFlix engineering team.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {config.blog.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
              <img src={post.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
            </div>
            <div className="px-2">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full">{post.category}</span>
                <span className="text-xs text-slate-500">{post.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors leading-tight">{post.title}</h2>
              <p className="text-slate-400 leading-relaxed">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
