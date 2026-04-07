import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Tariff from './Tariff';
import WeddingBanner from './WeddingBanner';
import Testimonials from './Testimonials';
import RoomSwitcher from './RoomSwitcher';

const Home: React.FC = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            if (section.id !== 'home') {
                section.classList.add('reveal-hidden');
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Hero />
            <div className="relative">
                <About />
                <div className="container mx-auto px-6 pb-12 flex justify-center -mt-12">
                    <Link to="/about" className="bg-emerald-800 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg">
                        Read Our Full Story
                    </Link>
                </div>
            </div>

            <RoomSwitcher sticky={false} />
            <div className="relative">
                <Tariff featuredOnly={true} />
            </div>

            <WeddingBanner />

            <Testimonials />

            <div className="py-20 bg-emerald-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready for an Unforgettable Getaway?</h2>
                    <p className="text-emerald-100/70 text-lg mb-12 max-w-2xl mx-auto">
                        Book your stay at Coconut Valley Resort and experience the perfect blend of luxury and nature.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/917219084299?text=I'm interested in booking a stay at Coconut Valley Resort"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-emerald-900 px-10 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all inline-block"
                        >
                            Book Your Stay Now
                        </a>
                        <Link to="/contact" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
