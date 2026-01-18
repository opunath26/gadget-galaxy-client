"use client";
import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';

const Newsletter = () => {
    const [status, setStatus] = useState('idle'); 

    const handleSubscribe = (e) => {
        e.preventDefault();
        setStatus('loading');
        
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section className="bg-white dark:bg-gray-950 px-6 py-24">
            {/* Main Container with Gradient Background */}
            <div className="relative shadow-2xl mx-auto rounded-[3rem] max-w-6xl overflow-hidden">
                
                {/* Modern Mesh Gradient Background */}
                <div className="absolute inset-0 bg-gray-900 bg-gradient-to-br from-gray-900 via-sky-900 to-indigo-950"></div>
                
                {/* Decorative Animated Orbs */}
                <div className="top-0 right-0 absolute bg-sky-400/20 blur-[120px] -mt-24 -mr-24 rounded-full w-96 h-96 animate-pulse"></div>
                <div className="bottom-0 left-0 absolute bg-purple-600/20 blur-[120px] -mb-24 -ml-24 rounded-full w-96 h-96 animate-pulse delay-700"></div>

                <div className="z-10 relative flex flex-col items-center p-8 md:p-20 text-center">
                    {/* Glassmorphism Icon Box */}
                    <div className="flex justify-center items-center bg-white/10 shadow-inner backdrop-blur-xl mb-8 border border-white/20 rounded-2xl w-16 h-16">
                        <Mail className="w-8 h-8 text-sky-400" />
                    </div>

                    <h2 className="mb-6 font-black text-white text-3xl md:text-5xl leading-tight tracking-tight">
                        Keep Up with the <br /> 
                        <span className="bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 text-transparent">Galaxy Insights</span>
                    </h2>
                    
                    <p className="mx-auto mb-10 max-w-2xl text-gray-300 text-lg md:text-xl leading-relaxed">
                        Join our community of 50,000+ tech lovers. Get early access to new launches and exclusive member-only discounts.
                    </p>

                    {status === 'success' ? (
                        <div className="flex items-center gap-3 bg-emerald-500/20 backdrop-blur-md p-6 border border-emerald-500/50 rounded-2xl text-emerald-400 animate-in duration-300 zoom-in">
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
                                    className="bg-white/10 focus:bg-white/15 backdrop-blur-md px-8 py-5 border border-white/10 focus:border-sky-400/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/20 w-full text-white placeholder:text-gray-500 transition-all"
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>
                            
                            <button 
                                type="submit"
                                disabled={status === 'loading'}
                                className="flex justify-center items-center gap-3 bg-sky-500 hover:bg-sky-400 disabled:bg-gray-700 shadow-sky-500/30 shadow-xl px-10 py-5 rounded-2xl font-bold text-white active:scale-95 transition-all"
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

                    <p className="mt-8 font-medium text-gray-500 text-xs uppercase tracking-widest">
                        🛡️ Secure • No Spam • 1-Click Unsubscribe
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;