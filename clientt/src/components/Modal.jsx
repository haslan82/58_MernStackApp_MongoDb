import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { createPostAction } from '../redux/actions/post';

const Modal = () => {
  const dispatch = useDispatch();
    const [postData, setPostData] = useState({user:"",title:"",description:""});

const onChangeFunc = (e)=>{
    setPostData({...postData,[e.target.name]:e.target.value})}


const postCreate = () => {
    dispatch(createPostAction(postData))
    dispatch({type:"MODAL", payload:false})
}



  return (
    <div className='w-full h-screen bg-black bg-opacity-50 fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center    '>
    <div className='bg-white w-1/3 rounded-md p-2'>
    <div onClick={() => dispatch({type:"MODAL", payload:false})} className=  'cursor-pointer flex justify-between items-center'>
    <h1 className='text-2xl font-bold text-indigo-600'>POST PAYLAŞ</h1>
    <IoClose size={25} />
    </div>
  
   <div className='flex flex-col my-4 space-y-3 '>
    <input value={postData.user} name='user' onChange={onChangeFunc} className='input-style' type="text" placeholder='User' />
    <input value={postData.title} name='title' onChange={onChangeFunc} className='input-style' type="text" placeholder='Title' />
    <input value={postData.description} name='description' onChange={onChangeFunc} className='input-style' type="text" placeholder='Description' />
   </div>
   <div onClick={postCreate} className='w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-800'>
    <button>Paylaş</button>
   </div>
    </div>
    </div>
  )
}

export default Modal
