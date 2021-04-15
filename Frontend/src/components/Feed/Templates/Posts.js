import Avatar from 'react-avatar' 
import React, { useEffect, useState } from 'react';
import "./Posts.css"
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import Comments from './Comments'
import Likebutton from './Likebutton.js'
import axios from 'axios';
import Collapsible from 'react-collapsible';

function Posts({
    username,
    displayName,
    text,
    image, 
    avatar,
    timestamp,
    userid,
    bio,
    likeCount,
    post_id
}) {

  const[commID, changecommID]=useState(0)

  useEffect(()=>{
    axios.get(`http://localhost:3001/api/post/postid`,{
      params:{
        post_id:post_id
      }
    }).then((res)=>{
      console.log(res)
      changecommID(res.data[0].community_id)
    })
  },[post_id])


  function Deletepost(){
    confirmAlert({
      title: 'Deletion Confirmation',
      message: 'Are you sure you want to delete the post permanently?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => confirmDelete()
        },
        {
          label: 'No',
          onClick: () => null
        }
      ]
    });
  }

  function confirmDelete(){
    //delete the notifications
      axios.delete('http://localhost:3001/api/comment/post',{
        data:{
          post_id: post_id
        }
        }).then((response)=>console.log(response))
        .catch((e)=>console.log(e))
       //delete comments of post
       axios.delete('http://localhost:3001/api/likepost/post',{
        data:{
          post_id: post_id
        }
        }).then((response)=>
        axios.delete('http://localhost:3001/api/post',{
          data:{
            post_id: post_id
          }
          }).then((response)=>response.status===200&&window.location.reload())
      .catch((e)=>console.log(e)))
    }


    const[report, updatereport]= useState("")
  function reportpost(){
    confirmAlert({
      title: `You have flagged post ${post_id} as inappropriate`,
      message: 'Why do you think the post is inappropriate',
      buttons: [
        {
          label: 'NSFW',
          onClick: () => handlereport("NSFW")
        },
        {
          label: 'Bullying',
          onClick: () => handlereport ("Bullying")
        },
        {
          label: 'Hate Speech',
          onClick: () => handlereport("Hate Speech")
        },

        {
          label: 'Spam',
          onClick: () => handlereport("Spam")
        }
      ]
    });
  }

  function handlereport(props){
    alert(`Reported Post For ${props}`)
    console.log(post_id, username, commID, text, props)
    axios.patch(`http://localhost:3001/api/post`, {
      post_id: post_id,
      user_id: username,
      community_id: commID,
      title: `POST FLAGGED FOR ${props}`,
      content: text
    })
    axios.post(`http://localhost:3001/api/notification`,{
      title: `been flagged as ${props} by a user`,
      sender_user_id: 1,
      receiver_user_id: username, 
      content: text
    })
  }

    return (
        <div className="post">
        <div className="post__avatar">
          <Avatar size = "60" color={Avatar.getRandomColor( ['red', 'green'])} round={true} name={displayName} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                   @
                  {username} 
                  <span className="timestamp">Posted on {timestamp} </span>
                </span>
                
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            
            <Likebutton 
            post_id = {post_id}
            user_id = {userid}
            likeCount={likeCount}/> 
            {/* //change here */}
             
            {/* <AddIcon fontSize="small" /> */}
            {/* <div class="dropdown-container" tabindex="-1">
            <div class="three-dots"></div>
            <div class="dropdown"> */}
            <Collapsible trigger="•••">
            {username!==userid&& <div> <button onClick={(reportpost)} className="btn btn-sm btn-dark">Report Post</button></div>}
            {username===userid&& <div> <button onClick={Deletepost} className="btn btn-sm btn-danger">Delete Post</button></div>}
            </Collapsible>
         
          </div>
          <div >
           <Comments
             user_id= {userid}
             post_id = {post_id}
           />
          </div>
        </div>
      </div>
        
    );
}

export default Posts;
