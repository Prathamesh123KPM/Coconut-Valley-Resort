
import React from 'react';
import { ATTRACTIONS } from '../constants';
import { MapPin } from 'lucide-react';

const Nearby: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold tracking-widest uppercase text-sm mb-4 block">Neighborhood</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Explore Palghar</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto italic font-medium">
            Discover the raw beauty of coastal Maharashtra just outside our gates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ATTRACTIONS.map((attr, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative mb-6 shadow-md group-hover:shadow-xl transition-all duration-500">
                <img src={attr.image} alt={`${attr.name} nearby tourist attraction in Palghar`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <MapPin size={12} className="text-emerald-700" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800">{attr.distance}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white text-sm leading-relaxed">{attr.description}</p>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{attr.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nearby;
