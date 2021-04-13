import React from "react";
import '../Communityfeed.css';
import Sidebar from "../Templates/sidebar.js";
import Feed from "../feed.js";
import Widgets from "../widgets.js";
import {useHistory, useParams} from 'react-router-dom';


function Comm_feed_route(props) {
    const {id} =  useParams()
    console.log({id}, props.token, props.user)
  return (
    <div className="cm-feed">
    <Sidebar/>
    <Feed
        Community_name= {id}
        user = {props.user}
        token = {props.token}
    />
    <Widgets/>
    </div>
  );
}

export default Comm_feed_route;
