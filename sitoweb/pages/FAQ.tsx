
import React, { useState } from 'react';
import { AppConfig } from '../types';

const FAQ: React.FC<{ config: AppConfig }> = ({ config }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-6 tracking-tighter">Help & FAQ</h1>
        <p className="text-slate-400">Everything you need to know about the platform.</p>
      </div>

      <div className="space-y-4">
        {config.faq.map((item) => (
          <div key={item.id} className="glass rounded-[1.5rem] overflow-hidden">
            <button 
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <span className="font-bold text-lg text-left">{item.question}</span>
              <span className={`transform transition-transform ${openId === item.id ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openId === item.id && (
              <div className="px-8 pb-8 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
