import React from 'react';
import { CheckCircle, MapPin, Star, Calendar } from 'lucide-react';
import heroImg from '../../coconutwedding1.webp';
import roomImg from '../../deluxeroom (1).webp';
import poolImg from '../../coconutpool.webp';

const HotelsKelvaBeachGuide: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 bg-emerald-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img loading="lazy" src={heroImg} alt="Hotel near Kelva Beach Palghar" className="w-full h-full object-cover" />
                </div>
                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-100 text-sm font-medium mb-6">
                        <Calendar size={14} />
                        <span>Published on May 5, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Top Hotels Near Kelva Beach, Palghar: Your Ultimate Accommodation Guide
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
                        Looking for the best hotels near Kelva Beach, Palghar? Discover comfortable accommodations, modern amenities, and breathtaking coastal views.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="prose prose-lg prose-emerald max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Planning a trip to the scenic shores of Palghar? Finding the perfect accommodation is key to an unforgettable coastal getaway. When it comes to <strong className="font-bold text-emerald-800">Hotels Near Kelva Beach, Palghar</strong>, travelers look for a blend of comfort, prime location, and premium hospitality. As the <strong className="font-bold text-emerald-800">Best Resort Near Kelva Beach</strong>, Coconut Valley Resort emerges as the top recommendation for those seeking an elevated <strong className="font-bold text-emerald-800">Kelva Resort</strong> stay.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What to Look For in a Kelva Beach Hotel</h2>
                        <p className="text-slate-600 mb-6">
                            Before booking your stay, it is important to consider what makes a hotel truly exceptional. Proximity to the beach, cleanliness, dining options, and recreational facilities are the pillars of a great coastal hotel. Coconut Valley Resort ticks all these boxes and more, offering an experience that goes beyond a standard hotel room.
                        </p>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img loading="lazy" src={roomImg} alt="Luxurious Hotel Room near Kelva Beach" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Choose Coconut Valley Resort?</h2>
                        <ul className="space-y-6 my-8">
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">1. Premium Accommodations</h3>
                                    <p className="text-slate-600">Unlike standard hotels, we offer unique stays ranging from rustic wooden cabins to luxurious suites, ensuring a memorable and comfortable experience.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">2. World-Class Amenities</h3>
                                    <p className="text-slate-600">Enjoy our expansive swimming pool, meticulously manicured gardens, and open spaces designed for ultimate relaxation.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">3. Culinary Excellence</h3>
                                    <p className="text-slate-600">Our in-house restaurant serves up a delectable array of coastal delicacies and multi-cuisine options, eliminating the need to search for dining alternatives.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="bg-emerald-50 rounded-2xl p-8 my-10 border border-emerald-100 text-center flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center justify-center gap-2">
                                <Star className="text-amber-500 fill-amber-500" />
                                Ready to book your stay?
                            </h3>
                            <p className="text-emerald-800 mb-6 max-w-2xl">
                                Experience the best hotel accommodation near Kelva Beach. Reserve your room at Coconut Valley Resort today.
                            </p>
                            <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
                                Check Availability
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelsKelvaBeachGuide;
