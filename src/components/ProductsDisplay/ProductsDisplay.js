import React from 'react';
import ProductCard from './ProductCard';

function ProductsDisplay() {

    const products = [
        { Name: "Don Quijote", Image: "product", Price: "10" },
        { Name: "Don Quijote", Image: "https://pictures.abebooks.com/isbn/9788471664570-es.jpg", Price: "12.90" },
        { Name: "Don Quijote", Image: "product", Price: "10" },
    ]

    return (
        <div className="productdisplay-container">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    Name={product.Name}
                    Image={product.Image}
                    Price={product.Price}
                />
            ))}
        </div>
    );
}

export default ProductsDisplay;