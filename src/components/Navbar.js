import React from 'react';

const Navbar = ({ cartCount, setIsModalOpen }) => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between">
      <h1 className="text-white text-xl">Fake Store</h1>
      <button 
        onClick={() => setIsModalOpen(true)} 
        className="text-white"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
