import React, {useEffect, useState} from "react";
import axios from "axios"
import "./homefeed.css";
import Posts from '../Templates/Posts.js'
import Homefeedheader from '../Templates/Homefeedheader.js'
require('dotenv').config()

//Problem: posts render only for one community



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




function Homefeed(props){
const userId= props.user.user_id;
const url = `http://localhost:3001/api/communityuser/query`
const [communityID, setID]= useState([])
    useEffect(() => {
    axios.defaults.headers.common['x-auth-token'] = props.token;
    axios.get(url,{
    params: {
      user_id:userId,
    }
    })
    .then((response)=>{
      setID(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, []);


  const [posts, setPosts]= useState([])
  const[param, change]=useState([])

  useEffect(() => { 
   
    console.log(param)
    for (var i = 0; i < communityID.length; i++) {
    axios.defaults.headers.common['x-auth-token'] = props.token;  
    axios.get(`http://localhost:3001/api/post/query`,{
    params: {
      community_id: [1,2,3]
    }
    })
    .then((response)=>{
      // response.data.length!==0&&setPosts(posts => [...posts, response.data]);
      // console.log(response) 
      // console.log("e")
      setPosts(response.data)

    })
    .catch((err)=>{
      console.log(err)
    })
  }
  }, [communityID]);

  console.log(posts)
return(
    
<div className="homefeed">
  {/* {header} */}
  <Homefeedheader
      name = "Home"
  />
  <div className="feedheadhome"></div>
    {/* {post box} */}
    {/* {posts} */}
    {posts.map(
            item=>(
              <Posts
                username= {item.user_id}
                displayName = {item.username}
                text = {item.content} 
                avatar = {props.icon}
                timestamp = {item.date}
                userid = {userId}
                post_id = {item.post_id}
                likeCount= {item.likes}
              />
            )
          )}
    <p className="endnote">Nothing more to show right now</p>
</div>
);
}
export default Homefeed;
