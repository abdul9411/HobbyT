import './Profile_data.css'
import axios from 'axios'
import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Homefeedheader from '../Templates/Homefeedheader'
import { Button } from '@material-ui/core';
import Posts from '../Templates/Posts'
import Collapsible from 'react-collapsible'
import TextareaAutosize from 'react-textarea-autosize'

function Profile_data(props) {
    const user_id= props.username
    const [posts, setposts]= useState([])
    const [bioval, changebioval] = useState("")
    const [mybio, updatedbio]= useState(props.bio)
    useEffect(()=>{
      updatedbio(props.bio)
      
    },[props.bio])
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

function textme(event){
  changebioval(event.target.value)
}
     function updateBio(){
        axios.defaults.headers.common['x-auth-token'] = props.token;
        const bio = bioval
          axios.patch(`http://localhost:3001/api/auth/user/bio`,{
            user_id: user_id,
            bio: bioval
          })
          .then((response)=>{
            updatedbio(bio)
            changebioval("")
          }).catch((e)=>console.log(e))
     }

    return (
        <div className="my_profile">
         <Homefeedheader
            name= "Profile"
           />
           <div className="prof-desc">
           {/* need to adjust size */}
            <Avatar src={props.icon} className="prof-pic"/>
            <div className="dp-name">{props.displayname} (@{props.username})</div>
            <div className= "bio">{mybio}</div>
            {console.log(props.bio)}
            <Collapsible trigger= "Edit Profile">
            <Button>Add Profile Photo</Button>
            <TextareaAutosize maxlength='200' className= "bio-holder" placeholder="Tell us about your hobbies"
            value = {bioval} onChange={textme}
            />
            <Button onClick={updateBio} >Update Bio</Button>
            </Collapsible>
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
