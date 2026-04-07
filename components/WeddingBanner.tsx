import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import wedding from '../coconutwed.webp';

const WeddingBanner: React.FC = () => {
    return (
        <section id="weddings" className="relative py-32 overflow-hidden group">
            {/* Background Image with Parallax-like effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src={wedding}
                    alt="Beautiful wedding setup at Coconut Valley Resort near Kelva Beach"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-emerald-950/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/20 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
                        <div className="h-px w-12 bg-emerald-400" />
                        <span className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-sm">Eternal Moments</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
                        Your Dream <br />
                        <span className="text-emerald-400 italic font-light">Wedding</span> Awaits
                    </h2>

                    <p className="text-emerald-50/80 text-lg md:text-xl mb-12 max-w-xl leading-relaxed animate-in fade-in slide-in-from-left-12 duration-700 delay-200">
                        Imagine exchanging vows under the swaying coconut palms, with the gentle rhythm of the Arabian Sea as your background score.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-left-16 duration-700 delay-300">
                        <a
                            href="https://wa.me/917219084299?text=I'm interested in planning a wedding at Coconut Valley Resort"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn bg-white text-emerald-900 px-10 py-5 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-2xl flex items-center justify-center gap-3"
                        >
                            <Heart size={20} className="text-emerald-600 group-hover/btn:scale-125 transition-transform" />
                            Plan Your Wedding
                        </a>
                        <Link
                            to="/gallery"
                            className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all text-center"
                        >
                            View Wedding Gallery
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 p-12 opacity-10 hidden lg:block">
                <Heart size={300} strokeWidth={0.5} className="text-white" />
            </div>
        </section>
    );
};

export default WeddingBanner;
