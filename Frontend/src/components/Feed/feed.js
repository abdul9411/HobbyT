import React, { useState, useEffect } from "react";
import axios from "axios"
import "./feed.css";
import Postbox from './postbox.js'
import Posts from './Templates/Posts'
import Feedheader from './Templates/Feedheader.js'


export function CreatePost(Template){
    return(
        <Posts
            text={Template.text}
            username ={Template.username}
            displayName = {Template.displayName}
            timestamp = {Template.timestamp}
            image =  {Template.image}
        />
    )
}

function Feed(props){
    const [posts, setposts]= useState([])
    const [communityid, setcommunityid] = useState('')

    useEffect(() => {
    axios.defaults.headers.common['x-auth-token'] = props.token;
    axios.get(`http://localhost:3001/api/community/query`,{
    params: {
      name: props.Community_name
    }
    })
    .then((response)=>{
      setcommunityid(response.data[0].community_id)    
    
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []);


  useEffect(() => {
    axios.defaults.headers.common['x-auth-token'] = props.token;
    axios.get(`http://localhost:3001/api/post/query`,{
    params: {
        community_id: communityid
    }
    })
    .then((response)=>{
      setposts(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [communityid]);
  
return(
    
<div className="feed">
  {/* {header} */}
  <Feedheader
      Community_name={props.Community_name}
  />
    {/* {post box} */}
    <Postbox
      user ={props.user}
      community_id = {communityid}
      token = {props.token}
    />
    {/* {posts} */}
    {posts.map(
            item=>(
              <Posts
                username= {item.user_id}
                displayName = {item.username}
                text = {item.content}
                avatar = {item.avatar}
                timestamp ={item.date}
                userid = {props.user.user_id}
                post_id = {item.post_id}
                likeCount = {item.likes}
              />
            )
          )}
    <p className="endnote">Nothing more to show right now</p>
</div>
);
}
export default Feed;
