'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Website from '@/components/website';
import Navbar from '@/components/Navbar';



const Home = () => {

 



  return (
    <div className='bg-gray-200'>


      {/* logo */}
      <div className=' flex justify-between mt-2'>


       <div className='ml-5' >
        <img  className='rounded-sm h-[15vh] w-[30vh] py-2' src="https://myecomart.com/img/my-eco-mart-logo-1636032797.jpg" />
       </div>

       <div className=''>
        <input

        className='px-12  py-2 mt-6  rounded-md   border-2 border-black  hover:shadow-xl hover:border-blue-600 '
    
        type="text"
        placeholder="Search for products...       🔍"
        />

        
       </div>

        <Link 
        href="/login"
        className='flex justify-align mr-5 mt-4'>
         <img className='h-[6vh] hover:shadow-lg hover:border-2 hover:border-white rounded-full mt-2' src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" alt="" />
         <img className='h-[6vh] hover:shadow-lg hover:border-2 hover:border-white rounded-full mt-2' src="https://image.similarpng.com/very-thumbnail/2020/10/Facebook-logo-icon-premium-vector-PNG.png" alt="" />
         <img className='h-[6vh] hover:shadow-lg hover:border-2 hover:border-white rounded-full mt-2' src="data:image/png;base64,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" alt="" />
        </Link>
      </div>
     {/* logo */}



     {/* intro */}
     
      <Navbar  />
     {/* intro end */}
     

     {/* grid start  */}
     <div className='grid grid-cols-6 m-4 space-between-0'>
         <Link 
           href="/productList"
          className='col-span-4 hover:border-2 hover:shadow-lg hover:border-white '>
         <img className='h-[70vh] w-full' src="https://previews.123rf.com/images/appler/appler1807/appler180700086/114963798-summer-sale-banner-with-paper-art-cut-out-plants-grass-branches-on-green-background-floral-design.jpg" alt="" />
         </Link>




         <Link 
         href="/productList"
         className='col-span-2 h-[70vh] mx-3'>

                   
                   <img  className='h-[33vh] w-full hover:border-2 hover:shadow-lg hover:border-white' src="https://img.freepik.com/free-vector/vector-illustration-super-sale-banner-template-design_260559-246.jpg" alt="" />
                  

                   <br />


                  
                      <img  className='h-[33vh] w-full hover:border-2 hover:shadow-lg hover:border-white' src="https://previews.123rf.com/images/pattarasin/pattarasin1802/pattarasin180200008/96329452-spring-sale-banner-with-green-leaf-and-colorful-background-vector-design-for-your-greetings-card.jpg" alt="" />
                   
  

         </Link>



     </div>
     {/* grid end */}

     
     <br />
     

     {/* task start */}
     <div className='flex justify-between  bg-yellow-500 py-4 px-2'>
      <h1 className='border-1 rounded-sm  py-4 px-5 bg-white text-black font-bold text-2xl hover:shadow-xl hover:border-2 hover:border-black'>✔ Quality Product</h1> 
      <h1 className='border-1 rounded-sm  py-4 px-5 bg-white text-black font-bold text-2xl hover:shadow-xl hover:border-2 hover:border-black'>🚚 Free Shipping</h1> 
      <h1 className='border-1 rounded-sm  py-4 px-5 bg-white text-black font-bold text-2xl hover:shadow-xl hover:border-2 hover:border-black'>🔀 14-Day Return</h1> 
      <h1 className='border-1 rounded-sm  py-4 px-5 bg-white text-black font-bold text-2xl hover:shadow-xl hover:border-2 hover:border-black'>📞 24X7 Support</h1> 

     </div>
    <br />
     <br />
     {/* task end */}


     {/* Categories start */}
     <div className='mx-5'>
      <div className='flex justify-between' >
      <h1 className='text-3xl text-black font-bold underline'>CATEGORIES</h1>
       
      <Link
                  className="p-2 border-2 border-red-600 font-bold text-2xl text-red-600 hover:bg-gray-100 hover:text-blue-500 hover:border-blue-500 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                  SELL YOUR PRODUCT
                  <h3 className='text-sm flex justify-center items-center'>Click Here</h3>
                </Link>

      </div>
    
        <div className='mt-7 flex justify-between'>



         <div className='bg-white px-11  flex hover:shadow-xl hover:border-2 hover:border-black  '>
          <img className='h-[14vh] w-[14vh]' src="https://www.toddlerclub.in/wp-content/uploads/2019/04/jutefrock.jpg"  />
           <div className='mt-6 ml-3'>
           <h1 className='font-bold text-lg'>Jute Fashion</h1>
           <h3 className='font-bold text-md text-gray-700'>See Products</h3>
           </div>
           
         </div>
         <div className='bg-white px-4  flex hover:shadow-xl hover:border-2 hover:border-black '>
          <img className='h-[14vh] w-[14vh]' src="https://media.istockphoto.com/id/538780890/vector/coffee-bean-in-brown-paper-bag-packaging.jpg?s=612x612&w=0&k=20&c=WHNT9EbTrWwZRBGd8eR-NLjDNx3ShxjeUdaWu6FvYZI="  />
           <div className='mt-6 ml-2'>
           <h1 className='font-bold text-lg'>Sustainable Coffee</h1>
           <h3 className='font-bold text-md text-gray-700'>See Products</h3>
           </div>
           
         </div>
         <div className='bg-white pr-3  flex hover:shadow-xl hover:border-2 hover:border-black '>
          <img className='h-[14vh] w-[14vh]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJZT6P4j6mkwKQY6fFHDDy2HwffMSBO3jjw&s"  />
           <div className='mt-6 ml-3'>
           <h1 className='font-bold text-lg'>Recycled Activewear</h1>
           <h3 className='font-bold text-md text-gray-700'>See Products</h3>
           </div>
           
         </div>
         <div className='bg-white px-9  flex hover:shadow-xl hover:border-2 hover:border-black '>
          <img className='h-[14vh] w-[14vh]' src="https://cdni.iconscout.com/illustration/premium/thumb/solar-energy-is-stored-in-panel-illustration-download-svg-png-gif-file-formats--electricity-renewable-education-business-and-technology-concept-pack-design-development-illustrations-8492125.png?f=webp"  />
           <div className='mt-6 ml-3'>
           <h1 className='font-bold text-lg'>Solar Devices</h1>
           <h3 className='font-bold text-md text-gray-700'>See Products</h3>
           </div>
           
         </div>



        </div>
        <div className='mt-7 flex justify-between space-between-[10vh]'>



         <div className='bg-white px-7  flex hover:shadow-xl hover:border-2 hover:border-black '>
          <img className='h-[14vh] w-[14vh]' src="https://image.made-in-china.com/2f0j00bfOqyGnHLMze/New-Animal-Pets-Accessories-Cat-Shaped-Pet-Bed-Eco-Friendly-Products-Water-Hyacinth-Cats-Cave-Sleeping-Beds.webp"  />
           <div className='mt-6 ml-3'>
           <h1 className='font-bold text-lg'> Pet Accessories</h1>
           <h3 className='font-bold text-md text-gray-700'>See Products</h3>
           </div>
           
         </div>
         <div className='bg-white px-7  flex hover:shadow-xl hover:border-2 hover:border-black '>
          <img className='h-[14vh] w-[14vh]' src="https://www.sowandgrow.in/cdn/shop/files/Photoroom_20240715_201254_530x@2x.jpg?v=1721056689"  />
           <div className='mt-6 ml-3'>
           <h1 className='font-bold text-lg'>Garden Supplies</h1>
           <h3 className='font-bold text-md text-gray-700'>See Products</h3>
           </div>
           
         </div>
         <div className='bg-white px-10  flex hover:shadow-xl hover:border-2 hover:border-black '>
          <img className='h-[14vh] w-[14vh]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PKzD241OXZBxsTNscfIjB97F9VkgFJtsNg&s"  />
           <div className='mt-6 ml-3'>
           <h1 className='font-bold text-lg'>Ethical Basics</h1>
           <h3 className='font-bold text-md text-gray-700'>See Products</h3>
           </div>
           
         </div>
         <div className='bg-white px-7  flex hover:shadow-xl hover:border-2 hover:border-black '>
          <img className='h-[14vh] w-[14vh]' src="https://m.media-amazon.com/images/I/81JBXIOT-WL._AC_UF1000,1000_QL80_.jpg"  />
           <div className='mt-6 ml-3'>
           <h1 className='font-bold text-lg'>Composite Bins</h1>
           <h3 className='font-bold text-md text-gray-700'>See Products</h3>
           </div>
           
         </div>



        </div>
        <div className='mt-7 flex justify-between'>



         <div className='bg-white px-2  flex hover:shadow-xl hover:border-2 hover:border-black'>
          <img className='h-[14vh] w-[14vh]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYDGWbcW9mmMxqlcriRu3NaZ36L_e_vud5A&s"  />
           <div className='mt-6 ml-3'>
           <h1 className='font-bold text-xl'>Skincare Products</h1>
           <h3 className='font-bold text-md text-gray-700'>See Products</h3>
           </div>
           
         </div>
         <div className='bg-white px-10  flex  hover:shadow-xl hover:border-2 hover:border-black'>
          <img className='h-[14vh] w-[14vh]' src="https://image.made-in-china.com/2f0j00abgizFpwZNGC/Biodegradable-Disposable-Bamboo-Knife-Fork-Spoon-Printing-Cutlery-Sets.webp"  />
           <div className='mt-6 mx-4'>
           <h1 className='font-bold text-xl'>Cutley Set</h1>
           <h3 className='font-bold text-md text-gray-700'>See Products</h3>
           </div>
           
         </div>
         <div className='bg-white px-9  flex hover:shadow-xl hover:border-2 hover:border-black '>
          <img className='h-[14vh] w-[14vh]' src="https://image.made-in-china.com/202f0j00SKEhYrGDTQgI/Eco-Friendly-Bagasse-Pulp-Paper-Lunch-Box-Food-Container-Takeaway-Food-Packaging-Box-Bento-Box.jpg"  />
           <div className='mt-6 ml-3'>
           <h1 className='font-bold text-xl'>Food Storage</h1>
           <h3 className='font-bold text-md text-gray-700'>See Products</h3>
           </div>
           
         </div>
         <div className='bg-white px-10  flex hover:shadow-xl hover:border-2 hover:border-black '>
          <img className='h-[14vh] w-[14vh]' src="https://thebamboobae.com/cdn/shop/products/2-2.jpg?v=1662962202&width=1445"  />
           <div className='mt-6 ml-3'>
           <h1 className='font-bold text-xl'>Toothbrush</h1>
           <h3 className='font-bold text-md text-gray-700'>See Products</h3>
           </div>
           
         </div>



        </div>

     </div>
    <br /> 
    <br />
     {/* Categories end */}


     {/* Categories2 end */}
     <div className='bg-yellow-500 py-4'>
      <div className='flex justify-center items-center text-3xl font-bold underline '>
      <h1>Partnership</h1>
      </div>
      <br />
       <div className='flex justify-between px-3'>
         <div>
             <img
             className='h-[15vh] hover:border-2 hover:shadow-lg hover:shadow-black hover:border-white'
             src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30171309/392-768x591.png" />
         </div>
         <div>
             <img
             className='h-[15vh] hover:border-2 hover:shadow-lg hover:shadow-black hover:border-white'
             src="https://images-platform.99static.com//AKW7WCkZwZOFns5QCaDZi74TvSI=/305x1578:1005x2278/fit-in/500x500/projects-files/41/4159/415999/e34e2568-96cb-4e8e-bab8-6b97d95c90c2.png" />
         </div>
         <div>
             <img
             className='h-[15vh] hover:border-2 hover:shadow-lg hover:shadow-black hover:border-white'
             src="https://images-platform.99static.com/7tPqWgewBbipkVZCZFt2y7NW-5c=/500x500/top/smart/99designs-contests-attachments/10/10517/attachment_10517473" />
         </div>
         <div>
             <img
             className='h-[15vh] hover:border-2 hover:shadow-lg hover:shadow-black hover:border-white'
             src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30171254/589-768x591.png" />
         </div>
         <div>
             <img
             className='h-[15vh] hover:border-2 hover:shadow-lg hover:shadow-black hover:border-white'
             src="https://img.freepik.com/premium-vector/db-linked-logo-business-company-identity-creative-letter-db-logo-vector_754537-449.jpg?semt=ais_hybrid" />
         </div>
         <div>
             <img
             className='h-[15vh] hover:border-2 hover:shadow-lg hover:shadow-black hover:border-white'
             src="https://logotypes101.com/logos/409/15320AB30CC7D075EB77D29D4BC6E482/tn_breraorologi.png" />
         </div>





       </div>



     </div>
     {/* Categories2 end */}
  <br />
  <br />
     {/* card start */}
     <div className='border-2 border-white'>
     <div className='flex justify-center item-center bg-yellow-400 h-[25vh] w-full bg-cover border-white border-2'
     style={{backgroundImage:`url(https://static.vecteezy.com/system/resources/previews/012/845/872/non_2x/zero-waste-sustainable-and-eco-friendly-lifestyle-set-of-eco-friendly-natural-cleaning-products-on-white-background-flat-lay-copy-space-photo.jpg)`}}>
     <h1 className='text-6xl font-bold underline py-10'>HOT DEALS</h1>
     </div>
     
     <Website/>
     
     

     
     </div>
     {/* card end */}

    


    </div>
  );
};

export default Home;
