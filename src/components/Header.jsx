'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import Cookies from 'js-cookie';

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    if(pathname.startsWith("/dashboard")) return <></>;

    return (
        <header className="flex flex-wrap justify-between items-center bg-white shadow-sm px-10 py-4 border-gray-200 border-b">
          <Link href={"/"} className="font-bold text-sky-600 text-2xl tracking-tighter"> 
            🎛️ Gadget-Galaxy
          </Link>

          <nav className='flex items-center space-x-6'>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/items">Items List</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            {isLoggedIn ? (
                <button 
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium text-white text-sm transition"
                >
                    Logout
                </button>
            ) : (
                <div className="flex items-center space-x-4 ml-4 pl-6 border-l">
                    <NavLink href="/login">Login</NavLink>
                    <NavLink href="/register" className="bg-sky-600 px-4 py-2 rounded-lg text-white">
                        Register
                    </NavLink>
                </div>
            )}
          </nav>
        </header>
    );
};

export default Header;