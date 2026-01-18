"use client";
import Title from '@/components/Title';
import React from 'react';
import { 
    ShoppingBag, 
    Users, 
    Zap, 
    TrendingUp, 
    ArrowUpRight, 
    Clock, 
    Package 
} from 'lucide-react';

const Dashboard = () => {
    const stats = [
        { id: 1, label: 'Total Items', value: '1,284', icon: Package, color: 'text-sky-600', bg: 'bg-sky-50' },
        { id: 2, label: 'Active Users', value: '42.5K', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
        { id: 3, label: 'Sales Growth', value: '+12.4%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { id: 4, label: 'New Orders', value: '156', icon: ShoppingBag, color: 'text-orange-600', bg: 'bg-orange-50' },
    ];

    const recentItems = [
        { id: 1, name: 'MacBook Pro M3', category: 'Laptop', price: '$1999', status: 'In Stock' },
        { id: 2, name: 'Sony WH-1000XM5', category: 'Audio', price: '$349', status: 'Low Stock' },
        { id: 3, name: 'iPhone 15 Pro', category: 'Mobile', price: '$999', status: 'In Stock' },
    ];

    return (
        <div className="mx-auto p-4 md:p-8 max-w-7xl">
            <Title>Admin Galaxy Dashboard</Title>

            {/* Stats Grid */}
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 mb-12">
                {stats.map((stat) => (
                    <div key={stat.id} className="group bg-white dark:bg-gray-900 shadow-sky-500/5 shadow-xl p-6 border border-gray-100 hover:border-sky-500 dark:border-gray-800 rounded-[2rem] transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-2xl ${stat.bg} dark:bg-gray-800`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <span className="flex items-center bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg font-bold text-emerald-600 text-xs">
                                <ArrowUpRight className="mr-1 w-3 h-3" /> 12%
                            </span>
                        </div>
                        <h3 className="font-bold text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">{stat.label}</h3>
                        <p className="mt-1 font-black text-gray-900 dark:text-white text-3xl">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
                {/* Recent Items Table Placeholder */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-900 shadow-xl p-8 border border-gray-100 dark:border-gray-800 rounded-[2.5rem]">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="flex items-center gap-2 font-black text-gray-900 dark:text-white text-xl">
                            <Clock className="w-5 h-5 text-sky-600" /> Recent Inventory Update
                        </h3>
                        <button className="font-bold text-sky-600 text-sm hover:underline">View All</button>
                    </div>
                    
                    <div className="space-y-4">
                        {recentItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center bg-gray-50 dark:bg-gray-800/50 p-4 border border-transparent hover:border-sky-100 dark:hover:border-sky-900 rounded-2xl transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="flex justify-center items-center bg-white dark:bg-gray-700 shadow-sm rounded-xl w-12 h-12">
                                        <Zap className="w-5 h-5 text-sky-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">{item.name}</h4>
                                        <p className="font-medium text-gray-500 text-xs uppercase">{item.category}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-black text-gray-900 dark:text-white">{item.price}</p>
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase ${item.status === 'In Stock' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Action Box */}
                <div className="relative flex flex-col justify-between bg-gradient-to-br from-sky-600 to-indigo-700 shadow-2xl shadow-sky-500/30 p-8 rounded-[2.5rem] overflow-hidden text-white">
                    <div className="top-0 right-0 absolute bg-white/10 blur-3xl -mt-16 -mr-16 rounded-full w-32 h-32"></div>
                    <div className="z-10 relative">
                        <h3 className="mb-4 font-black text-2xl leading-tight">Ready to expand your galaxy?</h3>
                        <p className="mb-8 text-sky-100 text-sm">Add new innovative gadgets to your inventory and reach thousands of tech enthusiasts.</p>
                        <button className="flex items-center gap-2 bg-white hover:bg-sky-50 px-6 py-3 rounded-xl font-black text-sky-600 text-sm transition-all">
                            Add New Item <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="z-10 relative mt-12 pt-8 border-white/10 border-t">
                        <p className="font-bold text-sky-200 text-xs uppercase tracking-widest">System Status</p>
                        <p className="mt-1 font-medium text-sm">✨ All systems operational</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;