import React from 'react'
import axios from 'axios'

const url = //url to posts API

function postdata(){
    axios.get(url)
  .then(function (response) {
    // handle success
    return response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return {};
  })
  }
  

const templates= [
    {
        text: "I am somewhere",
        username: "anonymous",
        displayName: "Anonymous",
        timestamp: "13 April",
    },
    {
        text: "Guten Tag, Welt",
        username: "john",
        displayName: "John Doe",
        timestamp: "13 April"
    },
    {
        text: "Physics from creation to collapse",
        username: "john",
        displayName: "John Doe",
        timestamp: "13 April"
    },
    {
        text: "Guten Tag, Welt Guten Tag, WeltGuten Tag, WeltGuten Tag, WeltGutenGuten Tag, WeltGuten Tag, WeltGuten Tag, WeltGuten Tag, WeltGuten Tag, Welt Tag, WeltGuten Tag, Welt ",
        username: "john",
        displayName: "John Doe",
        timestamp: "13 April"
    },
    {
        text: "Guten Tag, Welt Guten Tag, WeltGuten Tag, WeltGuten Tag, WeltGutenGuten Tag, WeltGuten Tag, WeltGuten Tag, WeltGuten Tag, WeltGuten Tag, Welt Tag, WeltGuten Tag, Welt ",
        username: "john",
        displayName: "John Doe",
        timestamp: "13 April"
    }
]

export default templates;