import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
        <div className="md:col-span-2 mb-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif text-center">Contact Our Kelva Beach Resort</h3>
          <p className="text-slate-500 text-center text-sm">We usually respond within a few hours. Looking forward to hosting you at our nature resort near Mumbai!</p>
        </div>

        <div className="space-y-2 group">
          <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 group-focus-within:text-emerald-700 transition-colors">Full Name</label>
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-3 outline-none focus:border-emerald-600 transition-all duration-300 placeholder:text-slate-300"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2 group">
          <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 group-focus-within:text-emerald-700 transition-colors">Email Address</label>
          <input
            type="email"
            className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-3 outline-none focus:border-emerald-600 transition-all duration-300 placeholder:text-slate-300"
            placeholder="email@example.com"
          />
        </div>

        <div className="space-y-2 group">
          <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 group-focus-within:text-emerald-700 transition-colors">Phone Number</label>
          <input
            type="tel"
            className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-3 outline-none focus:border-emerald-600 transition-all duration-300 placeholder:text-slate-300"
            placeholder="+91 00000 00000"
          />
        </div>

        <div className="space-y-2 group">
          <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 group-focus-within:text-emerald-700 transition-colors">Interested In</label>
          <div className="relative">
            <select className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-3 outline-none focus:border-emerald-600 transition-all duration-300 appearance-none cursor-pointer">
              <option>General Inquiry</option>
              <option>Premium Room Booking</option>
              <option>Day Package Request</option>
              <option>Event/Wedding Request</option>
              <option>Group Booking</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 4.5 3 3 3-3" /></svg>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-2 group">
          <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 group-focus-within:text-emerald-700 transition-colors">How can we help?</label>
          <textarea
            rows={4}
            className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-3 outline-none focus:border-emerald-600 transition-all duration-300 placeholder:text-slate-300 resize-none text-sm"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <div className="md:col-span-2 flex flex-col items-center mt-6">
          <button type="button" className="group bg-emerald-900 hover:bg-emerald-800 text-white px-12 py-5 rounded-2xl font-bold flex items-center gap-4 transition-all transform hover:translate-y-[-2px] active:scale-[0.98] shadow-lg shadow-emerald-900/20 w-full sm:w-auto">
            <span>Send Message</span>
            <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <Send size={14} />
            </div>
          </button>
          <p className="text-[10px] text-slate-400 mt-6 uppercase tracking-widest">
            * We respect your privacy. No spam, ever.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
