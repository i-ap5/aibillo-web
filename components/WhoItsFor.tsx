import React from 'react';
import { motion } from 'framer-motion';

const SEGMENTS = [
  { icon: 'storefront', label: 'Retail Shops' },
  { icon: 'restaurant', label: 'Restaurants & Cafes' },
  { icon: 'content_cut', label: 'Salons & Spas' },
  { icon: 'local_shipping', label: 'Wholesalers & Distributors' },
  { icon: 'medication', label: 'Pharmacies' },
  { icon: 'handyman', label: 'Service Businesses' },
];

const WhoItsFor: React.FC = () => {
  return (
    <section id="who-its-for" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Who It's For</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-16"
        >
          Built for every kind of <span className="text-gradient">business owner</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-8 md:gap-x-14"
        >
          {SEGMENTS.map((seg) => (
            <div key={seg.label} className="flex flex-col items-center gap-3 w-28">
              <span className="material-symbols-rounded text-3xl text-slate-400">{seg.icon}</span>
              <span className="text-sm font-semibold text-slate-600 leading-snug">{seg.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsFor;
