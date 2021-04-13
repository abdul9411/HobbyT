import React, {useEffect, useState} from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './Likebutton.css'
import axios from 'axios'

// it takes two takes to dislike

function Likebutton({post_id, 
    user_id,
    likeCount}) {
      
    const[likestate, changelikestate]= useState("unliked")
    const[receiverUser, updateReceiveruser] = useState(0);
    const[nooflikes, changelikeno]= useState(0)
    const [postdata, updatepostdata]=useState("")

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
    
    useEffect(() => {
        axios.get(`http://localhost:3001/api/likepost/query`,{
        params: {
          user_id: user_id,
          post_id: post_id
        }
        })
        .then((response)=>{
          response.data.length!==0&&changelikestate("liked")
        }).catch((err)=>{console.log(err)})
      }, [post_id, likestate]);
     
      useEffect(() => {
        axios.get(`http://localhost:3001/api/likepost/query`,{
        params: {
          post_id: post_id
        }
        })
        .then((response)=>{
            changelikeno(response.data.length)
        })
      }, [post_id]);

const[likepostid, changelikepostid]= useState(0)

      function updateLikes(){
        axios.get(`http://localhost:3001/api/likepost/query`,{
            params: {
                user_id: user_id,
                post_id: post_id
              }
              })
              .then((response)=>{
                changelikepostid(response.data[0].likepost_id)
                console.log(response.data[0].likepost_id)
            }).catch((error)=>console.log(error))
          if (likestate==="liked"){
                axios.delete(`http://localhost:3001/api/likepost`,{
                data: {
                    likepost_id:likepostid
                    }
                  }).then((response)=>{
                      response.status==200&&changelikeno(nooflikes-1);
                      changelikestate("unliked")
                }, 
                 ) .catch((error)=>console.log(error))
          axios.patch(`http://localhost:3001/api/post/like`,{
            
              post_id: post_id,
              likes: nooflikes-1
         
          }).then((res)=>{console.log(res)}).catch((e)=>console.log(e))
          }else if (likestate==="unliked"){
            axios.post(`http://localhost:3001/api/likepost`,{
                    user_id: user_id,
                    post_id: post_id
                  }).then(changelikeno(nooflikes+1), changelikestate("liked")).catch((error)=>console.log(error))
            axios.post(`http://localhost:3001/api/notification`,{
              sender_user_id: user_id,
              receiver_user_id: receiverUser,
              title: "liked your post",
              content: postdata
            }).then(console.log('success'))
            .catch((err)=>{console.log(err)})
            axios.patch(`http://localhost:3001/api/post/like`,{
                post_id: post_id,
                likes: nooflikes+1
  
            }).then((res)=>{console.log(res)}).catch((e)=>console.log(e))
          
          }

      }

    return (
        <div>
        <button className="Likebutton" onClick={updateLikes}>
            <ArrowUpwardIcon className="arrowIcon" fontSize= "small"  style={{color: likestate === "liked" ? "blue" : "black"}}/>
            {nooflikes}
        </button>
        </div>
    );
}

export default Likebutton;
