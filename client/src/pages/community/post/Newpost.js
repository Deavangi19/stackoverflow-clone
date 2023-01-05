import React, { useState } from 'react'
import "./Post.css";
import { MdPermMedia } from 'react-icons/md';
import { BiLabel } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { MdEmojiEmotions } from 'react-icons/md';
import { MdCancel } from 'react-icons/md';
import {useDispatch, useSelector} from "react-redux"
import { api } from "../../../api/index.js";
import { newPost } from '../../../actions/PostAction';

const NewPost = () => {
    const {currentUser:user}=useSelector((state)=>state.user)
  const [image,setImage]=useState(null)
  const dispatch=useDispatch()
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [caption,setCaption]=useState('')
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
        if (Reader.readyState=== 2){
            setImage(Reader.result);
        }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault()
    const postData={
      caption:caption,
      userId:user?.result?._id,
      image:image
    }
    console.log(postData)
    dispatch(newPost(postData))
    
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user?.avatar
                ?user?.avatar.url
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <input
            placeholder={"What's in your mind " + user?.name + "?"}
            className="shareInput"
            onChange={(e)=>setCaption(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        {image && (
          <div className="shareImgContainer">
            <img className="shareImg" src={image} alt="" />
            <MdCancel className="shareCancelImg" onClick={() => setImage(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <MdPermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={handleImageChange}
              />
            </label>
            <div className="shareOption">
              <BiLabel htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <CiLocationOn htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <MdEmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPost