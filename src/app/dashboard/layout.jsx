"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { 
    LayoutDashboard, 
    PlusCircle, 
    UserCircle, 
    Settings, 
    Home, 
    LogOut, 
    Cpu 
} from 'lucide-react';
import Cookies from 'js-cookie';

const DashboardLayout = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();

    const menuItems = [
        { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Add New Item', href: '/dashboard/add-item', icon: PlusCircle },
        { name: 'My Profile', href: '/dashboard/my-profile', icon: UserCircle },
        { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ];

    const handleLogout = () => {
        Cookies.remove('isLoggedIn');
        Cookies.remove('userEmail');
        router.push('/login');
    };

    return (
        <div className="flex bg-gray-50 dark:bg-gray-950 min-h-screen">
            {/* Sidebar */}
            <aside className="top-0 sticky flex flex-col bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 border-r w-80 h-screen">
                
                {/* Sidebar Header / Logo */}
                <div className="p-8">
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="bg-sky-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                            <Cpu className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-black dark:text-white text-xl italic uppercase tracking-tighter">
                            Galaxy<span className="text-sky-600">Admin</span>
                        </span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex-grow space-y-2 px-4">
                    <p className="mb-4 px-4 font-black text-[10px] text-gray-400 uppercase tracking-[0.2em]">Main Menu</p>
                    
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link 
                                key={item.href} 
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                                    isActive 
                                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/30' 
                                    : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                                }`}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Sidebar Footer */}
                <div className="space-y-2 p-4 border-gray-100 dark:border-gray-800 border-t">
                    <Link 
                        href="/" 
                        className="flex items-center gap-3 px-4 py-3 font-bold text-gray-500 hover:text-sky-600 text-sm transition-colors"
                    >
                        <Home className="w-5 h-5" /> Back to Home
                    </Link>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-3 hover:bg-red-50 dark:hover:bg-red-900/10 px-4 py-3 rounded-2xl w-full font-bold text-red-500 text-sm transition-all"
                    >
                        <LogOut className="w-5 h-5" /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-grow overflow-y-auto">
                {/* Top Header Placeholder */}
                <header className="top-0 z-20 sticky flex justify-end items-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-md px-12 border-gray-100 dark:border-gray-800 border-b h-20">
                    <div className="flex items-center gap-3 bg-white dark:bg-gray-800 shadow-sm px-4 py-2 border border-gray-100 dark:border-gray-700 rounded-full">
                        <div className="bg-emerald-500 rounded-full w-2 h-2 animate-pulse"></div>
                        <span className="font-bold text-gray-600 dark:text-gray-300 text-xs">Admin Mode</span>
                    </div>
                </header>

                <div className="p-4 md:p-10">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;