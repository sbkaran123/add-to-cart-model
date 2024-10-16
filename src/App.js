import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} setIsModalOpen={setIsModalOpen} />
      <ProductList products={products} handleAddToCart={handleAddToCart} />
      <CartModal 
        isOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
        cart={cart} 
        handleRemoveFromCart={handleRemoveFromCart} 
      />
    </div>
  );
};

export default App;
