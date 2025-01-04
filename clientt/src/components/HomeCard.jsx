import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { deletePostAction } from "../redux/actions/post";

const HomeCard = ({ post }) => {
  const dispatch = useDispatch();


  const deletePost = (id) => {
   dispatch(deletePostAction(id));
  };



  const updatePost = (id) => {
   
  };

  return (
    <div className="relative w-1/4 border p-3 rounded-md bg-gray-50">
      <div className="font-bold text-xl">{post?.title}</div>
      <div className="text-gray-700 text-sm">{post?.description}</div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-gray-500">{post?.user}</span>
        <span className="text-xs text-gray-500">
          {(post?.date)?.substring(0, 10)}
        </span>
      </div>
      <div className="absolute top-0 right-0 justify-between items-center flex gap-2">
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
