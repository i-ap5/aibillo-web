
import React, { useState, useMemo } from 'react';

interface FAQItem {
  id: string;
  q: string;
  a: string;
  tag: string;
  icon: string;
  category: 'General' | 'Billing' | 'Technical' | 'Security';
}

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'General' | 'Billing' | 'Technical' | 'Security'>('All');
  const [openId, setOpenId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const categories: ('All' | 'General' | 'Billing' | 'Technical' | 'Security')[] = ['All', 'General', 'Billing', 'Technical', 'Security'];

  const faqs: FAQItem[] = [
    { 
      id: '1',
      q: "Is there a free trial available?", 
      a: "Yes! We offer a 14-day comprehensive free trial that gives you access to all features, including inventory management, multi-store capabilities, and analytics. No credit card is required to start your trial.", 
      tag: "Trial",
      icon: "experiment",
      category: "General"
    },
    { 
      id: '2',
      q: "Can I manage multiple store locations?", 
      a: "Absolutely. AIBillo is built for growth. Our Enterprise plan specifically caters to multi-store management, allowing you to sync inventory across locations, transfer stock, and view consolidated reports from a single dashboard.", 
      tag: "Scaling",
      icon: "hub",
      category: "General"
    },
    { 
      id: '3',
      q: "Is my data secure on the cloud?", 
      a: "Security is our top priority. We use bank-grade 256-bit SSL encryption to protect your data. Your information is backed up daily to secure servers, ensuring your business records are safe and accessible only to you.", 
      tag: "Security",
      icon: "shield_lock",
      category: "Security"
    },
    { 
      id: '4',
      q: "Can I import my existing product list?", 
      a: "Yes, importing data is seamless. You can upload your product list via CSV or Excel files. Additionally, our Smart AI feature can scan your existing invoices or paper records to help populate your inventory quickly.", 
      tag: "Onboarding",
      icon: "database_upload",
      category: "Billing"
    },
    { 
      id: '5',
      q: "Does the app work offline?", 
      a: "Yes, our mobile POS is designed to work offline. You can continue billing and managing sales without an internet connection. Once you're back online, all data automatically syncs to the cloud.", 
      tag: "Technical",
      icon: "wifi_off",
      category: "Technical"
    },
    { 
      id: '6',
      q: "What payment methods do you support?", 
      a: "We support all major credit cards, UPI, digital wallets, and bank transfers. Our system also integrates with popular payment gateways for automatic reconciliation.", 
      tag: "Payments",
      icon: "payments",
      category: "Billing"
    },
    { 
      id: '7',
      q: "How do I handle tax calculations?", 
      a: "AIBillo has a built-in tax engine that automatically calculates GST, VAT, or Sales Tax based on your region and product categories. You can also set custom tax rules.", 
      tag: "Compliance",
      icon: "account_balance",
      category: "Billing"
    },
    { 
      id: '8',
      q: "Is there a limit on transactions?", 
      a: "Our basic plans have generous limits, while Enterprise plans offer unlimited transactions and storage. We grow with your business.", 
      tag: "Limits",
      icon: "speed",
      category: "Technical"
    },
    { 
      id: '9',
      q: "Can I generate GST reports?", 
      a: "Yes, you can generate one-click GST ready reports for filing. The system organizes all your sales and purchases with relevant HSN codes automatically.", 
      tag: "Reporting",
      icon: "description",
      category: "Billing"
    }
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter(f => {
      const matchesCategory = activeCategory === 'All' || f.category === activeCategory;
      const matchesSearch = f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            f.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            f.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const displayedFaqs = filteredFaqs.slice(0, visibleCount);
  const leftColumn = displayedFaqs.filter((_, i) => i % 2 === 0);
  const rightColumn = displayedFaqs.filter((_, i) => i % 2 !== 0);

  const FAQCard: React.FC<{ faq: FAQItem }> = ({ faq }) => {
    const isOpen = openId === faq.id;

    return (
      <div 
        className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen ? 'border-primary/30 shadow-xl shadow-primary/5 ring-1 ring-primary/10' : 'border-slate-200/80 hover:border-primary/20 hover:shadow-lg'
        }`}
      >
        <button 
          onClick={() => setOpenId(isOpen ? null : faq.id)}
          className={`w-full flex items-start justify-between p-6 text-left outline-none transition-colors ${
            isOpen ? 'bg-primary-50/20' : ''
          }`}
        >
          <div className="flex gap-4">
            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isOpen ? 'bg-primary text-white scale-110' : 'bg-slate-100 text-slate-500'
            }`}>
              <span className="material-symbols-outlined text-xl">{faq.icon}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-black uppercase tracking-tighter transition-colors ${
                  isOpen ? 'text-primary' : 'text-primary-500/70'
                }`}>{faq.tag}</span>
              </div>
              <h4 className={`text-base font-bold leading-snug transition-colors ${
                isOpen ? 'text-slate-900' : 'text-slate-900 group-hover:text-primary'
              }`}>
                {faq.q}
              </h4>
            </div>
          </div>
          <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-primary border-primary text-white rotate-180' : 'border-slate-200 text-slate-400'
          }`}>
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </div>
        </button>
        
        <div className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}>
          <div className="overflow-hidden">
            <div className="px-6 pb-6 pt-2 pl-20 text-sm text-slate-600 leading-relaxed border-t border-slate-50">
              <p className="max-w-prose mb-4">{faq.a}</p>
              <div className="flex items-center gap-4 py-2 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Related:</span>
                <a href="#" className="text-[10px] font-bold text-primary hover:underline">Documentation &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="faq">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-pattern opacity-40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-primary-600 uppercase tracking-widest mb-6 shadow-sm">
            <span className="material-symbols-outlined text-sm">help</span>
            Support Center
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Everything you <span className="text-gradient">need to know</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Find answers to common questions about billing, security, and setting up your smart store.
          </p>

          <div className="relative max-w-xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl p-1 shadow-xl shadow-slate-200/50">
              <span className="pl-4 text-slate-400">
                <span className="material-symbols-outlined text-xl">search</span>
              </span>
              <input 
                type="text" 
                placeholder="Search for questions, features, or topics..."
                className="flex-1 px-4 py-3 bg-transparent border-none focus:ring-0 outline-none text-slate-900 placeholder-slate-400 font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(4); // Reset visible count on category change
              }}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30 scale-105' 
                : 'bg-white text-slate-600 border-slate-200 hover:border-primary-200 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {filteredFaqs.length > 0 ? (
            <>
              <div className="flex-1 space-y-6">
                {leftColumn.map((faq) => (
                  <FAQCard key={faq.id} faq={faq} />
                ))}
              </div>
              
              <div className="flex-1 space-y-6">
                {rightColumn.map((faq) => (
                  <FAQCard key={faq.id} faq={faq} />
                ))}
              </div>
            </>
          ) : (
            <div className="w-full py-20 text-center bg-white rounded-3xl border border-dashed border-slate-200">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                <span className="material-symbols-outlined text-3xl">search_off</span>
              </div>
              <p className="text-slate-500 font-bold mb-2">No matching questions found</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                className="text-primary text-sm font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Show More Pattern - Elegant and Functional */}
        {filteredFaqs.length > displayedFaqs.length && (
          <div className="flex justify-center mb-16">
            <button 
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="group flex flex-col items-center gap-4 transition-all"
            >
              <div className="px-8 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm group-hover:shadow-md group-hover:border-primary-200 group-hover:text-primary transition-all flex items-center gap-2">
                Show {Math.min(filteredFaqs.length - displayedFaqs.length, 4)} More Questions
                <span className="material-symbols-outlined text-lg animate-bounce mt-0.5">expand_more</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Viewing {displayedFaqs.length} of {filteredFaqs.length} results
              </span>
            </button>
          </div>
        )}

        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px] -mr-40 -mt-40 transition-all duration-700 group-hover:bg-primary-500/20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -ml-40 -mb-40 transition-all duration-700 group-hover:bg-blue-500/20"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i+5}`} 
                    className="w-12 h-12 rounded-full border-4 border-slate-900 shadow-xl"
                    alt="Team"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">Dedicated Team</div>
                <div className="text-slate-400 text-[11px] font-medium">Ready to assist 24/7</div>
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Can't find what you're looking for?</h3>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Our experts are online and ready to help you optimize your store's workflow or answer technical questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-600 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1">
                <span className="material-symbols-outlined">chat_bubble</span>
                Start Live Chat
              </button>
              <button className="px-10 py-5 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 backdrop-blur-md border border-white/5 hover:-translate-y-1">
                <span className="material-symbols-outlined">alternate_email</span>
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
