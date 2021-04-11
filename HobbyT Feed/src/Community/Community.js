import React from 'react';
import Sidebar from '../Templates/sidebar.js'
import './Community.css'
import Community_container from './Community_container.js'

function Community(props) {
    return (
        <div className="community-container">
        <Sidebar className="sidebar-notif"/>
        <Community_container
            name="Community"
            user = {props.user}
        />

        </div>
    );
}

export default Community;