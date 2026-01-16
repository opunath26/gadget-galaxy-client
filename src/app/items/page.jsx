// app/items/page.js
import ProductCard from '@/components/ProductCard';
import Title from '@/components/Title';
// import ProductCard from '@/components/ProductCard';
import React from 'react';

async function getProducts() {
    const res = await fetch('http://localhost:5000/api/products', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
}

const Items = async () => {
    const products = await getProducts();

    return (
        <main className="p-10">
            <Title text="Gadget List" /> 
            
            <div className="gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-8">
                {products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </main>
    );
}

export default Items;