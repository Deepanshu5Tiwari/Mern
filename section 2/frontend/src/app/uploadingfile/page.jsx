'use client'
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const UploadingFile = () => {
  const handleUpload = (e) => {
   const file = e.target.files[0];

   const formData = new FormData();
   formData.append('file', file);
   formData.append('upload_preset', 'mypreset');
   formData.append('cloud_name','domusgrnf');

   axios.post('https://api.cloudinary.com/v1_1/domusgrnf/image/upload', formData,{
    headers: { 'Content-Type' : 'multipart/form-data'}
   })
   .then((result) => {
    console.log(result.data);
    toast.success('File Uploaded Successfully');
    
   }).catch((err) => {
    console.log(err);
    toast.error('Failed to Upload File')
    
    
   });
  }
  return (
    <div className='max-w-4xl mx-auto p-5 flex justify-center border-4 border-blue-500 mt-5'>
     <label htmlFor="uploadfile"
     className='text-5xl font-bold text-blue-300'>⬆ Upload Your File</label>
     <input onChange={handleUpload} id='uploadfile' type="file"  className='hidden'/>

    </div>
  )
}

export default UploadingFile;
