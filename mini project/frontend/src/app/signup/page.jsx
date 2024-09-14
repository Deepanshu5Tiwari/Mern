'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { IconCircleCheck, IconLoader, IconLoader3 } from '@tabler/icons-react';
import axios, { Axios } from 'axios';
import toast from 'react-hot-toast';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is Required')
    .matches(/[a-z]/, 'Lowercase Letter is Required')
    .matches(/['A-Z']/, 'Uppercase Letter is Required')
    .matches(/[''0-9]/, 'Number is Required')
    .matches(/\W/, 'Special Character is Required'),
  confirmPassword: Yup.string().required('Comfirmation is Required')
    .oneOf([Yup.ref('password'), null], 'Password must match'),
});

const signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',

    },
    onSubmit: (values, { resetForm, setSubmitting }) => {

      //setTimeout(() => {
      //  console.log(values);
      // resetForm();
      //   setSubmitting(false)
      //   }, 3000);

      //making a request
      axios.post('http://localhost:5000/user/add', values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success('user registered successfully');
        }).catch((err) => {
          console.log(err);
          console.log(err.response?.data);
          setSubmitting(false);
          toast.error(err?.response?.data?.message);
        });


    },
    validationSchema: SignupSchema
  });
  

    

 
  return ( 
    
    
    <div className='flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat '
      style= {{ backgroundImage: `url('https://market99.com/cdn/shop/articles/5-market-99-eco-friendly-products-for-sustainable-living-market-99.jpg?v=1697004181')`}} 
      >
       <div className=' grid grid-cols-2 border rounded-xl   box-shadow mx-[30vh] '>
       <div className='col-span-1 bg-green-700 rounded'>
       <div>
          <img className='h-[60vh]' src="https://media.licdn.com/dms/image/v2/D5612AQGb8W36OJmN_Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693507910822?e=2147483647&v=beta&t=T77kC_v0ecdEezw0hYTX1jkZ5r-0SzzeWTuCv7sF-eA" alt="" />
         </div>
          <div className='grid grid-cols-6 h]'>
          <div className='col-span-2 bg-green-700 mx-3'><img src="https://img.freepik.com/premium-vector/eco-bio-vegan-food-stickers-template-logo-with-leaves-organic-eco-friendly-products-eco-sticker-labeling-package-food-cosmetics-hand-drawn-style_560641-414.jpg" alt="" /></div>
          <div className='col-span-4'><h1 className='text-5xl font-bold  text-white mt-[1vh]  mx-4'>Economical Friendly Market</h1></div>
          </div>
          </div>
          <div className=' bg-white  p-8 col-span-1  rounded'>
          <h1 className='uppercase font-bold my-6 underline text-5xl text-center text-green-900'>SignUp Form</h1>
          <form onSubmit={signupForm.handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <span className='text-sm ml-4 text-red-500 '>{signupForm.touched.name && signupForm.errors.name}</span>

            <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name} type="text"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((signupForm.touched.name && signupForm.errors.name) ? 'border-red-500' : '')} />

            <label htmlFor="email">Email Address</label>
            <span className='text-sm ml-4 text-red-500 '>{signupForm.touched.email && signupForm.errors.email}</span>
            <input id='email' onChange={signupForm.handleChange} value={signupForm.values.email} type="email"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((signupForm.touched.email && signupForm.errors.email) ? 'border-red-500' : '')} />

            <label htmlFor="password">Password</label>
            <span className='text-sm ml-4 text-red-500 '>{signupForm.touched.password && signupForm.errors.password}</span>
            <input id='password' onChange={signupForm.handleChange} value={signupForm.values.password} type="password"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((signupForm.touched.password && signupForm.errors.password) ? 'border-red-500' : '')} />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <span className='text-sm ml-4 text-red-500 '>{signupForm.touched.confirmPassword && signupForm.errors.confirmPassword}</span>
            <input id='confirmPassword' onChange={signupForm.handleChange} value={signupForm.values.confirmpassword} type="password" disabled={signupForm.isSubmitting}
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((signupForm.touched.confirmPassword && signupForm.errors.confirmPassword) ? 'border-red-500' : '')} />

            <button
              type='submit' disabled={signupForm.isSubmitting}
              className='flex justify-center itmes-center border bg-green-500 text-white mt-8 px-3 py-2 rounded w-full disabled:opacity-50'>
              {signupForm.isSubmitting ? <IconLoader3 className='animate-spin' size={20} /> : <IconCircleCheck size={20} />}

              <span>{signupForm.isSubmitting ? 'Please Wait' : 'Submit'}</span>
            </button>

          </form>
        </div>
      </div>
    </div>
  )

}


export default signup;