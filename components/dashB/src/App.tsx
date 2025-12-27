import Dashboard from './imports/Dashboard2';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#fefafb]">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-md"
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Responsive Container */}
      <div className="relative w-full h-screen overflow-auto">
        {/* Desktop: Full Dashboard (1440px+ viewport) */}
        <div className="hidden xl:block min-w-[1440px]">
          <Dashboard />
        </div>

        {/* Tablet/Laptop: Scaled Dashboard (768px - 1439px) */}
        <div className="hidden md:block xl:hidden w-full h-full overflow-auto">
          <div className="origin-top-left" style={{ 
            transform: 'scale(0.7)', 
            width: '142.86%', 
            height: '142.86%',
            minWidth: '1440px'
          }}>
            <Dashboard />
          </div>
        </div>

        {/* Mobile: Stacked Layout (< 768px) */}
        <div className="block md:hidden w-full min-h-screen pb-8">
          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-xl z-40 transition-transform duration-300 ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-6">
              {/* Logo */}
              <div className="mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#e11d48] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">V</span>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-[#404040]">AI Billing</h1>
                    <p className="text-xs text-[#e11d48]">Billingverse</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-4">
                <a href="#" className="flex items-center gap-3 p-3 bg-[#fdedf1] text-[#e11d48] rounded-lg font-semibold">
                  <div className="w-4 h-4 bg-[#e11d48] rounded"></div>
                  <span>Dashboard</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 text-[#626262] hover:bg-gray-50 rounded-lg">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <span>Sale</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 text-[#626262] hover:bg-gray-50 rounded-lg">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <span>Purchase</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 text-[#626262] hover:bg-gray-50 rounded-lg">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <span>Report</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 text-[#626262] hover:bg-gray-50 rounded-lg">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <span>Credit</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 text-[#626262] hover:bg-gray-50 rounded-lg">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <span>Stock Review</span>
                </a>
              </nav>

              {/* Bottom Section */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 p-3 text-[#404040] hover:bg-gray-50 rounded-lg font-semibold">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    <span>Settings</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 text-[#404040] hover:bg-gray-50 rounded-lg font-semibold">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    <span>Getting Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="sticky top-0 z-30 bg-white border-b border-gray-200 p-4 pl-16">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#626262]">Good Morning,</p>
                <h2 className="text-lg font-bold text-[#404040]">Team Heritage!</h2>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <div className="w-6 h-6 bg-[#e11d48] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    A
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Filter Pills */}
          <div className="sticky top-[73px] z-20 bg-white border-b border-gray-200 p-4 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              <button className="px-4 py-2 bg-[rgba(225,29,72,0.25)] text-[#fefafb] rounded-full text-xs whitespace-nowrap">
                Today
              </button>
              <button className="px-4 py-2 bg-[#fdedf1] text-[#626262] rounded-full text-xs whitespace-nowrap">
                Yesterday
              </button>
              <button className="px-4 py-2 bg-[#fdedf1] text-[#626262] rounded-full text-xs whitespace-nowrap">
                This week
              </button>
              <button className="px-4 py-2 bg-[#fdedf1] text-[#626262] rounded-full text-xs whitespace-nowrap">
                This month
              </button>
              <button className="px-4 py-2 bg-[#fdedf1] text-[#626262] rounded-full text-xs whitespace-nowrap">
                This year
              </button>
              <button className="px-4 py-2 bg-[#fdedf1] text-[#626262] rounded-full text-xs whitespace-nowrap">
                Custom
              </button>
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="sticky top-[145px] z-20 bg-white border-b border-gray-200 p-4">
            <div className="flex gap-2">
              <button className="flex-1 bg-[#e11d48] text-white px-4 py-3 rounded-full font-semibold text-sm">
                Add Sale
              </button>
              <button className="flex-1 bg-[#264653] text-white px-4 py-3 rounded-full font-semibold text-sm">
                Add Purchase
              </button>
              <button className="bg-[rgba(42,157,143,0.15)] px-4 py-3 rounded-full">
                <span className="text-xl">+</span>
              </button>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="p-4 space-y-4 mt-4">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#fdedf1] rounded-full flex items-center justify-center">
                    <span className="text-[#e11d48]">₹</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#626262]">Total Revenue</p>
                    <p className="text-lg font-bold text-[#404040]">₹21,123,231.17</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#fdedf1] rounded-full flex items-center justify-center">
                    <span className="text-[#e11d48]">₹</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#626262]">Sales Cost</p>
                    <p className="text-lg font-bold text-[#404040]">₹61,123,231.17</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#fdedf1] rounded-full flex items-center justify-center">
                    <span className="text-[#e11d48]">₹</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#626262]">Purchase Cost</p>
                    <p className="text-lg font-bold text-[#404040]">₹40,001,211.00</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#fdedf1] rounded-full flex items-center justify-center">
                    <span className="text-[#e11d48]">🛍️</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#626262]">No of Sales</p>
                    <p className="text-lg font-bold text-[#404040]">154</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Status */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-[#404040] mb-4">Payment Status</h3>
              <div className="mb-4">
                <p className="text-2xl font-bold text-[#404040]">₹34,53,222.54</p>
                <p className="text-sm text-[#626262]">Received Amount</p>
              </div>
              <div className="w-full h-6 bg-[#fdedf1] rounded-full overflow-hidden flex mb-4">
                <div className="bg-[#e11d48] h-full" style={{ width: '42%' }}></div>
                <div className="bg-[#264653] h-full" style={{ width: '28%' }}></div>
                <div className="bg-[#2a9d8f] h-full" style={{ width: '30%' }}></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#e11d48] rounded"></div>
                    <span className="text-sm text-[#626262]">Cash</span>
                  </div>
                  <span className="text-sm text-[#626262] font-semibold">₹23,06,356</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#264653] rounded"></div>
                    <span className="text-sm text-[#626262]">Online</span>
                  </div>
                  <span className="text-sm text-[#626262] font-semibold">₹6,23,433</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#2a9d8f] rounded"></div>
                    <span className="text-sm text-[#626262]">Cheque</span>
                  </div>
                  <span className="text-sm text-[#626262] font-semibold">₹5,23,433</span>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-[#404040] mb-4">Stock Status</h3>
              <div className="flex flex-col items-center py-6">
                <div className="relative w-40 h-40">
                  <svg className="transform -rotate-90 w-40 h-40">
                    <circle cx="80" cy="80" r="70" stroke="#fdedf1" strokeWidth="20" fill="none" />
                    <circle 
                      cx="80" 
                      cy="80" 
                      r="70" 
                      stroke="#264653" 
                      strokeWidth="20" 
                      fill="none"
                      strokeDasharray="439.6"
                      strokeDashoffset="87.92"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-4xl font-bold text-[#264653]">72%</p>
                    <p className="text-sm text-[#626262]">In Stock</p>
                  </div>
                </div>
                <div className="mt-4 bg-[#fdedf1] px-4 py-2 rounded-lg">
                  <p className="text-sm text-[#e11d48]">
                    <span className="font-bold">16897</span> items with &lt; 5 stock
                  </p>
                </div>
              </div>
            </div>

            {/* Top Selling Items */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-[#404040] mb-4">Top Selling Items</h3>
              <div className="space-y-3">
                {[
                  { name: 'Shirt AE2', sku: 'PRD-06542', price: '7,180', units: 5 },
                  { name: 'Saree PW', sku: 'PRD-06555', price: '5,971', units: 4 },
                  { name: 'Dhothi', sku: 'PRD-062', price: '3,180', units: 3 },
                  { name: 'Jogger', sku: 'PRD-06242', price: '2,856', units: 2 }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-dashed border-gray-200 last:border-0">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-[#404040]">{idx + 1}.</span>
                      <div>
                        <p className="font-bold text-[#404040] text-sm">{item.name}</p>
                        <p className="text-xs text-[#626262]">SKU: {item.sku}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#404040] text-sm">₹{item.price}</p>
                      <p className="text-xs text-[#626262]">{item.units} Units</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inventory Summary */}
            <div className="bg-white p-5 rounded-xl shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#404040] mb-4">Inventory Summary</h3>
              <div className="bg-white border border-gray-100 shadow-sm p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#fdedf1] rounded-full flex items-center justify-center">
                    <span className="text-[#e11d48]">🏪</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#626262]">Stock Amount</p>
                    <p className="text-base font-bold text-[#404040]">₹232,149,738.50</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-100 shadow-sm p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#fdedf1] rounded-full flex items-center justify-center">
                    <span className="text-[#e11d48]">📈</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#626262]">Stock Sale Amount</p>
                    <p className="text-base font-bold text-[#404040]">₹382,615,145.05</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Graph Placeholders */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-[#626262]">Sales Cost Graph</p>
                  <p className="text-xl font-bold text-[#404040]">₹61,123,231.17</p>
                </div>
                <div className="bg-[rgba(253,237,241,0.4)] px-3 py-1 rounded-md">
                  <p className="text-xs text-[rgba(225,29,72,0.4)]">This week</p>
                </div>
              </div>
              <div className="h-32 bg-gradient-to-r from-[#fdedf1] to-[#fdedf1]/50 rounded-lg flex items-end justify-around p-4 gap-2">
                {[50, 35, 70, 45, 60, 95, 20].map((height, i) => (
                  <div key={i} className="bg-[#e11d48] rounded-t-full flex-1" style={{ height: `${height}%` }}></div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-[#626262] font-bold">
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-[#626262]">Purchase Cost Graph</p>
                  <p className="text-xl font-bold text-[#404040]">₹38,117,938.00</p>
                </div>
                <div className="bg-[rgba(253,237,241,0.4)] px-3 py-1 rounded-md">
                  <p className="text-xs text-[rgba(225,29,72,0.4)]">This week</p>
                </div>
              </div>
              <div className="h-32 bg-gradient-to-r from-[#fdedf1] to-[#fdedf1]/50 rounded-lg flex items-end justify-around p-4 gap-2">
                {[70, 25, 95, 40, 55, 35, 75].map((height, i) => (
                  <div key={i} className="bg-[#264653] rounded-t-full flex-1" style={{ height: `${height}%` }}></div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-[#626262] font-bold">
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
