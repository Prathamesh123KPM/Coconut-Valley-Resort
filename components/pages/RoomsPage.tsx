import React from 'react';
import Tariff from '../Tariff';
import tropicalImg from '../../tropical (3).webp';

const RoomsPage: React.FC = () => {
    return (
        <main className="min-h-screen">
            {/* Page Header */}
            <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={tropicalImg}
                        alt="Our Rooms"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
                </div>

                <div className="relative container mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">Handcrafted Spaces</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Accommodations</h1>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        Discover your perfect sanctuary where modern luxury meets the raw beauty of Kelva Beach.
                    </p>
                </div>
            </div>

            {/* Tariff Section includes all rooms */}
            <div className="bg-white">
                <Tariff />
            </div>
        </main>
    );
};

export default RoomsPage;
