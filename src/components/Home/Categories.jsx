import { Smartphone, Laptop, Watch, Headphones, ArrowRight } from 'lucide-react';

const categories = [
    { id: 1, name: 'Smartphones', icon: <Smartphone className="w-8 h-8" />, count: '120+ Items' },
    { id: 2, name: 'Laptops', icon: <Laptop className="w-8 h-8" />, count: '80+ Items' },
    { id: 3, name: 'Watches', icon: <Watch className="w-8 h-8" />, count: '50+ Items' },
    { id: 4, name: 'Audio', icon: <Headphones className="w-8 h-8" />, count: '200+ Items' },
];

const Categories = () => {
    return (
        <section className="bg-gray-50/50 dark:bg-gray-900/20 px-6 md:px-10 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="mb-2 font-bold text-gray-900 dark:text-white text-3xl md:text-4xl">
                            Top Categories
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Explore our wide range of premium tech gadgets by category.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 hover:gap-3 font-semibold text-sky-600 transition-all">
                        View All <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((cat) => (
                        <div 
                            key={cat.id} 
                            className="group relative flex flex-col bg-white dark:bg-gray-800 hover:shadow-sky-500/10 hover:shadow-xl p-8 border border-gray-100 hover:border-sky-500 dark:border-gray-700 rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer"
                        >
                            {/* Decorative Background Element */}
                            <div className="-top-4 -right-4 absolute bg-sky-50 dark:bg-sky-900/20 rounded-full w-24 h-24 group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="z-10 relative">
                                <div className="inline-flex justify-center items-center bg-sky-50 dark:bg-sky-900/30 group-hover:bg-sky-600 mb-6 rounded-2xl w-16 h-16 text-sky-600 dark:text-sky-400 group-hover:text-white transition-colors duration-300">
                                    {cat.icon}
                                </div>
                                <h3 className="mb-1 font-bold text-gray-800 dark:text-white text-xl">
                                    {cat.name}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                                    {cat.count}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;