import { Avatar, Icon } from '@material-ui/core';
import React from 'react';
import "./Posts.css"
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import Comments from './Comments'
import Likebutton from './Likebutton.js'

function Posts({
    username,
    displayName,
    text,
    image, 
    avatar,
    timestamp,
    userid,
    likeCount,
    post_id
}) {
 
    return (
        <div className="post">
        <div className="post__avatar">
          <Avatar src={avatar} />
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
            <div class="dropdown-container" tabindex="-1">
            <div class="three-dots"></div>
            <div class="dropdown">
            {username!==userid&& <a href="/report"><div><NotInterestedIcon fontSize="small"/>  Report User</div></a>}
            {username!==userid&& <a href="/report"><div><FlagOutlinedIcon fontSize="small"/>  Report Post</div></a>}
            {username===userid&& <a href="/deletepost"><div><DeleteIcon fontSize="small"/>  Delete</div></a>}
            </div>
            </div>
            {/* <MoreHorizIcon fontSize="small" /> */}
         
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
