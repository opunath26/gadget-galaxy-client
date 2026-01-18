'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const router = useRouter();

    const handleRegister = (e) => {
        e.preventDefault();
        alert("Registration successful! Now you can login with your credentials.");
        router.push('/login');
    };

    return (
        <div className="flex justify-center items-center px-4 min-h-[80vh]">
            <div className="space-y-6 bg-white shadow-xl p-8 border rounded-2xl w-full max-w-md">
                <h2 className="font-bold text-gray-800 text-3xl text-center">Create Account</h2>
                <p className="text-gray-500 text-sm text-center">Join Gadget Galaxy today!</p>
                
                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block font-medium text-gray-700 text-sm">Full Name</label>
                        <input 
                            type="text" required
                            className="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 text-sm">Email Address</label>
                        <input 
                            type="email" required
                            className="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
                            placeholder="example@mail.com"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 text-sm">Password</label>
                        <input 
                            type="password" required
                            className="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
                            placeholder="••••••••"
                        />
                    </div>
                    
                    <button type="submit" className="bg-sky-600 hover:bg-sky-700 py-3 rounded-lg w-full font-semibold text-white transition duration-300">
                        Sign Up
                    </button>
                </form>

                <p className="text-gray-600 text-sm text-center">
                    Already have an account? 
                    <Link href="/login" className="ml-1 font-bold text-sky-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;