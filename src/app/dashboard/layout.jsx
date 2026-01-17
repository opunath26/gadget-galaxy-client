import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='gap-5 grid grid-cols-12 min-h-screen'>
            <div className='col-span-3 border-r-2'>
                <h2>
                    <Link href={"/"} className="font-semibold text-lg"> 🎛️ Gadget-Galaxy</Link>
                </h2>
                <div className='flex flex-col gap-5 mt-10'>
                    <Link className='bg-gray-600 px-4 py-2 rounded w-full' href={"/dashboard/add-item"}>Add Item</Link>
                    <Link className='bg-gray-600 px-4 py-2 rounded w-full' href={"/dashboard/my-profile"}>My Profile</Link>
                    <Link className='bg-gray-600 px-4 py-2 rounded w-full' href={"/dashboard/settings"}>Settings</Link>
                </div>
            </div>
            <div className='col-span-9'>{children}</div>
        </div>
    );
};

export default DashboardLayout;