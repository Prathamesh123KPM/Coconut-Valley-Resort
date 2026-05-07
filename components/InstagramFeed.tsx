import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramFeed: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mb-6 shadow-sm border border-emerald-100">
                        <Instagram size={32} />
                    </div>
                    <span className="text-emerald-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Follow Our Journey</span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-6 break-all sm:break-words">@coconut_valley_kelvabeach</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Share your beautiful moments with us using <span className="font-bold text-slate-800">#CoconutValleyResort</span> and get featured on our page.
                    </p>
                </div>

                <div className="w-full mt-10">
                    <div className="elfsight-app-69af2911-4702-48c4-aa56-aec03af06f92" data-elfsight-app-lazy></div>
                </div>
                
                <div className="mt-12 text-center">
                    <a 
                        href="https://www.instagram.com/coconut_valley_kelvabeach/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <Instagram size={20} />
                        Follow on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
