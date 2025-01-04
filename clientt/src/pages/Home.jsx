import React from 'react'
import { useSelector } from 'react-redux'
import HomeCard from '../components/HomeCard';

const Home = () => {

  const {posts}= useSelector(state=>state.posts)
  console.log("posts",posts);
  return (
    <div className='flex flex-wrap items-center m-5 '>
{
posts.map(post=> <HomeCard key={post._id} post={post} />)
}

{/*      {posts?.map((post,index)=>{
      <HomeCard key={index} post={post}/>
     })} */}
    </div>
  )
}

export default Home
