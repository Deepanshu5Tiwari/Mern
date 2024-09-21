import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import Product from './Product';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };
    getProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product._id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
