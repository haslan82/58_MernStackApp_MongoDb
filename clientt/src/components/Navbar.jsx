import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from 'react-redux';

const Navbar = () => {
const dispatch = useDispatch()
    const logoutFunc = () => {
        localStorage.clear();
        window.location="/auth"
    }

const openModal = () => {
    dispatch({type:"MODAL", payload:true})
}


  return (
    <div className='h-20  flex justify-between items-center px-5 bg-indigo-600 '>
  <div className='text-white font-bold text-2xl cursor-pointer'>POST PAYLAŞ</div>
  <div className='flex items-center space-x-5'>
    <input className='p-2 outline-none rounded-md' type="text" placeholder='Ara' />
    <div onClick={openModal} className='w-36 h-10 flex justify-center items-center bg-white text-indigo-600 rounded-md cursor-pointer hover:bg-indigo-800 hover:text-white'>Post Oluştur</div>
    <BiLogOut onClick={logoutFunc} size={25} className=' cursor-pointer text-white' />
  </div>
    </div>
  )
}

export default Navbar
