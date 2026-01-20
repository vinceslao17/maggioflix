
import React from 'react';
import { AppConfig, ServiceStatus } from '../types';

interface StatusProps {
  config: AppConfig;
}

const Status: React.FC<StatusProps> = ({ config }) => {
  const getStatusColor = (status: ServiceStatus) => {
    switch (status) {
      case ServiceStatus.OPERATIONAL: return 'text-emerald-500 bg-emerald-500/10';
      case ServiceStatus.DEGRADED: return 'text-amber-500 bg-amber-500/10';
      case ServiceStatus.OUTAGE: return 'text-red-500 bg-red-500/10';
    }
  };

  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-6 tracking-tighter">System Status</h1>
        <p className="text-slate-400">Real-time health of our streaming infrastructure.</p>
      </div>

      <div className="space-y-6">
        {config.services.map((service) => (
          <div key={service.id} className="glass p-8 rounded-3xl flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-1">{service.name}</h3>
              <p className="text-slate-500 text-sm">{service.note}</p>
            </div>
            <div className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest ${getStatusColor(service.status)}`}>
              {service.status}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 glass p-8 rounded-3xl border-white/5">
        <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          Maintenance History
        </h4>
        <div className="space-y-6">
          <div className="border-l-2 border-white/10 pl-6 pb-2">
            <p className="text-xs text-slate-500 uppercase font-bold mb-1">May 15, 2024</p>
            <p className="text-sm font-medium text-slate-300">Database migration and backup verification complete. Zero downtime observed.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-6">
            <p className="text-xs text-slate-500 uppercase font-bold mb-1">May 10, 2024</p>
            <p className="text-sm font-medium text-slate-300">Standard Plex update applied to master node.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
