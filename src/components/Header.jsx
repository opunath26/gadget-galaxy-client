import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="flex flex-wrap justify-between items-center px-4 py-3 border-gray-500 border-b-2">
          <Link href={"/"} className="font-semibold text-lg"> 🎛️ Gadget-Galaxy</Link>

          <nav className='space-x-5'>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
    );
};

export default Header;