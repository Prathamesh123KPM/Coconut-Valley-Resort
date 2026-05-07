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
    ArrowLeft,
    Play
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
            <RoomSwitcher currentRoomId={room.id} sticky={false} />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Column: Images */}
                    <div className="lg:w-1/2 flex flex-col">
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
                                    'Night Elegance Suite': '2 Units Available ',
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
                                                {count.includes('Available') ? count : `${count} Available`}
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
                                    <img loading="lazy" src={img} alt={`${room.name} gallery thumbnail image ${i + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                        
                        {/* Integrated Booking Card (Moved from right column for better layout balance) */}
                        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white shadow-2xl mt-12 lg:mt-auto hidden lg:block">
                            <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-6">Booking Details</h4>
                            <div className="space-y-4">
                                <a
                                    href="https://wa.me/917219084299"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg shadow-xl shadow-emerald-900/40 transition-all flex items-center justify-center gap-3"
                                >
                                    <Calendar size={20} />
                                    Check Availability
                                </a>
                                <a
                                    href="tel:+917219084299"
                                    className="w-full bg-white/10 hover:bg-white/20 text-white py-3 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-3 transition-all"
                                >
                                    <Phone size={20} />
                                    Enquire via Call
                                </a>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <p className="text-[8px] text-white/30 uppercase tracking-[0.2em] font-bold mb-4">By Coconut Valley</p>
                                <div className="flex justify-center gap-3 grayscale opacity-30">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Room Details & Booking */}
                    <div className="lg:w-1/2 pt-12 lg:pt-24 flex flex-col">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="text-emerald-700 font-bold uppercase tracking-widest text-[10px] px-4 py-1.5 bg-emerald-50 rounded-full">
                                {room.id.replace(/-/g, ' ')}
                            </span>
                            <div className="flex items-center gap-1 text-slate-400 text-sm font-medium">
                                <Users size={16} />
                                {room.capacity}
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">{room.name}</h1>

                        <p className="text-slate-600 text-base md:text-xl leading-relaxed mb-8 md:mb-12 border-l-4 border-emerald-100 pl-4 md:pl-6">
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
                                    {['Daily Housekeeping', 'Butler Service', 'All Meals', 'Airport Transport', 'Wifi'].map((s, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-500 text-[10px] font-bold uppercase tracking-wide">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Room Tour Video Section */}
                        <div className="mt-12 lg:mt-auto">
                            <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 underline decoration-emerald-200 decoration-4 underline-offset-8">
                                <Play size={18} className="text-emerald-700" />
                                Room Tour
                            </h4>
                            <a href="https://www.youtube.com/@acoconutvalleyresort2219" target="_blank" rel="noopener noreferrer" className="block relative aspect-video rounded-[2.5rem] overflow-hidden group shadow-2xl">
                                <img 
                                    src={room.image} 
                                    alt={`${room.name} Room Tour`} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xl">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-700 pl-1 shadow-inner">
                                            <Play size={20} className="fill-current" />
                                        </div>
                                    </div>
                                    <h4 className="text-white font-bold tracking-wide">Watch Tour</h4>
                                </div>
                            </a>
                        </div>

                        {/* Mobile Booking Card (Only visible on mobile/tablet to maintain logical order) */}
                        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white shadow-2xl mt-12 lg:hidden">
                            <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-6">Booking Details</h4>
                            <div className="space-y-4">
                                <a
                                    href="https://wa.me/917219084299"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg shadow-xl shadow-emerald-900/40 transition-all flex items-center justify-center gap-3"
                                >
                                    <Calendar size={20} />
                                    Check Availability
                                </a>
                                <a
                                    href="tel:+917219084299"
                                    className="w-full bg-white/10 hover:bg-white/20 text-white py-3 md:py-5 rounded-xl md:rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-3 transition-all"
                                >
                                    <Phone size={20} />
                                    Enquire via Call
                                </a>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <p className="text-[8px] text-white/30 uppercase tracking-[0.2em] font-bold mb-4">By Coconut Valley</p>
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
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">STAY PACKAGES</h2>
                        <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-800 text-sm font-bold rounded-full border border-emerald-200 shadow-sm">
                            * Children aged 4-10 years will be charged half the rate.
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 items-stretch">
                        {/* Primary Package */}
                        {(() => {
                            const accMap: Record<string, string> = {
                                'Triangle Room': '5,000',
                                'Night Elegance Suite': '4,000',
                                'Tropical Bliss': '4,500',
                                'Jacuzzi Bliss': '5,000',
                                'Deluxe Room': '2,500',
                                'Wooden Room': '7,000',
                                'Star Paradise': '6,000'
                            };
                            let price = accMap[room.name];
                            let title = "Accommodation";
                            let capacityText = room.name === 'Wooden Room' ? "6-8 adults capacity" : "For 2 adults no food included";
                            let label = "Accommodation";
                            let subtext = room.name === 'Wooden Room' ? "(6-8 people in a room)" : "(2 people in a room)";

                            if (isDormitory) {
                                price = room.name === 'Family Dormitory' ? "10,000" : "9,000";
                                title = "Accommodation";
                                capacityText = "12 adults capacity";
                                label = "Price per Night";
                                subtext = "Includes All Meals & Resort Access";
                            }

                            if (price || isDormitory) {
                                return (
                                    <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-emerald-200 transition-all group overflow-hidden relative flex flex-col items-center text-center w-full md:w-[380px] shadow-2xl">
                                        <div className="absolute top-0 right-0 p-4">
                                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-3 py-1 rounded-full">Classic</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1 italic">{title}</h3>
                                        <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-3">(Mon to Thus)</div>
                                        <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider mb-6 flex items-center gap-1 justify-center">
                                            <Users size={12} />
                                            {capacityText}
                                        </div>

                                        <div className="space-y-3 mb-8 w-full">
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">{label}</div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-slate-600 font-medium text-base">{room.name}</span>
                                                    <span className="text-xl md:text-2xl font-black text-slate-900 italic">₹{price}</span>
                                                </div>
                                                <div className="flex justify-between items-center mt-3">
                                                    <span className="text-slate-600 font-medium text-base">Extra Bed</span>
                                                    <span className="text-xl md:text-2xl font-black text-slate-900 italic">₹500</span>
                                                </div>
                                            </div>
                                            <div className="text-[10px] text-slate-400 mt-2 font-medium">{subtext}</div>
                                        </div>

                                        <div className="flex justify-between items-center mb-8 px-4 py-3 bg-white rounded-xl border border-dashed border-slate-200 w-full mt-auto">
                                            <div className="text-center">
                                                <div className="text-[8px] font-bold text-slate-400 uppercase">Check-in</div>
                                                <div className="text-sm font-bold text-emerald-800">11:30 AM</div>
                                            </div>
                                            <div className="w-px h-6 bg-slate-200" />
                                            <div className="text-center">
                                                <div className="text-[8px] font-bold text-slate-400 uppercase">Check-out</div>
                                                <div className="text-sm font-bold text-emerald-800">10:30 AM</div>
                                            </div>
                                        </div>

                                        <a
                                            href={`https://wa.me/917219084299?text=I want to book the ${title} package for ${room.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center py-3 md:py-4 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition-all mt-auto"
                                        >
                                            Get Now
                                        </a>
                                    </div>
                                );
                            }
                            return null;
                        })()}

                        {/* Group Package */}
                        {true && (
                            <div className="bg-emerald-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col items-center text-center group w-full md:w-[380px]">
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">Groups</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 italic">Group Package</h3>
                                <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-6 flex items-center gap-2 justify-center">
                                    <Users size={12} />
                                    {(() => {
                                        if (room.name === 'Star Paradise') return 'min 4 person';
                                        if (['Tropical Bliss', 'Night Elegance Suite', 'Deluxe Room', 'Jacuzzi Bliss', 'Triangle Room'].includes(room.name)) return '3 person minimum';
                                        if (room.name === 'Wooden Room') return '6 person minimum';
                                        if (room.name === 'Wooden Dormitory') return 'min 10 People';
                                        if (room.name === 'Family Dormitory') return 'min 12 People';
                                        return 'Min 8 People required';
                                    })()}
                                </div>

                                <div className="space-y-3 mb-8 w-full">
                                    <div className="text-[10px] font-bold text-emerald-400/50 uppercase tracking-widest border-b border-white/10 pb-2">Price per Night</div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-emerald-100/70 font-medium text-base">{room.name}</span>
                                        <span className="text-xl md:text-2xl font-black text-emerald-400 italic whitespace-nowrap">
                                            {(() => {
                                                const groupMap: Record<string, string> = {
                                                    'Night Elegance Suite': '3,200',
                                                    'Deluxe Room': '2,600',
                                                    'Wooden Room': '2,600',
                                                    'Wooden Dormitory': '2,600',
                                                    'Family Dormitory': '2,600'
                                                };
                                                return (
                                                    <>
                                                        ₹{groupMap[room.name] || '3,500'}
                                                        <span className="text-xs font-bold text-emerald-400/60 ml-1 not-italic tracking-normal">/ Per Person</span>
                                                    </>
                                                );
                                            })()}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-wide text-emerald-100/50 mt-4">
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
                                    <div className="text-[10px] text-emerald-100/50 mt-2 font-medium italic">* Includes Resort & Pool Access</div>
                                </div>

                                <div className="flex justify-between items-center mb-8 px-4 py-3 bg-white/5 rounded-xl border border-dashed border-white/10 w-full mt-auto">
                                    <div className="text-center">
                                        <div className="text-[8px] font-bold text-emerald-400/50 uppercase">Check-in</div>
                                        <div className="text-sm font-bold">11:30 AM</div>
                                    </div>
                                    <div className="w-px h-6 bg-white/10" />
                                    <div className="text-center">
                                        <div className="text-[8px] font-bold text-emerald-400/50 uppercase">Check-out</div>
                                        <div className="text-sm font-bold">10:30 AM</div>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/917219084299?text=Interested in Group Package for 20+ people"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-3 md:py-4 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-all shadow-lg mt-auto"
                                >
                                    Enquire Now
                                </a>
                            </div>
                        )}

                        {/* Secondary Package */}
                        {(() => {
                            const mealsMap: Record<string, string> = {
                                'Triangle Room': '9,000',
                                'Night Elegance Suite': '8,000',
                                'Tropical Bliss': '8,500',
                                'Jacuzzi Bliss': '9,000',
                                'Deluxe Room': '6,500',
                                'Star Paradise': '9,000'
                            };
                            let price = mealsMap[room.name];
                            let title = "Twin Sharing Package";
                            let capacityText = "Package per night";

                            if (price) {
                                return (
                                    <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 hover:border-emerald-200 transition-all group overflow-hidden relative shadow-2xl flex flex-col items-center text-center w-full md:w-[380px]">
                                        <div className="absolute top-0 right-0 p-4">
                                            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase px-3 py-1 rounded-full">Stay & Dine</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 italic">{title}</h3>
                                        <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider mb-6 flex items-center gap-1 justify-center">
                                            <Users size={12} />
                                            {capacityText}
                                        </div>

                                        <div className="space-y-4 mb-8 w-full">
                                            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                                                <span className="text-slate-600 font-medium text-base">{room.name}</span>
                                                <span className="text-xl md:text-2xl font-black text-slate-900 italic whitespace-nowrap">
                                                    ₹{price}
                                                    <span className="text-xs font-bold text-slate-500 ml-1 not-italic tracking-normal">
                                                        {isDormitory ? 'pp ' : ''}/ Per Night
                                                    </span>
                                                </span>
                                            </div>

                                            {!isDormitory ? (
                                                <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-wide text-slate-400">
                                                    <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2">
                                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Lunch
                                                    </div>
                                                    <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2">
                                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Hi-tea
                                                    </div>
                                                    <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2">
                                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Dinner
                                                    </div>
                                                    <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2">
                                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Breakfast
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-[10px] text-slate-400 mt-2 font-medium">Includes All Meals & Resort Access</div>
                                            )}
                                        </div>

                                        <div className="flex justify-between items-center mb-8 px-4 py-3 bg-slate-50 rounded-xl border border-dashed border-slate-200 mt-auto w-full">
                                            <div className="text-center">
                                                <div className="text-[8px] font-bold text-slate-400 uppercase">Check-in</div>
                                                <div className="text-sm font-bold text-emerald-800">11:30 AM</div>
                                            </div>
                                            <div className="w-px h-6 bg-slate-200" />
                                            <div className="text-center">
                                                <div className="text-[8px] font-bold text-slate-400 uppercase">Check-out</div>
                                                <div className="text-sm font-bold text-emerald-800">10:30 AM</div>
                                            </div>
                                        </div>

                                        <a
                                            href={`https://wa.me/917219084299?text=I want to book the ${title} package for ${room.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center py-3 md:py-4 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/10 mt-auto"
                                        >
                                            Get Now
                                        </a>
                                    </div>
                                );
                            }
                            return null;
                        })()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailPage;
