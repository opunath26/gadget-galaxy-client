import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-4 min-h-[70vh]">
            <div className="relative flex justify-center items-center">
                <div className="border-4 border-sky-200 border-t-sky-600 rounded-full w-16 h-16 animate-spin"></div>
                
                <div className="absolute bg-sky-600 rounded-full w-4 h-4 animate-pulse"></div>
            </div>

            <div className="flex items-center space-x-2">
                <h2 className="font-semibold text-gray-700 text-xl tracking-wide">
                    Loading
                </h2>
                <div className="flex space-x-1">
                    <div className="bg-sky-600 rounded-full w-1.5 h-1.5 animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="bg-sky-600 rounded-full w-1.5 h-1.5 animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="bg-sky-600 rounded-full w-1.5 h-1.5 animate-bounce"></div>
                </div>
            </div>
            
            <p className="text-gray-400 text-sm italic">
                Gathering the best gadgets for you...
            </p>
        </div>
    );
};

export default Loading;