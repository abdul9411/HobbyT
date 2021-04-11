import React from 'react';
import "./Notification_div.css"
import Homefeedheader from '../Templates/Homefeedheader.js'
import Notificationcontainer from './Notificationcontainer.js'
function Notification_div(props) {
    return (
        <div className="notifdiv">
           <Homefeedheader
               name= {props.name}
           />
           <Notificationcontainer
               displayname = "John Doe"
               action = "liked"
           />
             <Notificationcontainer
               displayname = "John Doe"
               action = "commented on"
           />
             <Notificationcontainer
               displayname = "Margarine"
               action = "liked"
               timestamp = "13 April"
           />
             <Notificationcontainer
               displayname = "Margarine"
               action = "commented on"
           />
             <Notificationcontainer
               displayname = "John Doe"
               action = "liked"
           />  <Notificationcontainer
               displayname = "John Doe"
               action = "liked"
           />  <Notificationcontainer
               displayname = "John Doe"
               action = "liked"
           />  <Notificationcontainer
               displayname = "John Doe"
               action = "liked"
           />  <Notificationcontainer
               displayname = "John Doe"
               action = "liked"
           />
        </div>
    );
}

export default Notification_div;