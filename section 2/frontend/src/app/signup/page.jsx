import React from 'react'

const signup = () => {
  return (
    <div className='flex justify-center items-center h-screen' >
       <div className='w-full max-w-md mx-auto'>
          <div className='rounded-lg border-2 shadow p-8'>
            <h1 className='uppercase font-bold my-6 text-3xl text-center text-gray-600'>SignUp Form</h1>
            <form>
              <label htmlFor="name">Full Name</label>
              <input id='name' type="text" 
              className='border rounded w-full px-3 py-2 mb-4'/>

              <label htmlFor="email">Email Address</label>
              <input id='email' type="email" 
              className='border rounded w-full px-3 py-2 mb-4'/>

              <label htmlFor="password">Password</label>
              <input id='password' type="password" 
              className='border rounded w-full px-3 py-2 mb-4'/>

              <label htmlFor="confirmpassword">Confirm PAssword</label>
              <input id='confirmpassword' type="password" 
              className='border rounded w-full px-3 py-2 mb-4'/>
               
               <button 
               type='submit'
               className='border bg-blue-500 text-white mt-8 px-3 py-2 rounded w-full'>Submit</button>
              
            </form>
          </div>
       </div>
    </div>
  )
}

export default signup;
