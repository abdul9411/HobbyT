import React from "react";
import '../Communityfeed.css';
import Sidebar from "../Templates/sidebar.js";
import Feed from "../feed.js";
import Widgets from "../widgets.js";
import phy_templates from '../post-templates-physics';
import {useHistory, useParams} from 'react-router-dom';


function Comm_feed_route({match}, props) {
    const {id} =  useParams()
  return (
    <div className="cm-feed">
    <Sidebar/>
    <Feed
        Community_name= {id}
        user = {props.user}
    />
    <Widgets/>
    </div>
  );
}

export default Comm_feed_route;
