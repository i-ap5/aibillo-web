import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    id: '01',
    label: 'Onboarding',
    title: 'Instant Sign Up',
    desc: 'Join the ecosystem in 30 seconds. No credit card, no complex forms.',
    icon: 'person_add',
  },
  {
    id: '02',
    label: 'Automation',
    title: 'AI Smart Import',
    desc: 'Our neural engine maps legacy invoices with surgical precision.',
    icon: 'hub',
  },
  {
    id: '03',
    label: 'Velocity',
    title: 'Autonomous Billing',
    desc: 'Set revenue on autopilot. Invoices sent, tracked, and settled.',
    icon: 'rocket_launch',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden hero-pattern">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER: Centered & Reduced Size */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">The Workflow</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6"
          >
            Billing that feels <br />
            <span className="text-gradient">like pure magic.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-body text-slate-500 text-lg"
          >
            Three simple steps to automate your financial growth.
          </motion.p>
        </div>

        {/* INTERACTIVE GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12">
          
          {/* THE ILLUMINATED TRAVELING LINE (Desktop) */}
          <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-[24px] z-0">
            <svg width="100%" height="24" className="overflow-visible">
              <defs>
                {/* Neon Glow Filter */}
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                
                {/* REVEAL MASK: This "draws" the line to reveal the moving color below */}
                <mask id="reveal-mask">
                  <motion.line
                    x1="0" y1="12" x2="100%" y2="12"
                    stroke="white"
                    strokeWidth="12"
                    initial={{ pathLength: 0 }}
                    whileInView={{ 
                      pathLength: 1,
                      transition: { delay: 0.2, duration: 2, ease: "easeInOut" } 
                    }}
                    viewport={{ once: true }}
                  />
                </mask>
              </defs>

              {/* Static Background Rail (Light Gray) */}
              <line x1="0" y1="12" x2="100%" y2="12" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="12 16" />
              
              {/* THE ACTIVE COLORED LINE: Travels indefinitely behind the mask */}
              <g mask="url(#reveal-mask)">
                <motion.line
                  x1="0" y1="12" x2="100%" y2="12"
                  stroke="#e11d48" // Your Primary Rose/Red
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="12 16"
                  filter="url(#neon-glow)"
                  animate={{ strokeDashoffset: [0, -56] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5, // Traveling speed
                    ease: "linear",
                  }}
                />
              </g>
            </svg>
          </div>

          {STEPS.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center group"
            >
              {/* ICON CONTAINER: Fluid Pop */}
              <motion.div 
                className="relative z-10 mb-10"
                initial={{ scale: 1 }}
                whileInView={{ 
                  scale: [1, 1.15, 1],
                  transition: { delay: idx * 0.7, duration: 1, ease: "easeInOut" } 
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-28 h-28 bg-white rounded-[32px] border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] flex items-center justify-center relative transition-all duration-700 group-hover:border-primary-100 group-hover:shadow-primary-100/30">
                  <span className="material-symbols-rounded text-5xl text-primary-600 material-filled relative z-10 transition-transform duration-700 group-hover:scale-110">
                    {step.icon}
                  </span>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-heading text-[11px] font-black border-4 border-white shadow-lg group-hover:bg-primary transition-all duration-700">
                    {step.id}
                  </div>
                </div>
              </motion.div>

              {/* CONTENT AREA */}
              <div className="text-center px-4">
                <span className="font-heading text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 block">
                  {step.label}
                </span>
                <h3 className="font-heading text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="font-body text-slate-500 text-sm leading-relaxed max-w-[240px] mx-auto group-hover:text-slate-600 transition-colors">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER: Perfectly Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center text-center"
        >
          {/* Centered Button */}
          <button className="group relative px-12 py-5 bg-slate-900 rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-[0_20px_40px_-10px_rgba(225,29,72,0.3)] active:scale-95 mb-10">
             <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
             <span className="relative z-10 flex items-center gap-3 font-heading font-black text-white text-lg">
                Experience AiBillo
                <span className="material-symbols-rounded material-filled text-2xl transition-transform group-hover:translate-x-1">bolt</span>
             </span>
          </button>

          {/* Social Proof Stack */}
          <div className="flex flex-col items-center gap-4">
             <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i+25}`} alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm transition-transform hover:scale-110 hover:z-20" />
                ))}
             </div>
             <p className="font-body text-[10px] font-bold text-slate-400 uppercase tracking-widest">
               Trusted by <span className="text-slate-900">4,200+</span> teams globally
             </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;