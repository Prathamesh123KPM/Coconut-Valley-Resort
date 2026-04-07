import React from 'react';
import { Clock, Coffee, Utensils, Waves, Trophy, Music, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import poolImg from '../../coconutpool.webp';
import playImg from '../../coconutplay.webp';
import vibeImg from '../../traiangleroom (1).webp';
import gardenImg from '../../coconuthome.webp';
import aboveImg from '../../coconutabove.webp';

const OneDayCorporatePalghar: React.FC = () => {
    const itinerary = [
        { time: '09:30 AM', activity: 'Arrival & Welcome Breakfast', icon: <Coffee className="text-emerald-600" /> },
        { time: '10:30 AM', activity: 'Team Building Ice-breakers', icon: <Trophy className="text-emerald-600" /> },
        { time: '12:00 PM', activity: 'Pool Party & Rain Dance', icon: <Waves className="text-emerald-600" /> },
        { time: '01:30 PM', activity: 'Grand Konkani Lunch Buffet', icon: <Utensils className="text-emerald-600" /> },
        { time: '03:00 PM', activity: 'Outdoor Games or Beach Walk', icon: <MapPin className="text-emerald-600" /> },
        { time: '04:30 PM', activity: 'Evening High Tea & Departure', icon: <Clock className="text-emerald-600" /> },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 bg-emerald-950 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={aboveImg} alt="Coconut Valley Resort Landscape" className="w-full h-full object-cover" />
                </div>
                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-100 text-sm font-medium mb-6 border border-emerald-700/50">
                        <Clock size={14} />
                        <span>1-Day Power Retreat</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        The Perfect 1 Day Corporate Outing Near Mumbai: Rejuvenate Your Team at Kelva Beach
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                        Maximize team bonding without the overnight commitment. Discover our structured one-day corporate packages designed for impact and fun.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="prose prose-lg prose-emerald max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Time is the most valuable resource in the corporate world. Often, teams need a quick "reset" but can't afford a whole weekend away. This is why a <strong>1 day corporate outing near Mumbai</strong> has become the preferred choice for many HR managers. At Coconut Valley Resort, we've perfected the one-day retreat formula.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Choose a One-Day Outing?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                            {[
                                'Zero travel fatigue (only 2 hours away)',
                                'Highly cost-effective (₹1200 per person)',
                                'Focused team-building agenda',
                                'Immediate boost in team morale'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                                    <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                                    <span className="text-emerald-900 font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Your Sample Itinerary</h2>
                        <p className="text-slate-600 mb-8">
                            A successful outing needs structure. Here's how a typical productive yet relaxing day unfolds at our resort:
                        </p>

                        <div className="space-y-4 mb-12">
                            {itinerary.map((item, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-md group">
                                    <div className="text-emerald-700 font-bold w-24 shrink-0 text-sm">
                                        {item.time}
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div className="text-slate-900 font-bold">
                                        {item.activity}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img src={poolImg} alt="Corporate teams enjoying the pool" className="w-full h-auto object-cover" />
                            <div className="p-4 bg-emerald-900 text-white text-center text-sm">
                                Our clean and spacious pool is the highlight of every one-day outing.
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Engaging Team Activities</h2>
                        <p className="text-slate-600 mb-8">
                            Our 5-acre property provides the space teams need to let loose. We facilitate a variety of activities including:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                            <li className="flex items-center gap-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <Music className="text-emerald-600" size={20} />
                                <span>Rain Dance with DJ setup</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <Trophy className="text-emerald-600" size={20} />
                                <span>Cricket & Badminton Tournaments</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <MapPin className="text-emerald-600" size={20} />
                                <span>Guided Beach Treasure Hunt</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <Coffee className="text-emerald-600" size={20} />
                                <span>Lawn-side Brainstorming</span>
                            </li>
                        </ul>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2 gap-2">
                            <img src={playImg} alt="Morning games in the lawn" className="w-full h-48 object-cover" />
                            <img src={gardenImg} alt="Relaxing in the garden" className="w-full h-48 object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Local Flavors, Global Standards</h2>
                        <p className="text-slate-600 mb-8">
                            Food is often the most talked-about part of any picnic. We take pride in our Konkani-style lunch buffet, featuring fresh local fish (optional), organic vegetables from nearby farms, and our signature solkadhi. It's the kind of meal that makes everyone feel right at home.
                        </p>

                        <div className="bg-emerald-900 text-white rounded-[2.5rem] p-10 my-16 border border-emerald-800 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Clock size={140} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 relative z-10">Ready for a Power Day?</h3>
                            <p className="text-emerald-100/80 text-lg mb-8 max-w-xl relative z-10">
                                Book your corporate one-day outing at just ₹1200 per head (subject to group size). Professional service, pristine nature, and pure fun await.
                            </p>
                            <div className="flex flex-wrap gap-4 relative z-10">
                                <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold py-4 px-10 rounded-full transition-all flex items-center gap-2 shadow-lg">
                                    Get a Custom Quote
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <MapPin className="text-emerald-600 shrink-0" size={32} />
                            <div>
                                <h4 className="font-bold text-slate-900">Easy Accessibility</h4>
                                <p className="text-sm text-slate-500">Just 2 hours from Mumbai. We are also just a 15-minute drive from Palghar Station, perfect for teams travelling by local trains.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneDayCorporatePalghar;
