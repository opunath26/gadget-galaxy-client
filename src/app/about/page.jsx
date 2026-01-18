import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';
import { Target, Users, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Active Users', value: '50K+' },
        { label: 'Products Sold', value: '120K+' },
        { label: 'Store Locations', value: '15+' },
        { label: 'Customer Rating', value: '4.9/5' },
    ];

    return (
        <div className="mx-auto px-6 py-12 max-w-7xl">
            <Title>Our Tech Journey</Title>

            {/* Navigation Links - Styled as Pills */}
            <nav className="flex gap-4 mb-16">
                <Link href="/about/blog" className="bg-sky-100 hover:bg-sky-600 dark:bg-sky-900/30 px-6 py-2 rounded-full font-bold text-sky-600 hover:text-white text-sm transition-all">
                    Our Blog
                </Link>
                <Link href="/about/contact" className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 px-6 py-2 rounded-full font-bold text-gray-600 dark:text-gray-300 text-sm transition-all">
                    Contact Us
                </Link>
            </nav>

            <div className="items-center gap-16 grid grid-cols-1 lg:grid-cols-2 mb-24">
                {/* Image Section */}
                <div className="relative">
                    <div className="-top-6 -left-6 absolute bg-sky-500/10 blur-3xl rounded-full w-32 h-32"></div>
                    <img 
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Our Team" 
                        className="shadow-2xl grayscale-[20%] hover:grayscale-0 rounded-[3rem] transition-all duration-700"
                    />
                    <div className="hidden md:block -right-10 -bottom-10 absolute bg-white dark:bg-gray-900 shadow-xl p-8 border border-gray-100 dark:border-gray-800 rounded-3xl">
                        <p className="mb-1 font-black text-sky-600 text-4xl">10+</p>
                        <p className="font-bold text-gray-500 text-sm uppercase tracking-widest">Years Experience</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    <h3 className="font-black text-gray-900 dark:text-white text-3xl leading-tight">
                        Redefining the Way You <br /> 
                        <span className="font-outline-2 text-sky-600">Experience Technology.</span>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                        Founded in 2016, Gadget Galaxy started with a simple mission: to make premium technology accessible to everyone. We don't just sell gadgets; we curate experiences that empower your digital lifestyle.
                    </p>
                    
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-sky-500/10 p-3 rounded-2xl text-sky-600"><Target className="w-6 h-6"/></div>
                            <div>
                                <h4 className="font-bold dark:text-white">Our Mission</h4>
                                <p className="text-gray-500 text-sm">Bringing the latest innovations to your doorstep.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-500/10 p-3 rounded-2xl text-emerald-600"><ShieldCheck className="w-6 h-6"/></div>
                            <div>
                                <h4 className="font-bold dark:text-white">Authenticity</h4>
                                <p className="text-gray-500 text-sm">100% genuine products with official warranty.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="relative bg-gray-900 p-12 md:p-20 rounded-[3rem] overflow-hidden">
                <div className="top-0 right-0 absolute bg-sky-500/10 blur-[100px] rounded-full w-64 h-64"></div>
                <div className="z-10 relative gap-12 grid grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <h4 className="mb-2 font-black text-white text-4xl md:text-5xl">{stat.value}</h4>
                            <p className="font-bold text-sky-400 text-xs uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;