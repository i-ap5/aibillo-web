import React from 'react';
import { motion } from 'framer-motion';

const MobileFirst: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0F19] text-white relative overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#e11d48]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT: The Interactive Phone Mockup */}
          <div className="lg:w-1/2 order-2 lg:order-1 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Main Phone Frame */}
              <div className="relative w-[280px] md:w-[320px] mx-auto bg-slate-950 rounded-[3rem] border-[8px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="h-[600px] bg-slate-900 relative">
                  {/* Internal App UI Mockup */}
                  <div className="p-6 pt-12">
                    <div className="w-10 h-10 bg-[#e11d48] rounded-xl mb-6 flex items-center justify-center">
                      <span className="material-symbols-rounded text-white">grid_view</span>
                    </div>
                    <div className="h-4 w-32 bg-slate-800 rounded-full mb-2" />
                    <div className="h-3 w-20 bg-slate-800/50 rounded-full mb-8" />
                    
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-16 bg-slate-800/40 rounded-2xl border border-slate-700/50" />
                      ))}
                    </div>
                  </div>

                  {/* Camera Scanning Overlay (Representing Bill Upload) */}
                  <motion.div 
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e11d48]/5 to-transparent pointer-events-none" 
                  />
                </div>
              </div>

              {/* FLOATING CARD 1: Attendance Tracking */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-4 md:right-0 w-48 bg-white p-4 rounded-2xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="material-symbols-rounded text-green-600 text-sm">how_to_reg</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Attendance</p>
                    <p className="text-xs font-black text-slate-900">Abhishek • <span className="text-green-600">IN</span></p>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[70%] h-full bg-green-500" />
                </div>
              </motion.div>

              {/* FLOATING CARD 2: Inventory Upload */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 -left-8 md:left-0 w-56 bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-2xl z-20 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#e11d48] flex items-center justify-center">
                    <span className="material-symbols-rounded text-white text-sm">upload_file</span>
                  </div>
                  <p className="text-xs font-bold text-white">Uploading Bill...</p>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight mb-3">AI is parsing invoice #INV-2024 to Inventory.</p>
                <div className="flex justify-between items-center text-[9px] font-black text-[#e11d48] uppercase tracking-widest">
                  <span>Scanning</span>
                  <span>84%</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Content Area */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#e11d48] font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">
                Mobile-First Command
              </span>
              <h2 className="font-heading text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
                Your Business <br /> In Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] to-rose-400">Pocket.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl">
                The AiBillo mobile app isn't just a viewer—it's a control center. Manage your team’s presence and stock levels from the palm of your hand.
              </p>

              <div className="grid gap-8">
                {/* Feature 1: Attendance */}
                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#e11d48] transition-all group-hover:bg-[#e11d48] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(225,29,72,0.3)]">
                    <span className="material-symbols-rounded text-3xl">fingerprint</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-2">Attendance Tracking</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Real-time staff clock-in/out with GPS verification. Monitor team availability and shift status instantly.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Bill Upload */}
                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#e11d48] transition-all group-hover:bg-[#e11d48] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(225,29,72,0.3)]">
                    <span className="material-symbols-rounded text-3xl">document_scanner</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-2">Smart Bill Upload</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Snap a photo of any purchase bill. Our AI automatically updates your inventory stock levels and tax records.
                    </p>
                  </div>
                </div>
              </div>

              {/* Centered CTA (Optional) */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <button className="px-8 py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-[#e11d48] hover:text-white transition-all duration-300 shadow-xl" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.trowcode.aibillo', '_blank')}>
                  Download Mobile App
                </button>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MobileFirst;