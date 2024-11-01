'use client'
import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
        id : 1,
        title : 'Toothbrush',
        Bio : 'Wooden brush',
        price : '89',
        quantity : '2',
        img : 'https://m.media-amazon.com/images/I/71C0YbRfhxL._AC_UF1000,1000_QL80_.jpg',
       
       
    },
    {
        id : 2,
        title : 'Comb',
        Bio : 'made of wood',
        price : '49',
        quantity : '10',
        img : 'https://5.imimg.com/data5/VC/AQ/FG/SELLER-2147410/eco-friendly-bamboo-comb.jpg',
      
      
    },
    {
        id : 3,
        title : 'Tiffin Box',
        Bio : 'Wooden Tiffin',
        price : '129',
        quantity : '2',
        img : 'https://scoobies.co.in/cdn/shop/products/EDIT_20IMAGES_203_0087__DSL9996.jpg?v=1674203693',
       
       
    },
    {
        id : 4,
        title : 'Storage Box',
        Bio : 'box of Neem ',
        price : '99',
        quantity : '10',
        img : 'https://5.imimg.com/data5/SELLER/Default/2022/11/MF/SW/WH/26877620/eco-friendly-bamboo-crafted-rectangular-xl-basket-storage-box-bin-with-lids.jpg',
       
        
    },
    {
        id : 5,
        title : 'Dress',
        Bio : 'Jute/Khadi Dress',
        price : '459',
        quantity : '2',
        img : 'https://www.ajayarvindbhaikhatri.com/cdn/shop/products/1001_CARA_1_995x.jpg?v=1603450277',
       
       
    },
    {
        id : 6,
        title : 'Pen',
        Bio : 'Eco friendly  pen',
        price : '19',
        quantity : '3',
        img : 'https://5.imimg.com/data5/SELLER/Default/2021/10/YD/CG/IN/105751093/eco-friendly-pen.jpg',
       
      
    },
    {
        id : 7,
        title : 'Copy',
        Bio : 'Reusable paper  ',
        price : '69',
        quantity : '2',
        img : 'https://www.rescript.in/assets/uploads/inventory/pro_66b4aa3483b2717230554003995.png',
        
        
        
    },
    {
        id : 8,
        title : 'Slippers',
        Bio : 'Wooden Slippers  ',
        price : '119',
        quantity : '3',
        img : 'https://m.media-amazon.com/images/I/61Leb3k2OVL._AC_UY1000_.jpg',
     
        
       

    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1 className='text-2xl text-center my-2 font-bold underline'>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-5xl border-2 border-red-500 text-red-500 font-bold py-3 px-4 mx-10 text-center my-10 '>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <div className='grid grid-cols-6 border-2 border-gray-400 mx-5 my-3'>
                <div className='flex justify-align gap-2 col-span-3'>
                <div className=''>
                <img className='h-[15vh] w-[20vh]' src={item.img} alt="" />
                  </div>
                  <div className='ml-[5vh] my-2'>
                 <h2 className='text-xl font-bold underline'>{item.title}</h2>
                 <p className='text-lg '>Bio: {item.Bio}</p>
                 <p className='text-lg border-1 rounded-md font-bold text-center bg-yellow-300 py-1 px-2 '>Price: ₹{item.price}</p>
                 </div>
                </div>
                
                
                <p className='col-span-2 text-lg font-bold my-10 '>
                  Quantity:
                  <button className='border bg-gray-400 px-2  text-xl mx-1' onClick={() => decreaseQuantity(item.id)}>-</button>
                 
                  <span className='border bg-gray-400 px-2 py-1 text-xl ' > {item.quantity}</span>
                  <button className='border bg-gray-400 px-2  text-xl mx-1' onClick={() => increaseQuantity(item.id)}>+</button>
                </p>
                <div className='flex justify-align'>
                    
                <button className='text-lg border-1 rounded-md font-bold hover:bg-red-700 hover:shadow-xl hover:border-white text-white my-8 text-center bg-red-500 py-1 px-2 ' onClick={() => removeItem(item.id)}>Remove</button>
                </div>
                
              </div>
            </li>
          ))}
        </ul>
      )}
      <h2 className=' w-[35vh] justify-end text-xl ml-[90vh] border-1 rounded-md font-bold text-center  hover:shadow-xl hover:border-white bg-gray-200 py-1 my-8 mr-2 px-2 '>Total: ${calculateTotal()}</h2>
       <h2 className=' w-[35vh] justify-end text-xl ml-[90vh] border-1 rounded-md font-bold text-center hover:bg-blue-500 hover:shadow-xl hover:border-white bg-yellow-500 py-1 my-8 mr-2 px-2 '>Checkout</h2>
    </div>
  );
};

export default ShoppingCart;
