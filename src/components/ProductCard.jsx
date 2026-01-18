import React from 'react';
import Link from 'next/link';
import { ShoppingCart, ArrowRight, Star } from 'lucide-react';

const ProductCard = ({ item }) => {
    return (
        <div className="group flex flex-col justify-between bg-white dark:bg-gray-900 shadow-sm hover:shadow-2xl p-5 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] transition-all hover:-translate-y-2 duration-500">
            <div>
                {/* Image Container with Badge */}
                <div className="relative bg-gray-50 dark:bg-gray-800 rounded-[2rem] h-56 overflow-hidden">
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="top-4 left-4 absolute flex items-center gap-1 bg-white/90 shadow-sm backdrop-blur-md px-3 py-1 rounded-full">
                        <Star className="fill-yellow-500 w-3 h-3 text-yellow-500" />
                        <span className="font-black text-[10px] text-gray-900">4.8</span>
                    </div>
                </div>

                {/* Content */}
                <div className="px-2">
                    <div className="flex justify-between items-start mt-6 mb-2">
                        <h2 className="font-black text-gray-900 dark:text-white group-hover:text-sky-600 text-xl leading-tight transition-colors">
                            {item.name}
                        </h2>
                    </div>
                    <p className="mb-6 text-gray-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                        {item.description}
                    </p>
                </div>
            </div>
            
            {/* Footer / Price & Button */}
            <div className="flex justify-between items-center mt-auto px-2 pt-4 border-gray-50 dark:border-gray-800 border-t">
                <div>
                    <p className="font-bold text-gray-400 text-xs uppercase tracking-widest">Price</p>
                    <p className="font-black text-sky-600 text-2xl">${item.price}</p>
                </div>
                
                <Link 
                    href={`/items/${item.id}`} 
                    className="bg-gray-900 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500 shadow-lg shadow-sky-500/10 p-4 rounded-2xl text-white active:scale-90 transition-all"
                >
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;