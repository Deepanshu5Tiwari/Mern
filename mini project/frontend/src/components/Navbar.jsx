'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



 



const Navbar = () => {
    const path = usePathname();
    console.log(path);
  return (
    <div>
      <div className='flex justify-between bg-gray-700 h-[8vh]'>
       
       <div className=" ml-5 ">
         
          <select
            id="product-type"
           
            className="border rounded h-[6vh] w-full px-1 py-1 bg-yellow-400 my-2  font-bold text-lg text-black hover:shadow-xl hover:shadow-white"
          >
            <option value=""> ⩧  Category</option>
            <option value="Fashion">Fashion Wear</option>
            <option value="Accesories">Accesories</option>
            <option value="Others">Others</option>
            {/* Add more options as needed */}
          </select>
        </div>
  
  
        <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1 ">
                <Link
                    className="   p-2 flex text-lg items-center  text-white   underline rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="/"
                  >
                    <svg
                      className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 12h.01" />
                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                      <rect width={20} height={14} x={2} y={6} rx={2} />
                    </svg>
                    HOME
                  </Link>
                
               
                  <Link
                    className="  p-2 flex items-center text-lg text-white  hover:text-black hover:bg-blue-500  hover:text-white rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="/addProduct"
                  >
                    <svg
                      className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    SELL PRODUCT
                  </Link>
                 
                  <Link
                    className="  p-2 flex items-center text-lg text-white  hover:text-black hover:bg-blue-500  hover:text-white rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="/productList"
                  >
                    <svg
                      className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    RECENT PRODUCTS 
                  </Link>
                 
                 
                </div>
  
  
  
  
       <div className='flex '>
       <Link
            
                    className="p-2 flex  items-center  text-white hover:text-black hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                   href="/wishlist"
                  >
                   <img 
                    
                   className='h-[6vh]' src="https://cdn-icons-png.flaticon.com/512/8830/8830807.png" alt="" />
                    
                  </Link>
       <Link 
       
                    className="p-2 flex  items-center  text-white hover:text-black hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                   href="/carts"
                  >
                    <img className='rounded-full h-[6vh]' src="https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_640.png" alt="" />
                   
                  </Link>
       </div>
          
          
  
  
  
          
  
       </div>
    </div>
  )
}

export default Navbar;
