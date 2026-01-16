import React from 'react';

async function getSingleProduct(id) {
    const res = await fetch(`http://localhost:5000/api/products/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
}

const ProductDetailsPage = async ({ params }) => {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    
    const product = await getSingleProduct(id);

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="font-bold text-red-500 text-2xl">Product not found!</h1>
            </div>
        );
    }

    return (
        <main className="mx-auto p-10 max-w-6xl min-h-screen">
            <div className="gap-10 grid grid-cols-1 md:grid-cols-2 shadow-lg p-6 border rounded-xl">
                {/* Product Image */}
                <div>
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="border rounded-lg w-full h-auto object-cover" 
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center">
                    <span className="font-semibold text-blue-600 text-sm uppercase tracking-wider">
                        {product.category}
                    </span>
                    <h1 className="mt-2 font-bold text-4xl">{product.name}</h1>
                    <p className="mt-4 font-semibold text-gray-700 text-2xl">
                        Price: ${product.price}
                    </p>
                    <div className="mt-6">
                        <h3 className="pb-2 border-b font-bold text-lg">Description:</h3>
                        <p className="mt-2 text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
                    </div>
                    
                    <button className="bg-black hover:bg-gray-800 mt-8 px-6 py-3 rounded-lg w-full md:w-max font-medium text-white transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ProductDetailsPage;