'use client'
import React, { useState } from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, img: 'https://www.ingreenwoodenhouse.com/wp-content/uploads/2019/08/IG-1-039.jpg', name: 'Wooden Hut', price: 50000 },
    { id: 2,  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3hhWHHPF9YV704OBzKHqo3duzg6NaFjhnA&s', name: 'Plants', price: 150 },
    { id: 3,  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Wr7g3XQtWiIJA3feSHfVs8D5HQu8rjiyaA&s', name: 'Drawer', price: 20000 },
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addItem = () => {
    const newItem = { id: wishlistItems.length + 1, name: `Product ${wishlistItems.length + 1}`, price: Math.floor(Math.random() * 30) + 10 };
    setWishlistItems([...wishlistItems, newItem]);
  };

  return (
    <div className=''>
      <h1 className='flex justify-center text-3xl font-bold border-2 py-2 px-3 '>Shopping Wishlist</h1>
      <button className='border-2 py-2 px-3 bg-blue-500 rounded-lg font-bold text-xl my-3 ml-3 hover:border-white hover:bg-blue-300 hover:shadow-lg' onClick={addItem}>Add Random Product</button>
      {wishlistItems.length === 0 ? (
        <p className='border-2 bg-red-700 text-center text-white text-5xl text-bold py-8 px-8 mx-[35vh] my-[25vh]'>Your wishlist is empty</p>
      ) : (
        <ul>
          {wishlistItems.map(item => (
            <li key={item.id} className='grid grid-cols-5 border-2 border-gray-400 my-5 mx-[35vh]'>
                <div className='col-span-2 ml-[15vh] my-5'>
                <img className='h-[25vh] w-[38vh]' src={item.img} alt="NOT UPLOADED" />
                </div>
                
              <div className='col-span-3 my-5 ' >
                <h2 className='text-2xl font-bold '>{item.name}</h2>
                <p className='border-1 bg-yellow-500 rounded-lg py-2 px-7 text-lg font-bold mt-5 mr-[55vh] '>Price: ₹{item.price}</p>
                <button className='border-2 bg-red-500 text-white text-sm  hover:border-white hover:bg-red-300 hover:shadow-lg  font-bold py-2 px-3 my-3' onClick={() => removeItem(item.id)}>Remove</button>
              </div>
              <div className='col-span-1'>
             
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
