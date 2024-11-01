'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { IconCircleCheck, IconUserFilled, IconMail, IconLoader3, IconPasswordUser } from '@tabler/icons-react';
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
    
    
    <div className='flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat '>
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
          <div className=' bg-white  p-4 col-span-1  rounded'>
          <h1 className='uppercase font-bold my-3 underline text-3xl text-center text-green-900 mb-10'>SignUp Form</h1>
          <form onSubmit={signupForm.handleSubmit}>


            <div className='flex justify-align mt-5'>
            
            <h1><IconUserFilled size={35}/></h1>
            <label htmlFor="name"></label>
            <span className='text-sm ml-1 text-red-500 '>{signupForm.touched.name && signupForm.errors.name}</span>

            <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name} type="text"
              className={'border rounded w-full px-3 py-2 mb-4 hover:border-blue-500 hover:shadow-xl' +
                ((signupForm.touched.name && signupForm.errors.name) ? 'border-red-500' : '')} 
                placeholder='Create UserName'/>
            </div>
            
              

              <div className='flex justify-align'>
                <h1><IconMail size={35}/> </h1>
                <label htmlFor="email"></label>
            <span className='text-sm ml-1  text-red-500 '>{signupForm.touched.email && signupForm.errors.email}</span>
            <input id='email' onChange={signupForm.handleChange} value={signupForm.values.email} type="email"
              className={'border rounded w-full px-3 py-2 mb-4  hover:border-blue-500 hover:shadow-xl ' +
                ((signupForm.touched.email && signupForm.errors.email) ? 'border-red-500' : '')}
                placeholder='Enter Email' />
              </div>

            <div className='flex justify-align'>
              <h1>
                <IconPasswordUser size={35}/>
                </h1>
                
                <label htmlFor="password"></label>
            <span className='text-sm ml-1  text-red-500 '>{signupForm.touched.password && signupForm.errors.password}</span>
            <input id='password' onChange={signupForm.handleChange} value={signupForm.values.password} type="password"
              className={'border rounded w-full px-3 py-2 mb-4  hover:border-blue-500 hover:shadow-xl' +
                ((signupForm.touched.password && signupForm.errors.password) ? 'border-red-500' : '')}
                placeholder='Create Password' />
             


            </div>
  

            <div className='flex justify-align'>
               <h1><IconPasswordUser size={35}/></h1>

            <label htmlFor="confirmPassword"></label>
            <span className='text-sm ml-1 text-red-500 '>{signupForm.touched.confirmPassword && signupForm.errors.confirmPassword}</span>
            <input id='confirmPassword' onChange={signupForm.handleChange} value={signupForm.values.confirmpassword} type="password" 
              className={'border rounded w-full px-3 py-2 mb-2  hover:border-blue-500 hover:shadow-xl' +
                ((signupForm.touched.confirmPassword && signupForm.errors.confirmPassword) ? 'border-red-500' : '')} 
                placeholder='Confirm Password'/>
               
            </div>
           

            

            <button
              type='submit' disabled={signupForm.isSubmitting}
              className='flex justify-center itmes-center border  hover:bg-blue-500 hover:shadow-xl bg-green-500 text-white mt-8 px-3 py-2 rounded w-[50vh] mx-auto disabled:opacity-50'>
              {signupForm.isSubmitting ? <IconLoader3 className='animate-spin ' size={20} /> : <IconCircleCheck className='my-1' size={20} />}

              <span>{signupForm.isSubmitting ? 'Please Wait' : 'Submit'}</span>
            </button>

            <div className='py-8'>
                  <h1 className='text-lg font-bold text-gray-400'>--------------------or SignUp with------------------</h1>
                </div>
                   
                <div className='flex justify-between mx-5 '>
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


export default signup;