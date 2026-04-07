import React from 'react';
import { CheckCircle, MapPin, Star, Calendar, Heart, Users, Home as HomeIcon } from 'lucide-react';
import homeImg from '../../coconuthome.webp';
import poolImg from '../../coconutpool.webp';
import roomImg from '../../deluxeroom (1).webp';
import triangleImg from '../../traiangleroom (1).webp';
import jacuzziImg from '../../jacuzzibliss.webp';
import starImg from '../../starparadise.webp';

const BestResortsKelvaBeach: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 bg-emerald-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={homeImg} alt="Coconut Valley Resort - Best Kelva Beach Resort" className="w-full h-full object-cover" />
                </div>
                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-100 text-sm font-medium mb-6">
                        <Calendar size={14} />
                        <span>Published on March 20, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Best Resorts in Kelva Beach Near Palghar for Family & Couples
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
                        Escape the city chaos and discover your perfect coastal sanctuary at Kelva Beach's premier destination for families and romantic getaways.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="prose prose-lg prose-emerald max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Searching for the <strong>best resorts in Kelva Beach near Palghar</strong>? Whether you're planning a fun-filled family reunion or a quiet, romantic escape with your partner, Kelva Beach offers a unique blend of natural beauty and tranquil charm that's hard to find elsewhere. Located just a short drive from Mumbai and Pune, it is the ultimate weekend destination.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A Tropical Escape Like No Other</h2>
                        <p className="text-slate-600 mb-6">
                            Coconut Valley Resort isn't just a place to stay; it's an experience designed to reconnect you with nature and your loved ones. Surrounded by hundreds of towering coconut palms and just a 3-minute stroll from the pristine shoreline, we offer the perfect balance of adventure and relaxation.
                        </p>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src={poolImg} alt="Sparkling Pool at Coconut Valley Resort" className="w-full h-64 object-cover" />
                            <img src={triangleImg} alt="Unique Triangle Rooms for Couples" className="w-full h-64 object-cover" />
                        </div>

                        {/* Family Section */}
                        <div className="mt-16 mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Users className="text-emerald-600" />
                                Why Families Love Coconut Valley Resort
                            </h2>
                            <p className="text-slate-600 mb-8">
                                Planning a family trip requires space, activities, and a safe environment. We've checked all the boxes:
                            </p>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle className="text-emerald-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Spacious Family Accommodations</h3>
                                        <p className="text-slate-600">From our Tropical Bliss rooms to our large Family Dormitories, we provide ample space for everyone to stay comfortably under one roof.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle className="text-emerald-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Activities for All Ages</h3>
                                        <p className="text-slate-600">Enjoy our clean swimming pool, let loose in the rain dance area, or play games on our expansive green lawns. There's never a dull moment!</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle className="text-emerald-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Authentic Home-Style Cooking</h3>
                                        <p className="text-slate-600">Our in-house kitchen serves delicious local Konkani and Maharashtrian meals that taste just like home, ensuring even the pickiest eaters are satisfied.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img src={roomImg} alt="Comfortable Family Room in Kelva Beach" className="w-full h-auto object-cover" />
                        </div>

                        {/* Couples Section */}
                        <div className="mt-16 mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Heart className="text-pink-600" />
                                The Ultimate Romantic Retreat for Couples
                            </h2>
                            <p className="text-slate-600 mb-8">
                                For couples seeking privacy and a touch of luxury near Palghar, Coconut Valley Resort offers unique experiences:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Triangle Rooms</h4>
                                    <p className="text-sm text-slate-600">Intimate A-frame cabins perfect for a cozy getaway.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Jacuzzi Bliss</h4>
                                    <p className="text-sm text-slate-600">Unwind in your private in-room Jacuzzi for the ultimate relaxation.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Star Paradise</h4>
                                    <p className="text-sm text-slate-600">Retractable roofs allow you to sleep under the starlit sky.</p>
                                </div>
                            </div>
                        </div>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src={jacuzziImg} alt="Private Jacuzzi Suite for Couples" className="w-full h-64 object-cover" />
                            <img src={starImg} alt="Stargazing Suite with Retractable Roof" className="w-full h-64 object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">More Than Just a Stay</h2>
                        <p className="text-slate-600 mb-6">
                            When looking for the <strong>best resorts in Kelva Beach</strong>, location is everything. We are one of the few resorts located exceptionally close to the beach, yet tucked away in a peaceful coconut grove to ensure your privacy.
                        </p>

                        <div className="bg-emerald-50 rounded-2xl p-8 my-10 border border-emerald-100">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                                <Star className="text-amber-500 fill-amber-500" />
                                Plan Your Perfect Getaway Today
                            </h3>
                            <p className="text-emerald-800 mb-6">
                                Experience why Coconut Valley Resort is rated as one of the top choices for families and couples in the Palghar region.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
                                    Check Availability & Book Now
                                </a>
                                <a href="/contact" className="inline-block bg-white hover:bg-slate-50 text-emerald-700 font-bold py-3 px-8 rounded-full border border-emerald-200 transition-colors">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestResortsKelvaBeach;
