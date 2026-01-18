import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const blogs = [
    { 
        id: 1, 
        title: 'iPhone 16 Pro: Apple’s AI Evolution', 
        date: 'Jan 15, 2026', 
        readTime: '5 min read',
        desc: 'A deep dive into the upcoming Apple Intelligence features and the revolutionary camera hardware.',
        image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2081'
    },
    { 
        id: 2, 
        title: 'Top Gaming Laptops of 2026', 
        date: 'Jan 12, 2026', 
        readTime: '8 min read',
        desc: 'Check out the most powerful laptops featuring next-gen NVIDIA GPUs and liquid cooling tech.',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068'
    },
    { 
        id: 3, 
        title: 'The Future of Wearable Tech', 
        date: 'Jan 10, 2026', 
        readTime: '4 min read',
        desc: 'Beyond smartwatches: How smart rings and neural-link glasses are redefining human connectivity.',
        image: 'https://lirp.cdn-website.com/77106691/dms3rep/multi/opt/Smart-Digital-Glasses-640w.jpg'
    },
];

const LatestNews = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-950 px-6 py-24">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="flex md:flex-row flex-col justify-between items-start md:items-end gap-4 mb-12">
                    <div>
                        <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-3xl md:text-5xl tracking-tight">
                            Tech Insights
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            Stay ahead of the curve with our latest gadget news and deep dives.
                        </p>
                    </div>
                    <Link 
                        href="/blog" 
                        className="group flex items-center gap-2 pb-1 border-transparent hover:border-sky-500 border-b-2 font-bold text-sky-600 hover:text-sky-500 transition-all"
                    >
                        Explore News Portal <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
                
                {/* Blog Cards */}
                <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
                    {blogs.map((blog) => (
                        <div 
                            key={blog.id} 
                            className="group bg-white dark:bg-gray-900 shadow-sm hover:shadow-2xl hover:shadow-sky-500/10 border border-gray-100 dark:border-gray-800 rounded-[2rem] overflow-hidden transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="top-4 left-4 absolute">
                                    <span className="bg-white/90 shadow-lg backdrop-blur-md px-4 py-1.5 rounded-full font-bold text-gray-900 text-xs">
                                        Technology
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-4 text-gray-500 dark:text-gray-400 text-xs">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {blog.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {blog.readTime}
                                    </div>
                                </div>

                                <h3 className="mb-4 font-bold text-gray-900 dark:text-white group-hover:text-sky-600 text-xl leading-snug transition-colors">
                                    {blog.title}
                                </h3>
                                
                                <p className="mb-6 text-gray-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                                    {blog.desc}
                                </p>

                                <button className="group/btn flex items-center gap-2 font-black text-gray-900 dark:text-white text-sm uppercase tracking-widest transition-all">
                                    Read Full Story 
                                    <span className="bg-gray-300 dark:bg-gray-700 group-hover/btn:bg-sky-500 w-8 group-hover/btn:w-12 h-px transition-all"></span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNews;