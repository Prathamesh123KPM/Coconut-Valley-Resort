
import React, { useState } from 'react';
import { ROOMS } from '../constants';
import { Users, Wifi, Wind } from 'lucide-react';

const Rooms: React.FC = () => {
  const [showAll, setShowAll] = useState(true);
  const displayedRooms = ROOMS;

  return (
    <section id="rooms" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold tracking-widest uppercase text-sm mb-4 block">Accommodations</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Rooms At Our Palghar Resort</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Choose from a variety of handcrafted living spaces at our Kelva beach resort, designed for your ultimate comfort and relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedRooms.map((room) => (
            <div key={room.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.name} luxury accommodation at Coconut Valley Resort`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-emerald-900 shadow-sm">
                  {room.price}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">{room.name}</h3>
                  <div className="flex items-center gap-1 text-slate-400 text-sm whitespace-nowrap ml-2">
                    <Users size={16} />
                    {room.capacity}
                  </div>
                </div>

                <p className="text-slate-500 mb-6 line-clamp-2">
                  {room.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {room.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                  {room.features.length > 3 && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md">
                      +{room.features.length - 3} More
                    </span>
                  )}
                </div>

                <button className="w-full py-4 border border-emerald-900 text-emerald-900 font-bold rounded-xl group-hover:bg-emerald-900 group-hover:text-white transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-emerald-900 text-white rounded-full font-bold hover:bg-emerald-800 transition-colors shadow-lg"
          >
            {showAll ? 'View Less' : 'View All Rooms'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
