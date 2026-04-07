import React from 'react';
import { CheckCircle, Users, Baby, Palmtree, Star, ArrowRight, Heart, MapPin } from 'lucide-react';
import familyImg from '../../familydormitory.webp';
import playImg from '../../coconutplay.webp';
import jhulaImg from '../../coconutjhula.webp';
import homeImg from '../../coconuthome.webp';
import aboveImg from '../../coconutabove.webp';

const FamilyResortPalghar: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 bg-emerald-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={aboveImg} alt="Aerial View of Kelva Beach Near Palghar" className="w-full h-full object-cover" />
                </div>
                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-100 text-sm font-medium mb-6">
                        <Users size={14} />
                        <span>Guide for Families</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Looking for the Best Family Resort Near Palghar? Discover Kelva Beach Stays
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
                        Forget the crowded city escapes. Discover why Kelva Beach is the best-kept secret for families seeking a safe, fun, and relaxing weekend away.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="prose prose-lg prose-emerald max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Are you <strong>looking for the best family resort near Palghar</strong>? Choosing the right destination for a family trip can be stressful. You want somewhere safe for the kids, relaxing for the adults, and with enough space for everyone to stay together. That's exactly where Kelva Beach, and specifically Coconut Valley Resort, shines.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Kelva Beach is a Family Favorite</h2>
                        <p className="text-slate-600 mb-6">
                            Unlike some of the more commercialized beaches in Maharashtra, Kelva Beach maintains a pristine, peaceful atmosphere. It is one of the widest and cleanest beaches in the region, offering a safe environment for kids to run around, build sandcastles, and enjoy the waves.
                        </p>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img src={aboveImg} alt="Peaceful Kelva Beach Shoreline" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Family-Centric Stays at Coconut Valley Resort</h2>
                        <p className="text-slate-600 mb-8">
                            We understand that "family" comes in all sizes. Whether you're a small family of three or a large multi-generational group, we have the perfect accommodation:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 shadow-sm transition-transform hover:scale-[1.02]">
                                <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                                    <Users className="text-emerald-600" />
                                    Family Dormitories
                                </h3>
                                <p className="text-emerald-800 text-sm mb-4">
                                    Our spacious dorms can comfortably house 6-8 guests, making them perfect for large families or groups of cousins who want to stay and bond together.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 shadow-sm transition-transform hover:scale-[1.02]">
                                <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                                    <Heart className="text-emerald-600" />
                                    Tropical Bliss Rooms
                                </h3>
                                <p className="text-emerald-800 text-sm mb-4">
                                    Ideal for smaller families, these rooms offer privacy and comfort right in the heart of our coconut groves.
                                </p>
                            </div>
                        </div>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img src={familyImg} alt="Large Family Dormitory Interior" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Unforgettable Family Activities</h2>
                        <ul className="space-y-6 my-8">
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Swimming & Rain Dance</h3>
                                    <p className="text-slate-600">Our pool is clean, well-maintained, and has a dedicated shallow area for kids. Plus, the rain dance is a hit for all ages!</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Expansive Open Lawns</h3>
                                    <p className="text-slate-600">Our lush green grounds offer plenty of space for games like cricket, badminton, or a classic family picnic under the coconut trees.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Exploring Local Culture</h3>
                                    <p className="text-slate-600">Take the family for traditional horse cart rides or camel rides on Kelva Beach. Visit the historic Kelva and Shirgaon forts for a dash of history.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src={playImg} alt="Kids playing in the lawns" className="w-full h-64 object-cover" />
                            <img src={jhulaImg} alt="Traditional swings for family relaxation" className="w-full h-64 object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Delicious Coastal Cravings</h2>
                        <p className="text-slate-600 mb-8">
                            No family trip is complete without great food. We serve authentic Maharashtrian and Konkan-style meals prepared with fresh, local ingredients. From crispy fried fish to traditional vegetarian thalis, our menu is designed to satisfy the whole family.
                        </p>

                        <div className="bg-emerald-50 rounded-[2.5rem] p-10 my-16 border border-emerald-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <Palmtree size={120} />
                            </div>
                            <h3 className="text-3xl font-bold text-emerald-900 mb-4">Make Your Next Family Trip Special</h3>
                            <p className="text-emerald-800 text-lg mb-8 max-w-xl">
                                Join hundreds of happy families who have made Coconut Valley Resort their favorite home away from home in Palghar.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-10 rounded-full transition-all flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95">
                                    Book Now via WhatsApp
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <MapPin className="text-emerald-600 shrink-0" size={32} />
                            <div>
                                <h4 className="font-bold text-slate-900">Easy Accessibility</h4>
                                <p className="text-sm text-slate-500">Located conveniently near Palghar, just a 2-hour drive from Mumbai and Pune. Perfect for a hassle-free weekend getaway.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FamilyResortPalghar;
