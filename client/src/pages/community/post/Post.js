import React,{useState,useEffect} from 'react'
import Avatar from '../../../component/avatar/Avatar'
import Button from "../../../component/button/Button"
import {Link} from "../../../component/button/Link"
import './Post.css'

const Post = ({post}) => {
  const [showCaption, setShowCaption] = useState(false)
  const [showBody, setShowBody] = useState(false)
  function handleDelete(){
    
  }
  return (
    <div className='post-card'>
      <div className="post-header">
         <div className="post-details">
              <div className='post-by'>
                  <Avatar 
                    className={'av'}
                    backgroundColor={'#009dff'}
                    px={'0.3rem'}
                    py={'0.5rem'}
                    borderRadius={'10%'}
                    children={post?.postedBy}
                  />
                  <Link>{post?.postedBy}</Link>
              </div>
              <div style={{flexGrow:1}}/>
              <div className="post-function">
                <Button
                    className={'ellipsis'}
                    children={<i className="fa-solid fa-ellipsis-vertical"/>}/>
              </div>
         </div>
         {post?.caption?<div className="post-caption">{post?.caption}</div>:null}
      </div>
      {post?.post_url?<div className="post-body">
        <img alt={'https://unsplash.com/photos/ZSS9oOHf8S8'} src={post?.post_url}/>
      </div>:null}
      <div className="post-interactions">
        <div className="like">
            <span>{post?.likes?.length} likes</span>
        </div>
        <div onKeyDown={()=>console.log('Key')} className="like">
            <span>{post?.comments?.length} comment</span>
        </div>
      </div>
   </div>
  )
}

export default Post