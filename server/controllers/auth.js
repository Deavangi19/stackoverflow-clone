import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from "../models/auth.js";
export const signup = async(req,res)=>{
    const {name,email,password}=req.body
    console.log(name)
    try{
        let userExist= await User.findOne({email})
        if(userExist){
            return res.status(404).json({message:"User Already Exist. Try Logging in."})
        }
        const hashedPassword=await bcrypt.hash(password,12)
        const newUser= await User.create({
            name,email,password:hashedPassword
        })
        const token=jwt.sign({email:newUser.email,id:newUser._id},
                process.env.SECRET,
            {expiresIn:'1h'})
        res.status(200).json({
            result:newUser,
            token
        })

    }catch (e) {
        console.log(e)
        res.status(500).json({message:e.message})
    }
}
export const login = async(req,res)=>{
    const {email, password} = req.body;
    console.log(email)
    try{
        let existingUser = await User.findOne({email}).select("+password")
        if(!existingUser){
            return res.status(400).json({
                success:false,
                message:"User Doesn't Exist, Please check your email."
            })
        }
        const isPasswordMatch= await bcrypt.compare(password,existingUser.password)
        if(!isPasswordMatch){
            return res.status(400).json({
                success:false,
                message:"Check Your Password. It is invalid"
            })
        }
       const token=jwt.sign({email:existingUser.email,id:existingUser._id},
            "test",
            {expiresIn:'1h'})
        res.status(200).json({
            success:true,
            result:existingUser,
            token
        })
    }
    catch (e) {
        console.log(e)
        res.status(500).json({message:e.message})
    }
}