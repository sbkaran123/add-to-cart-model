import React from 'react';

const CartModal = ({ isOpen, setIsModalOpen, cart, handleRemoveFromCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <span>{item.title}</span>
                <button 
                  onClick={() => handleRemoveFromCart(item.id)} 
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button 
          onClick={() => setIsModalOpen(false)} 
          className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
