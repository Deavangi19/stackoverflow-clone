import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    messageBody:{
        type:String,
        default:'This is a message'
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    botResponse:{
        type:String
    },
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
export default mongoose.model('Message',messageSchema)