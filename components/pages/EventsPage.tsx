import React from 'react';
import Events from '../Events';
import { Calendar, Music, Camera, MapPin, Sun, Wind, Waves } from 'lucide-react';
import cv5 from '../../cv (5).webp';
import cv6 from '../../cv (6).webp';

const EventsPage: React.FC = () => {
    const categories = [
        {
            title: 'Romance & Sunset',
            icon: <Sun className="text-orange-500" />,
            desc: 'Private beach dinners, sunset cruises, and couple spa sessions.'
        },
        {
            title: 'Family Adventure',
            icon: <Calendar className="text-emerald-500" />,
            desc: 'Treasure hunts, kite flying, and local village tours for all ages.'
        },
        {
            title: 'Wellness Retreat',
            icon: <Wind className="text-blue-500" />,
            desc: 'Morning beach yoga, organic farm visits, and meditation sessions.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="pt-24">
                {/* Immersive Header */}
                <div className="h-[60vh] relative flex items-center justify-center overflow-hidden">
                    <img src={cv5} alt="Corporate and family events setup at Coconut Valley Resort" className="absolute w-full h-full object-cover brightness-50" />
                    <div className="relative z-10 text-center text-white px-6">
                        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">Beyond Staying</h1>
                        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-emerald-50">
                            Curating moments that linger long after you leave.
                        </p>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce">
                        <span className="text-xs font-bold uppercase tracking-widest mb-2">Scroll to discover</span>
                        <div className="w-0.5 h-12 bg-white/20"></div>
                    </div>
                </div>

                <Events />

                {/* Detailed Experience Categories */}
                <div className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Crafted Just For You</h2>
                            <p className="text-slate-500 max-w-xl mx-auto text-lg">
                                Whether you seek adrenaline or absolute stillness, our curators design experiences that match your soul's rhythm.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {categories.map((cat, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:translate-y-[-8px] transition-all duration-500">
                                    <div className="mb-6">{cat.icon}</div>
                                    <h4 className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">{cat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Large Feature Section */}
                <div className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <div className="relative">
                                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full -z-10"></div>
                                    <img src={cv6} alt="Delicious local cuisine and dining experience at Coconut Valley Resort" className="rounded-[3rem] shadow-2xl relative z-10" />
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <span className="text-emerald-700 font-bold uppercase tracking-widest text-sm mb-4 block">Cultural Immersion</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Taste the Heart <br /> of Kelva</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    Our "Path of the Palate" experience takes you through local coconut groves to hidden artisanal kitchens. Learn the secret of traditional fish curries, extract fresh coconut water, and dine under the canopy of ancient trees.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full font-bold text-sm">
                                        <Music size={16} />
                                        <span>Live Folk Music</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full font-bold text-sm">
                                        <Camera size={16} />
                                        <span>Photo Tours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Hosting CTA */}
                <div className="bg-emerald-950 py-24 text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Planning a Private Event?</h2>
                        <p className="text-xl text-emerald-100/70 mb-12 max-w-2xl mx-auto">
                            From boutique beach weddings to intimate corporate retreats, we provide the perfect backdrop and impeccable coordination.
                        </p>
                        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl">
                            Inquire About Events
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
