
import React from 'react';
import AibilloLogo from "../assets/aibillo1.svg";
import { Linkedin, Instagram } from "lucide-react";


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
                            <img src={AibilloLogo} alt="AiBillo Logo" className="w-8 h-8 fill-white" />
                          </div>
                          </div>
              <span className="text-2xl font-black tracking-tight">AiBillo</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-xs text-slate-500 font-medium">
              Empowering retail businesses with intelligent billing and management tools. Built for the future of commerce.
            </p>
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
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

       <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
  
  {/* Left: Copyright + Designer */}
  <div className="flex flex-col items-center md:items-start gap-1">
    <p className="text-xs font-medium text-slate-600">
      © 2025 AIBillo Inc. All rights reserved.
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
