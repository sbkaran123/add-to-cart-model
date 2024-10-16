import React from 'react';

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
          <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
          <h2 className="text-lg font-bold mt-4">{product.title}</h2>
          <p className="mt-2">${product.price}</p>
          <button 
            onClick={() => handleAddToCart(product)} 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
