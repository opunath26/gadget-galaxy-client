import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const blogPosts = [
    { 
        id: 1, 
        title: 'iPhone 16 Pro: Apple’s AI Evolution', 
        date: 'Jan 15, 2026', 
        readTime: '5 min read',
        author: 'Samiur Rahman',
        desc: 'A deep dive into the upcoming Apple Intelligence features and the revolutionary camera hardware.',
        image: 'https://images.pexels.com/photos/14741334/pexels-photo-14741334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        featured: true
    },
    { 
        id: 2, 
        title: 'Top Gaming Laptops of 2026', 
        date: 'Jan 12, 2026', 
        readTime: '8 min read',
        author: 'Imran Hossain',
        desc: 'Check out the most powerful laptops featuring next-gen NVIDIA GPUs and liquid cooling tech.',
        image: 'https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
        id: 3, 
        title: 'The Future of Wearable Tech', 
        date: 'Jan 10, 2026', 
        readTime: '4 min read',
        author: 'Anika Tabassum',
        desc: 'Beyond smartwatches: How smart rings and neural-link glasses are redefining human connectivity.',
        image: 'https://images.pexels.com/photos/705164/pexels-photo-705164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
        id: 4, 
        title: 'Best Mechanical Keyboards for Coders', 
        date: 'Jan 08, 2026', 
        readTime: '6 min read',
        author: 'Samiur Rahman',
        desc: 'Finding the perfect tactile feel: A review of the top 7 mechanical keyboards this year.',
        image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
];

const Blog = () => {
    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    return (
        <div className="mx-auto px-6 py-12 max-w-7xl">
            <Title>Tech Insights & News</Title>

            {/* Featured Post */}
            {featuredPost && (
                <div className="group relative flex lg:flex-row flex-col bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl mb-16 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] overflow-hidden transition-all">
                    <div className="lg:w-3/5 h-[400px] overflow-hidden">
                        <img 
                            src={featuredPost.image} 
                            alt={featuredPost.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-12 lg:w-2/5">
                        <span className="flex items-center gap-2 mb-4 font-bold text-sky-600 text-xs uppercase tracking-widest">
                            <span className="bg-sky-600 w-8 h-0.5"></span> Featured Story
                        </span>
                        <h2 className="mb-4 font-black text-gray-900 dark:text-white group-hover:text-sky-600 text-3xl leading-tight transition-colors">
                            {featuredPost.title}
                        </h2>
                        <p className="mb-8 text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                            {featuredPost.desc}
                        </p>
                        <div className="flex items-center gap-4 mb-8 text-gray-400 text-sm">
                            <span className="flex items-center gap-1"><User className="w-4 h-4"/> {featuredPost.author}</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {featuredPost.date}</span>
                        </div>
                        <Link href={`/blog/${featuredPost.id}`} className="group/btn flex items-center gap-2 font-bold text-gray-900 hover:text-sky-600 dark:text-white transition-all">
                            Read Full Article <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                        </Link>
                    </div>
                </div>
            )}

            {/* Regular Posts Grid */}
            <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {regularPosts.map((post) => (
                    <div key={post.id} className="group flex flex-col">
                        <div className="relative mb-6 border border-gray-100 dark:border-gray-800 rounded-[2rem] h-64 overflow-hidden">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="top-4 right-4 absolute bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full font-bold text-gray-900 text-xs">
                                {post.readTime}
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-3 font-bold text-sky-600 text-xs uppercase tracking-tighter">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                        </div>
                        <h3 className="mb-3 font-bold text-gray-900 dark:text-white group-hover:text-sky-600 text-xl transition-colors">
                            {post.title}
                        </h3>
                        <p className="mb-6 text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                            {post.desc}
                        </p>
                        <Link href={`/blog/${post.id}`} className="flex items-center gap-2 mt-auto font-black text-gray-900 hover:text-sky-600 dark:text-white text-sm uppercase tracking-widest transition-all">
                            Details <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;