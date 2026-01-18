"use client";
import React from 'react';

const brands = [
    { id: 1, name: 'Apple', logo: 'https://cdn.simpleicons.org/apple/black' },
    { id: 2, name: 'Samsung', logo: 'https://cdn.simpleicons.org/samsung/blue' },
    { id: 3, name: 'Sony', logo: 'https://cdn.simpleicons.org/sony/black' },
    { id: 4, name: 'Xiaomi', logo: 'https://cdn.simpleicons.org/xiaomi/orange' },
    { id: 5, name: 'Dell', logo: 'https://cdn.simpleicons.org/dell/blue' },
    { id: 6, name: 'Asus', logo: 'https://cdn.simpleicons.org/asus/blue' },
    { id: 7, name: 'Intel', logo: 'https://cdn.simpleicons.org/intel/blue' },
    { id: 8, name: 'HP', logo: 'https://cdn.simpleicons.org/hp/blue' },
];

const Brands = () => {
    return (
        <section className="bg-white dark:bg-gray-950 py-16 overflow-hidden">
            <div className="mx-auto px-6 max-w-7xl">
                <p className="mb-12 font-semibold text-gray-500 dark:text-gray-400 text-xs text-center uppercase tracking-[0.2em]">
                    Official Authorized Reseller
                </p>
                
                {/* Rolling Animation Container */}
                <div className="group relative flex overflow-x-hidden">
                    <div className="flex gap-16 md:gap-24 py-4 whitespace-nowrap animate-marquee">
                        {[...brands, ...brands].map((brand, index) => (
                            <div 
                                key={index} 
                                className="flex justify-center items-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 w-24 md:w-32 transition-all duration-500 cursor-pointer"
                            >
                                <img 
                                    src={brand.logo} 
                                    alt={brand.name} 
                                    className="h-8 md:h-12 object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Gradient Overlays for smooth fading effect */}
                    <div className="left-0 z-10 absolute inset-y-0 bg-gradient-to-r from-white dark:from-gray-950 to-transparent w-20"></div>
                    <div className="right-0 z-10 absolute inset-y-0 bg-gradient-to-l from-white dark:from-gray-950 to-transparent w-20"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 30s linear infinite;
                }
                .group:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default Brands;