import React, { useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const desktopVideoId = 'YTUECaWDbUI';
  const mobileVideoId = '68J6_RLlH9M';

  useEffect(() => {
    const updateVideo = () => {
      const isMobile = window.innerWidth < 768;
      const videoIdToUse = isMobile ? mobileVideoId : desktopVideoId;

      // Load YouTube video only when the browser is idle to minimize TBT (Total Blocking Time)
      const loadVideo = () => {
        setVideoUrl(`https://www.youtube.com/embed/${videoIdToUse}?autoplay=1&mute=1&loop=1&playlist=${videoIdToUse}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`);
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          loadVideo(); // Load immediately when browser is idle
        });
      } else {
        setTimeout(loadVideo, 500); // Short fallback delay
      }
    };

    updateVideo();
    window.addEventListener('resize', updateVideo);
    return () => window.removeEventListener('resize', updateVideo);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* YouTube Video Background with Image Fallback */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fallback Image with FetchPriority for LCP - Using Stable Public Path */}
        <img
          src="/coconutabove.webp"
          alt="Aerial view of Coconut Valley Resort pool and lush beachfront greenery"
          fetchPriority="high"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* YouTube Iframe Container */}
        <div className="absolute inset-0 z-0">
          {videoUrl && (
            <iframe
              className="w-full h-full scale-[1.5] pointer-events-none transition-opacity duration-1000"
              src={videoUrl}
              allow="autoplay; encrypted-media"
              loading="lazy"
              frameBorder="0"
            ></iframe>
          )}
        </div>

        {/* Refined Overlays for Better Brightness */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-emerald-950/5 z-10"></div>
      </div>

      <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl animate-in fade-in slide-in-from-left duration-1000">
          <span className="inline-block text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 drop-shadow-sm">
            The <strong className="font-bold text-emerald-300">Best Resort Near Kelva Beach</strong>
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6">
            Where Luxury <br />
            <span className="italic font-light">Meets Nature</span>
          </h1>
          <p className="text-base md:text-xl text-white mb-8 md:mb-10 max-w-xl leading-relaxed drop-shadow-md opacity-90">
            Escape to a serene beachfront <strong className="text-emerald-100 font-bold">Kelva Resort</strong> just minutes away. Rated among the top <strong className="text-emerald-100 font-bold">Hotels Near Kelva Beach, Palghar</strong>, offering premium amenities and warm hospitality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/917219084299?text=I'm interested in booking a stay at Coconut Valley Resort"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-sm md:text-base md:px-8 md:py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group shadow-xl">
              Book Your Stay Now
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => document.getElementById('tariff')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-5 py-3 text-sm md:text-base md:px-8 md:py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all"
            >
              <Play size={18} className="fill-white" />
              Explore Rooms
            </button>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
        <span className="text-white text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">Scroll to explore</span>
        <div className="w-px h-12 bg-white/40"></div>
      </div>
    </section>
  );
};

export default Hero;
