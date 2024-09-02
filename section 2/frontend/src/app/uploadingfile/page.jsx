import React from 'react'

const UploadingFile = () => {
  return (
    <div className='max-w-4xl mx-auto p-5 flex justify-center border-4 border-blue-500 mt-5'>
     <label htmlFor="uploadfile"
     className='text-5xl font-bold text-blue-300'>⬆ Upload Your File</label>
     <input id='uploadfile' type="file"  className='hidden'/>

    </div>
  )
}

export default UploadingFile;
