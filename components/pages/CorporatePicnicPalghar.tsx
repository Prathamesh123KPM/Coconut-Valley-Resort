import React from 'react';
import { CheckCircle, Users, Briefcase, Coffee, Star, ArrowRight, Shield, Target } from 'lucide-react';
import aboveImg from '../../coconutabove.webp';
import dormImg from '../../woodendormitory (1).webp';
import playImg from '../../coconutplay.webp';
import poolImg from '../../coconutpool.webp';
import eventImg from '../../coconutwedding1.webp';

const CorporatePicnicPalghar: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img src={eventImg} alt="Corporate Event Setup in Palghar" className="w-full h-full object-cover" />
                </div>
                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 text-slate-100 text-sm font-medium mb-6">
                        <Briefcase size={14} />
                        <span>Corporate Guide</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Top Resorts near Mumbai for Corporate Picnics: Why Coconut Valley is the Preferred Choice
                    </h1>
                    <p className="text-slate-100 text-lg md:text-xl max-w-2xl mx-auto">
                        Boost team morale and productivity by escaping the concrete jungle. Discover why Kelva Beach is the new favorite destination for corporate retreats.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="prose prose-lg prose-emerald max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Are you searching for the <strong>best resorts near Mumbai for corporate picnics</strong>? A successful corporate retreat isn't just about a change of scenery; it's about creating an environment where teams can bond, ideas can flow, and everyone can return to work refreshed. Coconut Valley Resort at Kelva Beach offers exactly that—a perfect blend of nature, comfort, and professional hospitality.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Escape the Concrete Jungle</h2>
                        <p className="text-slate-600 mb-6">
                            Mumbai's corporate world is fast-paced and demanding. To truly recharge, your team needs more than just a hotel room. Our resort is tucked away in a lush 5-acre coconut grove, providing a natural acoustic barrier from the outside world. This tranquility is essential for effective brainstorming sessions and genuine team relaxation.
                        </p>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img src={aboveImg} alt="Aerial View of our 5-acre Coconut Grove" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Features Designed for Corporate Excellence</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                            <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="mt-1">
                                    <Target className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Team Building Spaces</h3>
                                    <p className="text-slate-600 text-sm">Our expansive open lawns are perfect for customized team-building activities, sports, and outdoor workshops.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="mt-1">
                                    <Users className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Large Group Stays</h3>
                                    <p className="text-slate-600 text-sm">Our Wooden and Family Dormitories can house up to 10 guests each, fostering better team interaction and bonding.</p>
                                </div>
                            </div>
                        </div>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg">
                            <img src={dormImg} alt="Spacious Dormitories for Corporate Groups" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">A Refreshing Itinerary</h2>
                        <ul className="space-y-6 my-8">
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Morning Strategy Sessions</h3>
                                    <p className="text-slate-600">Start your day with a strategy meeting in our shaded outdoor areas, accompanied by fresh breakfast and hot coffee.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Afternoon Refreshment</h3>
                                    <p className="text-slate-600">Cool off in the pool or enjoy a group rain dance session to break the ice and build camaraderie.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1">
                                    <CheckCircle className="text-emerald-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Konkani Culinary Experience</h3>
                                    <p className="text-slate-600">Bond over a buffet of authentic local delicacies, prepared fresh for your team.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src={playImg} alt="Outdoor Team Building Activities" className="w-full h-64 object-cover" />
                            <img src={poolImg} alt="Relaxing Pool for Corporate Groups" className="w-full h-64 object-cover" />
                        </div>

                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 my-16 border border-slate-800">
                            <h3 className="text-3xl font-bold mb-4">Host Your Next Event with Us</h3>
                            <p className="text-slate-400 text-lg mb-8 max-w-xl">
                                From one-day picnics to multi-day residential treks, we offer customized corporate packages that fit your company's needs and budget.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all flex items-center gap-2 shadow-lg">
                                    Enquire about Corporate Packages
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 mb-12">
                            <Shield className="text-emerald-600 shrink-0" size={32} />
                            <div>
                                <h4 className="font-bold text-slate-900 italic">"The perfect escape from the city hustle. Our team loved the food and the peaceful environment."</h4>
                                <p className="text-sm text-emerald-700">— Satisfied HR Manager</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Location & Access</h2>
                        <p className="text-slate-600 mb-6">
                            Located just a 2-hour drive from Mumbai and Thane, Coconut Valley Resort is easily accessible via the Western Express Highway. We offer ample parking for cars and corporate buses, ensuring a smooth arrival for your entire team.
                        </p>

                        <div className="flex items-center gap-2 text-emerald-700 font-bold justify-center py-8">
                            <Coffee size={24} />
                            <span>Experience the best corporate picnic near Mumbai today.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporatePicnicPalghar;
