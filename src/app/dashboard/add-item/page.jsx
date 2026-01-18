"use client";
import Title from '@/components/Title';
import React, { useState } from 'react';
import { PackagePlus, Image as ImageIcon, DollarSign, Tag, AlignLeft, Loader2, CheckCircle2 } from 'lucide-react';

const AddItem = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleAddItem = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Mocking Database Insertion
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        }, 2000);
    };

    return (
        <div className="mx-auto p-4 md:p-8 max-w-4xl">
            <Title>List New Gadget</Title>

            <div className="bg-white dark:bg-gray-900 shadow-2xl mt-10 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] overflow-hidden">
                {status === 'success' ? (
                    <div className="flex flex-col justify-center items-center p-20 text-center animate-in duration-500 zoom-in">
                        <div className="flex justify-center items-center bg-emerald-100 dark:bg-emerald-900/30 mb-6 rounded-full w-20 h-20">
                            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h2 className="mb-2 font-black text-gray-900 dark:text-white text-3xl">Item Added!</h2>
                        <p className="text-gray-500">Your product is now live in the Galaxy inventory.</p>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="bg-sky-600 hover:bg-sky-500 mt-8 px-8 py-3 rounded-xl font-bold text-white transition-all"
                        >
                            Add Another Item
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleAddItem} className="space-y-8 p-8 md:p-12">
                        {/* Image Upload Placeholder */}
                        <div className="group relative flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-800/50 p-12 border-2 border-gray-200 hover:border-sky-500 dark:border-gray-700 border-dashed rounded-[2rem] transition-colors cursor-pointer">
                            <div className="bg-white dark:bg-gray-700 shadow-sm mb-4 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                                <ImageIcon className="w-8 h-8 text-sky-600" />
                            </div>
                            <p className="font-bold text-gray-700 dark:text-gray-300">Click to upload product image</p>
                            <p className="mt-2 text-gray-500 text-xs">PNG, JPG up to 10MB</p>
                            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" disabled={status === 'loading'} />
                        </div>

                        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                            {/* Product Name */}
                            <div className="space-y-2">
                                <label className="ml-1 font-bold text-gray-700 dark:text-gray-300 text-sm">Product Name</label>
                                <div className="relative">
                                    <PackagePlus className="top-1/2 left-4 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                                    <input 
                                        type="text" required
                                        className="bg-gray-50 dark:bg-gray-800 py-4 pr-6 pl-12 border-none rounded-2xl focus:ring-4 focus:ring-sky-500/10 w-full dark:text-white transition-all"
                                        placeholder="e.g. MacBook Pro M3"
                                    />
                                </div>
                            </div>

                            {/* Category */}
                            <div className="space-y-2">
                                <label className="ml-1 font-bold text-gray-700 dark:text-gray-300 text-sm">Category</label>
                                <div className="relative">
                                    <Tag className="top-1/2 left-4 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                                    <select className="bg-gray-50 dark:bg-gray-800 py-4 pr-6 pl-12 border-none rounded-2xl focus:ring-4 focus:ring-sky-500/10 w-full dark:text-white transition-all appearance-none">
                                        <option>Laptops</option>
                                        <option>Smartphones</option>
                                        <option>Wearables</option>
                                        <option>Audio</option>
                                    </select>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="space-y-2">
                                <label className="ml-1 font-bold text-gray-700 dark:text-gray-300 text-sm">Price (USD)</label>
                                <div className="relative">
                                    <DollarSign className="top-1/2 left-4 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                                    <input 
                                        type="number" required
                                        className="bg-gray-50 dark:bg-gray-800 py-4 pr-6 pl-12 border-none rounded-2xl focus:ring-4 focus:ring-sky-500/10 w-full dark:text-white transition-all"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>

                            {/* Stock Status */}
                            <div className="space-y-2">
                                <label className="ml-1 font-bold text-gray-700 dark:text-gray-300 text-sm">Stock Quantity</label>
                                <input 
                                    type="number" required
                                    className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-none rounded-2xl focus:ring-4 focus:ring-sky-500/10 w-full dark:text-white transition-all"
                                    placeholder="e.g. 50"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="ml-1 font-bold text-gray-700 dark:text-gray-300 text-sm">Description</label>
                            <div className="relative">
                                <AlignLeft className="top-4 left-4 absolute w-5 h-5 text-gray-400" />
                                <textarea 
                                    rows="4" required
                                    className="bg-gray-50 dark:bg-gray-800 py-4 pr-6 pl-12 border-none rounded-2xl focus:ring-4 focus:ring-sky-500/10 w-full dark:text-white transition-all resize-none"
                                    placeholder="Brief details about the gadget..."
                                ></textarea>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            disabled={status === 'loading'}
                            className="flex justify-center items-center gap-3 bg-sky-600 hover:bg-sky-500 disabled:bg-gray-400 shadow-sky-500/20 shadow-xl py-5 rounded-2xl w-full font-black text-white text-lg active:scale-95 transition-all"
                        >
                            {status === 'loading' ? (
                                <><Loader2 className="w-6 h-6 animate-spin" /> Syncing with Galaxy...</>
                            ) : (
                                "Add Product to Inventory"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AddItem;