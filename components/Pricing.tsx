import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  price: number;
  tagline: string;
  icon: string;
  highlight?: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    name: 'Silver',
    price: 24999,
    tagline: 'For new stores getting started with smart billing.',
    icon: 'workspace_premium',
    features: [
      'GST-compliant smart billing',
      'Single store, up to 2 counters',
      'Inventory & stock management',
      'Basic sales reports & analytics',
      'Mobile app access',
      'Email support',
    ],
  },
  {
    name: 'Gold',
    price: 39999,
    tagline: 'For growing businesses that need automation & insights.',
    icon: 'military_tech',
    highlight: true,
    features: [
      'Everything in Silver, plus:',
      'Up to 5 systems per store',
      'Employee attendance & geo-fencing',
      'Bulk purchase upload (CSV/Excel)',
      'AI-powered purchase prediction',
      'Priority WhatsApp & email support',
    ],
  },
  {
    name: 'Diamond',
    price: 59999,
    tagline: 'For multi-store operators who want full control.',
    icon: 'diamond',
    features: [
      'Everything in Gold, plus:',
      'Multi-store management',
      'Unlimited transactions & storage',
      'Advanced analytics & forecasting',
      'Dedicated onboarding & training',
      '24/7 priority support',
    ],
  },
];

const formatINR = (n: number) => `₹${n.toLocaleString('en-IN')}`;

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6"
          >
            Simple, transparent <span className="text-gradient">pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            One-time annual plans, no hidden fees. Pick the plan that matches the size of your business today — upgrade anytime as you grow.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col h-full rounded-[2.5rem] p-8 md:p-10 border transition-all duration-500 ${
                plan.highlight
                  ? 'bg-slate-950 border-slate-800 shadow-2xl shadow-primary/20 md:-translate-y-4'
                  : 'bg-white border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-primary/40">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                plan.highlight ? 'bg-primary/10 text-primary-400' : 'bg-primary-50 text-primary-600'
              }`}>
                <span className="material-symbols-rounded text-3xl material-filled">{plan.icon}</span>
              </div>

              <h3 className={`text-2xl font-black tracking-tight mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                {plan.tagline}
              </p>

              <div className="mb-8">
                <span className={`text-5xl font-black tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {formatINR(plan.price)}
                </span>
                <span className={`text-sm font-semibold ml-2 ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                  / year
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.highlight ? 'bg-primary/20 text-primary-400' : 'bg-primary-50 text-primary-600'
                    }`}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className={`text-sm leading-relaxed font-medium ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.open('https://app.aibillo.com/register', '_blank')}
                className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-primary text-white hover:bg-primary-600 shadow-lg shadow-primary/30 hover:-translate-y-1'
                    : 'bg-slate-900 text-white hover:bg-primary hover:-translate-y-1'
                }`}
              >
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 font-medium mt-12">
          Need a custom plan for multiple branches or enterprise volume?{' '}
          <a href="#contact" className="text-primary font-bold hover:underline">Talk to our team</a>.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
