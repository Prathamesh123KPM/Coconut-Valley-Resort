
import React from 'react';
import { Link } from 'react-router-dom';
import { ROOMS } from '../constants';
import {
  Users,
  Calendar,
  ArrowRight,
  Maximize2
} from 'lucide-react';

interface TariffProps {
  featuredOnly?: boolean;
}

const Tariff: React.FC<TariffProps> = ({ featuredOnly = false }) => {
  const featuredIds = ['tropical-bliss', 'jacuzzi-bliss', 'star-paradise'];
  const displayRooms = featuredOnly
    ? ROOMS.filter(room => featuredIds.includes(room.id))
    : ROOMS;

  return (
    <section id="tariff" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-emerald-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Exquisite Accommodations</span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">Tariff & Suites</h2>
            <p className="text-slate-500 mt-6 text-lg">
              Explore our collection of handcrafted living spaces. Every room is a unique sanctuary designed to connect you with the natural beauty of Kelva Beach.
            </p>
          </div>
          <div className="hidden md:block">
            <a
              href="https://wa.me/917219084299?text=I'm looking for the best rates for a stay at Coconut Valley Resort"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-100/50 text-emerald-800 px-6 py-3 rounded-full text-sm font-bold border border-emerald-200 flex items-center gap-2 hover:bg-emerald-200 transition-all cursor-pointer"
            >
              <Calendar size={16} />
              Book early for best rates
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayRooms.map((room) => (
            <Link
              key={room.id}
              to={`/room/${room.id}`}
              className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 aspect-square"
            >
              {/* Inventory Badge */}
              {(() => {
                const counts: Record<string, string> = {
                  'Jacuzzi Bliss': '1 Unit',
                  'Tropical Bliss': '4 Units',
                  'Night Elegance Suite': '2 Suites',
                  'Star Paradise': '1 Unit',
                  'Triangle Room': '2 Units',
                  'Wooden Room': '2 Units',
                  'Deluxe Room': '6 Units',
                  'Wooden Dormitory': '2 Units',
                  'Family Dormitory': '1 Unit'
                };
                const count = counts[room.name];
                if (count) {
                  return (
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bg-emerald-700/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-1.5 border border-white/10">
                        <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                        {count}
                      </span>
                    </div>
                  );
                }
                return null;
              })()}
              <img
                src={room.image}
                alt={`${room.name} suite interior at Coconut Valley Resort`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-1 text-white/70 text-xs font-bold uppercase tracking-widest">
                    <Users size={14} />
                    {room.capacity}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4 leading-tight">{room.name}</h3>
                  <p className="hidden md:block text-white/70 text-sm max-w-md line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {room.description}
                  </p>
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <span className="border-b border-white/30 group-hover:border-white transition-all pb-1">Discover Room</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                <Maximize2 size={18} />
              </div>
            </Link>
          ))}
        </div>

        {featuredOnly && (
          <div className="mt-16 flex justify-center">
            <Link
              to="/rooms"
              className="group bg-emerald-900 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              View All Rooms
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tariff;
