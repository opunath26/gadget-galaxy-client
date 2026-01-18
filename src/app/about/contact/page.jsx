"use client";
import Title from '@/components/Title';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        
        // Mocking API call
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 4000);
        }, 1500);
    };

    return (
        <div className="mx-auto px-6 py-12 max-w-7xl">
            <Title>Get In Touch</Title>

            <div className="gap-12 grid grid-cols-1 lg:grid-cols-3 mt-10">
                
                {/* Contact Information Cards */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-900 shadow-sky-500/5 shadow-xl p-8 border border-gray-100 dark:border-gray-800 rounded-[2rem]">
                        <div className="flex justify-center items-center bg-sky-500/10 mb-6 rounded-xl w-12 h-12">
                            <Phone className="w-6 h-6 text-sky-600" />
                        </div>
                        <h3 className="mb-2 font-bold text-gray-900 dark:text-white text-xl">Call Us</h3>
                        <p className="mb-4 text-gray-500 dark:text-gray-400 text-sm">Monday - Friday, 9am - 6pm</p>
                        <a href="tel:01892560000" className="font-black text-sky-600 text-lg hover:underline">01892560000</a>
                    </div>

                    <div className="bg-white dark:bg-gray-900 shadow-sky-500/5 shadow-xl p-8 border border-gray-100 dark:border-gray-800 rounded-[2rem]">
                        <div className="flex justify-center items-center bg-purple-500/10 mb-6 rounded-xl w-12 h-12">
                            <Mail className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="mb-2 font-bold text-gray-900 dark:text-white text-xl">Email Support</h3>
                        <p className="mb-4 text-gray-500 dark:text-gray-400 text-sm">We'll respond within 24 hours.</p>
                        <a href="mailto:support@gadgetgalaxy.com" className="font-black text-gray-900 hover:text-sky-600 dark:text-white text-lg transition-colors">support@gadgetgalaxy.com</a>
                    </div>

                    <div className="bg-white dark:bg-gray-900 shadow-sky-500/5 shadow-xl p-8 border border-gray-100 dark:border-gray-800 rounded-[2rem]">
                        <div className="flex justify-center items-center bg-emerald-500/10 mb-6 rounded-xl w-12 h-12">
                            <MapPin className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="mb-2 font-bold text-gray-900 dark:text-white text-xl">Visit Office</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Tech Plaza, Level 4, <br />
                            Chattogram, Bangladesh
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-900 shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 rounded-[3rem]">
                    {status === 'success' ? (
                        <div className="flex flex-col justify-center items-center py-12 h-full text-center animate-in duration-500 zoom-in">
                            <div className="flex justify-center items-center bg-green-100 dark:bg-green-900/30 mb-6 rounded-full w-20 h-20">
                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                            </div>
                            <h2 className="mb-4 font-black text-gray-900 dark:text-white text-3xl">Message Sent!</h2>
                            <p className="mx-auto max-w-xs text-gray-500 dark:text-gray-400">
                                Thank you for reaching out. Our team will get back to you shortly.
                            </p>
                            <button 
                                onClick={() => setStatus('idle')}
                                className="mt-8 font-bold text-sky-600 hover:underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="ml-1 font-bold text-gray-700 dark:text-gray-300 text-sm">Your Name</label>
                                    <input 
                                        type="text" required
                                        className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border border-transparent focus:border-sky-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 w-full dark:text-white transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="ml-1 font-bold text-gray-700 dark:text-gray-300 text-sm">Email Address</label>
                                    <input 
                                        type="email" required
                                        className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border border-transparent focus:border-sky-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 w-full dark:text-white transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="ml-1 font-bold text-gray-700 dark:text-gray-300 text-sm">Subject</label>
                                <input 
                                    type="text" required
                                    className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border border-transparent focus:border-sky-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 w-full dark:text-white transition-all"
                                    placeholder="Product Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="ml-1 font-bold text-gray-700 dark:text-gray-300 text-sm">Message</label>
                                <textarea 
                                    required rows="5"
                                    className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border border-transparent focus:border-sky-500 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/10 w-full dark:text-white transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                disabled={status === 'loading'}
                                className="flex justify-center items-center gap-3 bg-sky-600 hover:bg-sky-500 disabled:bg-gray-400 shadow-sky-500/20 shadow-xl px-12 py-5 rounded-2xl w-full md:w-max font-black text-white active:scale-95 transition-all"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;