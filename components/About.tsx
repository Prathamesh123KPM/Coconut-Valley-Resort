
import React from 'react';
const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="/coconuthome.webp"
                alt="Coconut Valley Resort exterior showing nature retreat vibes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decoration Elements */}
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-emerald-50 rounded-2xl -z-0"></div>
            <div className="absolute -top-10 -left-10 text-emerald-100 hidden md:block">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor">
                <circle cx="100" cy="100" r="100" />
              </svg>
            </div>
          </div>

          <div className="lg:pl-10">
            <span className="text-emerald-700 font-semibold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Rediscover Calm in <br /> <span className="text-emerald-800">Nature’s Lap</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Coconut Valley Resort blends modern comfort with natural serenity. As a premier nature resort near Mumbai, just 2.5 hours away surrounded by lush greenery, it offers an exclusive escape for families, couples, and groups. Being a top-rated Kelva beach resort, we guarantee a peaceful beachfront experience.
              </p>
              <p>
                Our philosophy centers around eco-friendly hospitality and nature-inspired design. We believe that true luxury is found in the simple moments: a sunset walk on Kelva beach, the sound of palm leaves rustling, and the warmth of genuine service at our resort in Palghar.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Exclusive</h4>
                <p className="text-slate-500">Private access to beach nature trails and serene environments.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Sustainable</h4>
                <p className="text-slate-500">Built with materials that respect the local ecosystem.</p>
              </div>
            </div>

            <button className="mt-12 text-emerald-800 font-bold border-b-2 border-emerald-800 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all">
              Learn more about our heritage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
