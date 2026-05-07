import React from 'react';
import { CheckCircle, Star, Calendar } from 'lucide-react';
import heroImg from '../../traiangleroom (1).webp';
import poolImg from '../../coconutpool.webp';

const BestResortKelvaBeachGetaway: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 bg-emerald-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img loading="lazy" src={heroImg} alt="Best Resort Near Kelva Beach" className="w-full h-full object-cover" />
                </div>
                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-100 text-sm font-medium mb-6">
                        <Calendar size={14} />
                        <span>Published on May 5, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        The Best Resort Near Kelva Beach for Your Next Weekend Getaway
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
                        Find out what makes Coconut Valley Resort the absolute best resort near Kelva Beach for couples, families, and corporate outings.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="prose prose-lg prose-emerald max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            A weekend getaway is all about escaping the routine, finding peace, and creating joyful memories. If you are setting your sights on the Maharashtrian coast, identifying the <strong>best resort near Kelva Beach</strong> is your first step to a perfect holiday. Coconut Valley Resort proudly stands as the pinnacle of hospitality in the region.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Ultimate Getaway Experience</h2>
                        <p className="text-slate-600 mb-6">
                            What defines a truly great resort? It is the seamless blend of luxury, nature, and impeccable service. Whether you are seeking a romantic escape, a fun-filled family vacation, or a productive corporate retreat, the ideal resort caters to your specific desires.
                        </p>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img loading="lazy" src={poolImg} alt="Stunning Resort Swimming Pool" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why We Are the Best Choice</h2>
                        <p className="text-slate-600 mb-6">
                            Coconut Valley Resort consistently receives praise from our guests, cementing our reputation as the best resort near Kelva Beach. Here is what sets us apart:
                        </p>

                        <ul className="space-y-6 my-8">
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">1. Impeccable Ambiance</h3>
                                    <p className="text-slate-600">Our resort is thoughtfully designed to harmonize with the tropical surroundings, creating an atmosphere of sheer tranquility and elegance.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">2. Unmatched Hospitality</h3>
                                    <p className="text-slate-600">Our dedicated staff goes above and beyond to ensure every aspect of your stay is flawless, from personalized service to anticipating your needs.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">3. Engaging Activities</h3>
                                    <p className="text-slate-600">Beyond relaxation, we offer a variety of activities, from poolside lounging to exploring the nearby Kelva Beach, ensuring there is never a dull moment.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="bg-emerald-50 rounded-2xl p-8 my-10 border border-emerald-100 text-center flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center justify-center gap-2">
                                <Star className="text-amber-500 fill-amber-500" />
                                Your Getaway Awaits
                            </h3>
                            <p className="text-emerald-800 mb-6 max-w-2xl">
                                Experience the finest resort near Kelva Beach. Make your weekend extraordinary at Coconut Valley Resort.
                            </p>
                            <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
                                Book Your Escape
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestResortKelvaBeachGetaway;
