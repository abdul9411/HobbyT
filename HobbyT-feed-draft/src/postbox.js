import { Avatar, Button, Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import "./postbox.css"
import TextareaAutosize from 'react-textarea-autosize';

function Postbox(props) {
    const [postValue, submitPost]= useState("")
    function Posttext(event){
        submitPost(event.target.value);
    }
    function Postme(){
      alert(postValue)
    }

    return (
        <div className="postbox">
            <form method="POST" encType="multipart/form-data">
                <div className="postbox-in">
                <Avatar src=""></Avatar>
                <TextareaAutosize value={postValue} onChange={Posttext} placeholder={"A penny for your thoughts.."}></TextareaAutosize>
                </div>
                    
                   <div className="posting_prompt">
                <span className="checkbox">
                <Checkbox></Checkbox>
                <label>Post Anonymously</label>
                
                </span>
                
                <Button className= "post-btn" onClick={Postme}>Post it</Button>
                </div>
                
            </form>
        </div>
    );
}

export default Postbox;
