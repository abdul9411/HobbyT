import React, { useEffect, useState } from 'react';
import Sidebar from '../Templates/sidebar.js'
import './Profile.css'
import Profile_data from './Profile_data'
import axios from 'axios'

function Profile(props) {
    const[bio, updatebio]=useState("")
    const[picture, updatepic]=useState("")
    
    
    useEffect(() => {
        axios.get(`http://localhost:3001/api/auth/user`,{
        params: {
          user_id: props.user.user_id,
        }
        })
        .then((response)=>{
         updatebio(response.data[0].bio)
         updatepic(response.data[0].picture)
        }).catch((error)=>console.log(error))
      }, []);
     
    return (
        <div className="profile-container">
        <Sidebar
        token = {props.token}
         className="sidebar-notif"/>
        <Profile_data
        icon ={picture}
        displayname= {props.user.name}
        username ={props.user.user_id}
        bio = {bio}
        token = {props.token}
        />
        
        </div>
    );
}

export default Profile;
