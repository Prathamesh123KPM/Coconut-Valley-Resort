import React from 'react';
import { CheckCircle, Star, Calendar } from 'lucide-react';
const heroImg = '/coconuthome.webp';
import ecoImg from '../../sustainable_eco_stay_1776750209142.png';

const NatureResortsPalgharKelva: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 bg-emerald-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img loading="lazy" src={heroImg} alt="Nature Resorts Near Palghar" className="w-full h-full object-cover" />
                </div>
                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-100 text-sm font-medium mb-6">
                        <Calendar size={14} />
                        <span>Published on May 5, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Nature Resorts Near Palghar: Escape to the Greenery at Kelva Beach
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
                        Reconnect with nature at the most serene nature resorts near Palghar. Experience lush green surroundings and premium hospitality.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="prose prose-lg prose-emerald max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            In today's fast-paced world, the ultimate luxury is a moment of peace surrounded by the natural world. For those seeking to unplug and recharge, exploring <strong>nature resorts near Palghar</strong> is a revelation. Among these green havens, Coconut Valley Resort offers an unparalleled eco-friendly retreat right by Kelva Beach.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Healing Power of Nature</h2>
                        <p className="text-slate-600 mb-6">
                            Studies have shown that spending time in nature reduces stress, improves mood, and boosts overall well-being. A true nature resort is designed to maximize this connection. It is not just about having trees on the property; it is about integrating the natural environment into every aspect of the guest experience.
                        </p>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img loading="lazy" src={ecoImg} alt="Eco-Friendly Nature Resort" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Embracing the Green at Coconut Valley</h2>
                        <p className="text-slate-600 mb-6">
                            We pride ourselves on being one of the premier nature resorts near Palghar. Our commitment to the environment and to our guests' well-being is evident throughout our property:
                        </p>

                        <ul className="space-y-6 my-8">
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">1. Lush Coconut Groves</h3>
                                    <p className="text-slate-600">As our name suggests, we are nestled within expansive coconut groves. The dense canopy provides natural shade, cooler temperatures, and the soothing sound of rustling leaves.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">2. Rustic Wooden Architecture</h3>
                                    <p className="text-slate-600">Many of our accommodations feature wooden designs that blend seamlessly with the natural landscape, offering a rustic yet luxurious feel.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">3. Serene Environment</h3>
                                    <p className="text-slate-600">Far from the noise and pollution of the city, our resort offers a truly tranquil environment where you can listen to birdsong and the distant ocean waves.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="bg-emerald-50 rounded-2xl p-8 my-10 border border-emerald-100 text-center flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center justify-center gap-2">
                                <Star className="text-amber-500 fill-amber-500" />
                                Reconnect with Nature
                            </h3>
                            <p className="text-emerald-800 mb-6 max-w-2xl">
                                Step into a world of green and experience the best nature resort near Palghar. Book your eco-friendly stay at Coconut Valley Resort.
                            </p>
                            <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
                                Plan Your Green Escape
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NatureResortsPalgharKelva;
