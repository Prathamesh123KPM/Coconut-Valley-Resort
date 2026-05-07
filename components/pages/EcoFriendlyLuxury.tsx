import React from 'react';
import { CheckCircle, Leaf, Wind, Sun, Calendar, Star } from 'lucide-react';
const homeImg = '/coconuthome.webp';
import ecoImg from '../../jacuzzi (1).webp';

const EcoFriendlyLuxury: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 bg-emerald-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img loading="lazy" src={homeImg} alt="Coconut Valley Resort Landscape" className="w-full h-full object-cover" />
                </div>
                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-100 text-sm font-medium mb-6">
                        <Calendar size={14} />
                        <span>Published on April 21, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Eco-Friendly Luxury: Why Sustainable Stays are the Future of Travel at Palghar
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
                        Discover how Coconut Valley Resort blends rustic timber architecture with modern sustainability to create a guilt-free luxury experience.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="prose prose-lg prose-emerald max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            In an era where travelers are increasingly conscious of their environmental footprint, the concept of luxury is evolving. At Coconut Valley Resort, we believe that true indulgence shouldn't come at the cost of nature. Our commitment to sustainability is woven into every wooden beam and every rustling palm leaf of our resort.
                        </p>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-50">
                            <img loading="lazy" src={ecoImg} alt="Sustainable Timber Architecture at Coconut Valley" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Magic of Timber Architecture</h2>
                        <p className="text-slate-600 mb-6">
                            One of the most striking features of Coconut Valley Resort is our extensive use of sustainable timber. Wood is not only a renewable resource but also provides natural insulation, keeping our rooms cooler without excessive reliance on energy-heavy air conditioning.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Our Core Sustainability Pillars</h2>
                        <p className="text-slate-600 mb-6">
                            Sustainability isn't just a buzzword for us; it's a daily practice. Here's how we ensure your stay remains eco-conscious:
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 px-0 list-none">
                            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-4">
                                    <Leaf size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Sustainable Construction</h3>
                                <p className="text-slate-600 text-sm italic">Using treated timber and locally sourced materials to minimize carbon footprint.</p>
                            </li>
                            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-4">
                                    <Sun size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Natural Cooling</h3>
                                <p className="text-slate-600 text-sm italic">Iconic A-frame designs and plantation-style layouts maximize natural cross-ventilation.</p>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Preserving the Coconut Grove Heritage</h2>
                        <p className="text-slate-600 mb-6">
                            The resort is built within a thriving coconut plantation. Instead of clearing the land, we integrated our structures among the trees. This preserves the local ecosystem, provides natural shade, and ensures that every guest stays in direct connection with nature.
                        </p>

                        <div className="bg-emerald-50 rounded-2xl p-8 my-10 border border-emerald-100 text-center flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center justify-center gap-2">
                                <Star className="text-amber-500 fill-amber-500" />
                                Ready for a Greener Getaway?
                            </h3>
                            <p className="text-emerald-800 mb-6 max-w-2xl">
                                Join us in our journey toward a more sustainable future. Book your eco-conscious stay today and experience luxury that feels as good as it looks.
                            </p>
                            <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
                                Plan Your Sustainable Stay
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoFriendlyLuxury;
