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
          submitPost("")
       )
       .catch((error)=>{
           console.log(error)
       })
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
                />
            )
          )}
          </div>
          </Collapsible>
        </div>
    );
}

export default Comments;