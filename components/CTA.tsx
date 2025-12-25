
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[3.5rem] bg-primary overflow-hidden shadow-2xl shadow-primary/40">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500"></div>
          {/* Abstract background shapes */}
          <div className="absolute -right-24 -top-24 w-[400px] h-[400px] bg-white opacity-10 rounded-full blur-[80px]"></div>
          <div className="absolute -left-24 -bottom-24 w-[400px] h-[400px] bg-indigo-500 opacity-20 rounded-full blur-[80px]"></div>

          <div className="relative z-10 px-8 py-20 md:py-24 md:px-24 text-center">
            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-white">
              Ready to modernize <br className="hidden md:block" /> your business?
            </h2>
            <p className="text-primary-100 text-lg md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of smart business owners using AIBillo. <br className="hidden sm:block" /> Set up is free, fast, and easy.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-primary-700 font-black rounded-full shadow-2xl hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300">
                Get Started for Free
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/30 text-white font-black rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                Request Demo
              </button>
            </div>
            <p className="mt-8 text-xs font-bold text-primary-200/60 uppercase tracking-widest">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
