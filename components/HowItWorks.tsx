
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Sign Up',
      description: 'Create your account in 30 seconds. No credit card required to start.',
      icon: 'app_registration',
    },
    {
      number: 2,
      title: 'Import Data',
      description: 'Upload your product list or let our AI scan your old invoices to auto-populate.',
      icon: 'upload_file',
    },
    {
      number: 3,
      title: 'Start Billing',
      description: 'Create professional invoices, track payments, and grow your business instantly.',
      icon: 'rocket_launch',
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="font-heading text-4xl font-bold text-slate-900 mb-6 tracking-tight">How AiBillo Works</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Get up and running in minutes. No complex setup required.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-slate-200 z-0"></div>
          
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 text-center group">
              <div className="w-24 h-24 mx-auto bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-lg mb-8 group-hover:border-primary group-hover:shadow-primary/20 group-hover:scale-110 transition-all duration-300 relative">
                <span className="material-symbols-outlined text-4xl text-primary font-light">{step.icon}</span>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4">{step.number}. {step.title}</h3>
              <p className="text-slate-500 leading-relaxed px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
