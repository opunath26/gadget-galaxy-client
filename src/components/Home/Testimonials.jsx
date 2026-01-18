import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
    { 
        id: 1, 
        name: 'Samiur Rahman', 
        role: 'Tech Enthusiast',
        text: 'Gadget Galaxy has the best collection of smartwatches. The build quality of the products I received was top-notch. Highly recommended!', 
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=samiur'
    },
    { 
        id: 2, 
        name: 'Anika Tabassum', 
        role: 'Professional Photographer',
        text: 'Fast delivery and 100% original products. Their customer support team guided me perfectly to choose the right lens for my camera.', 
        rating: 5,
        image: 'https://i.pravatar.cc/150?u=anika'
    },
    { 
        id: 3, 
        name: 'Imran Hossain', 
        role: 'Software Engineer',
        text: 'The pricing is very competitive compared to other tech shops in Bangladesh. The warranty process is also very transparent.', 
        rating: 4,
        image: 'https://i.pravatar.cc/150?u=imran'
    },
];

const Testimonials = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900/50 px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-bold text-gray-900 dark:text-white text-3xl md:text-5xl">
                        Trusted by Thousands
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-500 dark:text-gray-400 text-lg">
                        Don't just take our word for it. Here is what our community has to say about their Gadget Galaxy experience.
                    </p>
                </div>

                <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
                    {reviews.map((r) => (
                        <div 
                            key={r.id} 
                            className="group relative bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl p-8 border border-gray-100 dark:border-gray-700 rounded-[2rem] transition-all duration-300"
                        >
                            <Quote className="top-8 right-8 absolute w-10 h-10 text-sky-500/10 group-hover:text-sky-500/20 transition-colors" />
                            
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        className={`w-4 h-4 ${i < r.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                    />
                                ))}
                            </div>

                            <p className="mb-8 text-gray-600 dark:text-gray-300 italic leading-relaxed">
                                "{r.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img 
                                    src={r.image} 
                                    alt={r.name} 
                                    className="rounded-full ring-2 ring-sky-500/20 w-12 h-12 object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white leading-none">
                                        {r.name}
                                    </h4>
                                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                                        {r.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;