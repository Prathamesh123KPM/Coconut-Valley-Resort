
import React from 'react';
import { AMENITIES } from '../constants';

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <span className="text-emerald-700 font-semibold tracking-widest uppercase text-sm mb-4 block">Hospitality</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Designed for Your Comfort</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Every detail at Coconut Valley Resort is curated to ensure your stay is as seamless as it is spectacular. From 24x7 support to fine local cuisine.
            </p>
            <div className="bg-emerald-900 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">Need a special setup?</h4>
                <p className="text-emerald-100 mb-6">We arrange customized decorations for anniversaries and birthdays upon request.</p>
                <button className="text-sm font-bold underline underline-offset-4 decoration-emerald-400">Inquire Now</button>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7h-9m3.3-3L11 7l3.3 3M4 17h9m-3.3-3L13 17l-3.3 3" />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {AMENITIES.map((amenity, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all duration-300 group text-center">
                <div className="inline-flex p-4 rounded-2xl bg-white text-emerald-800 shadow-sm mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-300">
                  {amenity.icon}
                </div>
                <h5 className="font-bold text-slate-900 text-sm md:text-base">{amenity.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
