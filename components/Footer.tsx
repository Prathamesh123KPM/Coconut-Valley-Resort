import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../logococonut.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <img
                src={logo}
                alt="Coconut Valley Resort official logo"
                className="h-28 md:h-32 w-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              A Coconut Valley — Near Dandakhadi bridge, Kelva beach. Experience the perfect blend of luxury and nature in the heart of Palghar.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/acoconutvalley/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-colors group" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} className="text-slate-400 group-hover:text-white" />
              </a>
              <a href="https://www.instagram.com/coconut_valley_kelvabeach/?hl=en" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-colors group" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} className="text-slate-400 group-hover:text-white" />
              </a>
              <a href="https://www.youtube.com/@acoconutvalleyresort2219" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-colors group" target="_blank" rel="noopener noreferrer">
                <Youtube size={18} className="text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/rooms" className="text-slate-400 hover:text-white transition-colors">Accommodations</Link></li>
              <li><Link to="/events" className="text-slate-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="text-slate-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-8">Reservations</h4>
            <ul className="space-y-4">
              <li><a href="https://wa.me/917219084299?text=Hello!%20I'm%20interested%20in%20booking%20a%20room%20at%20Coconut%20Valley" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Book a Room</a></li>
              <li><a href="https://wa.me/917219084299?text=Hello!%20I'm%20interested%20in%20the%20Day%20Packages%20at%20Coconut%20Valley" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Day Packages</a></li>
              <li><a href="https://wa.me/917219084299?text=Hello!%20I'm%20inquiring%20about%20a%20Wedding%20at%20Coconut%20Valley" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Wedding Inquiries</a></li>
              <li><a href="https://wa.me/917219084299?text=Hello!%20I'm%20inquiring%20about%20a%20Corporate%20Event%20at%20Coconut%20Valley" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Corporate Events</a></li>
              <li><a href="https://wa.me/917219084299?text=Hello!%20I'm%20interested%20in%20Career%20opportunities%20at%20Coconut%20Valley" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-8">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin size={18} className="text-emerald-500 shrink-0" />
                <span>Near Dandakhadi bridge, Kelva beach, Tehsil & Dist – Palghar (Maharashtra)</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <span>+91 72190 84299<br /> +91 77700 77881</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <span>acoconutvalley@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col items-center gap-6 text-slate-500 text-xs font-medium tracking-wide text-center">
          <p>COPYRIGHT © Coconut valley designed by kpm digital solutions</p>
          <p className="max-w-4xl leading-relaxed">
            Near Dandakhadi bridge, Kelva beach Tehsil & Dist - Palghar (Maharashtra) | +91 72190 84299, 77700 77881 | acoconutvalley@gmail.com
          </p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
