import React from 'react'

const contact = () => {
  return (
    <div className='bg-blue-600'>
      <br />
      <h1 className='text-3xl font-bold underline text-center px-5'>CONTACT US </h1>
      <div className=' grid grid-cols-3 px-12 py-8'>
        <div className='col-span-1 bg-blue-200 px-3 py-2'>
          <form >
            <h1 className='text-2xl underline font-bold mt-5 ml-3'>Contact Details</h1>
            <br />
            <p className='text-xl'>44, Main Street</p>
            <br />
            <p className='text-xl'>📞(555)555-555</p>
            <br />
            <p className='text-xl'>✉here@gmail.com</p>
            <br />
            
          </form>
        </div>
        <div className='col-span-2 border bg-blue-100 px-3'>
          <form>
            <h1 className='text-2xl underline font-bold m-5'> E-mail Us</h1>
            <div className='flex gap-3'>
            <div><label htmlFor="name">First Name</label>
            <input type=" text" id='name' className={'border rounded w-full px-3 py-2 mb-4'} /></div>
            <div>
            <label htmlFor="name">Last Name</label>
            <input type=" text" id='name' className={'border rounded w-full px-3 py-2 mb-4'} />
            </div>
            </div>
            
           
            <label htmlFor="Number">Contact Number</label>
            <br />
            <input type="number" id='Number' className={' border rounded w-1/2 px-3 py-2 mb-4'} />
            <br />
            
            <label htmlFor="email">Email </label>
            <br />
            <input type="email" id='email' className={'border rounded w-1/2 px-3 py-2 mb-4'} />
             <br />
            <label htmlFor="message">Message</label>
            <br />
            <input type="text" id='message' className='border rounded w-3/4 px-3 py-8 mb-4' />
            <br />

           <button type='submit' className='flex justify-center w-1/2 item-center border bg-blue-500 text-white mt-8 px-3 py-2 rounded  mb-4'>Submit</button>          
            
           
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default contact;
