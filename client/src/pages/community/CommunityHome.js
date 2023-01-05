import React,{useState}from 'react'
import PostsContainer from '../community/post/PostsContainer'
import './Community.css'
import NewPost from './post/Newpost'
const CommunityHome = () => {
  
  return (
   <div className='community-home-container'>
      <h3>StackOverflow Community Post</h3>
      <div className="community-new-post">
        <NewPost/>
      </div>
      <div className='community-posts'>
         <PostsContainer/>
      </div>
   </div>
  )
}

export default CommunityHome