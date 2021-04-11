import React from 'react';
import Sidebar from "../Templates/sidebar.js"
import Notification_div from "./Notification_div.js"
import "./Notifications.css"

function Notifications(props) {
    return (
        <div className="notifications">
        <Sidebar className="sidebar-notif"/>
        <Notification_div
            name= "Notifications"
        />
        </div>
    );
}

export default Notifications;