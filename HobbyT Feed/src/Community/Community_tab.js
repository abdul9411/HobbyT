// requires link to community
import {Link} from 'react-router-dom'
import axios from 'axios';
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./Community_tab.css"  

//taking user props

function Community_tab(props){
     const[joinstate, setstate] = useState("+Join");
     const[hasjoined, changehasjoined]= useState(false);
     const userID= props.userID
     useEffect(() => {
        axios.get(`${process.env.REACT_API_URL}/communityuser`,{
        params: {
          user_id:{userID}
        }
        })
        .then((response)=>{
          hasjoined===false?setstate("+Join"):setstate("Joined")
          // axios returns API response body in .data
        })
      }, [joinstate]);
      
    return (
        
        <div className="community-tab">
        <Link to = {`/community/${props.name}`}>
        <div className="cm-name">{props.name} Community</div>
        <div className="cm-description">{props.description}</div>
        </Link>
        <div><Button onClick={
            ()=>joinstate==="+Join"?setstate("Joined"):setstate("+Join")} className="join-btn">{joinstate}
            </Button></div>
        </div>
    );
}

export default Community_tab;