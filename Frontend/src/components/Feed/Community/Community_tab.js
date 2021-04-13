// requires link to community
import {Link} from 'react-router-dom'
import axios from 'axios';
import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./Community_tab.css"  

function Community_tab(props){
     const[joinstate, setstate] = useState("+Join");
     const [community_id, changecommunityID] = useState(0);
     const [community_user_id, changecommuserid]= useState(0)
     const userID= props.userID

     useEffect(() => {
      axios.defaults.headers.common['x-auth-token'] = props.token; 
      axios.get(`http://localhost:3001/api/community/query`,{
      params: {
        name: props.name
      }
      })
      .then((response)=>{
        changecommunityID(response.data[0].community_id)
      })
      .catch((error)=>{
        console.log(error)
      })
    }, []);

     useEffect(() => {
      axios.defaults.headers.common['x-auth-token'] = props.token;
        axios.get(`http://localhost:3001/api/communityuser/query`,
        {
        params: {
          user_id: userID,
          community_id: community_id
        }
        })
        .then((response)=>{
          console.log(response.data)
          response.data.length!==0&&setstate("Joined")
          response.data.length!==0&&changecommuserid(response.data[0].communityuser_id)
        })
        .catch((error)=>{
          console.log(error)
        })
      }, [community_id]);

      function Changejoin(){
        if (joinstate==="Joined"){
          setstate("+Join")
          console.log(community_user_id)
          axios.defaults.headers.common['x-auth-token'] = props.token;
          axios.delete(`http://localhost:3001/api/communityuser`,{
            data:{
            communityuser_id: community_user_id}
          }).catch((error)=>{
            console.log(error)
          })
        }else if(joinstate==="+Join"){
          setstate("Joined")
          axios.defaults.headers.common['x-auth-token'] = props.token;
          axios.post(`http://localhost:3001/api/communityuser`,{
            user_id: userID,
            community_id: community_id
          }).catch((error)=>{
            console.log(error)
          })
        }
      }

    return (
        
        <div className="community-tab">
        <Link to = {`/community/${props.name}`}>
        <div className="cm-name">{props.name} Community</div>
        <div className="cm-description">{props.description}</div>
        </Link>
        <div><Button onClick={Changejoin} className="join-btn">{joinstate}
            </Button></div>
        </div>
    );
}

export default Community_tab;
