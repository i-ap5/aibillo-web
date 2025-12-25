
import React from 'react';
import DashboardImg from '../assets/Dashboard_1.png';


const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 hero-pattern opacity-60 pointer-events-none -z-10"></div>
      <div className="absolute top-0 inset-x-0 h-[600px] mesh-gradient pointer-events-none -z-10"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-200/20 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-primary-700 mb-8 shadow-sm animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Introducing AiBillo v3.0
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Smart Billing. <br />
            <span className="text-gradient">Real-Time Business Control.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            The all-in-one cloud platform for retailers and SMEs. Automate billing, track inventory, and sync your mobile app instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-primary-600 border border-transparent rounded-full hover:bg-primary-700 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all duration-300 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              <span className="mr-2 material-symbols-outlined text-primary">play_circle</span>
              Watch Demo
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
              <span>48 hours free trial</span>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 to-blue-500/30 rounded-[5rem] blur-2xl opacity-50"></div>
          <div className="relative bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-2 md:p-3 overflow-hidden ring-1 ring-white/10">
            <div className="h-10 bg-slate-800 rounded-t-xl flex items-center px-4 gap-2 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-4 flex-1 max-w-xl">
                <div className="h-6 bg-slate-900/50 rounded-md border border-white/5 flex items-center px-3 text-[10px] text-slate-500 font-mono">
                  <span className="material-symbols-outlined text-[12px] mr-2">lock</span>
                  billing.aibillo.com/dashboard
                </div>
              </div>
            </div>
            <div className="relative aspect-[16/10] bg-slate-950 rounded-b-lg overflow-hidden group">
              <img 
                src={DashboardImg}
                alt="Dashboard UI" 
                className="w-full h-full object-cover object-top opacity-100 group-hover:scale-[1.02] transition-transform duration-1000"
              />
            </div>
          </div>

          {/* Floating Widget 1 */}
          <div className="hidden lg:block absolute -bottom-10 -left-16 w-64 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20 animate-float">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Device Sync</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                <span className="material-symbols-outlined text-2xl font-light">smartphone</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Mobile POS</p>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">Inventory updated from New York Store</p>
              </div>
            </div>
          </div>

          {/* Floating Widget 2 */}
          <div className="hidden lg:block absolute top-12 -right-16 w-72 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 z-20 animate-float-delayed">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total Revenue</p>
                <h4 className="text-2xl font-extrabold text-slate-900 mt-1">₹124,500.00</h4>
              </div>
              <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                <span className="material-symbols-outlined text-sm">arrow_upward</span>
              </div>
            </div>
            <div className="flex items-end gap-1.5 h-12 mt-4">
              {[40, 60, 45, 80, 55, 100, 75].map((h, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-t-sm transition-all duration-500 ${i === 5 ? 'bg-primary-500' : 'bg-primary-100'}`} 
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-32 text-center">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">Powering 2,500+ Modern Businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-20 gap-y-8 opacity-50 grayscale">
            {[
              { icon: 'storefront', label: 'RetailFlow' },
              { icon: 'inventory_2', label: 'StockMaster' },
              { icon: 'payments', label: 'EasyPay' },
              { icon: 'local_shipping', label: 'ShipFast' },
              { icon: 'analytics', label: 'DataWise' },
            ].map((p) => (
              <div key={p.label} className="flex items-center gap-2.5 text-xl font-bold text-slate-800">
                <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
