import React from 'react';
import { Truck, ShieldCheck, Headphones, CreditCard } from 'lucide-react';

const features = [
    { 
        id: 1, 
        title: 'Fast Delivery', 
        desc: 'Get your gadgets delivered within 24 hours at your doorstep.', 
        icon: <Truck className="w-8 h-8" />,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
    },
    { 
        id: 2, 
        title: 'Original Products', 
        desc: '100% genuine products with official manufacturer warranty.', 
        icon: <ShieldCheck className="w-8 h-8" />,
        color: 'text-green-600',
        bgColor: 'bg-green-50'
    },
    { 
        id: 3, 
        title: '24/7 Support', 
        desc: 'Dedicated expert technical support team available around the clock.', 
        icon: <Headphones className="w-8 h-8" />,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
    },
    { 
        id: 4, 
        title: 'Secure Payment', 
        desc: 'Multi-layer encrypted payment methods for your peace of mind.', 
        icon: <CreditCard className="w-8 h-8" />,
        color: 'text-amber-600',
        bgColor: 'bg-amber-50'
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-white dark:bg-gray-950 px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-3xl md:text-5xl tracking-tight">
                        Why Shop With Us?
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        We prioritize quality, speed, and security to provide you with the best tech shopping experience.
                    </p>
                </div>

                <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((f) => (
                        <div 
                            key={f.id} 
                            className="group bg-white dark:bg-gray-900 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-none p-8 border border-gray-100 dark:border-gray-800 rounded-[2rem] transition-all hover:-translate-y-2 duration-300"
                        >
                            <div className={`w-16 h-16 ${f.bgColor} dark:bg-gray-800 ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {f.icon}
                            </div>
                            <h3 className="mb-3 font-bold text-gray-900 dark:text-white text-xl">
                                {f.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;