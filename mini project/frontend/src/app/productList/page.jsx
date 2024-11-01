'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

// ExplorePets Component
const ExploreProducts = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const [productList, setProductList] = useState([]);

  // Fetch pets data from the API
  const fetchProductData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/product/getall');
      console.log(res.status);
      console.table(res.data);
      setProductList(res.data);
    } catch (error) {
      console.error('Error fetching prpducts data:', error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  // Filter pets based on selected type, state, and search term
  const filteredProduct = productList.filter(product =>
    (selectedType ? product.type === selectedType : true) &&
    (selectedCategory ? product.category === selectedCategory : true) &&
    
    (searchPrice ? product.Price === searchPrice : true)
  );

  
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handlePriceChange = (e) => setSearchPrice(e.target.value);

  return ( <div className="flex">
    {/* Filter Card */}
    <div className="w-1/4 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Filter Product</h2>


      <div className="mb-4">
        <label htmlFor="product-Category" className="block text-gray-700 mb-1">Category</label>
        <select
          id="product-Category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border rounded w-full px-3 py-2"
        >
          <option value="">Fashion</option>
          <option value="Jute">Jute</option>
          <option value="Soy Silk">Soy Silk</option>
          <option value="Hemp">Hemp</option>
          <option value="Organic Cotton">Others</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>

    {/* Pets Display Area */}
    <div className="w-3/4 p-6">
      {/* Search Bar */}
     
      <h2 className="text-2xl font-bold mb-6">Available Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProduct.length > 0 ? (
          filteredProduct.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={product.image} alt={product.price} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">₹ {product.price}</h3>
                <p className="text-gray-600">Type: {product.title}</p>
                <p className="text-gray-600">Brand: {product.brand}</p>
                <div className='mt-4 text-center'>
                  <Link href={`/product-detail/${product._id}`} className='text-lime-500 hover:underline text-sm'>View Details</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No products found</p>
        ) }
      </div>
    </div>
    </div>
  );
   
  
};

export default ExploreProducts;

