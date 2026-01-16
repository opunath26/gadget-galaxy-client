import React from 'react';

const Title = ({ children }) => {
    return (
        <div className='bg-linear-60 from-sky-50 to-sky-200 p-3 rounded text-black'>
            <h2 className='font-bold text-5xl'>{children}</h2>
        </div>
    );
};

export default Title;