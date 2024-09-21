import React from 'react';

const Cart = ({ cart }) => (
  <div className="cart">
    <h2>Your Cart</h2>
    {cart.length === 0 ? <p>No items in cart</p> : (
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;
