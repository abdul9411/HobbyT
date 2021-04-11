import React from 'react';
import Sidebar from '../Templates/sidebar.js'
import './Profile.css'
import Profile_data from './Profile_data'


function Profile(props) {
    return (
        <div className="profile-container">
        <Sidebar className="sidebar-notif"/>
        <Profile_data
        icon ={props.user.picture}
        displayname= {props.user.name}
        username ={props.user.user_id}
        bio = {props.user.bio}
        />
        
        </div>
    );
}

export default Profile;
