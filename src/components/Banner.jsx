"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter();

    const handleBtn = () => {
        const password = prompt("Enter your password");
        if(password== "1234"){
            console.log(router);
            router.push("/dashboard")
        }
    }
    return (
        <div className='space-y-5 bg-linear-60 from-sky-300 to-sky-100 p-10 rounded text-black text-center'>
            <h2 className='font-bold text-4xl'>This is Banner</h2>
            <button onClick={handleBtn} className='bg-sky-500 hover:bg-black px-4 py-2 rounded text-white duration-200 cursor-pointer'>Shop Now</button>
        </div>
    );
};


export default Banner;