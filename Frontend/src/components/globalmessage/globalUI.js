import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar'
import Messages from './Messages'
import './globalUI.css'
import axios from 'axios'
import Header from './Header'
import TextAreaAutosize from 'react-textarea-autosize'
function GlobalUI({user, token}) {
    
    const[messages, getmessages]= useState([])
    useEffect(()=>{
        axios.defaults.headers.common['x-auth-token'] = token;
        axios.get(`http://localhost:3001/api/message/global`)
        .then((response)=>{
          getmessages(response.data)
        })
        .catch((err)=>{
          console.log(err)
        })
    })

    const [messagevalue, change]=useState("")

    function messagechange(event){
        change(event.target.value)
        console.log(messagevalue)
    }

    function postmessage(){
        axios.defaults.headers.common['x-auth-token'] = token;
        axios.post(`http://localhost:3001/api/message/global`, {
            body: messagevalue,
            from: user.name
        })
        .then((response)=>{
         change("")
        })
        .catch((err)=>{
          console.log(err)
        })
    }
    return (
        <div className="global">
        <Sidebar/>
        <div className="Chat">
        <Header/>
        <div className="form">
        <TextAreaAutosize placeholder=" Aa" className="text-area-chat" value={messagevalue} onChange={messagechange}/>
         <button className="send-btn btn btn-sm btn-primary"onClick={postmessage}>Send</button></div>
        {messages.map(
            item=>(
              <Messages
              user= {item.from}
              message= {item.body}
              myId = {user.name}
              time = {item.date}
            />
            )
          )}
          </div>
        </div>
    );
}

export default GlobalUI;