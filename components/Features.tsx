
import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-primary-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Why Choose AIBillo</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading [1.9]">Designed for Modern Business</h3>
          <p className="text-slate-600 text-lg">Powerful features wrapped in a simple interface. Everything you need to run your business, without the complexity.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">bolt</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Lightning Fast Billing</h4>
            <p className="text-slate-600 leading-relaxed mb-8">Generate invoices in seconds. AI-powered autofill learns your products and customers.</p>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-3/4 rounded-full"></div>
            </div>
            <p className="text-[10px] font-bold text-slate-400 mt-2 text-right uppercase">3x faster than excel</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">cloud_sync</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Real-Time Sync</h4>
            <p className="text-slate-600 leading-relaxed mb-8">Changes made on desktop reflect instantly on mobile. Never sell out-of-stock items again.</p>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-lg uppercase">Desktop</span>
              <span className="material-symbols-outlined text-slate-300 text-sm">sync_alt</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-lg uppercase">Mobile</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">insights</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Smart Analytics</h4>
            <p className="text-slate-600 leading-relaxed mb-8">Visualize your cash flow, top-selling items, and customer trends with one click.</p>
            <div className="flex items-end gap-1.5 h-10">
              {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                <div key={i} className="flex-1 bg-green-100 rounded-t-sm" style={{ height: `${h}%`, opacity: (i+3)/10 }}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-primary-600/20 transition-all duration-700"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-bold text-primary-400 mb-8 uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">rocket_launch</span>
                Enterprise Grade
              </div>
              <h4 className="text-3xl md:text-5xl font-bold text-white mb-6">Multi-Store Management</h4>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">Manage multiple locations from a single dashboard. Transfer stock, compare performance, and unify your customer base seamlessly.</p>
              <a href="#" className="inline-flex items-center text-white font-bold group/link">
                <span className="border-b-2 border-primary group-hover/link:border-white transition-all pb-1">Explore Enterprise Features</span>
                <span className="material-symbols-outlined ml-3 transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-inner-light">
              <div className="space-y-6">
                {[
                  { name: 'New York Branch', id: 'NY-01', rev: '$124,500', color: 'purple' },
                  { name: 'London Branch', id: 'LDN-02', rev: '$98,200', color: 'blue' },
                  { name: 'Tokyo Branch', id: 'TKO-03', rev: '$112,400', color: 'emerald' },
                ].map((store) => (
                  <div key={store.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/50 border border-white/5 hover:bg-slate-800 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-${store.color}-500/10 flex items-center justify-center text-${store.color}-400`}>
                        <span className="material-symbols-outlined">store</span>
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">{store.name}</div>
                        <div className="text-slate-500 text-[11px] uppercase tracking-wider font-bold">{store.id}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-extrabold">{store.rev}</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Monthly Rev</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
