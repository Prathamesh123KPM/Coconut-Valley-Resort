import React from 'react';
import { Utensils, Star, Soup, Coffee, Calendar, MapPin } from 'lucide-react';
const homeImg = '/coconuthome.webp';
import foodImg from '../../coconutabout.webp';

const CoastalCuisine: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 bg-emerald-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img loading="lazy" src={homeImg} alt="Restaurant at Sunset" className="w-full h-full object-cover" />
                </div>
                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-100 text-sm font-medium mb-6">
                        <Calendar size={14} />
                        <span>Published on April 21, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        A Culinary Journey through Palghar: Authentic Flavors at Coconut Valley
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
                        Explore the rich coastal flavors of Palghar. From traditional local delicacies to international favorites, embark on a gastronomic adventure.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="prose prose-lg prose-emerald max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Food is more than just sustenance; it's a reflection of culture and heritage. In Palghar, the culinary landscape is defined by its coastal proximity, resulting in a rich tapestry of flavors dominated by fresh seafood, coconut, and vibrant spices. At Coconut Valley Resort, we bring this authentic taste to your table.
                        </p>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-50">
                            <img loading="lazy" src={foodImg} alt="Authentic Coastal Seafood Platter" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Soul of Coastal Cooking</h2>
                        <p className="text-slate-600 mb-6">
                            Our kitchen celebrates the local bounty. The secret lies in our spice blends and the use of fresh coconut harvested directly from our groves. Whether it's a simple fish curry or a complex prawn masala, the authenticity of ingredients shines through.
                        </p>

                        <div className="bg-slate-50 p-8 rounded-2xl my-10 border-l-4 border-emerald-500">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 italic">"The seafood here is a revelation. Every dish tastes like the ocean and the tradition of Palghar." — A regular guest</h3>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Signature Dishes to Try</h2>
                        <div className="space-y-6 my-8">
                            <div className="flex gap-4 items-start">
                                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700 shrink-0">
                                    <Utensils size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Traditional Fish Thali</h4>
                                    <p className="text-sm text-slate-600 italic">A complete meal featuring fresh catch of the day, authentic curry, and local side dishes.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700 shrink-0">
                                    <Soup size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Sol Kadhi</h4>
                                    <p className="text-sm text-slate-600 italic">A refreshing digestive drink made with kokum and coconut milk—a staple of coastal meals.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Dining with a View</h2>
                        <p className="text-slate-600 mb-6">
                            Our dining area is designed to keep you connected with the outdoors. Enjoy your meals overlooking the lush coconut groves, as the gentle birdsong provides a natural soundtrack to your culinary journey.
                        </p>

                        <div className="bg-emerald-50 rounded-2xl p-8 my-10 border border-emerald-100 text-center flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center justify-center gap-2">
                                <Star className="text-amber-500 fill-amber-500" />
                                Ready to Taste the Tradition?
                            </h3>
                            <p className="text-emerald-800 mb-6 max-w-2xl">
                                Join us for an unforgettable dining experience. Whether you're staying with us or just stopping by for a day picnic, our doors are open.
                            </p>
                            <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
                                Book Your Dining Table
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoastalCuisine;
