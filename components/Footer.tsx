
import React from 'react';

import { Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react";


const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8 text-white">
              {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-lg">receipt_long</span>
              </div> */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30 transform group-hover:scale-110 transition-transform duration-300">
                  <img src="/assets/aibillo1.svg" alt="AiBillo Logo" className="w-8 h-8 fill-white" />
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight">AiBillo</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs text-slate-500 font-medium">
              Empowering retail businesses with intelligent billing and management tools. Built for the future of commerce.
            </p>

            <address className="not-italic text-sm text-slate-500 font-medium mb-8 flex items-start gap-2.5 max-w-xs">
              <MapPin size={16} className="shrink-0 mt-0.5 text-primary-500" />
              <span>HiLITE Business Park, Tower 2, 2nd Floor, State Highway 28, Palazhi, Kozhikode, Kerala 673014</span>
            </address>
            {/* <div className="flex gap-4">
              {['X', 'in', 'fb'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <span className="text-xs font-black">{social}</span>
                </a>
              ))}
            </div> */}

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/aibillo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/aibill_o"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Product</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#FAQ" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#who-its-for" className="hover:text-primary transition-colors">Who It's For</a></li>
              <li><a href="#dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold mb-6 tracking-wide">Get in Touch</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="mailto:info@aibillo.com" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail size={14} /> info@aibillo.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/+918590000918" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Phone size={14} /> +91 85900 00918
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left: Copyright + Designer */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-xs font-medium text-slate-600">
              © 2026 AIBillo Inc. All rights reserved.
            </p>
            <a
              href="https://trowcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-600 hover:text-slate-300 transition-colors "
            >
              Designed by <span className="font-medium ">Trowcode</span>
            </a>
          </div>

          {/* Right: System Status */}
          <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Systems Operational
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
