'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
    const pathname = usePathname();
    if(pathname.startsWith("/dashboard")) return <></>;

    return (
        <header className="flex flex-wrap justify-between items-center px-4 py-3 border-gray-500 border-b-2">
          <Link href={"/"} className="font-semibold text-lg"> 🎛️ Gadget-Galaxy</Link>

          <nav className='space-x-5'>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/items">Items List</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/register">Register</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </header>
    );
};

export default Header;