import React,{useState}from 'react'
import PostsContainer from '../community/post/PostsContainer'
import Button from '../../component/button/Button'
import './Community.css'
const CommunityHome = () => {
  const [postBody, setPostBody] = useState('')
  const [file,setFile]=useState(null)
  
  console.log(file)
   const handleSubmit=(e)=>{
      e.preventDefault()
      console.log({postBody})
   }
  
  return (
   <div className='community-home-container'>
      <h3>StackOverflow Community Post</h3>
      <div className="community-new-post">
         <form onSubmit={(e)=>handleSubmit(e)}>
            <div className='newpost-form'>
               <label htmlFor="caption">
               <textarea
                  autoFocus
                  onChange={(e)=>setPostBody(e.target.value)}
                  placeholder='Type something to post.'
                  title='Type Something..'
                  cols={20} 
                  rows="10" 
                  name="caption" 
                  id="caption"
               />
               </label>
               {file?<img src={file} alt='img'/>:null}
               <input type={'image'} alt='img' onChange={(e)=>setFile(e.target.value[0])}/>
               <div className='form-btn'>
                  <Button className={'pic-btn btn'}
                          children={<i title='image' className="fa-regular fa-image"></i>}
                  />
                  <Button className={'doc-btn btn'}
                          children={<i title='Attach' className="fa-solid fa-paperclip"></i>}
                  />
                  <Button type={'submit'} className={'submit-btn btn'}
                          children={"Submit"}
                  />
               </div>
            </div>
         </form>
      </div>
      <div className='community-posts'>
         <PostsContainer/>
      </div>
   </div>
  )
}

export default CommunityHome