'use client'
import React, {useState} from 'react';
import list from '../data';
import Card from '@/components/card';



const Website = ( { handleClick }) => {
 
   

  return (
   <section className='grid grid-cols-4 gap-4 auto-rows-auto'>
        {
            list.map((item)=>(
                <Card key={item.id} item={item} handleClick={handleClick} />
            ))
        }
   </section>
  );
};

export default Website;
