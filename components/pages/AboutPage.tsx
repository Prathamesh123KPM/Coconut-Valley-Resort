import React from 'react';
import About from '../About';
import cv2 from '../../cv (2).webp';
import coconutAbout from '../../coconutabout.webp';
import { Leaf, Users, Star, History } from 'lucide-react';

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="pt-24">
                {/* Breadcrumb style header */}
                <div className="bg-emerald-900 text-white py-20 mb-16">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Sanctuary</h1>
                        <p className="text-emerald-100/70 text-xl max-w-2xl mx-auto">
                            A journey of passion, nature, and the pursuit of perfect serenity in the heart of Kelva.
                        </p>
                    </div>
                </div>

                <About />

                {/* Vision & Mission */}
                <div className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-emerald-700 font-bold uppercase tracking-widest text-sm mb-4 block">Purpose & Passion</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Our Vision for <br />Sustainable Luxury</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Coconut Valley Resort was born from a simple dream: to create a space where luxury and nature coexist without compromise. We believe that true rejuvenation happens when you disconnect from the digital noise and reconnect with the rhythms of the earth.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                            <Leaf className="text-emerald-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Eco-Conscious Living</h4>
                                            <p className="text-slate-500">From solar heating to organic gardens, every detail is designed to minimize our footprint.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                            <Users className="text-emerald-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Local Empowerment</h4>
                                            <p className="text-slate-500">90% of our staff comes from local villages, bringing authentic Kelva hospitality to you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-700">
                                <img src={coconutAbout} alt="Aerial overview of Coconut Valley Resort grounds and lush natural surroundings" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* History Timeline */}
                <div className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <History className="mx-auto text-emerald-700 mb-4" size={40} />
                            <h2 className="text-4xl font-bold text-slate-900">Our Heritage</h2>
                        </div>
                        <div className="max-w-4xl mx-auto space-y-12">
                            <div className="flex flex-col md:flex-row gap-8 items-center border-l-4 border-emerald-100 pl-8 relative">
                                <div className="absolute -left-3 top-0 w-5 h-5 bg-emerald-700 rounded-full border-4 border-white"></div>
                                <div className="md:w-1/4">
                                    <span className="text-2xl font-bold text-emerald-900">2015</span>
                                </div>
                                <div className="md:w-3/4">
                                    <h4 className="text-xl font-bold mb-2">The First Seed</h4>
                                    <p className="text-slate-600">Our founder purchased the initial 5-acre coconut grove, recognizing the unique serenity of the location.</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8 items-center border-l-4 border-emerald-100 pl-8 relative">
                                <div className="absolute -left-3 top-0 w-5 h-5 bg-emerald-700 rounded-full border-4 border-white"></div>
                                <div className="md:w-1/4">
                                    <span className="text-2xl font-bold text-emerald-900">2018</span>
                                </div>
                                <div className="md:w-3/4">
                                    <h4 className="text-xl font-bold mb-2">Building Dreams</h4>
                                    <p className="text-slate-600">Construction began using sustainable local timber and traditional Maharashtrian architectural techniques.</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8 items-center border-l-4 border-emerald-100 pl-8 relative">
                                <div className="absolute -left-3 top-0 w-5 h-5 bg-emerald-700 rounded-full border-4 border-white"></div>
                                <div className="md:w-1/4">
                                    <span className="text-2xl font-bold text-emerald-900">2022</span>
                                </div>
                                <div className="md:w-3/4">
                                    <h4 className="text-xl font-bold mb-2">A New Chapter</h4>
                                    <p className="text-slate-600">Coconut Valley Resort opened its doors, welcoming its first guests to the ultimate nature retreat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
