'use client';
import React from 'react';
import { IconSend } from '@tabler/icons-react';
import axios from 'axios';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

// Validation Schema
const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  brand: Yup.string().required('Brand is required'),
  category: Yup.string().required('Category is required'),
  quantity: Yup.number().required('Quantity is required'),
  price: Yup.number().required('Price is required'),
  image: Yup.string().required('Image URL is required') // Expecting a URL string for image
});

const AddProductForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      brand: '',
      category: '',
      quantity: '',
      price: '',
      image: ''
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        // Check if an image file is present
        if (values.image instanceof File) {
          // Upload image
          const imageFormData = new FormData();
          imageFormData.append('file', values.image);
          imageFormData.append('upload_preset', 'mypreset');
          imageFormData.append('cloud_name', 'dmnl8ozex');

          const uploadResponse = await axios.post('https://api.cloudinary.com/v1_1/domusgrnf/image/upload', imageFormData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });

          // Include the image URL in the form data
          values.image = uploadResponse.data.secure_url;
        }

        // Send pet data to server
        const response = await axios.post('http://localhost:5000/product/add', values);
        console.log(response.status);

        // Reset form and show success message
        resetForm();
        toast.success('Pet added successfully');
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.message || 'An error occurred');
      } finally {
        setSubmitting(false);
      }
    }
  });

  // Handle file change
  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      formik.setFieldValue('image', files[0]); // Set file object to state
    }
  };

  return (
    <div
      className='relative min-h-screen bg-cover bg-center'
      style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp8965476.jpg")' }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative flex justify-center items-center min-h-screen'>
        <div className='w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 z-10 my-12 mx-auto'>
          <h2 className='text-2xl font-bold text-lime-500 mb-6'>Sell a New Product</h2>
          <form onSubmit={formik.handleSubmit} className='space-y-6'>
            {/* Pet Breed */}
            <div>
              <label htmlFor='title' className='block text-gray-700 font-medium mb-1'>Product Title</label>
              <input
                id='title'
                name='title'
                type='text'
                value={formik.values.title}
                onChange={formik.handleChange}
                className='border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500  '
                required
              />
              {formik.touched.title && formik.errors.title ? (
                <span className='text-sm text-red-500'>{formik.errors.title}</span>
              ) : null}
            </div>

            {/* Pet Type */}
            <div>
              <label htmlFor='brand' className='block text-gray-700 font-medium mb-1'>Brand</label>
              <input
                id='brand'
                name='brand'
                value={formik.values.brand}
                onChange={formik.handleChange}
                className='border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500  '
                required
              />
               
           
              {formik.touched.brand && formik.errors.brand ? (
                <span className='text-sm text-red-500'>{formik.errors.brand}</span>
              ) : null}
            </div>
            

<div>
              <label htmlFor='category' className='block text-gray-700 font-medium mb-1'>Category</label>
              <input
                id='category'
                name='category'
                type='text'
                value={formik.values.category}
                onChange={formik.handleChange}
                className='border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500  '
                required
              />
              {formik.touched.category && formik.errors.category ? (
                <span className='text-sm text-red-500'>{formik.errors.category}</span>
              ) : null}
            </div>

           
            <div>
              <label htmlFor='quantity' className='block text-gray-700 font-medium mb-1'> Quantity</label>
              <input
                id='quantity'
                name='quantity'
                type='number'
                value={formik.values.quantity}
                onChange={formik.handleChange}
                className='border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500'
                required
              />
              {formik.touched.quantity && formik.errors.quantity ? (
                <span className='text-sm text-red-500'>{formik.errors.quantity}</span>
              ) : null}
            </div>

           
         
                

            <div>
              <label htmlFor='price' className='block text-gray-700 font-medium mb-1'> Enter Price </label>
              <input
                id='price'
                name='price'
                type='text'
                value={formik.values.price}
                onChange={formik.handleChange}
                className='border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500  '
                required
              />
              {formik.touched.price && formik.errors.price ? (
                <span className='text-sm text-red-500'>{formik.errors.price}</span>
              ) : null}
            </div>


           
            <div>
              <label htmlFor='image' className='block text-gray-700 font-medium mb-1'>Product Image</label>
              <input
                id='image'
                name='image'
                type='file'
                onChange={handleFileChange}
                className='border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500  '
                accept='image/*'
                required
              />
              {formik.touched.image && formik.errors.image ? (
                <span className='text-sm text-red-500'>{formik.errors.image}</span>
              ) : null}
              {formik.values.image && typeof formik.values.image === 'string' && (
                <div className='mt-4'>
                  <p className='text-gray-600'>Selected image:</p>
                  <img
                    src={formik.values.image}
                    alt='Pet Preview'
                    className='w-32 h-32 object-cover mt-2'
                  />
                </div>
              )}
            </div>

            <button
              type='submit'
              disabled={formik.isSubmitting}
              className='w-full py-2 px-4 bg-lime-500 text-white font-semibold rounded-lg flex items-center justify-center hover:bg-lime-600'
            >
              {formik.isSubmitting ? 'Adding...' : 'Add Product'}
              <IconSend className='ml-2' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;