
import React from 'react';

const MobileFirst: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-5/12 order-2 lg:order-1">
            <div className="relative group perspective-1000">
              {/* Phone Mockup */}
              <div className="w-[300px] mx-auto lg:mx-0 bg-slate-950 rounded-[3rem] border-[10px] border-slate-800 overflow-hidden shadow-2xl relative z-20 transition-transform duration-700 hover:rotate-y-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-36 bg-slate-800 rounded-b-2xl z-30 flex items-center justify-center">
                  <div className="w-12 h-1 bg-slate-900 rounded-full"></div>
                </div>
                <div className="h-[600px] bg-slate-100 relative overflow-hidden">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDGWDjwHTHxZYSY8deQT9Z649Hy0X_tfW1H2shYSvbLGg8bvzOMAJxZSxIVjcHPQL4Uvr2BJY2AY6eCMLIf1kKVvdCWW--XD-Gf-EjmUQun6MjxBo68nquGHHKkLtcfmQM6cN7PEM0D5-YJcioup7aSHv3QyBMqEEn0v9yPhgmnrfolPf5SKJdfFBMDXzUwXTkmQ7dAtYoX61gbsONE8et9ixssy9np7OpSdIoofsDc-_2pGmHTSa04ziF0gzHadmaPl_5U9nHSApF" 
                    alt="Mobile App"
                    className="w-full h-full object-cover"
                  />
                  {/* Floating App UI Piece */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/95 backdrop-blur-md border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">Today's Sales</p>
                        <p className="text-2xl font-black text-slate-900">$1,240.50</p>
                      </div>
                      <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-2xl">add</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Layered background card */}
              <div className="hidden lg:block absolute top-24 -right-32 w-[550px] h-[380px] bg-slate-800/60 backdrop-blur rounded-3xl border border-white/5 -z-10 group-hover:translate-x-8 transition-transform duration-700">
                <div className="h-10 border-b border-white/5 bg-slate-950/30 rounded-t-3xl flex items-center px-6 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 order-1 lg:order-2">
            <h2 className="text-primary-400 font-bold tracking-[0.2em] uppercase text-xs mb-6">Mobile First Experience</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Your Business <br />in Your Pocket.</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl">
              Don't be tied to a desk. AIBillo's mobile app gives you full control. Create invoices, check stock, and get paid wherever you are.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-primary-400 border border-slate-700 shadow-xl">
                  <span className="material-symbols-outlined text-2xl">qr_code_scanner</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Barcode Scanning</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Use your phone's camera to scan items and add them to invoices instantly.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-primary-400 border border-slate-700 shadow-xl">
                  <span className="material-symbols-outlined text-2xl">notifications_active</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Instant Notifications</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Get alerted immediately when stock is low or a payment is received.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFirst;
