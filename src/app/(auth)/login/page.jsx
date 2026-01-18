'use client'
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, LogIn, ShieldAlert, ArrowRight } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (email === 'admin@test.com' && password === '123456') {
            Cookies.set('isLoggedIn', 'true', { expires: 7 });
            Cookies.set('userEmail', email, { expires: 7 });
            router.push('/dashboard');
        } else {
            setError('Invalid email or password!');
        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-950 p-4 min-h-screen">
            <div className="flex bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 rounded-[2.5rem] w-full max-w-5xl overflow-hidden">
                
                {/* Left Side: Form */}
                <div className="flex flex-col justify-center p-8 md:p-16 w-full md:w-1/2">
                    <div className="mb-10 md:text-left text-center">
                        <h2 className="mb-2 font-bold text-gray-900 dark:text-white text-3xl">Welcome Back</h2>
                        <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account.</p>
                    </div>

                    {error && (
                        <div className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 mb-6 p-4 border border-red-200 dark:border-red-800 rounded-2xl text-red-600 dark:text-red-400 animate-shake">
                            <ShieldAlert className="w-5 h-5" />
                            <span className="font-medium text-sm">{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="group">
                            <label className="ml-1 font-semibold text-gray-700 dark:text-gray-300 text-sm">Email Address</label>
                            <div className="relative mt-1">
                                <Mail className="top-1/2 left-4 absolute w-5 h-5 text-gray-400 group-focus-within:text-sky-500 transition-colors -translate-y-1/2" />
                                <input 
                                    type="email" 
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-50 dark:bg-gray-800 py-3.5 pr-4 pl-12 border border-gray-200 focus:border-sky-500 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 w-full dark:text-white transition-all"
                                    placeholder="admin@test.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="group">
                            <div className="flex justify-between items-center mb-1 ml-1">
                                <label className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Password</label>
                                <a href="#" className="font-bold text-sky-600 hover:text-sky-500 text-xs">Forgot?</a>
                            </div>
                            <div className="relative">
                                <Lock className="top-1/2 left-4 absolute w-5 h-5 text-gray-400 group-focus-within:text-sky-500 transition-colors -translate-y-1/2" />
                                <input 
                                    type="password" 
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-gray-50 dark:bg-gray-800 py-3.5 pr-4 pl-12 border border-gray-200 focus:border-sky-500 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 w-full dark:text-white transition-all"
                                    placeholder="123456"
                                    required
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="flex justify-center items-center gap-2 bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500/30 py-4 rounded-2xl w-full font-bold text-white text-lg active:scale-95 transition-all"
                        >
                            Login to Galaxy <LogIn className="w-5 h-5" />
                        </button>
                    </form>

                    <p className="mt-10 text-gray-600 dark:text-gray-400 text-center">
                        New to the galaxy? 
                        <Link href="/register" className="group inline-flex items-center gap-1 ml-1 font-bold text-sky-600 hover:text-sky-500 transition-colors">
                            Create account <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </p>
                </div>

                {/* Right Side: Image & Content (Hidden on Mobile) */}
                <div className="hidden md:block relative w-1/2">
                    <img 
                        src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Security Tech" 
                        className="brightness-50 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start bg-gradient-to-br from-sky-900/40 via-transparent to-gray-900/80 p-12">
                        <div className="bg-sky-500/20 backdrop-blur-md mb-6 p-3 border border-white/20 rounded-2xl">
                            <Lock className="w-8 h-8 text-sky-400" />
                        </div>
                        <h1 className="mb-4 font-black text-white text-4xl leading-tight">
                            Secure Access, <br /> Infinite <span className="text-sky-400">Gadgets.</span>
                        </h1>
                        <p className="text-gray-300 text-lg">
                            Login to explore the latest tech collections and manage your gear.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;