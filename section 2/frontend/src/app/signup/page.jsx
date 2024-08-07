'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { IconCircleCheck, IconLoader, IconLoader3 } from '@tabler/icons-react';
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
 
  email: Yup.string().email('Invalid email').required('Required'),
  password : Yup.string().required('Password is Required')
  .matches(/[a-z]/ , 'Lowercase Letter is Required')
  .matches(/['A-Z']/, 'Uppercase Letter is Required') 
  .matches(/[''0-9]/, 'Number is Required')
  .matches(/\W/, 'Special Character is Required'),  
  confirmPassword : Yup.string().required('Comfirmation is Required')
  .oneOf([Yup.ref('password'), null], 'Password must match'),
});

const signup = () => {

 const signupForm = useFormik({
  initialValues: {
    name : '',
    email : '',
    password : '',
    confirmPassword : '', 

  },
  onSubmit: (values, { resetForm, setSubmitting }) => {

    setTimeout(() => {
      console.log(values);
      // resetForm();
      setSubmitting(false)
    }, 3000);

   
   
  },
  validationSchema: SignupSchema
 });

  return (
    <div className='flex justify-center items-center h-screen' >
       <div className='w-full max-w-md mx-auto'>
          <div className='rounded-lg border-2 shadow p-8'>
            <h1 className='uppercase font-bold my-6 text-3xl text-center text-gray-600'>SignUp Form</h1>
            <form onSubmit={ signupForm.handleSubmit }>
              <label htmlFor="name">Full Name</label>
              <span className='text-sm ml-4 text-red-500 '>{signupForm.touched.name && signupForm.errors.name}</span>

              <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name} type="text" 
              className={'border rounded w-full px-3 py-2 mb-4 '+ 
             ((signupForm.touched.name && signupForm.errors.name) ? 'border-red-500' : '')}/>
              
              <label htmlFor="email">Email Address</label>
              <span className='text-sm ml-4 text-red-500 '>{signupForm.touched.email && signupForm.errors.email}</span>
              <input id='email' onChange={signupForm.handleChange} value={signupForm.values.email} type="email" 
             className={'border rounded w-full px-3 py-2 mb-4 '+ 
              ((signupForm.touched.email && signupForm.errors.email) ? 'border-red-500' : '')}/>

              <label htmlFor="password">Password</label>
              <span className='text-sm ml-4 text-red-500 '>{signupForm.touched.password && signupForm.errors.password}</span>
              <input id='password' onChange={signupForm.handleChange} value={signupForm.values.password} type="password" 
              className={'border rounded w-full px-3 py-2 mb-4 ' + 
                ((signupForm.touched.password && signupForm.errors.password) ? 'border-red-500' : '')}/>

              <label htmlFor="confirmPassword">Confirm Password</label>
              <span className='text-sm ml-4 text-red-500 '>{signupForm.touched.confirmPassword && signupForm.errors.confirmPassword}</span>
              <input id='confirmPassword' onChange={signupForm.handleChange} value={signupForm.values.confirmpassword} type="password" disabled = {signupForm.isSubmitting}
             className={'border rounded w-full px-3 py-2 mb-4 ' + 
              ((signupForm.touched.confirmPassword && signupForm.errors.confirmPassword) ? 'border-red-500' : '')}/>
               
               <button 
               type='submit' disabled = {signupForm.isSubmitting}
               className='flex justify-center itmes-center border bg-blue-500 text-white mt-8 px-3 py-2 rounded w-full disabled:opacity-50'>
                {signupForm.isSubmitting ? <IconLoader3 className='animate-spin' size={20}/> : <IconCircleCheck size={20}/>}
               
               <span>{signupForm.isSubmitting ? 'Please Wait' : 'Submit'}</span>
               </button>
              
            </form>
          </div>
       </div>
    </div>
  )
}

export default signup;
