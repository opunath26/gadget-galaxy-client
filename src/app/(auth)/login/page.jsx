'use client'
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

            alert('Login Successful!');
            router.push('/dashboard');
        } else {
            setError('Invalid email or password!');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[70vh]">
            <form onSubmit={handleLogin} className="bg-white shadow-lg p-8 border rounded-xl w-full max-w-md">
                <h2 className="mb-6 font-bold text-2xl text-center">Login to Gadget-Galaxy</h2>
                
                {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
                
                <div className="mb-4">
                    <label className="block mb-1 font-medium text-sm">Email Address</label>
                    <input 
                        type="email" 
                        className="p-2 border rounded focus:outline-sky-600 w-full"
                        placeholder="admin@test.com"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 font-medium text-sm">Password</label>
                    <input 
                        type="password" 
                        className="p-2 border rounded focus:outline-sky-600 w-full"
                        placeholder="123456"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="bg-sky-600 hover:bg-sky-700 py-2 rounded-lg w-full text-white transition">
                    Login
                </button>
            </form>
            <p className="text-gray-600 text-sm text-center">
                    Already have an account? 
                    <Link href="/register" className="ml-1 font-bold text-sky-600 hover:underline">Login</Link>
                </p>
        </div>
    );
};

export default Login;