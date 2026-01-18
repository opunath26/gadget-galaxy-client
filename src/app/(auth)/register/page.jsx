'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, ArrowRight, Github } from 'lucide-react';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const router = useRouter();

    const handleRegister = (e) => {
        e.preventDefault();
        alert("Registration successful! Welcome to Gadget Galaxy.");
        router.push('/login');
    };

    return (
        <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-950 p-4 min-h-screen">
            <div className="flex bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 rounded-[2.5rem] w-full max-w-5xl overflow-hidden">
                
                {/* Left Side: Image & Content (Hidden on Mobile) */}
                <div className="hidden md:block relative w-1/2">
                    <img 
                        src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Tech Background" 
                        className="brightness-50 grayscale-[30%] w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end items-start bg-gradient-to-t from-gray-900 via-transparent to-transparent p-12">
                        <h1 className="mb-4 font-black text-white text-4xl leading-tight">
                            Join the <br /> <span className="text-sky-400">Gadget Galaxy</span>
                        </h1>
                        <p className="max-w-sm text-gray-300 text-lg">
                            Unlock exclusive deals, track your orders, and join a community of tech lovers.
                        </p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex flex-col justify-center p-8 md:p-16 w-full md:w-1/2">
                    <div className="mb-10">
                        <h2 className="mb-2 font-bold text-gray-900 dark:text-white text-3xl">Create Account</h2>
                        <p className="text-gray-500 dark:text-gray-400">Start your journey with us today.</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-5">
                        {/* Name Input */}
                        <div className="group relative">
                            <label className="ml-1 font-semibold text-gray-700 dark:text-gray-300 text-sm">Full Name</label>
                            <div className="relative mt-1">
                                <User className="top-1/2 left-4 absolute w-5 h-5 text-gray-400 group-focus-within:text-sky-500 transition-colors -translate-y-1/2" />
                                <input 
                                    type="text" required
                                    className="bg-gray-50 dark:bg-gray-800 py-3.5 pr-4 pl-12 border border-gray-200 focus:border-sky-500 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 w-full dark:text-white transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="group relative">
                            <label className="ml-1 font-semibold text-gray-700 dark:text-gray-300 text-sm">Email Address</label>
                            <div className="relative mt-1">
                                <Mail className="top-1/2 left-4 absolute w-5 h-5 text-gray-400 group-focus-within:text-sky-500 transition-colors -translate-y-1/2" />
                                <input 
                                    type="email" required
                                    className="bg-gray-50 dark:bg-gray-800 py-3.5 pr-4 pl-12 border border-gray-200 focus:border-sky-500 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 w-full dark:text-white transition-all"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="group relative">
                            <label className="ml-1 font-semibold text-gray-700 dark:text-gray-300 text-sm">Password</label>
                            <div className="relative mt-1">
                                <Lock className="top-1/2 left-4 absolute w-5 h-5 text-gray-400 group-focus-within:text-sky-500 transition-colors -translate-y-1/2" />
                                <input 
                                    type="password" required
                                    className="bg-gray-50 dark:bg-gray-800 py-3.5 pr-4 pl-12 border border-gray-200 focus:border-sky-500 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 w-full dark:text-white transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="flex justify-center items-center gap-2 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500/30 py-4 rounded-2xl w-full font-bold text-white text-lg active:scale-95 transition-all"
                        >
                            Create Account <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    <div className="mt-8">
                        <div className="relative flex justify-center items-center mb-6">
                            <div className="border-gray-200 dark:border-gray-800 border-t w-full"></div>
                            <span className="absolute bg-white dark:bg-gray-900 px-4 text-gray-400 text-sm">Or sign up with</span>
                        </div>

                        <button className="flex justify-center items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 py-3 border border-gray-200 dark:border-gray-700 rounded-2xl w-full font-semibold text-gray-700 dark:text-gray-300 transition-all">
                            <Github className="w-5 h-5" /> GitHub
                        </button>
                    </div>

                    <p className="mt-8 text-gray-600 dark:text-gray-400 text-center">
                        Already have an account? 
                        <Link href="/login" className="ml-1 font-bold text-sky-600 hover:text-sky-500 transition-colors">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;