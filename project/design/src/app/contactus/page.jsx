'use client';
import React, { useState } from 'react'

const contactus = () => {

    const [ count, setCount ] = useState(0);

    const [taskList, setTaskList] = useState([ 
        {text : 'Hello ji', completed : false, added: new Date()},
      

    ]);

    const addTask = (e) => {
       if(e.code === 'Enter'){
        console.log( e.target.value );
         
         const newTask = { text : e.target.value, completed : false, added: new Date()};

         setTaskList([  ...taskList, newTask]);

        e.target.value ='';
       }
    }

    const deleteTask = (index) => {
      console.log(index);

      const temp = taskList;
      temp.splice(index, 1);
      setTaskList([...temp]);
      
    }
     
    const toggleCompleted = (index) => {
      const temp = taskList;

      temp[index].completed = !temp[index].completed;
      setTaskList([...temp]);


    }

  return (
    <div className='max-w-5xl mx-auto mt-6'>
        <div className='flex justify-between border border-blue-600 bg-blue-300 px-3 py-2'>
            <h1 className='text-3xl font-bold'>👩‍🦰 Misses Ji</h1>
            <h1 className='font-bold text-3xl'>📞</h1>
        </div>
        
      <div className='border shadow rounded-lg'>

         
       <div className='p-6 '>
           {/* <h1 className='text-3xl text-red-500'>{count}</h1>

           <button className='bg-gray-500 p-4'
           onClick={() => { setCount(count+1); console.log(count);}}>
            Add Count
           </button> */}

           {
            taskList.map (( task, index ) => {return (
               

              <div key={index} className='rounded-md border mb-5 shadow p-5 bg-gray-100 '>
                 <p>{task.text}</p>
                 <div className='flex justify-between'>
                 {
                  task.completed ? (
                    <p className='bg-yellow-500 text-white rounded-full text-sm px-2 w-fit py-2 '>Deleted</p>
                  ) : (<p className='bg-blue-500 text-white rounded-full text-sm px-2 w-fit py-2'>Sent</p>)
                }
                 <button  
                 onClick={() => {toggleCompleted(index) }}     
                 className= 'bg-red-500 hover: bg-blue-500 px-2 py-1 text-white rounded-full' > { task.completed ? 'Resend' : 'Unsend'  } </button>
            
                 

                 

                
                </div>
                

           </div>
          
            ) })

           }
        </div>
      
        <div className='p-4 border-b-2'>
            <input 
            onKeyDown={addTask}
            placeholder='Message...'
            type="text"
            className='w-full p-3  bg-gray-300 rounded-xl outline-none' />
          </div>
              
      </div>
    </div>
  )
}

export default contactus;
