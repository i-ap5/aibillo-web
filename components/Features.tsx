
import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, YAxis } from 'recharts';
import { Activity, Package, TrendingUp, Rocket, Zap, IdCard, FilePlus2, ArrowRight, ShieldCheck, MapPin, IdCardIcon } from 'lucide-react';
import { IdentificationIcon, BoltIcon, DocumentArrowUpIcon } from "@heroicons/react/24/solid";
import { delay, motion } from 'framer-motion';

// --- Local Component: FeatureCard ---
interface FeatureCardProps {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  badgeText: string;
  badgeLabel: string;
  customContent?: React.ReactNode;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  iconBg,
  iconColor,
  title, 
  description, 
  badgeText, 
  badgeLabel, 
  customContent,
  delay = 0
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.1 }
  );
  if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  // ... observer setup
}, []);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative flex flex-col h-full overflow-hidden border rounded-[2.5rem] border-slate-200/60 bg-white p-8 transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] group cursor-default opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >

      {/* Interactive Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(225, 29, 71, 0.1), transparent 50%)`,
        }}
      />
      
      {/* Icon Section - "Weighted" Feel */}
      <div className={`w-14 h-14 rounded-2xl ${iconBg} ${iconColor} flex items-center justify-center mb-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[5deg] relative shadow-sm border border-white/50`}>
         <div className="relative z-10 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
          {icon}
         </div>
         <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="relative z-10">
        <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors duration-500">{title}</h4>
        <p className="text-slate-500 text-[15px] leading-relaxed mb-8 opacity-90 font-medium">{description}</p>
        
        {customContent && (
          <div className="mb-8 transform transition-all duration-700 ease-out group-hover:translate-y-[-6px]">
            {customContent}
          </div>
        )}
      </div>

      {/* Footer Badge Section */}
      <div className="mt-auto pt-7 flex items-center justify-between border-t border-slate-100 relative z-10">
        <div>
          <div className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mb-1.5">{badgeLabel}</div>
          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse"></span>
            <div className="text-[13px] font-extrabold text-slate-900">{badgeText}</div>
          </div>
        </div>
        <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:translate-x-1 shadow-lg shadow-transparent group-hover:shadow-primary/20">
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

// --- Main Section Component ---
const FORECAST_DATA = [
  { time: '9 AM', demand: 30 },
  { time: '11 AM', demand: 45 },
  { time: '1 PM', demand: 40 },
  { time: '3 PM', demand: 95 }, 
  { time: '5 PM', demand: 120 },
  { time: '7 PM', demand: 80 },
  { time: '9 PM', demand: 50 },
];

const FeaturesSection: React.FC = () => {
  const [chartData, setChartData] = useState(FORECAST_DATA);
  const [isSyncing, setIsSyncing] = useState(false);
  const [currentTip, setCurrentTip] = useState("Analyzing afternoon trends...");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSyncing(true);
      const tips = [
        "Friday evening rush predicted soon.",
        "Saree stock trending low for tomorrow.",
        "Shirt Black demand up by 12% today.",
        "Suggesting +20 units for SKU-402.",
        "Optimizing your weekend inventory..."
      ];
      setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
      
      setChartData(prev => prev.map(item => ({
        ...item,
        demand: Math.max(20, Math.min(150, item.demand + (Math.random() * 20 - 10)))
      })));

      setTimeout(() => setIsSyncing(false), 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-32 bg-slate-50/50 relative overflow-hidden">
      {/* Soft Background Ambiance */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary-100/10 blur-[160px] rounded-full pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/10 blur-[140px] rounded-full pointer-events-none translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          {/* <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-primary-100 shadow-sm">
            Core Features
          </div> */}
           <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Core Features</span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tighter"
          >
            Designed for <span className="text-primary">Business Owners</span> Who Want Clarity
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-xl leading-relaxed font-medium"
            >
              AiBillo gives business owners real-time clarity and smart insights to run their business with confidence, without complexity.
            </motion.p>
        </div>

        {/* Top Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          
          {/* Card 1: Smart Billing */}
          <FeatureCard 
            icon={
              <BoltIcon className="w-7 h-7 opacity-90" />
            }
            iconBg="bg-rose-50"
            iconColor="text-rose-500"
            title="Smart Billing"
            description="Generate GST-compliant invoices 3x faster with smart shortcuts. Auto-calculates taxes instantly."
            badgeLabel="Performance"
            badgeText="Hyper-Speed"
            delay={0.1}
            customContent={
              <div className="p-5 bg-slate-50 rounded-3xl border border-white shadow-inner">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse"></div>
                    <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">Core Speed</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
                    <Zap size={10} className="text-rose-500 fill-rose-500" />
                    <span className="text-[11px] font-black text-rose-600">Ultra-Low</span>
                  </div>
                </div>
                <div className="relative h-2.5 w-full bg-slate-200/50 rounded-full overflow-hidden shadow-inner border border-slate-100">
                   <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-600 w-[95%] rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(225,29,72,0.3)]"></div>
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase">Buffer: 0.0s</span>
                  <span className="text-[10px] font-extrabold text-slate-900 uppercase tracking-tighter">0.4s Process</span>
                </div>
              </div>
            }
          />

          {/* Card 2: Employee Attendance */}
          <FeatureCard 
           icon={
              <IdentificationIcon className="w-7 h-7 opacity-90" />
            }
            iconBg="bg-blue-50"
            iconColor="text-blue-500"
            title="Employee Attendance"
            description="Real-time staff tracking with geo-fencing. Manage shifts and payroll performance automatically."
            badgeLabel="Tracking"
            badgeText="Live Monitoring"
                        delay={0.2}

            customContent={
              <div className="space-y-3">
                {[
                  { name: "Asal", time: "09:00 AM", status: "Check-IN", active: true, tag: "Geo-fenced" },
                  { name: "Shivan", time: "06:00 PM", status: "Check-OUT", active: false, tag: "Geo-fenced" }
                ].map((staff, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all group-hover:border-blue-100 hover:bg-blue-50/30">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[11px] font-black text-slate-500 border border-slate-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?u=${staff.name}`} alt="" />
                        </div>
                        <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${staff.active ? 'bg-green-500' : 'bg-orange-400'}`}></div>
                      </div>
                      <div>
                        <div className="text-[12px] font-black text-slate-900">{staff.name}</div>
                        <div className="flex items-center gap-1.5">
                           <MapPin size={8} className="text-slate-400" />
                           <span className="text-[9px] text-slate-500 font-bold uppercase tracking-tight">{staff.tag}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                       <div className="text-[10px] font-black text-slate-900">{staff.time}</div>
                       <div className="text-[8px] text-slate-400 font-bold uppercase">{staff.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            }
          />

          {/* Card 3: Bulk Purchase Upload */}
          <FeatureCard 
 icon={
              <DocumentArrowUpIcon className="w-7 h-7 opacity-90" />
            }            iconBg="bg-emerald-50"
            iconColor="text-emerald-500"
            title="Bulk Purchase Upload"
            description="Import 1000+ items instantly via Excel/CSV. Smart mapping auto-detects fields."
            badgeLabel="Automation"
            badgeText="One-Click Import"
            delay={0.3}
            customContent={
              <div className="p-6 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center group-hover:border-emerald-200 group-hover:bg-emerald-50/20 transition-all relative overflow-hidden">
                 <div className="relative z-10 w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 shadow-lg shadow-emerald-200/20">
                    <FilePlus2 size={24} strokeWidth={2} />
                 </div>
                 <div className="relative z-10 text-[12px] font-black text-slate-900 mb-1">products_v2.csv</div>
                 <div className="relative z-10 flex items-center gap-1.5 px-3 py-1 bg-emerald-500 rounded-full mb-4 shadow-sm">
                    <ShieldCheck size={10} strokeWidth={3} className="text-white" />
                    <span className="text-[9px] font-black text-white uppercase tracking-wider">Validating</span>
                 </div>
                 <div className="relative z-10 w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[80%] transition-all duration-1000"></div>
                 </div>
                 <div className="absolute top-0 left-0 w-full h-px bg-emerald-400/30 animate-[scan_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
              </div>
            }
          />
        </div>

        {/* AI Purchase Prediction Section */}
        <div className="bg-slate-950 rounded-[3rem] p-6 md:p-10 lg:p-14 shadow-[0_60px_100px_-25px_rgba(0,0,0,0.5)] relative overflow-hidden border border-slate-800/80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(225,29,72,0.18),transparent_50%)]"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-stretch">
            
            {/* Left Column */}
            <div className="lg:w-[35%] flex flex-col">
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] font-black text-primary-400 mb-6 tracking-[0.2em] uppercase">
                    <Activity size={12} className={isSyncing ? "animate-pulse" : ""} />
                    Neural Engine
                </div>
                <h4 className="text-3xl md:text-5xl font-black font-heading text-white tracking-tighter leading-[1] mb-6">Predictive<br/>Intelligence.</h4>
                <p className="text-slate-400 text-base leading-relaxed opacity-80 font-medium">
                  Harnessing neural data patterns to optimize your shelf availability and reduce wastage.
                </p>
              </div>

              <div className="space-y-3 flex-grow">
                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4 px-1">Inventory Forecast</h5>
                {[
                  { name: "Silk Saree", status: "Critical", qty: "+40 Pcs", color: "text-primary-500" },
                  { name: "Shirt Polo", status: "Low Stock", qty: "+12 units", color: "text-orange-400" },
                  { name: "Kurta", status: "Optimal", qty: "+5 units", color: "text-slate-500" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/[0.03] rounded-3xl border border-white/5 hover:bg-white/[0.07] transition-all cursor-pointer group/item">
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-2xl bg-slate-900 border border-slate-800 ${item.color.replace('text', 'text')}`}>
                        <Package size={16} strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-sm font-black text-white mb-0.5 group-hover/item:text-primary transition-colors">{item.name}</div>
                        <div className={`text-[10px] font-extrabold uppercase tracking-widest ${item.color}`}>{item.status}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-white">{item.qty}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-5 bg-primary/10 rounded-3xl border border-primary-900/30 backdrop-blur-sm">
                <div className="text-[10px] text-primary-400 font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <TrendingUp size={12} />
                  Live Insight
                </div>
                <p className="text-[13px] text-slate-300 leading-relaxed font-semibold italic opacity-90">"{currentTip}"</p>
              </div>
            </div>

            {/* Right Column: Chart */}
            <div className="lg:w-[65%] bg-slate-900/40 rounded-[2rem] border border-white/[0.04] p-6 md:p-10 relative overflow-hidden flex flex-col h-[400px] sm:h-[450px] lg:h-auto min-h-[400px]">
              <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
                <div className="w-full h-[2px] bg-primary-500 absolute top-0 animate-[scan_6s_linear_infinite]"></div>
              </div>

              <div className="flex justify-between items-start mb-10 relative z-10">
                <div>
                  <div className="text-white font-black text-xl tracking-tight mb-1">Traffic Velocity</div>
                  <div className="text-[11px] text-slate-500 uppercase font-black tracking-[0.2em]">Predicted Demand Curve</div>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-white/[0.03] rounded-2xl border border-white/[0.05] backdrop-blur-md">
                   <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                   </div>
                   <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest">Live Sync</span>
                </div>
              </div>

              <div className="relative z-10 w-full flex-grow min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                    <defs>
                      <linearGradient id="glowArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E11D48" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#E11D48" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff03" />
                    <XAxis 
                      dataKey="time" 
                      stroke="#475569" 
                      fontSize={11} 
                      fontWeight={700}
                      axisLine={false} 
                      tickLine={false} 
                      dy={15}
                    />
                    <YAxis hide />
                    <Tooltip 
                      formatter={(value: number) => Math.round(value)}
                      cursor={{ stroke: '#E11D48', strokeWidth: 1.5 }}
                      contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold', color: '#fff' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="demand" 
                      stroke="#E11D48" 
                      strokeWidth={4} 
                      fill="url(#glowArea)" 
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10 border-t border-white/[0.04] pt-8">
                 <div className="flex flex-col">
                  <span className="text-[11px] text-slate-500 font-black uppercase tracking-[0.25em] mb-1">Processing Node</span>
                  <span className="text-white text-sm font-black flex items-center gap-2.5">
                    <Rocket size={16} className="text-primary-500" strokeWidth={3} />
                    Auto-Restock Protocols Active
                  </span>
                 </div>
                 <button className="w-full sm:w-auto px-8 py-4 bg-white text-black text-xs font-black rounded-2xl uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-2xl">
                  Deploy Automation
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-50px); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(450px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
