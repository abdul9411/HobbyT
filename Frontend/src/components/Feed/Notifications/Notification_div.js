import React from 'react';
import "./Notification_div.css"
import Homefeedheader from '../Templates/Homefeedheader.js'
import Notificationcontainer from './Notificationcontainer.js'
require('dotenv').config()

function Notification_div(props) {
const [notifs, setResult]= useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}`,{
        params: {
          user_id:props.user.user_id
        }
        })
        .then((response)=>{
            setResult(response.data)
        })
      }, []);
    return (
     
        <div className="notifdiv">
        <Homefeedheader
            name= {props.name}
        />
              {notifs.map(
         item=>(
             <Notificationcontainer
            displayname = {item.title}
            action = {item.content}
        />
         )
       )}
        </div>
    );
}

export default Notification_div;
