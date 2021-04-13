import React, {useEffect, useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';
import { Button } from '@material-ui/core';
import Collapsible from 'react-collapsible';
import { Avatar, Icon } from '@material-ui/core';
import "./Posts.css"
import Smallcomment from './smallcomment'

function Comments({
    user_id,
    post_id
}) {
    const[receiverUser, updateReceiveruser]=useState(0)
    const[postdata, updatepostdata]=useState("")
    useEffect(() => {
        axios.get(`http://localhost:3001/api/post/postid`,{
        params: {
          post_id: post_id
        }
        })
        .then((response)=>{
          updateReceiveruser(response.data[0].user_id)
          updatepostdata(response.data[0].content)
        })
      }, []);
  

    const [postValue, submitPost]= useState("")
    function Posttext(event){
        submitPost(event.target.value);
    }
    function Post_comment(props){
        axios.post(`http://localhost:3001/api/comment`,
        {
           user_id: user_id,
           post_id: post_id,
           comment: postValue
       })
       .then((response)=>
          submitPost(""),
          
       )
       .catch((error)=>{
           console.log(error)
       })
       axios.post(`http://localhost:3001/api/notification`,{
        sender_user_id: user_id,
        receiver_user_id: receiverUser,
        title: "commented on",
        content: postdata
      }).then(console.log('success'))
      .catch((err)=>{console.log(err)})
    }

    const [comments, updatecomments]= useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/api/comment/query`,{
        params: {
          post_id: post_id
        }
        })
        .then((response)=>{
        updatecomments(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
      }, [post_id, postValue]);
    return (
        <div>
              <Collapsible className="comments-tab" trigger="Comments">
          <TextareaAutosize value={postValue} onChange={Posttext} className="comment-box" placeholder="Post your comment"/>
          <Button className="cmnt-pst-btn" onClick={Post_comment}>Post</Button>
          <div className="comments">
           {comments.map(
            item=>(
                <Smallcomment
                comment= {item.comment}
                userID = {item.user_id}
                myID= {user_id}
                commentID= {item.comment_id}
                />
            )
          )}
          </div>
          </Collapsible>
        </div>
    );
}

export default Comments;
