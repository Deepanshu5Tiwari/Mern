import React from 'react';

const Product = ({ product, addToCart }) => (
  <div className="product">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default Product;
