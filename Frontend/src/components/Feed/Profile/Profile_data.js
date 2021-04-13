import './Profile_data.css'
import axios from 'axios'
import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Homefeedheader from '../Templates/Homefeedheader'
import { Button } from '@material-ui/core';
import Posts from '../Templates/Posts'


function Profile_data(props) {
    const user_id= props.username
    const [posts, setposts]= useState([])
    useEffect(() => {
      axios.defaults.headers.common['x-auth-token'] = props.token;
        axios.get(`http://localhost:3001/api/post/query`,{
        params: {
          user_id: user_id
        }
        })
        .then((response)=>{
          setposts(response.data)

        })
      }, []);

    return (
        <div className="my_profile">
         <Homefeedheader
            name= "Profile"
           />
           <div className="prof-desc">
           {/* need to adjust size */}
            <Avatar src={props.icon} className="prof-pic"/>
            <div className="dp-name">{props.displayname}</div>
            <div>@{props.username}</div>
            <div>{props.bio}</div>
            <Button>Add Profile Photo</Button>
            <Button>Edit Bio</Button>
            </div>
            {posts.map(
            item=>(
              <Posts
                username= {item.user_id}
                displayName = {props.displayname}
                text = {item.content} 
                avatar = {props.icon}
                timestamp = {item.date}
                userid = {props.username}
                likeCount = {item.likes}
                post_id = {item.post_id}
              />
            )
          )}
            <div className="footer-of-profile">No more items to show</div>
            {/* templates should be replaced */}
        </div>
    );
}

export default Profile_data;
