'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
  

    const { id } = useParams();
    const [productData, setproductData] = useState(null)

    const fetchProductDetails = async () => {
        const res = await axios.get('http://localhost:5000/product/getbyid/' + id);
        const data = res.data;
        console.log(data);
        setproductData(data);
    }

    useEffect(() => {
        fetchProductDetails();
    }, [])

    const displayProductDetails = () => {
        if (productData !== null) {
            return (
                <div className="mx-[10vh] flex justify-align mx-auto bg-white shadow-lg rounded-lg overflow-hidden">



                    <div className="relative mx-2 my-4">
                        <img
                            src={productData.image}
                            alt={productData.name}
                            className=" w-[70vh] h-[70vh] object-cover" 
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          
                        </div>
                    </div>



                    <div className="p-6 ml-5">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-semibold mb-2 underline">{productData.title}</h2>
                                <br />
                                <p className="text-xl font-bold text-gray-700 mb-2 ">Brand: {productData.brand} </p>
                                <br />
                                <p className="text-xl font-bold text-gray-700 mb-2">Category: {productData.category}</p>
                                <br />
                                <p className='text-lg text-gray-400 '>Eco-friendly products made using natural materials and ingredients are better than those manufactured using plastics and synthetic materials, and/or chemicals and dangerous substances.</p>
                                <br />
                                <p className=" py-2 text-lg font-bold border bg-blue-200 text-center mb-2">Price: ₹{productData.price}</p>
                                <br />
                                <div className='flex justify-center'>
                                <button className='mx-2 rounded-md text-lg border border-yellow-700 bg-yellow-500 py-2 px-3 hover:border-black hover:shadow-lg hover:bg-yellow-300'>Buy Now</button>
                                <button className='rounded-md text-lg border border-yellow-700 bg-yellow-500 py-2 px-3 hover:border-black hover:shadow-lg hover:bg-yellow-300'>Add to Cart</button>
                                </div>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            )
        } else {
            return <h2>Loading ... </h2>
        }
    }


    return (
        <div className="bg-gray-100 min-h-screen py-10">
            {displayProductDetails()}
        </div>
    );
};

export default ProductDetails;