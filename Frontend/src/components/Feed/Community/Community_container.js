import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./Community_container.css"
import Homefeedheader from '../Templates/Homefeedheader'
import Community_tab from './Community_tab.js'

function Community_container(props) {
    const UserID= props.user.user_id;
    const [communitylist, setlist]=useState([])
    useEffect(() => {
    axios.defaults.headers.common['x-auth-token'] = props.token;    
    axios.get(`http://localhost:3001/api/community`)
    .then((response)=>{
    setlist(response.data)
    })
}, []);
    return (
        <div className="communitydiv">
                <Homefeedheader
                name= {props.name}
/>
{communitylist.map(
            item=>(
                <Community_tab
                name = {item.name}
                description = {item.description}
                userID= {UserID}
                token = {props.token}
            />
            )
          )}
        </div>
    );
}

export default Community_container;

