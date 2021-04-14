import React, {useEffect, useState} from 'react';
import "./Notification_div.css"
import Homefeedheader from '../Templates/Homefeedheader.js'
import Notificationcontainer from './Notificationcontainer.js'
import axios from 'axios'


function Notification_div({name, action,timestamp, content, id}) {
    const[dpname,changedpname]= useState("")
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/auth/user/query`,{
            params:{
                user_id: id
            }
        }).then((response)=>{
            changedpname(response.data[0].name)
        }).catch((err)=>{
            console.log(err)
        })
    })

return(
        <div className="notifdiv">
         {name&&action&&timestamp&&
           <Notificationcontainer
                timestamp = {timestamp}
                displayname = {dpname}
                action = {action}
                content = {content}
           />
           }
        </div>
)
}

export default Notification_div;
