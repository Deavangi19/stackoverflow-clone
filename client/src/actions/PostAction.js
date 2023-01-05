import * as api from './../api/index'
import {showError, showMessage} from "./Error";

export const newPost=(postData)=>async(dispatch)=>{
  console.log(postData)
    try {
        await api.postNew(postData)
        dispatch(showMessage("Post Uploaded "))
        dispatch(getAllPost())
      } catch (e) {
        await  dispatch(showError("Try Again!! 🙂"))
        console.log(e)
        dispatch({type:"CLEAR_ERROR"})
      }
}

export const getAllPost=()=>async(dispatch)=>{
  try {
    const {data}=await api.getAllPost()
    await dispatch({type:"ALL_POST" , payload:data})
    dispatch(showMessage("Post fetchedd"))
  } catch (e) {
    await dispatch(showError(e.message))
    console.log(e)
  }
}
