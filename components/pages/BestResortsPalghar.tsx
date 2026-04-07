import React from 'react';
import { CheckCircle, MapPin, Star, Calendar } from 'lucide-react';
import homeImg from '../../coconuthome.webp';
import poolImg from '../../coconutpool.webp';
import roomImg from '../../deluxeroom (1).webp';

const BestResortsPalghar: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 bg-emerald-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={homeImg} alt="Coconut Valley Resort Exterior" className="w-full h-full object-cover" />
                </div>
                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-100 text-sm font-medium mb-6">
                        <Calendar size={14} />
                        <span>Published on March 20, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Best Resorts in Palghar: Why Coconut Valley Resort is a Perfect Getaway
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
                        Discover why travelers are choosing Kelva Beach and Coconut Valley Resort for their ultimate weekend escapes from Mumbai and Pune.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">

                    <div className="prose prose-lg prose-emerald max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            If you are looking for the perfect weekend getaway near Mumbai or Pune, Palghar has likely crossed your mind. Known for its pristine beaches, lush greenery, and tranquil rural charm, Palghar offers a much-needed break from the city's hustle. But with so many options available, finding the <strong>best resorts in Palghar</strong> can be a challenge.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Craving for a Coastal Retreat</h2>
                        <p className="text-slate-600 mb-6">
                            Imagine waking up to the gentle rustling of palm trees, breathing in the fresh, unpolluted air, and taking a short stroll to feel the soft sand of Kelva Beach beneath your feet. This isn't just a dream; it's the daily reality at Coconut Valley Resort.
                        </p>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img src={poolImg} alt="Beautiful Swimming Pool at Coconut Valley Resort" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Coconut Valley Resort Stands Out</h2>
                        <p className="text-slate-600 mb-6">
                            While there are several resorts in the Palghar and Kelva region, Coconut Valley Resort has carved a niche for itself as a premier destination for families, couples, and corporate groups alike. Here is why we consistently rank among the top choices:
                        </p>

                        <ul className="space-y-6 my-8">
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">1. Unbeatable Location Near Kelva Beach</h3>
                                    <p className="text-slate-600">Located conveniently near the Dandakhadi bridge, our resort provides incredibly easy access to the famous Kelva Beach. You get the best of both worlds: the privacy of our secluded coconut groves and the proximity to the vibrant shoreline.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">2. Diverse Accommodations</h3>
                                    <p className="text-slate-600">Whether you're looking for a cozy wooden room, a luxurious suite with a Jacuzzi, or a spacious family dormitory for a group gathering, we have thoughtfully designed spaces to meet every need.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">3. Immersion in Nature</h3>
                                    <p className="text-slate-600">Surrounded by hundreds of towering coconut palms, the resort naturally maintains a cooler temperature and a deeply soothing atmosphere. It is an authentic oasis of peace.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">4. Authentic Coastal Cuisine</h3>
                                    <p className="text-slate-600">No getaway is complete without incredible food. Our chefs specialize in local Maharashtrian and coastal delicacies that will leave your taste buds wanting more.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img src={roomImg} alt="Luxurious Accommodation at Coconut Valley Resort" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">More Than Just a Stay</h2>
                        <p className="text-slate-600 mb-6">
                            When searching for the <strong>best resorts in Palghar</strong>, modern travelers expect more than just a clean room. At Coconut Valley Resort, we offer an experience. From relaxing by our pristine pool to enjoying evening walks under the starlit sky, we ensure every moment of your stay is memorable.
                        </p>

                        <div className="bg-emerald-50 rounded-2xl p-8 my-10 border border-emerald-100">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                                <Star className="text-amber-500 fill-amber-500" />
                                Ready to experience it yourself?
                            </h3>
                            <p className="text-emerald-800 mb-6">
                                Don't just take our word for it. Book your stay today and discover your new favorite coastal sanctuary just a short drive from the city.
                            </p>
                            <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
                                Check Availability & Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestResortsPalghar;
