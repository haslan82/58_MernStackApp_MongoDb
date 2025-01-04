import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const HomeCard = ({ post }) => {
  const dispatch = useDispatch();
  const {modal}=useSelector(state=>state.modal)
console.log(modal, "modal");

  const deletePost = (id) => {
   dispatch(deletePostAction(id));
   toast("Silme işlemi Başarılı", {
    position: "top-right",
    autoClose: 2000,
     
  });
  };



  const updatePost = (id) => {
    dispatch({type:"MODAL", payload:{open:true, updateId:id}})
  };

  return (
    <div className="relative w-1/4 border p-3 rounded-md bg-indigo-100 mx-5 my-10">
      <div className="font-bold text-xl">{post?.title}</div>
      <div className="text-gray-700 text-sm">{post?.description}</div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-gray-500">{post?.user}</span>
        <span className="text-xs text-gray-500">
          {(post?.date)?.substring(0, 10)}
        </span>
      </div>
      <div className="absolute top-0 right-0 justify-between items-center flex gap-2 p-1">
        <GrUpdate
          onClick={() => updatePost(post._id)}
          size={22}
          className="cursor-pointer bg-red-500 rounded-full  p-1"
        />
        <RiDeleteBin5Line
          onClick={() => deletePost(post._id)}
          size={24}
          className="cursor-pointer bg-red-500 rounded-full  p-1"
        />
      </div>
    </div>
  );
};

export default HomeCard;
/*    
        <p className="text-white">
          {format(new Date(post.date), "  dd.MM.yyyy HH:mm:ss")}
        </p>
         */
