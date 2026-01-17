import Link from 'next/link';
import React from 'react';

const NotFound404 = () => {
    return (
        <div className="flex flex-col justify-center items-center px-6 min-h-[70vh] text-center">
            <h1 className="font-extrabold text-gray-200 text-9xl tracking-widest">
                404
            </h1>
            
            <div className="absolute bg-sky-600 px-2 rounded text-sm rotate-12">
                Page Not Found
            </div>

            <div className="mt-8">
                <h2 className="font-bold text-gray-800 text-3xl md:text-4xl">
                    Oops! You have drifted into deep space.
                </h2>
                <p className="mt-4 text-gray-500 text-lg">
                    The page you are looking for does not exist or has been moved.
                </p>
            </div>

            <div className="mt-10">
                <Link
                    href="/"
                    className="group inline-block relative focus:outline-none focus:ring font-medium text-sky-600 active:text-sky-500 text-sm"
                >
                    <span className="absolute inset-0 bg-sky-600 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-x-0 group-hover:translate-y-0"></span>

                    <span className="block relative bg-white px-8 py-3 border border-current">
                        Go Back Home
                    </span>
                </Link>
            </div>

            <div className="mt-12">
                <svg className="mx-auto w-24 h-24 text-gray-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </div>
        </div>
    );
};

export default NotFound404;