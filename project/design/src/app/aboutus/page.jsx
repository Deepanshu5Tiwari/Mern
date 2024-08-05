import React from 'react'

const AboutUs = () => {
  return (
    <div className='border-2 border-black space-y-6'>

      <h1 className='text-center font-bold text-7xl mt-5 text-blue-800  '>   ABOUT US </h1>
      

      <div className=' '> 
        <div className=''> <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" alt="" /> </div>
        <div className='  space-y-8'>
            <h1 className='text-center font-bold text-7xl mt-5 underline'>INFOLOGY TECH </h1>
            <div className='px-3'>
                <h1 className='font-bold text-5xl'>⩥ ESTABLISHED </h1>
                <p className='text-3xl px-20 py-3'>The first version of HTML was written by Tim Berners-Lee in 1993. Since then, there have been many different versions of HTML. The most widely used version throughout the 2000's was HTML 4.01, which became an official standard in December 1999. Another version, XHTML, was a rewrite of HTML as an XML language. </p>

                <h1 className='font-bold text-5xl'>⩥ POLICY </h1>
                <p className='text-3xl px-20 py-3'>When you buy insurance from us, you get more than just financial safety. You also get: our promise of simplifying complex insurance terms and conditions, quick stress-free claims, instant quotes from top insurers and being present for you in the toughest of times.</p>
                 
                <h1 className='font-bold text-5xl'>⩥ MORE DETAIL </h1>
                 <p className='text-3xl px-20 py-3'>Policy is a law, regulation, procedure, administrative action, incentive, or voluntary practice of governments and other institutions. Policy decisions are frequently reflected in resource allocations. Health can be influenced by policies in many different sectors.</p>
             </div>
        </div>
      </div>
      <div className='space-y-6 p-3'>
        <h1 className='font-bold text-7xl text-center'> DIRECTORS </h1>
        <div className='grid grid-cols-3 gap-5 '>
        <div className='border-2 border-black space-y-6 p-4 rounded-md '> 
            <h1 className='font-bold text-3xl text-center underline'>Deepanshu Tiwari</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio officiis nulla! Aperiam fugiat cupiditate numquam commodi, fugit dolor magni quibusdam veniam repellendus. Quam earum molestiae consectetur non. Sint, hic.</p>
        </div>
        <div className='border-2 border-black space-y-6 p-4 rounded-md '><h1 className='font-bold text-3xl text-center underline'>Shivam Srivastava</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur tenetur sint voluptatibus accusamus magni inventore nihil exe, illum, commodi non voluptatum nostrum repudiandae animi unde ipsa, ratione necessitatibus.</p></div>
        <div className='border-2 border-black space-y-6 p-4 rounded-md '><h1 className='font-bold text-3xl text-center underline'>Shivendra Verma </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores a corporis modi suscipit dignissimos, amet sit. Aliquam reiciendis totam inventore ratione modi ut corrupti, voluptas tempora nostrum. Totam, temporibus esse!</p></div>
        
      </div>
      </div>
    </div>
  )
}

export default AboutUs;
