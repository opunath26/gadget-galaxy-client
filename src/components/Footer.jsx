'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    if(pathname.startsWith("/dashboard")) return <></>

    return (
        <footer className="bg-gray-900 mt-20 text-white">
            <div className="mx-auto px-6 py-12 max-w-7xl">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
                    
                    {/* Column 1: Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="font-bold text-blue-500 text-2xl">Gadget Galaxy</h2>
                        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                            Your ultimate destination for the latest and greatest in technology. 
                            From smartphones to smart homes, we have got you covered.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="mb-4 pb-2 border-gray-700 border-b font-semibold text-white text-lg">Shop</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/items" className="hover:text-blue-400 transition">All Products</Link></li>
                            <li><Link href="/items?category=Smartphones" className="hover:text-blue-400 transition">Smartphones</Link></li>
                            <li><Link href="/items?category=Laptops" className="hover:text-blue-400 transition">Laptops</Link></li>
                            <li><Link href="/items?category=Audio" className="hover:text-blue-400 transition">Audio Gear</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h3 className="mb-4 pb-2 border-gray-700 border-b font-semibold text-white text-lg">Support</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
                            <li><Link href="/shipping" className="hover:text-blue-400 transition">Shipping Policy</Link></li>
                            <li><Link href="/faq" className="hover:text-blue-400 transition">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/Social */}
                    <div>
                        <h3 className="mb-4 pb-2 border-gray-700 border-b font-semibold text-white text-lg">Stay Updated</h3>
                        <p className="mb-4 text-gray-400 text-sm">Subscribe to our newsletter for the latest deals.</p>
                        <form className="flex flex-col gap-2">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="bg-gray-800 px-4 py-2 border border-gray-700 focus:border-blue-500 rounded-md focus:outline-none text-sm"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-medium text-white text-sm transition">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex md:flex-row flex-col justify-between items-center mt-12 pt-8 border-gray-800 border-t text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Gadget Galaxy. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition">Cookies Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;