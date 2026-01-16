// components/ProductCard.js
import React from 'react';
import Link from 'next/link';

const ProductCard = ({ item }) => {
    return (
        <div className="flex flex-col justify-between shadow-md hover:shadow-xl p-4 border rounded-lg transition-shadow">
            <div>
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="rounded w-full h-40 object-cover" 
                />
                <h2 className="mt-4 font-bold text-lg">{item.name}</h2>
                <p className="mb-2 text-gray-500 text-sm line-clamp-2">
                    {item.description}
                </p>
            </div>
            
            <div className="flex justify-between items-center mt-4">
                <p className="font-semibold text-blue-600">${item.price}</p>
                <Link 
                    href={`/items/${item.id}`} 
                    className="bg-black hover:bg-gray-800 px-4 py-2 rounded text-white text-sm transition"
                >
                    Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;