import express from "express"
import { getAllPost, newPost } from "../controllers/Post.js"

const router=express.Router()

router.post("/upload",newPost)
router.get("/get",getAllPost)

export default router