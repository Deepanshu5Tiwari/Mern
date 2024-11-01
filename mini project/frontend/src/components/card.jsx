import React from 'react'

const Card = ({ item, handleClick }) => {
  const {id, title, Bio, price, img} = item;
  return (
    <div className=''>
      <div className='border-2 border-white bg-white mx-5 my-4 rounded-lg py-2'>
           
      <div className='flex justify-center item-center'>
        <img className='h-[35vh] w-[35vh]' src={img} alt="" />
      </div>
      <br />
      <div className='mx-4'>
        <p className='text-xl font-bold'>{title}</p>
        <p className='text-lg '>{Bio}</p>
        <p className='text-red-500 text-lg font-bold '>Price: ₹{price}</p>
        <div className='flex justify-center item-center py-3 '>
        <button className='border-2 bg-yellow-500 rounded-md py-2 px-3 hover:bg-yellow-300 hover:shadow-lg hover:border-yellow-700'
        >Add to Cart</button>
        </div>
        
      </div>
      </div>
     
      
    </div>
  )
}

export default Card;
