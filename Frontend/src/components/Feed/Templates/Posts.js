import { Avatar, Icon } from '@material-ui/core';
import React from 'react';
import "./Posts.css"
import TextareaAutosize from 'react-textarea-autosize';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import Collapsible from 'react-collapsible'
import Likebutton from './Likebutton.js'
import { Button } from '@material-ui/core';

function Posts({
    username,
    displayName,
    text,
    image, 
    avatar,
    timestamp,
    userid
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
            
            <Likebutton likeCount={0}/> 
            {/* //change here */}
             
            {/* <AddIcon fontSize="small" /> */}
            <div class="dropdown-container" tabindex="-1">
            <div class="three-dots"></div>
            <div class="dropdown">
            {username!==userid&& <a href="#"><div><NotInterestedIcon fontSize="small"/>  Report User</div></a>}
            {username!==userid&& <a href="#"><div><FlagOutlinedIcon fontSize="small"/>  Report Post</div></a>}
            {username===userid&& <a href="#"><div><DeleteIcon fontSize="small"/>  Delete</div></a>}
            </div>
            </div>
            {/* <MoreHorizIcon fontSize="small" /> */}
         
          </div>
          <div >
          <Collapsible className="comments-tab" trigger="Comments">
          <TextareaAutosize className="comment-box" placeholder="Post your comment"/>
          <Button className="cmnt-pst-btn">Post</Button>
          <div className="comments"><Avatar/><p>Anna Karenina: comments</p>
          </div>
          </Collapsible>
          </div>
        </div>
      </div>
        
    );
}

export default Posts;