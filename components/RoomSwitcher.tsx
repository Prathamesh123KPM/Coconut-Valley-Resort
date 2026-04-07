import React from 'react';
import { Link } from 'react-router-dom';
import { ROOMS } from '../constants';

interface RoomSwitcherProps {
    currentRoomId?: string;
    sticky?: boolean;
    className?: string;
}

const RoomSwitcher: React.FC<RoomSwitcherProps> = ({ currentRoomId, sticky = true, className = "" }) => {
    return (
        <div className={`${sticky ? 'sticky top-[88px] md:top-[110px] z-40 backdrop-blur-sm bg-slate-50/50' : 'bg-slate-50/30'} border-b border-slate-100 overflow-x-auto no-scrollbar py-4 ${className}`}>
            <div className="container mx-auto px-6">
                <div className="flex gap-6 md:gap-8 whitespace-nowrap min-w-max items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mr-2 shrink-0">Our Accommodations:</span>
                    {ROOMS.map((r) => {
                        const isActive = r.id === currentRoomId;
                        return (
                            <Link
                                key={r.id}
                                to={`/room/${r.id}`}
                                className={`px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all ${isActive
                                    ? 'bg-emerald-700 text-white shadow-sm'
                                    : 'bg-white border border-slate-200 text-slate-500 hover:border-emerald-200 hover:text-emerald-700'
                                    }`}
                            >
                                {r.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RoomSwitcher;
