import Post from "../models/post.model.js"
import cloudinary from "cloudinary"

export const newPost=async(req,res)=>{
  const {caption,userId,image}=req.body
    try {

        if(!userId){
          return res.status(403).json({
            message:"Log-In first"
          })
        }
        const myCloud = await cloudinary.v2.uploader.upload(image,{
        folder: "posts",
        quality: "50",
        });
  
      const newPost={
      caption:caption ||'',
      postedBy:userId,
      image:{
        public_id:myCloud.public_id,
        url:myCloud.secure_url
      }
      }
    
    const post=await Post.create(newPost)
    await post.save()
  
    res.status(200).json({
      post,
      message:"Posted Successfully"
    })
    } catch (error) {
      console.log(error)
      res.status(500).json({message:error.message})
    }
  }

  export const  getAllPost=async(req,res)=>{
    try {
      const post=await Post.find().populate("caption postedBy image likes comments createdAt")

      const posts=post.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt)
      })

      res.status(200).json({
        posts
      })
    } catch (e) {
      console.log(e)
      res.status(400).json({
        message:e.message
      })
    }
  }
  