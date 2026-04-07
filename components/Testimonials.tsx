
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <span className="text-emerald-700 font-semibold tracking-widest uppercase text-sm mb-4 block">Guest Journals</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Visitors Say</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Don't just take our word for it. Hear from those who have already experienced the serenity of Coconut Valley.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                    <img src={`https://picsum.photos/id/${100 + i}/100/100`} alt={`Happy guest ${i + 1} testimonial photo`} />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-amber-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span className="text-xs font-bold text-slate-800">4.9/5 Average Rating</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(0, 2).map((testi, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative group hover:shadow-xl transition-all duration-500">
                <Quote size={40} className="text-emerald-200 absolute top-8 right-8" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={testi.image} alt={`Portrait of ${testi.name}`} className="w-14 h-14 rounded-full object-cover" />
                    <div>
                      <h5 className="font-bold text-slate-900">{testi.name}</h5>
                      <p className="text-xs text-slate-500">{testi.location}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg italic leading-relaxed mb-6">"{testi.text}"</p>
                  <div className="flex text-amber-400">
                    {Array.from({ length: testi.rating }).map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
