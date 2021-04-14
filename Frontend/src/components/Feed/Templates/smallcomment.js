import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './smallcomment.css'
import Collapsible from 'react-collapsible'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; 
function Smallcomment({
    comment,
    userID,
    myID,
    avatar,
    commentID
}) {

    const[commentexists, commentdelete] = useState(true)
    function deletecomment(){
        axios.delete(`http://localhost:3001/api/comment`, {
            data: {
                comment_id: commentID
            }
        }).then((response)=>{
            commentdelete(false)
        }).catch((error)=>console.log(error))
    }

    function reportcomm(){
        confirmAlert({
            title: 'We value your opinions!',
            message: `you have flagged comment#${commentID} as inappropriate. Please contact system admin with the comment ID and your complain`,
            buttons: [
              {
                label: 'Ok',
                onClick: () => null
              }
            ]
          });
    }
    return (
        <div>
       {commentexists===true&&
        <div className="a-comment">
        <Avatar/>@{userID} says: {comment}
           <Collapsible trigger=" ••• " >{myID===userID&&<button onClick={deletecomment} className="btn btn-danger btn-sm">Delete comment
           </button>}{myID!==userID&&<button className="btn btn-dark btn-sm" onClick={reportcomm}>Report comment</button>}</Collapsible>
           </div>
        }
        </div>
    );
}

export default Smallcomment;
