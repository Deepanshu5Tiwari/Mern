'use client'
import login from '@/app/login/page';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const UpdateUser = () => {
   
    const {id} = useParams();
    const [userData, setUserData] = useState(null);

    const getUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getbyid/' +id);
        console.log(res.data);
        setUserData(res.data);
    }

    useEffect(() => {
        getUserData();
    }, []);

  return (
    <div>
      <div className='max-w-xl mx-auto p-5 border rounded-lg mt-5 shadow'>
     <h1 className='text-2xl text-center font-bold'>Update User Details</h1>
     {
        userData !== null ? (
            <form >
        <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100'
        placeholder='Enter your Name'
        id='name'
         type="text" />
        <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100'
        placeholder='Enter your Email '
        id='email'
         type="email" />
        <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100'
        placeholder='Enter your Password'
        id='password'
         type="password" />
        <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100'
        placeholder='Enter your City'
        id='city'
         type="text" />
         <button className='block ml-auto p-3 bg-blue-500 text-white mt-6 rounded-lg'>Update User</button>
            </form>
        ) : <p className='text-3xl text-gray-500 text-center font-bold mt-5'>Loading...</p>
     }
     
      </div>
    </div>
  )
}

export default UpdateUser;
