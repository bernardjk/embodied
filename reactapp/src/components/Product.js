import React from 'react';

const Product = ({ name, description, price, onAddToCart, inCartCount=0 }) => {
    return (
        <div className="product-card bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-900 font-semibold mb-4">Price: ${price}</p>
            <button 
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={onAddToCart}
            >
                Add to Cart ({inCartCount})
            </button>
        </div>
    );
};

export default Product;