import React from 'react';
import { ShoppingCart, ShieldCheck, Truck, RefreshCcw, Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

async function getSingleProduct(id) {
    // API URL updated to a placeholder if your localhost is not running
    try {
        const res = await fetch(`https://gadget-galaxy-server-kappa.vercel.app/api/products/${id}`, { cache: 'no-store' }); if (!res.ok) return null;
        return res.json();
    } catch (error) {
        return null;
    }
}

const ProductDetailsPage = async ({ params }) => {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const product = await getSingleProduct(id);

    if (!product) {
        return (
            <div className="flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-950 px-6 h-screen text-center">
                <div className="bg-red-50 dark:bg-red-900/10 p-6 border border-red-100 dark:border-red-900/30 rounded-[2.5rem]">
                    <h1 className="mb-2 font-black text-red-600 dark:text-red-400 text-3xl">Oops! Product Not Found</h1>
                    <p className="mb-6 text-gray-500">The gadget you are looking for has drifted out of orbit.</p>
                    <Link href="/items" className="bg-gray-900 dark:bg-sky-600 px-8 py-3 rounded-2xl font-bold text-white hover:scale-105 active:scale-95 transition-all">
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-white dark:bg-gray-950 mx-auto px-6 py-12 max-w-7xl min-h-screen">
            {/* Breadcrumb / Back link */}
            <Link href="/items" className="group inline-flex items-center gap-2 mb-8 font-bold text-gray-400 hover:text-sky-600 text-sm transition-colors">
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Collection
            </Link>

            <div className="items-start gap-16 grid grid-cols-1 lg:grid-cols-2">

                {/* Left Side: Product Image Display */}
                <div className="group relative">
                    <div className="absolute -inset-4 bg-sky-500/5 group-hover:bg-sky-500/10 blur-3xl rounded-[3rem] transition-colors"></div>
                    <div className="relative bg-gray-50 dark:bg-gray-900 shadow-2xl p-4 border border-gray-100 dark:border-gray-800 rounded-[3rem] overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="rounded-[2.5rem] w-full h-auto object-cover aspect-square hover:scale-105 transition-transform duration-700"
                        />
                        {/* Rating Badge Overlay */}
                        <div className="bottom-8 left-8 absolute flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 shadow-xl backdrop-blur-md px-6 py-3 border border-white/20 rounded-2xl">
                            <Star className="fill-yellow-500 w-5 h-5 text-yellow-500" />
                            <span className="font-black text-gray-900 dark:text-white">4.9</span>
                            <span className="pl-2 border-gray-300 dark:border-gray-700 border-l font-bold text-gray-500 text-xs">120+ Reviews</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Product Details */}
                <div className="flex flex-col pt-4">
                    <div className="space-y-4 mb-8">
                        <span className="inline-block bg-sky-50 dark:bg-sky-900/30 px-4 py-1.5 border border-sky-100 dark:border-sky-800 rounded-full font-black text-sky-600 dark:text-sky-400 text-xs uppercase tracking-[0.2em]">
                            {product.category}
                        </span>
                        <h1 className="font-black text-gray-900 dark:text-white text-5xl md:text-6xl leading-[1.1] tracking-tighter">
                            {product.name}
                        </h1>
                        <div className="flex items-baseline gap-4 mt-6">
                            <p className="font-black text-sky-600 text-4xl tracking-tight">
                                ${product.price}
                            </p>
                            <p className="font-medium text-gray-400 text-lg line-through">
                                ${Math.round(product.price * 1.2)}
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/50 mb-8 p-8 border border-gray-100 dark:border-gray-800 rounded-3xl">
                        <h3 className="mb-4 font-black text-gray-400 text-sm uppercase tracking-widest">Description</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg italic leading-relaxed">
                            "{product.description}"
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mb-10">
                        <div className="flex items-center gap-3 bg-white dark:bg-gray-900 shadow-sm p-4 border border-gray-100 dark:border-gray-800 rounded-2xl">
                            <Truck className="w-5 h-5 text-sky-500" />
                            <span className="font-bold dark:text-gray-300 text-xs">Free Shipping</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white dark:bg-gray-900 shadow-sm p-4 border border-gray-100 dark:border-gray-800 rounded-2xl">
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                            <span className="font-bold dark:text-gray-300 text-xs">1Y Warranty</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white dark:bg-gray-900 shadow-sm p-4 border border-gray-100 dark:border-gray-800 rounded-2xl">
                            <RefreshCcw className="w-5 h-5 text-orange-500" />
                            <span className="font-bold dark:text-gray-300 text-xs">30D Return</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex sm:flex-row flex-col gap-4">
                        <button className="flex flex-grow justify-center items-center gap-3 bg-sky-600 hover:bg-sky-500 shadow-2xl shadow-sky-600/20 px-10 py-5 rounded-[2rem] font-black text-white text-lg active:scale-95 transition-all">
                            <ShoppingCart className="w-6 h-6" /> Add to Cart
                        </button>
                        <button className="hover:bg-gray-50 dark:hover:bg-gray-900 px-10 py-5 border-2 border-gray-200 dark:border-gray-800 rounded-[2rem] font-black text-lg transition-all">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-24 pt-12 border-gray-100 dark:border-gray-800 border-t">
                <h2 className="mb-8 font-black text-gray-900 dark:text-white text-2xl">Technical Specifications</h2>
                <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {['Performance', 'Battery Life', 'Build Quality', 'Connectivity'].map((spec) => (
                        <div key={spec} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-3xl">
                            <p className="mb-2 font-bold text-gray-900 dark:text-white">{spec}</p>
                            <div className="bg-gray-200 dark:bg-gray-800 rounded-full w-full h-1.5">
                                <div className="bg-sky-500 rounded-full w-4/5 h-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ProductDetailsPage;