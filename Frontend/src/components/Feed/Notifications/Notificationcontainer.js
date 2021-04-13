import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Notificationcontainer.css"  

function Notificationcontainer(props) {
    return (
        <div className="notif-container-tab">
        <Avatar className="avatar-notif" src ={props.src}/>
       
        <span className="text-notif"> {props.timestamp} : {props.displayname} has {props.action} your post</span>
        <div>You posted: {props.content}</div>
      </div>
        
    );
}

export default Notificationcontainer;
