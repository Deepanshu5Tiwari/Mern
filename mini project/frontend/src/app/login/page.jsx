'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IconUserFilled, IconRocket, IconLoader3 } from '@tabler/icons-react';
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
    <div className='flex justify-center items-center '>
       <div className='w-full max-w-md mx-auto mt-3 bg-white '>

          <div className='rounded-lg border-2 shadow p-8   '>
            <h1 className='flex justify-center text-center  '><IconUserFilled className='animate' size={40}/></h1>
            <h1 className='uppercase font-bold  mt-1 text-2xl text-center text-bold text-blue-700'>Login Here</h1>
            <h1 className='text-md text-gray-400 text-center mb-4'>Hello,Welcome back to your account</h1>
        
            <form onSubmit={ signupForm.handleSubmit }>
              <label htmlFor="name" className='text-lg font-bold'>User Name</label>
              <span className='text-md text-red-500 '>{signupForm.touched.name && signupForm.errors.name}</span>

              <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name} type="text" 
              className={'border hover:border-blue-500 rounded w-full px-3 py-2 mb-4 '+ 
             ((signupForm.touched.name && signupForm.errors.name) ? 'border-red-500' : '')}/>
              
            

              <label htmlFor="password" className='text-lg font-bold'> Password</label>
              <span className='text-md text-red-500 '>{signupForm.touched.password && signupForm.errors.password}</span>
              <input id='password' onChange={signupForm.handleChange}   value={signupForm.values.password} type="password" 
              className={'border rounded hover:border-blue-500 w-full px-3 py-2 mb-3 ' + 
                ((signupForm.touched.password && signupForm.errors.password) ? 'border-red-500' : '')}
                placeholder='********'

                />
                
                <button 
               type='submit' disabled = {signupForm.isSubmitting}
               className='flex justify-center hover:bg-blue-300 itmes-center border bg-blue-500 text-white mt-4 px-3 py-2 rounded w-full disabled:opacity-50'>
                {signupForm.isSubmitting ? <IconLoader3 className='animate-spin' size={20}/> : <IconRocket size={25}/>}
               
               <span>{signupForm.isSubmitting ? 'Please Wait' : 'login'}</span>
               </button>
                
                
              <div className='flex justify-align '>
                <div className='py-2  mt-2  items-center font-medium text-sm rounded-lg' ><h1 className='font-bold' > Doesn't have an account?</h1></div>
                <div><Link          
                className=" font-bold py-2  mt-2 inline-flex items-center font-medium text-sm rounded-lg text-blue-500 underline  hover:text-blue-800 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
                href="/signup"
              >
               Sign Up here
              </Link></div>
              </div>

              <div className='py-8'>
                  <h1 className='text-lg font-bold text-gray-400'>----------------or login with----------------</h1>
                </div>

                    
                    <div className='flex justify-between mx-5 mt-3'>
                       <div className='py-1 px-8 border-2 border-gray-200 rounded hover:border-gray-400 hover:shadow-xl '><img className='h-[6vh] w-[6vh]' src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-logo-png-transparent-svg-vector-bie-supply-16.png" alt="" /></div>
                       <div className='py-1 px-8 border-2  border-gray-200 rounded hover:border-gray-400 hover:shadow-xl'><img className='h-[6vh] w-[6vh]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png" alt="" /></div>
                       <div className='py px-8 border-2 border-gray-200 rounded hover:border-gray-400 hover:shadow-xl'><img className='h-[7vh] w-[7vh]' src="https://cdn.vectorstock.com/i/500p/43/41/apple-logo-computer-ipad-iphone-software-vector-19944341.jpg" alt="" /></div>

                           
                    </div>

              
            </form>
          </div>
       </div>
    </div>
  )
}

export default login;