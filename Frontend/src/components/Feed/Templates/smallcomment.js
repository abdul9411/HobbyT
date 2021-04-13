import { Avatar } from '@material-ui/core';
import React from 'react';
import './smallcomment.css'
import Collapsible from 'react-collapsible'
function Smallcomment({
    comment,
    userID,
    myID,
    avatar
}) {
    return (
        <div>
       
        <div className="a-comment">
        <Avatar/>@{userID} says: {comment}
           <Collapsible trigger=" ••• " >{myID===userID&&<button className="btn btn-danger btn-sm">delete comment
           </button>}{myID!==userID&&<button className="btn btn-dark btn-sm">Report comment</button>}</Collapsible>
           </div>
        </div>
    );
}

export default Smallcomment;