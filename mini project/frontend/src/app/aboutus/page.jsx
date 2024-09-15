import React from 'react'
import 'react-slideshow-image/dist/styles.css'

const AboutUS = () => {
  return (
    <div>
      <>
  {/* Features */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-green-300">
    <div
    className='flex justify-center bg-cover bg-no-repeat h-[60vh]  '
    style={{backgroundImage: `url('https://www.flex-europa.me/mediafiles/Content/UploadImages/Shutterstock_2107159877%20(4).jpg')`}}>
     <div className='my-10'>
     <h1 className='text-7xl font-bold text-white   '>Eco Friendly</h1>
     <h1 className='text-7xl font-bold text-white  '>Market</h1>
     <br />
     <p className='text-xl font-bold text-white  '>Market to have little or no damaging effect on the environment</p>
     <p className='text-xl font-bold text-white  '>For bright future</p>
     </div>
    </div>
    <div className='flex justify-center  bg-cover h-[40vh]'
    style={{backgroundImage: `url('https://olabamboo.com/wp-content/uploads/2021/08/Olabamboo-header-optimized-final.jpg')`}}
    >
      
    </div>
      {/* type */}
    <div className='bg-green-700  flex justify-between'>
      <h1 className='text-white font-bold py-5 text-xl'>🍀  Fast Delivery</h1>
      <h1 className='text-white font-bold py-5 text-xl'>🍀  Environmental</h1>
      <h1 className='text-white font-bold py-5 text-xl'>🍀  Affordable</h1>
      <h1 className='text-white font-bold py-5 text-xl'>🍀  Local Merchant</h1>
      <h1 className='text-white font-bold py-5 px-3 text-xl'>🍀  Service  </h1>
    </div>
     
      

    {/* Grid */}
    <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
      <div className="lg:col-span-1">
        <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
         Starting Eco-Friendly marketplace  
        </h2>
        <p className="mt-2 md:mt-4 text-gray-500 dark:text-neutral-500">
        By using items made from natural or recycled materials,
         you can reduce your environmental impact and help conserve resources.
         Additionally, many eco-friendly products help to reduce waste and pollution,
          making them an even better choice for the planet.

        </p>
      </div>
      {/* End Col */}
      <div className="lg:col-span-2">
        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
              <rect width={18} height={10} x={3} y={11} rx={2} />
              <circle cx={12} cy={5} r={2} />
              <path d="M12 7v4" />
              <line x1={8} x2={8} y1={16} y2={16} />
              <line x1={16} x2={16} y1={16} y2={16} />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Creative minds
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                We choose our teams carefully. Our people are the secret to
                great work.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Simple and affordable
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                From boarding passes to movie tickets, there's pretty much
                nothing you can't store with Preline.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Industry-leading documentation
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Our documentation and extensive Client libraries contain
                everything a business needs to build a custom integration.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Designing for people
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                We actively pursue the right balance between functionality and
                aesthetics, creating delightful experiences.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Features */}



   {/* three pic*/}
   <div >
   <>
  {/* Features */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="relative p-6 md:p-16">
      {/* Grid */}
      <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
          <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
           Our Motivaiton and Motto for Eco-Friendly Marketplace
          </h2>
          {/* Tab Navs */}
          <nav
            className="grid gap-4 mt-5 md:mt-10"
            aria-label="Tabs"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active"
              id="tabs-with-card-item-1"
              aria-selected="true"
              data-hs-tab="#tabs-with-card-1"
              aria-controls="tabs-with-card-1"
              role="tab"
            >
              <span className="flex gap-x-6">
                <svg
                  className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
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
                  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                </svg>
                <span className="grow">
                  <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    Greeb Innovation
                  </span>
                  <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                  The marketplace promote sustainable product innovation. They create demand for Eco-Friendly products. This supports the growth of green industries
                  </span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              id="tabs-with-card-item-2"
              aria-selected="false"
              data-hs-tab="#tabs-with-card-2"
              aria-controls="tabs-with-card-2"
              role="tab"
            >
              <span className="flex gap-x-6">
                <svg
                  className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
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
                  <path d="m12 14 4-4" />
                  <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                </svg>
                <span className="grow">
                  <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    Global Impact
                  </span>
                  <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                   It sends a message to industries and governments about the growing demand for sustainable practices on a global scale.
                  </span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              id="tabs-with-card-item-3"
              aria-selected="false"
              data-hs-tab="#tabs-with-card-3"
              aria-controls="tabs-with-card-3"
              role="tab"
            >
              <span className="flex gap-x-6">
                <svg
                  className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
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
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
                <span className="grow">
                  <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    Selection of Eco-Products
                  </span>
                  <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                    They market solar gadgets and eco-friendly clothing. This diversity makes sustainable living possible in a wide range of contexts.
                  </span>
                </span>
              </span>
            </button>
          </nav>
          {/* End Tab Navs */}
        </div>
        {/* End Col */}
        <div className="lg:col-span-6">
          <div className="relative">
            {/* Tab Content */}
            <div>
              <div
                id="tabs-with-card-1"
                role="tabpanel"
                aria-labelledby="tabs-with-card-item-1"
              >
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                  src="https://w0.peakpx.com/wallpaper/335/946/HD-wallpaper-recycle-green-ecoloogy-future-green-green-grass-nature-recycle-reuse-save-the-planet.jpg"
                  alt="Features Image"
                />
              </div>
              <div
                id="tabs-with-card-2"
                className="hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-card-item-2"
              >
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                  src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                  alt="Features Image"
                />
              </div>
              <div
                id="tabs-with-card-3"
                className="hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-card-item-3"
              >
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                  src="https://w0.peakpx.com/wallpaper/335/946/HD-wallpaper-recycle-green-ecoloogy-future-green-green-grass-nature-recycle-reuse-save-the-planet.jpg"
                  alt="Features Image"
                />
              </div>
            </div>
            {/* End Tab Content */}
            {/* SVG Element */}
            <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
              <svg
                className="w-16 h-auto text-orange-500"
                width={121}
                height={135}
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* End SVG Element */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
      {/* Background Color */}
      <div className="absolute inset-0 grid grid-cols-12 size-full">
        <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800" />
      </div>
      {/* End Background Color */}
    </div>
  </div>
  {/* End Features */}
</>

   </div>

</>
   <div>
   <>
  {/* Team */}
  <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
        Our team
      </h2>
      <p className="mt-1 text-gray-600 dark:text-neutral-400">
        Creative people
      </p>
    </div>
    {/* End Title */}
    {/* Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            David Forren
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Founder / CEO
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Amil Evara
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            UI/UX Designer
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Ebele Egbuna
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Support Consultant
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Maria Powers
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Director of sales
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Delia Pawelke
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Front-end Developer
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Tom Lowry
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            UI/UX Designer
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Louise Donadieu
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Support Consultant
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Jeff Fisher
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Project Manager
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Sophia Harrington
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Project Manager
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Christina Kray
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Support Consultant
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Amy Forren
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Product Designer
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Philip Williams
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Support Consultant
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Brian Lofoten
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            UI/UX Designer
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Jessica Dorsey
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Director of sales
          </p>
        </div>
      </div>
      {/* End Col */}
      <div className="text-center">
        <img
          className="rounded-full size-24 mx-auto"
          src="https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Avatar"
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="font-medium text-gray-800 dark:text-neutral-200">
            Nick Jackson
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            UI/UX Designer
          </p>
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
    {/* Card */}
    <div className="mt-12 flex justify-center">
      <div className="border border-gray-200 py-2 px-3 rounded-full dark:border-neutral-700">
        <div className="flex items-center gap-x-3">
          <span className="text-sm text-gray-500 dark:text-neutral-500">
            Want to work with us?
          </span>
          <a
            className="inline-flex items-center gap-x-2 text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:text-blue-500 dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            href="#"
          >
            We are hiring
            <svg
              className="shrink-0 size-4"
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    {/* End Card */}
  </div>
  {/* End Team */}
</>

   </div>
    </div>
  )
}

export default AboutUS;
