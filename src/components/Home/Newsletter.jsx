"use client";
import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';

const Newsletter = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubscribe = (e) => {
        e.preventDefault();
        setStatus('loading');
        
        // Mocking an API call
        setTimeout(() => {
            setStatus('success');
            // ৩ সেকেন্ড পর আবার আগের অবস্থায় ফিরে যাবে
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section className="bg-white dark:bg-gray-950 px-6 py-24">
            <div className="relative bg-gray-900 shadow-2xl mx-auto p-8 md:p-20 rounded-[3rem] max-w-6xl overflow-hidden">
                {/* Decorative Background Circles */}
                <div className="top-0 right-0 absolute bg-sky-500/10 blur-3xl -mt-32 -mr-32 rounded-full w-64 h-64"></div>
                <div className="bottom-0 left-0 absolute bg-purple-500/10 blur-3xl -mb-32 -ml-32 rounded-full w-64 h-64"></div>

                <div className="z-10 relative flex flex-col items-center text-center">
                    <div className="flex justify-center items-center bg-sky-500/20 mb-8 rounded-2xl ring-1 ring-sky-500/50 w-16 h-16">
                        <Mail className="w-8 h-8 text-sky-400" />
                    </div>

                    <h2 className="mb-6 font-black text-white text-3xl md:text-5xl tracking-tight">
                        Keep Up with the <span className="text-sky-400">Galaxy</span>
                    </h2>
                    
                    <p className="mx-auto mb-10 max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed">
                        Join our community of 50,000+ tech lovers. Get early access to new launches and exclusive member-only discounts.
                    </p>

                    {status === 'success' ? (
                        <div className="flex items-center gap-3 bg-green-500/10 p-6 border border-green-500/50 rounded-2xl text-green-400 animate-in duration-300 zoom-in">
                            <CheckCircle2 className="w-6 h-6" />
                            <span className="font-bold">Check your inbox! You're on the list.</span>
                        </div>
                    ) : (
                        <form 
                            className="flex sm:flex-row flex-col gap-4 mx-auto w-full max-w-xl" 
                            onSubmit={handleSubscribe}
                        >
                            <div className="group relative flex-grow">
                                <input 
                                    type="email" 
                                    placeholder="Enter your professional email" 
                                    className="bg-white/5 focus:bg-white/10 px-8 py-5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 w-full text-white placeholder:text-gray-500 transition-all"
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>
                            
                            <button 
                                type="submit"
                                disabled={status === 'loading'}
                                className="flex justify-center items-center gap-3 bg-sky-500 hover:bg-sky-400 disabled:bg-gray-700 shadow-lg shadow-sky-500/20 px-10 py-5 rounded-2xl font-bold text-white active:scale-95 transition-all"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Processing
                                    </>
                                ) : (
                                    <>
                                        Subscribe <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                    <p className="mt-6 text-gray-500 text-sm">
                        No spam, ever. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;