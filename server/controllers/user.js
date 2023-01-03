import mongoose from "mongoose";
import User from '../models/auth.js'

export const getAllUsers=async (req,res)=>{
    try{
        const allUsers=await User.find()
        const allUserDetails=[]

        allUsers.forEach(user=>{
            allUserDetails.push({
                _id: user._id,
                name:user.name,
                email:user.email,
                about:user.about,
                tags:user.tags,
                joinedOn:user.joinedOn
            })
        })
        res.status(200).json({
            success:true,
            result:allUserDetails
        })
    }
    catch (e) {
        res.status(400).json({
            success:true,
            message:e.message
        })
    }
}

export const updateUser=async (req,res)=>{
    const {id:_id}=req.params
    const {name,about,tags}=req.body
    if (!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("User Id is not valid ")
    }
    try{
        const updateProfile= await User.findByIdAndUpdate(_id,{
            $set:{
                'name':name,
                'about':about,
                'tags':tags
            }
        },{new:true})
        res.status(200).json({
            success:true,
            result:updateProfile
        })
    }catch (e) {
        res.status(405).json({
            success:false,
            message:e.message
        })
    }
}