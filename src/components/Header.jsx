'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import Cookies from 'js-cookie';
import { LayoutDashboard, LogOut, Menu, X, Cpu, UserCircle } from 'lucide-react';

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const auth = Cookies.get('isLoggedIn');
        setIsLoggedIn(auth === 'true');
    }, [pathname]);

    const handleLogout = () => {
        Cookies.remove('isLoggedIn');
        Cookies.remove('userEmail');
        setIsLoggedIn(false);
        router.push('/login');
    };

    // ড্যাশবোর্ডের ভেতরে থাকলে নেভবার হাইড হবে
    if (pathname.startsWith("/dashboard")) return null;

    return (
        <header className="top-0 z-50 sticky bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-gray-100 dark:border-gray-800 border-b w-full">
            <div className="flex justify-between items-center mx-auto px-4 md:px-10 max-w-7xl h-20">
                
                {/* Logo Section */}
                <Link href="/" className="group flex items-center gap-2">
                    <div className="bg-sky-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                        <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-black text-gray-900 dark:text-white text-2xl italic uppercase tracking-tighter">
                        Gadget<span className="text-sky-600">Galaxy</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/items">Shop</NavLink>
                    <NavLink href="/blog">News</NavLink>
                    <NavLink href="/contact">Support</NavLink>

                    <div className="bg-gray-200 dark:bg-gray-800 mx-2 w-px h-6"></div>

                    {isLoggedIn ? (
                        <div className="flex items-center gap-4">
                            <Link 
                                href="/dashboard" 
                                className="flex items-center gap-2 bg-gray-100 hover:bg-sky-600 dark:bg-gray-800 px-5 py-2.5 rounded-2xl font-bold hover:text-white text-sm transition-all duration-300"
                            >
                                <LayoutDashboard className="w-4 h-4" /> Dashboard
                            </Link>
                            <button 
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-2 font-bold text-gray-500 hover:text-red-500 text-sm transition-colors"
                            >
                                <LogOut className="w-4 h-4" /> Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link href="/login" className="px-6 py-2.5 font-bold text-gray-700 hover:text-sky-600 dark:text-gray-300 text-sm transition-colors">
                                Sign In
                            </Link>
                            <Link 
                                href="/register" 
                                className="bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-500/20 px-6 py-2.5 rounded-2xl font-bold text-white text-sm active:scale-95 transition-all"
                            >
                                Get Started
                            </Link>
                        </div>
                    )}
                </nav>

                {/* Mobile Menu Toggle */}
                <button 
                    className="lg:hidden p-2 text-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Sidebar */}
            {isMenuOpen && (
                <div className="lg:hidden top-20 left-0 absolute flex flex-col space-y-4 bg-white dark:bg-gray-950 slide-in-from-top p-6 border-gray-100 dark:border-gray-800 border-b w-full animate-in duration-300">
                    <Link href="/about" className="py-2 font-bold">About</Link>
                    <Link href="/items" className="py-2 font-bold">Shop</Link>
                    <Link href="/blog" className="py-2 font-bold">News</Link>
                    {isLoggedIn && <Link href="/dashboard" className="flex items-center gap-2 py-2 font-bold text-sky-600"><LayoutDashboard className="w-4 h-4"/> Dashboard</Link>}
                    <hr />
                    {!isLoggedIn ? (
                        <>
                            <Link href="/login" className="py-2 font-bold">Sign In</Link>
                            <Link href="/register" className="bg-sky-600 py-3 rounded-xl font-bold text-white text-center">Get Started</Link>
                        </>
                    ) : (
                        <button onClick={handleLogout} className="flex items-center gap-2 py-2 font-bold text-red-500 text-left"><LogOut className="w-4 h-4"/> Logout</button>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;