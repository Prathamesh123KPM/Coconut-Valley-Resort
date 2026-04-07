import React from 'react';
import Contact from '../Contact';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Headphones } from 'lucide-react';

const ContactPage: React.FC = () => {
    const contactInfo = [
        {
            icon: <MapPin size={28} />,
            title: "Our Location",
            details: "Near Dandakhadi Bridge, Kelva Beach, Palghar, Maharashtra",
            link: "https://maps.google.com"
        },
        {
            icon: <Phone size={28} />,
            title: "Call & WhatsApp",
            details: "+91 77700 77881, +91 77700 77883",
            link: "https://wa.me/917770077881?text=Hello!%20I'm%20contacting%20you%20from%20the%20website%20regarding%20an%20inquiry."
        },
        {
            icon: <Mail size={28} />,
            title: "Email Us",
            details: "Acoconutvalley@gmail.com",
            link: "mailto:Acoconutvalley@gmail.com"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden">
            <div className="pt-24">
                {/* 1. Full Width Map Header */}
                <div className="h-[450px] w-full relative bg-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3618965300957!2d72.7360036!3d19.6004592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7023f809da503%3A0x5df09ef2f551bcc!2sA%20Coconut%20Valley%20Resort!5e1!3m2!1sen!2sin!4v1773990312489!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="contrast-[1.1]"
                    ></iframe>
                </div>

                <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-24">
                    <div className="flex flex-col items-center">
                        {/* 2. Contact Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {contactInfo.map((info, i) => (
                                <a
                                    key={i}
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 text-center hover:translate-y-[-8px] transition-all duration-500 group"
                                >
                                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                                        <div className="group-hover:scale-110 transition-transform">{info.icon}</div>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{info.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{info.details}</p>
                                </a>
                            ))}
                        </div>

                        {/* 3. Centered Support Features */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
                            {[
                                { icon: <Clock size={16} />, text: "24/7 Front Desk" },
                                { icon: <ShieldCheck size={16} />, text: "Secure Premises" },
                                { icon: <Headphones size={16} />, text: "Personal Concierge" },
                                { icon: <MapPin size={16} />, text: "Beach Access" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-center gap-3 py-4 bg-emerald-950/5 rounded-2xl border border-emerald-900/5 text-emerald-900 font-bold text-xs">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* 4. The Centered Form */}
                        <div className="w-full max-w-5xl">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">Drop us a Line</h2>
                                <p className="text-slate-500 max-w-xl mx-auto">
                                    If you have any specific requests or questions, please fill out the form below and we'll get back to you shortly.
                                </p>
                            </div>

                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

