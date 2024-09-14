'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import Link from 'next/link';
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
 
  email: Yup.string().email('Invalid email').required('Required'),
});

const login = () => {

 const signupForm = useFormik({
  initialValues: {
    name : '',
    email : '',
    password : '',
    confirmPassword : '', 

  },
  onSubmit: (values) => {
   console.log(values);
   
  },
  validationSchema: SignupSchema
 });

  return (
    <div className='flex justify-center items-center  bg-cover bg-center bg-no-repeat'
    style={{backgroundImage: `url('https://img.freepik.com/free-photo/frame-ecology-products_23-2148576630.jpg')`}}>
       <div className='w-full max-w-md mx-auto mt-[10vh] bg-white '>

          <div className='rounded-lg border-2 shadow p-8   '>
            <h1 className='uppercase font-bold my-6 text-5xl text-center text-bold text-green-700'>Login Here</h1>
            <form onSubmit={ signupForm.handleSubmit }>
              <label htmlFor="name" className='text-lg font-bold'>User Name/ Email</label>
              <span className='text-md text-red-500 '>{signupForm.touched.name && signupForm.errors.name}</span>

              <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name} type="text" 
              className={'border rounded w-full px-3 py-2 mb-4 '+ 
             ((signupForm.touched.name && signupForm.errors.name) ? 'border-red-500' : '')}/>
              
            

              <label htmlFor="password" className='text-lg font-bold'>Password</label>
              <span className='text-md text-red-500 '>{signupForm.touched.password && signupForm.errors.password}</span>
              <input id='password' onChange={signupForm.handleChange} value={signupForm.values.password} type="password" 
              className={'border rounded w-full px-3 py-2 mb-4 ' + 
                ((signupForm.touched.password && signupForm.errors.password) ? 'border-red-500' : '')}/>

              
               <button 
               type='submit'
               className='border bg-green-500 text-white font-bold text-2xl mt-8 px-3 py-2 rounded w-full'>Login</button>
              <div className='flex space-[1px]'>
                <div className='py-2 px-2.5 mt-2 inline-flex items-center font-medium text-sm rounded-lg' ><h1 className='font-bold' > Doesn't have an account?</h1></div>
                <div><Link          
                className=" font-bold py-2 px-2.5 mt-2 inline-flex items-center font-medium text-sm rounded-lg text-blue-500   hover:text-blue-800 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
                href="/signup"
              >
               Sign Up here
              </Link></div>
              </div>


              
            </form>
          </div>
       </div>
    </div>
  )
}

export default login;