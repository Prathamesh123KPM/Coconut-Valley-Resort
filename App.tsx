
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Suspense } from 'react';
import { ArrowUp } from 'lucide-react';
const Home = React.lazy(() => import('./components/Home'));
const RoomDetailPage = React.lazy(() => import('./components/RoomDetailPage'));
const AboutPage = React.lazy(() => import('./components/pages/AboutPage'));
const RoomsPage = React.lazy(() => import('./components/pages/RoomsPage'));
const AmenitiesPage = React.lazy(() => import('./components/pages/AmenitiesPage'));
const EventsPage = React.lazy(() => import('./components/pages/EventsPage'));
const GalleryPage = React.lazy(() => import('./components/pages/GalleryPage'));
const ContactPage = React.lazy(() => import('./components/pages/ContactPage'));
const BestResortsPalghar = React.lazy(() => import('./components/pages/BestResortsPalghar'));
const BestResortsKelvaBeach = React.lazy(() => import('./components/pages/BestResortsKelvaBeach'));
const OneDayResortPalghar = React.lazy(() => import('./components/pages/OneDayResortPalghar'));
const FamilyResortPalghar = React.lazy(() => import('./components/pages/FamilyResortPalghar'));
const CorporatePicnicPalghar = React.lazy(() => import('./components/pages/CorporatePicnicPalghar'));
const OneDayCorporatePalghar = React.lazy(() => import('./components/pages/OneDayCorporatePalghar'));
const BlogsPage = React.lazy(() => import('./components/pages/BlogsPage'));
const EcoFriendlyLuxury = React.lazy(() => import('./components/pages/EcoFriendlyLuxury'));
const DestinationWeddings = React.lazy(() => import('./components/pages/DestinationWeddings'));
const CoastalCuisine = React.lazy(() => import('./components/pages/CoastalCuisine'));
const HotelsKelvaBeachGuide = React.lazy(() => import('./components/pages/HotelsKelvaBeachGuide'));
const BestResortKelvaBeachGetaway = React.lazy(() => import('./components/pages/BestResortKelvaBeachGetaway'));
const NatureResortsPalgharKelva = React.lazy(() => import('./components/pages/NatureResortsPalgharKelva'));
import Footer from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';
import CanonicalUpdater from './components/CanonicalUpdater';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <CanonicalUpdater />
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-emerald-800 font-bold">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/room/:id" element={<RoomDetailPage />} />
            <Route path="/blog" element={<BlogsPage />} />
            <Route path="/blog/best-resorts-in-palghar" element={<BestResortsPalghar />} />
            <Route path="/blog/best-resorts-in-kelva-beach" element={<BestResortsKelvaBeach />} />
            <Route path="/blog/best-one-day-resort-in-palghar" element={<OneDayResortPalghar />} />
            <Route path="/blog/best-family-resort-near-palghar" element={<FamilyResortPalghar />} />
            <Route path="/blog/corporate-picnic-resorts-near-mumbai" element={<CorporatePicnicPalghar />} />
            <Route path="/blog/1-day-corporate-outing-near-mumbai" element={<OneDayCorporatePalghar />} />
            <Route path="/blog/eco-friendly-luxury-palghar" element={<EcoFriendlyLuxury />} />
            <Route path="/blog/destination-weddings-kelva-beach" element={<DestinationWeddings />} />
            <Route path="/blog/coastal-cuisine-palghar" element={<CoastalCuisine />} />
            <Route path="/blog/hotels-near-kelva-beach-palghar-guide" element={<HotelsKelvaBeachGuide />} />
            <Route path="/blog/best-resort-near-kelva-beach-getaway" element={<BestResortKelvaBeachGetaway />} />
            <Route path="/blog/nature-resorts-near-palghar-kelva" element={<NatureResortsPalgharKelva />} />
          </Routes>
        </Suspense>
        <Footer />

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed right-6 z-40 bg-slate-900 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-emerald-700 active:scale-95 group flex items-center justify-center border border-white/20 ${
            showScrollTop ? 'bottom-28 opacity-100 translate-y-0' : 'bottom-28 opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
          <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            Back to Top
          </span>
        </button>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/917219084299?text=Hello!%20I%20have%20an%20inquiry%20regarding%20Coconut%20Valley%20Resort."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="absolute right-full mr-4 bg-emerald-900 text-white px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            Chat with us
          </span>
        </a>
      </div>
    </Router>
  );
}

export default App;
