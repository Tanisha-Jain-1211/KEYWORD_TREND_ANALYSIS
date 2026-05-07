import React from 'react';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="glass-panel mx-6 mt-6 mb-2 px-6 py-4 flex items-center justify-between sticky top-6 z-50">
      <Link to="/" className="flex items-center gap-3">
        <div className="p-2 bg-indigo-500/20 rounded-lg neon-border">
          <Activity className="text-indigo-400 w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-wide text-glow">
            Trend<span className="text-indigo-400">Analysis</span>
          </h1>
          <p className="text-xs text-slate-400">Smart AI Intelligence System</p>
        </div>
      </Link>
      <div className="flex gap-4">
        {/* Additional nav links can go here */}
      </div>
    </nav>
  );
};

export default Navbar;
