
import React, { useState, useEffect } from 'react';
import AibilloLogo from "../assets/aibillo1.svg";



const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/85 backdrop-blur-lg border-b border-slate-200/50 h-16 shadow-sm' : 'bg-transparent h-20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30 transform group-hover:scale-110 transition-transform duration-300">
              <img src={AibilloLogo} alt="AiBillo Logo" className="w-8 h-8 fill-white" />
            </div>
           

            <span className="text-xl font-bold tracking-tight text-slate-900 font-sans group-hover:text-primary transition-colors">AiBillo</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center bg-slate-50/80 p-1.5 rounded-full border border-slate-200/60 backdrop-blur-sm shadow-sm">
            {['Features', 'How it Works', 'Dashboard', 'Pricing'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all hover:shadow-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:block text-sm font-bold text-slate-700 hover:text-primary transition-colors">Log in</a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-white bg-slate-900 hover:bg-primary transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-primary/30 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <span className="material-symbols-outlined text-base ml-1.5 transition-transform group-hover:translate-x-1">arrow_forward</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
