import React from 'react';
import { CheckCircle, Clock, Utensils, Waves, Calendar, Star, ArrowRight } from 'lucide-react';
import homeImg from '../../coconuthome.webp';
import poolImg from '../../coconutpool.webp';
import playImg from '../../coconutplay.webp';
import jhulaImg from '../../coconutjhula.webp';
import aboutImg from '../../coconutabout.webp';

const OneDayResortPalghar: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 bg-emerald-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={homeImg} alt="One Day Picnic in Palghar at Coconut Valley Resort" className="w-full h-full object-cover" />
                </div>
                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-100 text-sm font-medium mb-6">
                        <Calendar size={14} />
                        <span>Published on March 20, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Best One Day Resort in Palghar Near Kelva Beach for Weekend Fun
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
                        Don't have time for a full stay? Discover why Coconut Valley Resort is the top-rated choice for a refreshing one-day picnic experience.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="prose prose-lg prose-emerald max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Are you looking for the <strong>best one day resort in Palghar near Kelva Beach</strong>? Sometimes, all you need is a quick break from the daily grind to recharge. A one-day picnic is the perfect way to enjoy the sun, sand, and serenity without the commitment of an overnight stay.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Kelva Beach is Perfect for Day Trips</h2>
                        <p className="text-slate-600 mb-6">
                            Located just a few hours from Mumbai and Pune, Kelva Beach offers a beautiful coastline with minimal crowds compared to city beaches. Its accessibility makes it an ideal spot for a spontaneous weekend outing with friends, family, or colleagues.
                        </p>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img src={aboutImg} alt="Scenic View of Coconut Groves near Palghar" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Your Perfect One-Day Itinerary</h2>
                        <p className="text-slate-600 mb-8">
                            At Coconut Valley Resort, we've carefully curated a Day Outing package that ensures you make the most of every minute:
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Morning Arrival & Refreshments</h3>
                                    <p className="text-slate-600">Arrive by 9:00 AM and kick off your day with a warm welcome and a hearty breakfast amidst our lush coconut groves.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0">
                                    <Waves size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Pool & Rain Dance Fun</h3>
                                    <p className="text-slate-600">Cool off in our sparkling swimming pool or enjoy a rhythmic rain dance with your group. It's the ultimate way to beat the heat!</p>
                                </div>
                            </div>

                            <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0">
                                    <Utensils size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Authentic Konkani Lunch</h3>
                                    <p className="text-slate-600">Savor the flavors of the coast with our delicious unlimited Maharashtrian lunch, featuring fresh local ingredients and traditional recipes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src={poolImg} alt="Swimming Pool Fun" className="w-full h-64 object-cover" />
                            <img src={playImg} alt="Outdoor Games Area" className="w-full h-64 object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Beyond the Pool: Activities for Everyone</h2>
                        <p className="text-slate-600 mb-6">
                            Coconut Valley Resort isn't just about the pool. Our expansive green grounds are perfect for outdoor games like badminton, cricket, or simply lounging on a hammock with a book. Kids will love the open space for running around, while adults can enjoy the tranquil shade of hundreds of coconut trees.
                        </p>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img src={jhulaImg} alt="Relaxing in the Gardens" className="w-full h-auto object-cover" />
                        </div>

                        <div className="bg-emerald-900 text-white rounded-3xl p-8 md:p-12 my-16 text-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Affordable Day Outing Package</h3>
                            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                                Starting from just <strong>₹1,200*</strong> per person, our day package includes breakfast, lunch, high tea, and full access to all resort amenities.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-emerald-900 font-bold py-3 px-8 rounded-full hover:bg-emerald-50 transition-colors">
                                    Book Your Day Outing
                                </a>
                                <a href="/tariff" className="inline-block bg-emerald-800 text-white font-bold py-3 px-8 rounded-full border border-emerald-700 hover:bg-emerald-700 transition-colors">
                                    View Packages
                                </a>
                            </div>
                            <p className="mt-6 text-sm text-emerald-300">*Prices may vary based on group size and season.</p>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A 3-Minute Stroll to Kelva Beach</h2>
                        <p className="text-slate-600 mb-6">
                            Before you head home, don't forget to take the short 3-minute walk to Kelva Beach. Watching the sunset over the Arabian Sea is the perfect finale to your one-day escape in Palghar.
                        </p>

                        <div className="bg-emerald-50 rounded-2xl p-8 my-10 border border-emerald-100">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                                <Star className="text-amber-500 fill-amber-500" />
                                Ready for the Ultimate Weekend Fun?
                            </h3>
                            <p className="text-emerald-800 mb-6">
                                Join us at Coconut Valley Resort for a day of laughter, relaxation, and great food. We are the preferred choice for school picnics, corporate retreats, and family gatherings in the Kelva Beach area.
                            </p>
                            <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
                                Chat on WhatsApp to Book
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneDayResortPalghar;
