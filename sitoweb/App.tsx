
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppConfig } from './types';
import { loadConfig, saveConfig } from './services/storage';
import { Layout } from './components/Layout';

// Public Pages
import Home from './pages/Home';
import Releases from './pages/Releases';
import Guides from './pages/Guides';
import Status from './pages/Status';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminLogin from './pages/admin/Login';

const App: React.FC = () => {
  const [config, setConfig] = useState<AppConfig>(loadConfig());
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    saveConfig(config);
  }, [config]);

  const handleUpdateConfig = (newConfig: AppConfig) => {
    setConfig(newConfig);
  };

  const handleLogin = (success: boolean) => {
    setIsAuthenticated(success);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout config={config}><Home config={config} /></Layout>} />
        <Route path="/releases" element={<Layout config={config}><Releases config={config} /></Layout>} />
        <Route path="/guides" element={<Layout config={config}><Guides /></Layout>} />
        <Route path="/status" element={<Layout config={config}><Status config={config} /></Layout>} />
        <Route path="/blog" element={<Layout config={config}><Blog config={config} /></Layout>} />
        <Route path="/faq" element={<Layout config={config}><FAQ config={config} /></Layout>} />

        {/* Admin Routes */}
        <Route 
          path="/admin" 
          element={isAuthenticated ? <AdminDashboard config={config} updateConfig={handleUpdateConfig} /> : <AdminLogin onLogin={handleLogin} />} 
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
