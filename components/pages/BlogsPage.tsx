import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';
import kelvaImg from '../../traiangleroom (1).webp';
import oneDayImg from '../../coconutpool.webp';
import palgharImg from '../../coconuthome.webp';
import familyImg from '../../familydormitory.webp';
import corporateImg from '../../coconutwedding1.webp';

const BLOG_POSTS = [
    {
        id: 'best-resorts-in-kelva-beach',
        title: 'Best Resorts in Kelva Beach Near Palghar for Family & Couples',
        excerpt: 'Escape the city chaos and discover your perfect coastal sanctuary at Kelva Beach\'s premier destination for families and romantic getaways.',
        image: kelvaImg,
        date: 'March 20, 2026',
        author: 'Coconut Valley',
        readTime: '5 min read'
    },
    {
        id: '1-day-corporate-outing-near-mumbai',
        title: 'The Perfect 1 Day Corporate Outing Near Mumbai: Rejuvenate Your Team at Kelva Beach',
        excerpt: 'Maximize team bonding without the overnight commitment. Discover our structured one-day corporate packages designed for impact and fun.',
        image: oneDayImg,
        date: 'March 20, 2026',
        author: 'Coconut Valley',
        readTime: '5 min read'
    },
    {
        id: 'corporate-picnic-resorts-near-mumbai',
        title: 'Top Resorts near Mumbai for Corporate Picnics: Why Coconut Valley is the Preferred Choice',
        excerpt: 'Boost team morale and productivity by escaping the concrete jungle. Discover why Kelva Beach is the new favorite destination for corporate retreats.',
        image: corporateImg,
        date: 'March 20, 2026',
        author: 'Coconut Valley',
        readTime: '6 min read'
    },
    {
        id: 'best-family-resort-near-palghar',
        title: 'Looking for the Best Family Resort Near Palghar? Discover Kelva Beach Stays',
        excerpt: 'Forget the crowded city escapes. Discover why Kelva Beach is the best-kept secret for families seeking a safe, fun, and relaxing weekend away.',
        image: familyImg,
        date: 'March 20, 2026',
        author: 'Coconut Valley',
        readTime: '5 min read'
    },
    {
        id: 'best-one-day-resort-in-palghar',
        title: 'Best One Day Resort in Palghar Near Kelva Beach for Weekend Fun',
        excerpt: 'Short on time? Experience the ultimate one-day picnic in Palghar with our affordable day outing packages including breakfast, pool, and lunch.',
        image: oneDayImg,
        date: 'March 20, 2026',
        author: 'Coconut Valley',
        readTime: '4 min read'
    },
    {
        id: 'best-resorts-in-palghar',
        title: 'Best Resorts in Palghar: Why Coconut Valley Resort is a Perfect Getaway',
        excerpt: 'Discover why travelers are choosing Kelva Beach and Coconut Valley Resort for their ultimate weekend escapes from Mumbai and Pune.',
        image: palgharImg,
        date: 'March 18, 2026',
        author: 'Coconut Valley',
        readTime: '6 min read'
    }
];

const BlogsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <span className="text-emerald-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Travel & Lifestyle</span>
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">Our Blog</h1>
                    <p className="text-slate-500 text-lg">
                        Expert guides, local secrets, and the latest updates from Coconut Valley Resort and the beautiful Kelva Beach region.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/90 backdrop-blur-md text-emerald-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                                        Travel Guide
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-medium mb-6">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors line-clamp-2">
                                    {post.title}
                                </h2>

                                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                                            <User size={16} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-700">{post.author}</span>
                                    </div>
                                    <div className="text-emerald-700 group-hover:translate-x-2 transition-transform">
                                        <ArrowRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
