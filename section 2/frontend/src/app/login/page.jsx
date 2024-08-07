'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
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
    <div className='flex justify-center items-center h-screen' >
       <div className='w-full max-w-md mx-auto'>
          <div className='rounded-lg border-2 shadow p-8'>
            <h1 className='uppercase font-bold my-6 text-2xl text-center text-blue-600'>Login Here</h1>
            <form onSubmit={ signupForm.handleSubmit }>
              <label htmlFor="name">User Name</label>
              <span className='text-sm text-red-500 '>{signupForm.touched.name && signupForm.errors.name}</span>

              <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name} type="text" 
              className={'border rounded w-full px-3 py-2 mb-4 '+ 
             ((signupForm.touched.name && signupForm.errors.name) ? 'border-red-500' : '')}/>
              
            

              <label htmlFor="password">Password</label>
              <span className='text-sm text-red-500 '>{signupForm.touched.password && signupForm.errors.password}</span>
              <input id='password' onChange={signupForm.handleChange} value={signupForm.values.password} type="password" 
              className={'border rounded w-full px-3 py-2 mb-4 ' + 
                ((signupForm.touched.password && signupForm.errors.password) ? 'border-red-500' : '')}/>

              
               <button 
               type='submit'
               className='border bg-blue-500 text-white mt-8 px-3 py-2 rounded w-full'>Login</button>
              
            </form>
          </div>
       </div>
    </div>
  )
}

export default login;
