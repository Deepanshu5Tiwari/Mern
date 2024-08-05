'use client';
import React, { useState } from 'react'

const TodoList = () => {

    const [ count, setCount ] = useState(0);

    const [taskList, setTaskList] = useState([ 
        {text : 'Ghar ki Safai', completed : false, added: new Date()},
        {text : 'Padhai', completed : false, added: new Date()},
        {text : 'Sona', completed : false, added: new Date()},
        {text : 'Khana', completed : false, added: new Date()},

    ]);

    const addTask = (e) => {
       if(e.code === 'Enter'){
        console.log( e.target.value );
         
         const newTask = { text : e.target.value, completed : false, added: new Date()};

         setTaskList([ newTask, ...taskList]);

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
      <div className='border shadow rounded-lg'>

          <div className='p-4 border-b-2'>
            <input 
            onKeyDown={addTask}
            placeholder='Add a new task'
            type="text"
            className='w-full p-3  bg-gray-300 rounded-xl outline-none' />
          </div>
       <div className='p-6 '>
           {/* <h1 className='text-3xl text-red-500'>{count}</h1>

           <button className='bg-gray-500 p-4'
           onClick={() => { setCount(count+1); console.log(count);}}>
            Add Count
           </button> */}

           {
            taskList.map (( task, index ) => {return (
              <div key={index} className='rounded-md border mb-5 shadow p-5 bg-gray-100'>
                {
                  task.completed ? (
                    <p className='bg-green-500 text-white rounded-full text-sm px-2 w-fit'>Completed</p>
                  ) : (<p className='bg-yellow-500 text-white rounded-full text-sm px-2 w-fit'>Pending</p>)
                }
              <p>{task.text}</p>
                 <div className='mt-2 flex justify-end gap-4'>
                 <button
                 onClick={() => {toggleCompleted(index) }} 
                 className='bg-blue-500 px-2 py-1 text-white rounded-full'>{ task.completed ? 'Mark as Pending ' : 'Mark as Completed'}</button>

                 <button
                 onClick={() => {deleteTask(index)}}
                 className='bg-red-500 px-2 py-1 text-white rounded-full'>Delete</button>
                </div>

           </div>

            ) })

           }
        </div>

              
      </div>
    </div>
  )
}

export default TodoList;
