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
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src={productData.image}
                            alt={productData.name}
                            className="w-full h-[500px] object-cover" // Increased height to 500px
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            {/* Uncomment to display pet name on overlay */}
                            {/* <h1 className="text-white text-4xl font-bold">{pet.name}</h1> */}
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-semibold mb-2">{productData.title}</h2>
                                <p className="text-lg text-gray-700 mb-2">Brand: {productData.brand} </p>
                                <p className="text-lg text-gray-700 mb-2">Category: {productData.category}</p>
                                <p className="text-lg text-gray-700 mb-2">Quantity: {productData.quantity}</p>
                                <p className="text-lg text-gray-700 mb-2">Price: ₹{productData.price}</p>
                               
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