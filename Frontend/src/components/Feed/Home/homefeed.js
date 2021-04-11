import React, {useEffect, useState} from "react";
import axios from "axios"
import "./homefeed.css";
import Posts from '../Templates/Posts.js'
import Homefeedheader from '../Templates/Homefeedheader.js'
require('dotenv').config()

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
};


//gets user cookies as prop


function Homefeed(props){
const userId= props.user.user_id;
const url = `${process.env.REACT_API_URL}/api/communityuser`
const [communityID, setID]= useState([])
    useEffect(() => {
    axios.get(url,{
    params: {
      user_id:userId
    }
    })
    .then((response)=>{
      setID(response.data)
      // axios returns API response body in .data
    })
  }, []);
  const [posts, setPosts]= useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_API_URL}/api/post`,{
    params: {
      community_id: communityID
    }
    })
    .then((response)=>{
      setID(response.data)
      // axios returns API response body in .data
    })
  }, [communityID]);
return(
    
<div className="homefeed">
  {/* {header} */}
  <Homefeedheader
      name = "Home"
  />
  <div className="feedheadhome"></div>
    {/* {post box} */}
    {/* {posts} */}
    {posts.map(CreatePost)}
    <p className="endnote">Nothing more to show right now</p>
</div>
);
}
export default Homefeed;
