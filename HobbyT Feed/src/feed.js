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
    axios.get(`${process.env.REACT_API_URL}/community`,{
    params: {
      name: props.Community_name
    }
    })
    .then((response)=>{
      setcommunityid(response.data.community_id)
    })
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_API_URL}/post`,{
    params: {
        community_id: communityid
    }
    })
    .then((response)=>{
      setposts(response.data)
    })
  }, [communityid]);


return(
    
<div className="feed">
  {/* {header} */}
  <Feedheader
      Community_name={props.Community_name}
  />
    {/* {post box} */}
    <Postbox/>
    {/* {posts} */}
    {posts.map(
            item=>(
              <Posts
                username= {item.user_id}
                displayName = {item.name}
                text = {item.content}
                avatar = {item.avatar}
                timestamp ={item.date}
                userid = {props.user.user_id}
              />
            )
          )}
    <p className="endnote">Nothing more to show right now</p>
</div>
);
}
export default Feed;
