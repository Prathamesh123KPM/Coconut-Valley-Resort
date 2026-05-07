import React from 'react';
import { Heart, Camera, Music, Sparkles, Calendar, CheckCircle } from 'lucide-react';
const homeImg = '/coconuthome.webp';
import weddingImg from '../../coconutwedding.webp'; 
const DestinationWeddings: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 bg-emerald-900 overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img loading="lazy" src={weddingImg} alt="Resort Wedding View" className="w-full h-full object-cover" />
                </div>
                <div className="container relative mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-100 text-sm font-medium mb-6">
                        <Calendar size={14} />
                        <span>Published on April 21, 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                        Your Dream Beach Wedding: A Complete Guide to Destination Weddings at Kelva Beach
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
                        From sunset ceremonies under coconut palms to grand receptions by the waves, discover why Kelva Beach is the new favorite for boutique weddings.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="prose prose-lg prose-emerald max-w-none">
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            There is something undeniably magical about saying "I do" with the sound of waves in the background and a gentle sea breeze rustling the palms. Kelva Beach, with its pristine shoreline and golden sunsets, offers a picturesque backdrop that rivals international destinations.
                        </p>

                        <div className="my-10 rounded-2xl overflow-hidden shadow-xl border-4 border-emerald-50">
                            <img loading="lazy" src={weddingImg} alt="Romantic Beach Wedding Setup" className="w-full h-auto object-cover" />
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Choose a Boutique Wedding at Coconut Valley?</h2>
                        <p className="text-slate-600 mb-6">
                            Unlike traditional banquet halls, Coconut Valley Resort offers an intimate, nature-infused experience. We specialize in boutique destination weddings where every detail is personalized.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 px-0">
                            {[
                                { icon: <Heart className="text-emerald-600" />, title: "Intimate Venues", desc: "Secluded coconut groves perfect for private ceremonies." },
                                { icon: <Camera className="text-emerald-600" />, title: "Stunning Backdrops", desc: "Golden hour at Kelva Beach provides the ultimate photo ops." },
                                { icon: <Music className="text-emerald-600" />, title: "Custom Theme", desc: "From rustic wooden decor to floral coastal themes." },
                                { icon: <Sparkles className="text-emerald-600" />, title: "Full Service", desc: "Our team handles everything from catering to guest stay." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="shrink-0">{item.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Planning Your Special Day</h2>
                        <p className="text-slate-600 mb-6">
                            The best time for a beach wedding at Kelva is from October to March. During these months, the weather is pleasantly cool, ensuring your guests stay comfortable throughout the outdoor festivities. Our team works closely with couples to design menus featuring local coastal flavors and global favorites.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Unforgettable Memories for Guests</h2>
                        <p className="text-slate-600 mb-6">
                            Your guests won't just be attending a wedding; they'll be enjoying a vacation. With our diverse room types—from luxurious Jacuzzi suites for the couple to spacious dormitories for the extended family—everyone gets to relax and rejuvenate.
                        </p>

                        <div className="bg-emerald-50 rounded-2xl p-8 my-10 border border-emerald-100 text-center flex flex-col items-center">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center justify-center gap-2">
                                <Sparkles className="text-amber-500" />
                                Start Your Forever with Us
                            </h3>
                            <p className="text-emerald-800 mb-6 max-w-2xl">
                                Let us help you create the wedding you've always dreamed of. Contact our events team for a personalized brochure and venue tour.
                            </p>
                            <a href="https://wa.me/917219084299" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
                                Enquire for Wedding Packages
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationWeddings;
