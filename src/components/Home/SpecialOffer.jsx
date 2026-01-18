"use client";
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const SpecialOffer = () => {
    return (
        <section className="px-4 md:px-10 py-12">
            <div className="group relative bg-gray-900 mx-auto rounded-[2.5rem] max-w-7xl overflow-hidden">
                {/* Minimal Background Element */}
                <div className="top-0 right-0 absolute bg-gradient-to-l from-white/5 to-transparent w-1/2 h-full pointer-events-none"></div>

                <div className="z-10 relative flex md:flex-row flex-col items-center">
                    {/* Text Content */}
                    <div className="p-10 md:p-20 md:w-1/2">
                        <div className="flex items-center gap-2 mb-6 font-medium text-sky-400 text-sm uppercase tracking-wider">
                            <Sparkles className="w-4 h-4" />
                            <span>Season Exclusive</span>
                        </div>
                        
                        <h2 className="mb-6 font-bold text-white text-4xl md:text-6xl leading-tight">
                            The Winter <br /> 
                            <span className="text-gray-400">Collection '24</span>
                        </h2>
                        
                        <p className="mb-10 max-w-md text-gray-400 text-lg md:text-xl leading-relaxed">
                            Premium tech essentials, now accessible with exclusive seasonal pricing. Up to 40% off.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <Link 
                                href="/items?sale=true"
                                className="flex items-center gap-2 group-hover:gap-4 bg-white hover:bg-sky-400 px-10 py-4 rounded-full font-semibold text-black transition-all duration-300"
                            >
                                Shop the Sale <ArrowRight className="w-5 h-5" />
                            </Link>
                            <div className="pl-6 border-white/10 border-l text-white/40 text-sm">
                                <span className="block font-bold text-white text-lg">40% OFF</span>
                                Limited quantities
                            </div>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070" 
                            alt="Premium Product" 
                            className="grayscale-[20%] group-hover:grayscale-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        />
                        {/* Overlay for image to blend with text area */}
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;