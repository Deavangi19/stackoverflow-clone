import express from 'express'
import cors from 'cors'
import {connectDatabase} from "./config/database.js";
import userRoutes from "./routes/users.js";
import questionRoutes from './routes/question.js'
import answerRoutes from './routes/answer.js'
import 'dotenv/config'
const app=express();

app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send("This is a api channel")
})
app.use('/api/user',userRoutes)
app.use('/api/question',questionRoutes)
app.use('/api/answer',answerRoutes)
const PORT= process.env.PORT || 8000
connectDatabase()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})