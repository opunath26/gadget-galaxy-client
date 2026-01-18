import React from 'react';

const Title = ({ children }) => {
    return (
        <div className="relative mt-6 mb-10">
            {/* Background Highlight Blur - adds a subtle glow */}
            <div className="-top-4 -left-4 absolute bg-sky-400/10 blur-3xl rounded-full w-20 h-20"></div>
            
            <div className="relative flex flex-col gap-2">
                <h2 className="font-black text-gray-900 dark:text-white text-4xl md:text-5xl leading-tight tracking-tight">
                    {children}
                </h2>
                
                {/* Modern Underline Accent */}
                <div className="flex items-center gap-1">
                    <div className="bg-sky-600 rounded-full w-12 h-1.5"></div>
                    <div className="bg-sky-300 rounded-full w-3 h-1.5"></div>
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-full w-1.5 h-1.5"></div>
                </div>
            </div>
        </div>
    );
};

export default Title;