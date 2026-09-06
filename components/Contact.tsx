import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Contact Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-black text-white tracking-tight mb-6"
          >
            We'd love to <span className="text-gradient">hear from you</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Have questions about pricing, features, or setting up AiBillo for your business? Reach out — our team responds fast.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Office Address - tall card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 lg:row-span-2 flex flex-col justify-between p-8 bg-white/[0.04] rounded-[2rem] border border-white/10 backdrop-blur-sm"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary/15 text-primary-400 flex items-center justify-center mb-6">
                <MapPin size={26} />
              </div>
              <h4 className="text-xl font-black text-white mb-3">Our Office</h4>
              <address className="text-sm text-slate-400 leading-relaxed not-italic">
                HiLITE Business Park, Tower 2, Second Floor<br />
                State Highway 28, Palazhi, Kozhikode<br />
                Pantheeramkavu, Kerala 673014, India
              </address>
            </div>
            <a
              href="https://www.google.com/maps?q=HiLITE+Business+Park,+Palazhi,+Kozhikode,+Kerala+673014"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors"
            >
              Get directions <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Email */}
          <motion.a
            href="mailto:info@aibillo.com"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 flex items-center gap-5 p-7 bg-white/[0.04] rounded-[2rem] border border-white/10 hover:border-primary-500/40 hover:bg-white/[0.07] transition-all duration-300 group"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/15 text-primary-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-base font-black text-white mb-1">Email Us</h4>
              <p className="text-sm text-slate-400">info@aibillo.com</p>
            </div>
          </motion.a>

          {/* Phone / WhatsApp */}
          <motion.a
            href="https://wa.me/+918590000918?text=Hello%20AiBillo%20team%2C%20I%20need%20help"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex items-center gap-5 p-7 bg-white/[0.04] rounded-[2rem] border border-white/10 hover:border-primary-500/40 hover:bg-white/[0.07] transition-all duration-300 group"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/15 text-primary-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="text-base font-black text-white mb-1">Call / WhatsApp</h4>
              <p className="text-sm text-slate-400">+91 85900 00918</p>
            </div>
          </motion.a>

          {/* Live Chat CTA - wide accent card */}
          <motion.a
            href="https://wa.me/+918590000918?text=Hello%20AiBillo%20team%2C%20I%20need%20help"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-8 flex items-center justify-between gap-6 p-7 bg-primary rounded-[2rem] hover:bg-primary-600 transition-all duration-300 group shadow-xl shadow-primary/20"
          >
            <div className="flex items-center gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/15 text-white flex items-center justify-center">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="text-base font-black text-white mb-1">Start a Live Chat</h4>
                <p className="text-sm text-primary-100">Our team is online and ready to help via WhatsApp</p>
              </div>
            </div>
            <ArrowUpRight size={22} className="text-white flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 rounded-[2rem] overflow-hidden border border-white/10 shadow-sm min-h-[360px]"
        >
          <iframe
            title="AiBillo Office Location - HiLITE Business Park, Kozhikode"
            src="https://www.google.com/maps?q=HiLITE+Business+Park,+Palazhi,+Kozhikode,+Kerala+673014&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '360px', filter: 'grayscale(0.3) contrast(1.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
