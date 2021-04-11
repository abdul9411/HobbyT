import React, {useEffect, useState} from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Button from '@material-ui/core'
import './Likebutton.css'

// need to get likestate from likepost function

function Likebutton(props) {
    const[likestate, changelikestate]= useState("unliked")
    // useEffect
    return (
        <div>
        <button className="Likebutton" onClick={
            ()=>likestate==="unliked"?changelikestate("liked"):changelikestate("unliked")
        }>
            <ArrowUpwardIcon className="arrowIcon" fontSize= "small"  style={{color: likestate === "liked" ? "blue" : "black"}}/>
            {props.likeCount}
        </button>
        </div>
    );
}

export default Likebutton;