import React, { useRef, useState} from 'react'
import Button from "../button/Button";
import './ChatBox.css'
import {useSelector} from "react-redux";
const ChatScroll=(props)=>{
    const bottomRef=useRef(null)
    const[message,setMessage]=useState([])
    const[userMessage,setUserMessage]=useState('')
    let [send,setSend]=useState('user')
    const {currentUser:user}=useSelector(state => state.user)



    React.useEffect( () => {
        bottomRef.current?.scrollIntoView({behavior: "smooth",block: "end"})
    },[message])
    async function checkMsg(){
        const messageObj={
            messageBody:'',
            createdAt:Date.now(),
            botResponse:'',
            sender:''
        }
        if(userMessage==='hsbc'){
            const newMessageData=  Object.assign({},messageObj,({sender:user?.result?._id,messageBody: userMessage,botResponse:"I couldn't understand!"}))
            await setMessage([message.concat(newMessageData)])
            console.log(message)
            setSend('bot')
        }else if(userMessage==='Hi'|| 'Hello'|| 'hello'||'hey'||'hi'){
            const newMessageData= Object.assign({},messageObj,({sender:user?.result?._id,messageBody: userMessage,botResponse:"Hello"}))
            console.log(newMessageData)
            await setMessage(message.concat(newMessageData))
            console.log(message)
            setSend('bot')
        }else{
            const newMessageData= await Object.assign({},messageObj,({
                sender:user?.result?._id,
                messageBody: userMessage,
                botResponse:"What is the Title Of Your Question?"
            }))
            await setMessage(message.concat(newMessageData))
            setSend('bot')
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await setSend('user')
        setTimeout(()=>
        { checkMsg()},1000)
        setUserMessage('')
    }

    return(
        <div className={'chat-scroll'} style={{scrollbarWidth:'none'}}>
            <div className={'msg'}>
                {message!==null ? message.map((item,index) => (
                    <div key={index}>
                    <p title={'Bot'} className={'msg-data data-bot'}>
                        <span>
                            <i className="fa-solid fa-robot"></i>
                        </span>
                        {item.botResponse}
                    </p>
                        <p title={user?.result?.name} className={'msg-data data-user'}>
                            {item.messageBody}
                        </p>
                    </div>
                )):null}

                <div ref={bottomRef}/>
            </div>
            <div className={'suggestion'}>
                <Button className={'suggest-btn'} children={'Ask Question!'}/>
                <Button className={'suggest-btn'} children={'Delete A question'}/>
            </div>
            <form onSubmit={handleSubmit}>
                <input value={userMessage} onChange={(e)=>setUserMessage(e.target.value)} type={'text'}/>
                <Button  className={'btn'} type={'submit'}>
                    <i title={'Send'} className="fa-solid fa-paper-plane"></i>
                </Button>
            </form>
        </div>
    )
}
export default ChatScroll