
import React, { useState } from 'react';

interface LoginProps {
  onLogin: (success: boolean) => void;
}

const AdminLogin: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple local password for demo
      onLogin(true);
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md p-10 glass rounded-[2.5rem]">
        <h1 className="text-3xl font-black mb-2 text-center">Studio Login</h1>
        <p className="text-slate-500 text-center mb-10">Manage MaggioFlix content</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-red-600/20 transition-all active:scale-95">
            Enter Studio
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
