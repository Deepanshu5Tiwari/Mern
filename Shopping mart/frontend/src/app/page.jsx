'use client'
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <h1>Shopping Website</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
