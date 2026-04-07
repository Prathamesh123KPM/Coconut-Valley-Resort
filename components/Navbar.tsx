import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import logo from '../logococonut.png';
import { ROOMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Rooms', href: '/rooms', hasDropdown: true },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
  ];

  const isHomePage = pathname === '/';
  const isScrolledOrNotHome = isScrolled || !isHomePage;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolledOrNotHome ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Coconut Valley Resort official logo"
            className={`h-16 md:h-20 w-auto transition-all duration-300 ${isScrolledOrNotHome ? 'brightness-0' : ''}`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.hasDropdown) {
              return (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className={`text-sm font-medium tracking-wide transition-all flex items-center gap-1 ${isActive
                      ? (isScrolledOrNotHome ? 'text-emerald-700 font-bold' : 'text-emerald-300 font-bold')
                      : (isScrolledOrNotHome ? 'text-slate-700 hover:text-emerald-600' : 'text-white hover:text-emerald-200')
                      }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-4 min-w-[500px] overflow-hidden text-left">
                      <div className="grid grid-cols-2 gap-2">
                        {ROOMS.map((room) => (
                          <Link
                            key={room.id}
                            to={`/room/${room.id}`}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-50 transition-colors group/item"
                          >
                            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                              <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-900 group-hover/item:text-emerald-700 transition-colors line-clamp-1">{room.name}</span>
                              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">{room.capacity}</span>
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 mt-1 pt-2 border-t border-slate-100">
                          <Link
                            to="/rooms"
                            className="flex items-center justify-center py-2 text-[10px] font-bold uppercase tracking-widest text-emerald-700 hover:text-emerald-800"
                          >
                            View All Accommodations
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-all ${isActive
                  ? (isScrolledOrNotHome ? 'text-emerald-700 font-bold' : 'text-emerald-300 font-bold')
                  : (isScrolledOrNotHome ? 'text-slate-700 hover:text-emerald-600' : 'text-white hover:text-emerald-200')
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex items-center space-x-4 pl-4 border-l border-slate-300/30">
            <a href="tel:+917219084299" className={`flex items-center gap-2 text-sm font-semibold ${isScrolledOrNotHome ? 'text-emerald-800' : 'text-white'}`}>
              <Phone size={16} />
              +91 72190 84299
            </a>
            <Link
              to="/contact"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className={isScrolledOrNotHome ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolledOrNotHome ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-white transition-transform duration-500 transform overflow-y-auto ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center pt-24 pb-12 space-y-6">
          <button className="absolute top-6 right-6 p-2 text-slate-900" onClick={() => setIsMenuOpen(false)}>
            <X size={32} />
          </button>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.hasDropdown) {
              return (
                <div key={link.name} className="w-full flex flex-col items-center">
                  <button
                    onClick={() => setIsRoomsOpen(!isRoomsOpen)}
                    className={`text-2xl font-semibold flex items-center gap-2 ${isActive ? 'text-emerald-700' : 'text-slate-800'}`}
                  >
                    {link.name}
                    <ChevronDown size={20} className={`transition-transform duration-300 ${isRoomsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`w-full bg-slate-50 transition-all duration-300 overflow-hidden ${isRoomsOpen ? 'max-h-[600px] py-6' : 'max-h-0'}`}>
                    <div className="flex flex-col items-center gap-6">
                      {ROOMS.map(room => (
                        <Link
                          key={room.id}
                          to={`/room/${room.id}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-lg font-medium text-slate-600 hover:text-emerald-700"
                        >
                          {room.name}
                        </Link>
                      ))}
                      <Link
                        to="/rooms"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xs font-bold text-emerald-800 uppercase tracking-widest pt-2"
                      >
                        View All Rooms
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-semibold transition-colors ${isActive ? 'text-emerald-700' : 'text-slate-800 hover:text-emerald-700'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex flex-col items-center space-y-4 pt-8">
            <a href="tel:+917219084299" className="flex items-center gap-2 text-lg font-bold text-emerald-900">
              <Phone size={20} />
              +91 72190 84299
            </a>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-emerald-700 text-white px-10 py-4 rounded-full text-lg font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
