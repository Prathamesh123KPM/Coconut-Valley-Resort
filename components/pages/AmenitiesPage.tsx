import React from 'react';
import { AMENITIES } from '../../constants';
import {
    Waves,
    Baby,
    Palmtree,
    Utensils,
    Gamepad2,
    ShieldCheck,
    Wifi,
    Coffee,
    Wind,
    Tv,
    Trash2,
    Sparkles
} from 'lucide-react';

const AmenitiesPage: React.FC = () => {
    // Enhanced amenity data with descriptions
    const detailedAmenities = [
        {
            ...AMENITIES[0],
            description: 'Dive into our sprawling infinity pool that merges with the horizon of coconut groves. Temperature controlled for your comfort.',
            category: 'Leisure'
        },
        {
            ...AMENITIES[1],
            description: 'A safe and fun shallow pool specifically designed for our little guests to splash around under supervision.',
            category: 'Family'
        },
        {
            ...AMENITIES[2],
            description: 'Over 2 acres of meticulously manicured lawns perfect for morning yoga, evening strolls, or outdoor events.',
            category: 'Nature'
        },
        {
            ...AMENITIES[3],
            description: 'Savor organic local Maharashtrian cuisine and global favorites prepared by our expert chefs.',
            category: 'Dining'
        },
        {
            ...AMENITIES[4],
            description: 'From carrom and chess to badminton and cricket, we have activities for every age and energy level.',
            category: 'Activity'
        },
        {
            ...AMENITIES[5],
            description: 'Professional hospitality staff available around the clock to ensure your stay is seamless and comfortable.',
            category: 'Services'
        },
        {
            ...AMENITIES[6],
            description: 'Private pathway leading directly to the pristine sands of Kelva Beach, just a 2-minute walk away.',
            category: 'Experience'
        },
        {
            ...AMENITIES[7],
            description: 'Stay connected with high-speed fiber internet throughout the property, including the gardens and pool area.',
            category: 'Technology'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="pt-24">
                {/* Banner Section */}
                <div className="bg-emerald-900 text-white py-24 relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Resort Facilities</h1>
                        <p className="text-emerald-100/70 text-xl max-w-2xl mx-auto italic">
                            "Every corner designed for your comfort, every service tailored for your joy."
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-800/20 skew-x-12 transform translate-x-20"></div>
                </div>

                <div className="container mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {detailedAmenities.map((amenity, i) => (
                            <div key={i} className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
                                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 mb-8 group-hover:scale-110 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-500">
                                    {React.cloneElement(amenity.icon as any, { size: 32 })}
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">{amenity.category}</span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{amenity.name}</h3>
                                <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                                    {amenity.description}
                                </p>
                                <div className="pt-6 border-t border-slate-50 flex items-center gap-2 text-emerald-800 font-bold text-sm">
                                    <span>Explore detail</span>
                                    <Sparkles size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Features Bar */}
                <div className="bg-white py-20 border-t border-slate-100">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Standard in Every Room</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { icon: <Coffee />, text: 'Daily Breakfast' },
                                { icon: <Wind />, text: 'Air Conditioning' },
                                { icon: <Tv />, text: 'Smart Entertainment' },
                                { icon: <ShieldCheck />, text: 'Prime Security' },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className="text-emerald-700 mb-4">{item.icon}</div>
                                    <span className="font-bold text-slate-700">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmenitiesPage;
