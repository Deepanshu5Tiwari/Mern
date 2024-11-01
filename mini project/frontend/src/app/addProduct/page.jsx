'use client';
import React from 'react';
import { IconUpload,IconLoader3,IconCoinRupeeFilled,IconCategoryFilled,IconBrandNexo,IconBuildingStore  } from '@tabler/icons-react';
import axios from 'axios';
import {  useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

// Validation Schema
const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  brand: Yup.string().required('Brand is required'),
  category: Yup.string().required('Category is required'),
 
  price: Yup.number().required('Price is required'),
  image: Yup.string().required('Image URL is required') // Expecting a URL string for image
});

const AddProductForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      brand: '',
      category: '',
      
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

        // Send product data to server
        const response = await axios.post('http://localhost:5000/product/add', values);
        console.log(response.status);

        // Reset form and show success message
        resetForm();
        toast.success('Product added successfully');
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
          <h2 className='text-3xl font-bold text-center text-green-800 mb-6'>Sell a New Product</h2>
          <form onSubmit={formik.handleSubmit} className='space-y-6'>
            {/* Pet Breed */}
            <div className='flex'>
              <IconBuildingStore my-1 size={35}/>
              <label htmlFor='title' className='block text-gray-700 font-medium mb-1'></label>
              <input
                id='title'
                name='title'
                type='text'
                placeholder='Enter Product Name'
                value={formik.values.title}
                onChange={formik.handleChange}
                className='border hover:border-blue-500 hover:shadow-lg hover:border-2 rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500  '
                required
              />
              {formik.touched.title && formik.errors.title ? (
                <span className='text-sm text-red-500'>{formik.errors.title}</span>
              ) : null}
            </div>

            {/* Product Type */}
            <div className='flex '>
              <IconBrandNexo className='my-1' size={35}/>
              <label htmlFor='brand' className='block text-gray-700 font-medium mb-1'></label>
              <input
                id='brand'
                name='brand'
                placeholder='Enter Brand Name'
                value={formik.values.brand}
                onChange={formik.handleChange}
                className='border hover:border-blue-500 hover:shadow-lg hover:border-2 rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500  '
                required
              />
               
           
              {formik.touched.brand && formik.errors.brand ? (
                <span className='text-sm text-red-500'>{formik.errors.brand}</span>
              ) : null}
            </div>
            

<div className='flex'>
              <IconCategoryFilled className='my-1' size={35}/>
              <label htmlFor='category' className='block text-gray-700 font-medium mb-1'></label>
              <input
                id='category'
                name='category'
                type='text'
                placeholder='Category'
                value={formik.values.category}
                onChange={formik.handleChange}
                className='border hover:border-blue-500 hover:shadow-lg hover:border-2 rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500  '
                required
              />
              {formik.touched.category && formik.errors.category ? (
                <span className='text-sm text-red-500'>{formik.errors.category}</span>
              ) : null}
            </div>

           
          

           
         
                

            <div className='flex '>
              <IconCoinRupeeFilled className='my-1' size={35}/>
              <label htmlFor='price' className='block text-gray-700 font-medium mb-1'> </label>
              <input
                id='price'
                placeholder='Enter Price '
                name='price'
                type='text'
                value={formik.values.price}
                onChange={formik.handleChange}
                className='border hover:border-blue-500 hover:shadow-lg hover:border-2 rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500  '
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
                className='border hover:border-blue-500 hover:shadow-lg hover:border-2 rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500  '
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
                    alt='Product Preview'
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
              
              {formik.isSubmitting ? <IconLoader3 className='animate-spin' size={20} /> :<IconUpload className='ml-2' />}

            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;