import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Platform', href: '#solution' },
  { label: 'Schema', href: '#preview' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        scrolled
          ? 'bg-space/80 backdrop-blur-xl border-white/5 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 select-none cursor-pointer group">
          <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:bg-indigo-500 transition-colors">
             <span className="text-white font-mono font-bold text-lg">&gt;</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
            LUCY KNOWS
          </span>
        </div>
        
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 relative"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors">
            Log In
          </button>
          <button className="px-5 py-2 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300">
            Get API Key
          </button>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;