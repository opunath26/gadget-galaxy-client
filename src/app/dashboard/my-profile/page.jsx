"use client";
import Title from '@/components/Title';
import React from 'react';
import { Camera, Mail, Phone, MapPin, ShieldCheck, CreditCard, Edit3 } from 'lucide-react';

const MyProfile = () => {
    return (
        <div className="mx-auto max-w-5xl">
            <Title>My Profile</Title>

            <div className="gap-8 grid grid-cols-1 lg:grid-cols-12 mt-10">
                
                {/* Left Side: Avatar & Basic Info */}
                <div className="space-y-6 lg:col-span-4">
                    <div className="relative bg-white dark:bg-gray-900 shadow-xl p-8 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] overflow-hidden text-center">
                        <div className="top-0 left-0 absolute bg-gradient-to-r from-sky-500 to-indigo-600 w-full h-24"></div>
                        
                        <div className="inline-block relative mt-8 mb-6">
                            <div className="bg-gray-100 shadow-lg border-4 border-white dark:border-gray-900 rounded-[2.5rem] w-32 h-32 overflow-hidden">
                                <img 
                                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="Admin Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button className="right-1 bottom-1 absolute bg-white dark:bg-gray-800 shadow-md p-2 border border-gray-100 dark:border-gray-700 rounded-xl hover:text-sky-600 transition-all">
                                <Camera className="w-4 h-4" />
                            </button>
                        </div>

                        <h3 className="font-black text-gray-900 dark:text-white text-2xl">Admin User</h3>
                        <p className="font-bold text-sky-600 text-sm uppercase tracking-widest">Main Administrator</p>
                        
                        <div className="gap-4 grid grid-cols-2 mt-8 pt-8 border-gray-50 dark:border-gray-800 border-t">
                            <div>
                                <p className="font-black text-gray-900 dark:text-white text-xl">42</p>
                                <p className="font-bold text-[10px] text-gray-400 uppercase">Items Added</p>
                            </div>
                            <div>
                                <p className="font-black text-gray-900 dark:text-white text-xl">12</p>
                                <p className="font-bold text-[10px] text-gray-400 uppercase">Reviews</p>
                            </div>
                        </div>
                    </div>

                    {/* Security Badge */}
                    <div className="flex items-center gap-4 bg-emerald-50 dark:bg-emerald-900/20 p-6 border border-emerald-100 dark:border-emerald-800 rounded-[2rem]">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-xl">
                            <ShieldCheck className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                            <p className="font-bold text-emerald-700 dark:text-emerald-400 text-xs uppercase">Verified Account</p>
                            <p className="font-medium text-gray-600 dark:text-gray-300 text-sm">Identity Confirmed</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Account Details Form */}
                <div className="lg:col-span-8">
                    <div className="bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 rounded-[2.5rem] overflow-hidden">
                        <div className="p-8 md:p-12">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="font-black text-gray-900 dark:text-white text-xl">Personal Information</h3>
                                <button className="flex items-center gap-2 font-bold text-sky-600 text-sm hover:underline">
                                    <Edit3 className="w-4 h-4" /> Edit Profile
                                </button>
                            </div>

                            <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="ml-1 font-bold text-gray-400 text-xs uppercase">Full Name</label>
                                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 px-6 py-4 rounded-2xl">
                                        <Edit3 className="w-4 h-4 text-gray-400" />
                                        <span className="font-bold text-gray-700 dark:text-gray-200">Admin User</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="ml-1 font-bold text-gray-400 text-xs uppercase">Email Address</label>
                                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 px-6 py-4 rounded-2xl">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        <span className="font-bold text-gray-700 dark:text-gray-200">admin@test.com</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="ml-1 font-bold text-gray-400 text-xs uppercase">Phone Number</label>
                                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 px-6 py-4 rounded-2xl">
                                        <Phone className="w-4 h-4 text-gray-400" />
                                        <span className="font-bold text-gray-700 dark:text-gray-200">+880 1892-560000</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="ml-1 font-bold text-gray-400 text-xs uppercase">Location</label>
                                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 px-6 py-4 rounded-2xl">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        <span className="font-bold text-gray-700 dark:text-gray-200">Chattogram, BD</span>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-10 border-gray-100 dark:border-gray-800" />

                            <h3 className="mb-8 font-black text-gray-900 dark:text-white text-xl">Payment Methods</h3>
                            <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 border-dashed rounded-[2rem]">
                                <div className="flex items-center gap-4">
                                    <div className="bg-white dark:bg-gray-700 shadow-sm p-3 rounded-xl">
                                        <CreditCard className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white">Visa Card •••• 4242</p>
                                        <p className="text-gray-500 text-xs">Expires 12/28</p>
                                    </div>
                                </div>
                                <button className="font-bold text-gray-400 hover:text-red-500 text-xs uppercase transition-colors">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;