
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "AIBillo completely changed how I manage my boutique. I used to spend hours on Excel, now it takes minutes.",
      name: "Sarah Jenkins",
      role: "Fashion Retailer",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApqT_TYs6xf-1ies_h-GYcGAqZS15YXZ5-EHiCeKkiSYIuuk_8P6fXozCZ7m5RW7a8nKGP7zSzhprlmWC7CYDSgUQVYlhphqzZA0d1LaS9Rx8SOQV0yIH9wy5n45sPWD2hHi4wU6Z-OiQo-WiHxcZ-657F_Q3_3LrPiSUcGS3Hgx1CB2D8lFLIIBz7jHvk10qvZbDoe57m6DXbSwOirkIcLFD11eCH7-cGtr8ZsICq_i5yVMCT88FSKNOqAOqS0PoXwOT2E4isrDhL"
    },
    {
      text: "The mobile app is a lifesaver. I can check sales from home and make sure my staff is on track.",
      name: "Mike Ross",
      role: "Electronics Store",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5WEurWc3Gutug6nF2PGbLrptxY1hNgBC9o1UqHim5m3C5kZlCzASOkKhJw9HIAV1FavwVCi4w2LV0GafOLa5ftgb5SWGEAkFKt3o0SI9fgYUH3nUcK0e8rG3t5NKXIfP2t_KRoM9Kww_uzrfLi6XUM18d10BKLzgRRgQlurQwYDon7DeHbuHfggoBoxe7RBNwbZHSZ_itmP35dEEAyLUfSgzatgXOGKI1rz9h05bEBtGCuirbf9cMmD9gCYTJIYbrQ8NwS8KNR3dT"
    },
    {
      text: "Best investment for my small business. The inventory tracking alone is worth the price.",
      name: "David Tan",
      role: "Hardware Supply",
      initials: "DT"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-20 tracking-tight">Trusted by Shop Owners</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="material-symbols-outlined text-sm fill-1">star</span>
                ))}
              </div>
              <p className="text-slate-700 mb-10 text-lg leading-relaxed italic">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                {rev.image ? (
                  <img src={rev.image} alt={rev.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary flex items-center justify-center font-black text-xs border-2 border-white shadow-sm">
                    {rev.initials}
                  </div>
                )}
                <div>
                  <div className="font-bold text-slate-900 text-sm tracking-tight">{rev.name}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
