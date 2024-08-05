import React from 'react'

const login = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold border bg-black text-white px-3 py-2 text-center w-1/2 mx-auto mt-5'>Login Page</h1>

      <div className='flex justify-center gap-3 mt-5 rounded'>
        <button className='border-b-2 bg-blue-500 text-white px-3 py-2 text-center '>Login Here</button>
        <button className='border-b-2 bg-red-500 text-white px-3 py-2 text-center '>SignUp Here</button>
      </div>
    </div>
  )
}

export default login ;
