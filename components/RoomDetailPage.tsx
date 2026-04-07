import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ROOMS } from '../constants';
import {
    Users,
    Info,
    Check,
    Shield,
    Calendar,
    Phone,
    ArrowLeft
} from 'lucide-react';
import RoomSwitcher from './RoomSwitcher';

const RoomDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const room = ROOMS.find((r) => r.id === id);

    const isDormitory = room?.name.toLowerCase().includes('dormitory');
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        if (!room) {
            navigate('/');
        }
    }, [room, navigate]);

    if (!room) {
        return <div className="pt-24 text-center">Room not found</div>;
    }

    const getGalleryImage = (index: number) => {
        const images = [room.image, ...(room.gallery || [])];
        return images[index] || room.image;
    };

    return (
        <div className="min-h-screen bg-white pb-24 pt-[88px] md:pt-[110px]">
            {/* Room Switcher Nav */}
            <RoomSwitcher currentRoomId={room.id} />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Column: Images (Sticky on Desktop) */}
                    <div className="lg:w-1/2 lg:sticky lg:top-36 h-fit">
                        {/* Back button above images */}
                        <div className="mb-8">
                            <Link
                                to="/#tariff"
                                className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-emerald-700 transition-colors py-2"
                            >
                                <ArrowLeft size={20} />
                                <span>Back to Tariff</span>
                            </Link>
                        </div>

                        {/* Main Image */}
                        <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[calc(100vh-18rem)] rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl mb-6">
                            <img
                                src={getGalleryImage(activeImageIndex)}
                                alt={`${room.name} accommodation interior at Coconut Valley Resort`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />

                            {/* Image Badge (Left) */}
                            <div className="absolute top-6 left-6">
                                <span className="bg-white/90 backdrop-blur-md text-emerald-900 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                    Room Gallery
                                </span>
                            </div>

                            {/* Inventory Badge (Right) */}
                            {(() => {
                                const counts: Record<string, string> = {
                                    'Jacuzzi Bliss': '1 Unit',
                                    'Tropical Bliss': '4 Units',
                                    'Night Elegance Suite': '2 Suites',
                                    'Star Paradise': '1 Unit',
                                    'Triangle Room': '2 Units',
                                    'Wooden Room': '2 Units',
                                    'Deluxe Room': '6 Units',
                                    'Wooden Dormitory': '2 Units',
                                    'Family Dormitory': '1 Unit'
                                };
                                const count = counts[room.name];
                                if (count) {
                                    return (
                                        <div className="absolute top-6 right-6">
                                            <span className="bg-emerald-700/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                                {count} Available
                                            </span>
                                        </div>
                                    );
                                }
                                return null;
                            })()}
                        </div>

                        {/* Image Selector Thumbnails */}
                        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                            {[room.image, ...(room.gallery || [])].map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImageIndex(i)}
                                    className={`w-16 h-12 md:w-24 md:h-16 shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${activeImageIndex === i ? 'border-emerald-500 scale-105 shadow-xl' : 'border-slate-200 opacity-60'}`}
                                >
                                    <img src={img} alt={`${room.name} gallery thumbnail image ${i + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Room Details & Booking */}
                    <div className="lg:w-1/2 pt-12 lg:pt-24">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="text-emerald-700 font-bold uppercase tracking-widest text-[10px] px-4 py-1.5 bg-emerald-50 rounded-full">
                                {room.id.replace(/-/g, ' ')}
                            </span>
                            <div className="flex items-center gap-1 text-slate-400 text-sm font-medium">
                                <Users size={16} />
                                {room.capacity}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">{room.name}</h1>

                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 md:mb-12 border-l-4 border-emerald-100 pl-6">
                            {room.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 underline decoration-emerald-200 decoration-4 underline-offset-8">
                                    <Info size={18} className="text-emerald-700" />
                                    Luxury Features
                                </h4>
                                <ul className="space-y-4">
                                    {room.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-4 text-slate-600">
                                            <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                                <Check size={14} className="text-emerald-700" />
                                            </div>
                                            <span className="font-medium text-sm md:text-base">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 underline decoration-emerald-200 decoration-4 underline-offset-8">
                                    <Shield size={18} className="text-emerald-700" />
                                    Services Included
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Daily Housekeeping', 'Butler Service', 'All Meals', 'Airport Shuttle', 'Wifi'].map((s, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-500 text-[10px] font-bold uppercase tracking-wide">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Integrated Booking Card */}
                        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white shadow-2xl mb-12">
                            <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-6">Booking Details</h4>
                            <div className="space-y-4">
                                <a
                                    href="https://wa.me/917219084299"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl shadow-emerald-900/40 transition-all flex items-center justify-center gap-3"
                                >
                                    <Calendar size={20} />
                                    Check Availability
                                </a>
                                <a
                                    href="tel:+917219084299"
                                    className="w-full bg-white/10 hover:bg-white/20 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
                                >
                                    <Phone size={20} />
                                    Enquire via Call
                                </a>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <p className="text-[8px] text-white/30 uppercase tracking-[0.2em] font-bold mb-4">Secured by Luxury Hospitality Group</p>
                                <div className="flex justify-center gap-3 grayscale opacity-30">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stay Packages Section */}
                <div className="mt-20 pt-20 border-t border-slate-100">
                    <div className="text-center mb-12">
                        <span className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Flexible Pricing</span>
                        <h2 className="text-4xl font-bold text-slate-900">STAY PACKAGES</h2>
                    </div>

                    <div className={`grid grid-cols-1 ${isDormitory ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8`}>
                        {/* Primary Package */}
                        {(() => {
                            const accMap: Record<string, string> = {
                                'Triangle Room': '5,000',
                                'Night Elegance Suite': '4,000',
                                'Tropical Bliss': '4,500',
                                'Jacuzzi Bliss': '5,000',
                                'Deluxe Room': '2,500',
                                'Wooden Room': '2,400'
                            };
                            let price = accMap[room.name];
                            let title = "Accommodation";
                            let capacityText = "For 2 adults no food included";
                            let label = "Mon to Thus";
                            let subtext = "(2 people in a room)";

                            if (isDormitory) {
                                price = "2,400";
                                title = "Mon to Thus";
                                capacityText = "12 adults capacity";
                                label = "Price per person";
                                subtext = "Includes All Meals & Resort Access";
                            }

                            if (price || isDormitory) {
                                return (
                                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-emerald-200 transition-all group overflow-hidden relative">
                                        <div className="absolute top-0 right-0 p-4">
                                            <span className="bg-emerald-100 text-emerald-800 text-[8px] font-bold uppercase px-2 py-0.5 rounded-full">Classic</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 italic">{title}</h3>
                                        <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider mb-6 flex items-center gap-1">
                                            <Users size={12} />
                                            {capacityText}
                                        </div>

                                        <div className="space-y-3 mb-8">
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">{label}</div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-slate-600 font-medium">{room.name}</span>
                                                <span className="font-bold text-slate-900 italic">₹{price}</span>
                                            </div>
                                            <div className="text-[10px] text-slate-400 mt-2 font-medium">{subtext}</div>
                                        </div>

                                        <div className="flex justify-between items-center mb-8 px-4 py-3 bg-white rounded-xl border border-dashed border-slate-200">
                                            <div className="text-center">
                                                <div className="text-[8px] font-bold text-slate-400 uppercase">Check-in</div>
                                                <div className="text-sm font-bold text-emerald-800">11 AM</div>
                                            </div>
                                            <div className="w-px h-6 bg-slate-200" />
                                            <div className="text-center">
                                                <div className="text-[8px] font-bold text-slate-400 uppercase">Check-out</div>
                                                <div className="text-sm font-bold text-emerald-800">10 AM</div>
                                            </div>
                                        </div>

                                        <a
                                            href={`https://wa.me/917219084299?text=I want to book the ${title} package for ${room.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center py-4 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition-all"
                                        >
                                            Get Now
                                        </a>
                                    </div>
                                );
                            }
                            return null;
                        })()}

                        {/* Secondary Package */}
                        {(() => {
                            const mealsMap: Record<string, string> = {
                                'Triangle Room': '9,000',
                                'Night Elegance Suite': '8,000',
                                'Tropical Bliss': '8,500',
                                'Jacuzzi Bliss': '9,000',
                                'Deluxe Room': '6,500',
                                'Wooden Room': '6,000'
                            };
                            let price = mealsMap[room.name];
                            let title = "Stay with Meals";
                            let capacityText = "Mon to Thus package per night";

                            if (isDormitory) {
                                price = "2,600";
                                title = "Fri to Sun";
                                capacityText = "12 adults capacity";
                            }

                            if (price || isDormitory) {
                                return (
                                    <div className="bg-emerald-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4">
                                            <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">Popular</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 italic">{title}</h3>
                                        <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-6 flex items-center gap-1">
                                            <Users size={12} />
                                            {capacityText}
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                                <span className="text-emerald-100/70 font-medium text-sm">{room.name}</span>
                                                <span className="font-bold text-emerald-400 italic">₹{price}{isDormitory ? 'pp' : ''}</span>
                                            </div>

                                            {!isDormitory ? (
                                                <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-wide text-emerald-100/50">
                                                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Lunch
                                                    </div>
                                                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Hi-tea
                                                    </div>
                                                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Dinner
                                                    </div>
                                                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Breakfast
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-[10px] text-emerald-100/50 mt-2 font-medium">Includes All Meals & Resort Access</div>
                                            )}
                                        </div>

                                        <div className="flex justify-between items-center mb-8 px-4 py-3 bg-white/5 rounded-xl border border-dashed border-white/10">
                                            <div className="text-center">
                                                <div className="text-[8px] font-bold text-emerald-400/50 uppercase">Check-in</div>
                                                <div className="text-sm font-bold">11 AM</div>
                                            </div>
                                            <div className="w-px h-6 bg-white/10" />
                                            <div className="text-center">
                                                <div className="text-[8px] font-bold text-emerald-400/50 uppercase">Check-out</div>
                                                <div className="text-sm font-bold">11 AM</div>
                                            </div>
                                        </div>

                                        <a
                                            href={`https://wa.me/917219084299?text=I want to book the ${title} package for ${room.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center py-4 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-all"
                                        >
                                            Get Now
                                        </a>
                                    </div>
                                );
                            }
                            return null;
                        })()}

                        {/* Group Package */}
                        {!isDormitory && (
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-emerald-200 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="bg-slate-200 text-slate-600 text-[8px] font-bold uppercase px-2 py-0.5 rounded-full">Groups</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 italic">Group Package</h3>
                                <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider mb-6 flex items-center gap-1">
                                    <Users size={12} />
                                    {room.name === 'Wooden Room' ? 'Min 6 person minimum' : 'Min 3+ People required'}
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">Price per person</div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-600 font-medium">{room.name}</span>
                                        <span className="font-bold text-slate-900 italic">₹{room.name === 'Night Elegance Suite' ? '3,200' : '3,500'}</span>
                                    </div>
                                    <div className="text-[10px] text-slate-400 mt-2 font-medium">Includes All Meals & Resort Access</div>
                                </div>

                                <div className="flex justify-between items-center mb-8 px-4 py-3 bg-white rounded-xl border border-dashed border-slate-200">
                                    <div className="text-center">
                                        <div className="text-[8px] font-bold text-slate-400 uppercase">Check-in</div>
                                        <div className="text-sm font-bold text-emerald-800">11 AM</div>
                                    </div>
                                    <div className="w-px h-6 bg-slate-200" />
                                    <div className="text-center">
                                        <div className="text-[8px] font-bold text-slate-400 uppercase">Check-out</div>
                                        <div className="text-sm font-bold text-emerald-800">10 AM</div>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/917219084299?text=Interested in Group Package for 20+ people"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-4 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/10"
                                >
                                    Enquire Now
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailPage;
