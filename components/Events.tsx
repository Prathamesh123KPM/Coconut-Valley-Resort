
import React from 'react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-emerald-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-semibold tracking-widest uppercase text-sm mb-4 block">Curated Moments</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Events & Celebrations</h2>
          <p className="text-emerald-200/70 max-w-2xl mx-auto">
            From intimate weddings to high-energy corporate retreats, we provide the perfect backdrop for your life's big moments.
          </p>
        </div>

        <div className="space-y-12">
          {EVENTS.map((exp, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={exp.image}
                  alt={`${exp.title} setup and venue at our resort`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-4">{exp.title}</h3>
                <p className="text-emerald-100/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                  {exp.description}
                </p>
                <button className="bg-white text-emerald-950 px-8 py-3 rounded-full font-bold hover:bg-emerald-100 transition-colors">
                  Plan Your Event
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-emerald-900/50 pt-16">
          {['Weddings', 'Corporate', 'School Picnics', 'Private Parties'].map((tag) => (
            <div key={tag} className="text-center">
              <span className="text-2xl font-bold block mb-1">500+</span>
              <p className="text-emerald-400 uppercase text-[10px] tracking-widest font-bold">{tag} Hosted</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
