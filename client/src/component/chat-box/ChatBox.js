import React, {useState} from 'react'
import './ChatBox.css'
import ChatScroll from "./ChatScroll";

const  ChatBox = ({className}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const show = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
    }

  return(
      <div className={!show?className:" chat-active"}>
          <div onClick={handleClick} className={show?"chat-box-content content-active":"chat-box-content"}>
              <i className="fa-regular fa-circle-question"></i>
          </div>
          {show?(
              <div className={'ask-chat-box ask-question-active'}>
                  <div className={'ask-chat-box-header'}>
                      <div onClick={handleClose} className={'x-icon'}>
                          <i className="fa-regular fa-circle-xmark"></i>
                      </div>
                      <p>Ask A Question</p>
                      <span>Here You can Ask Any Programming Related Question.</span>
                  </div>
                  <div className={'ask-chat-area'} style={{scrollbarWidth:"none"}}>
                      <ChatScroll/>
                  </div>

              </div>
          ): null}

      </div>
  )
}

export default ChatBox