import { Avatar, Button, Checkbox } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./postbox.css"
import TextareaAutosize from 'react-textarea-autosize';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//avatar sending problem

function Postbox(props) {
    const [postValue, submitPost]= useState("")
    const myID= props.user.user_id
    const [suppliedID, maskID]= useState(myID)
    const [check, changecheck] = useState("unchecked")
    const [name, changename]= useState ("")
    const [pic, changepic]= useState("")
    const [storeName, changestoreName] = useState("")
    function Posttext(event){
        submitPost(event.target.value);
    }
    // console.log(props.community_id)
    const notify = () => toast("Post Succesful!")

    useEffect(() => {
        axios.defaults.headers.common['x-auth-token'] = props.token;
        axios.get(`http://localhost:3001/api/auth/user/query`,{
        params: {
            user_id: myID
        }
        })
        .then((response)=>{
          changename(response.data[0].name)
          changestoreName(response.data[0].name)
          response.data[0].picture&&changepic(response.data[0].picture)
        })
        .catch((error)=>{
          console.log(error)
        })
      }, [myID]);



    function Postme(){
        console.log(check)
         if (check==="checked"){
            axios.defaults.headers.common['x-auth-token'] = props.token;
            axios.post(`http://localhost:3001/api/post`,
            {
               user_id: 1,
               community_id: props.community_id,
               title: postValue,
               content: postValue,
               username: "ANONYMOUS HOBBYTER",
               avatar: "2"
           })
           .then((response)=>
              submitPost(""), notify()
           )
           .catch((error)=>{
               console.log(error)
           })
         }else if(check==="unchecked"){
            axios.defaults.headers.common['x-auth-token'] = props.token;
            axios.post(`http://localhost:3001/api/post`,
       {
          user_id: myID,
          community_id: props.community_id,
          title: postValue,
          content: postValue,
          username: name,
          avatar: "2"
      })
      .then((response)=>
         submitPost(""), notify()
      )
      .catch((error)=>{
          console.log(error)
      })
         }
    }

function Checker(){
    if (check==="unchecked"){
        changecheck("checked")
    } else if (check === "checked"){
        changecheck("unchecked")
    }
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
                <Checkbox onChange = {Checker}/>
                <label>Post Anonymously</label>
                
                </span>
                
                <Button className= "post-btn" onClick={Postme}>Post it</Button>
                </div>
                
            </form>
            <ToastContainer/>
        </div>
    );
}

export default Postbox;
