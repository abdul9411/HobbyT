import React from "react";
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home'
import PublicIcon from '@material-ui/icons/Public';
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SidebarOption from "./SidebarOptions"
import Logo from './logo.png'

function Sidebar() {
    return (
        <div className="sidebar-hobbyt">
            {/* <h2>HobbyT</h2> */}
            <img className="img-hobbyt" src={Logo} alt=''></img>
            <a href="/feed">
                <SidebarOption
                    Icon={HomeIcon}
                    text="Home"
                />
            </a>
            <a href="/profile">
                <SidebarOption
                    Icon={PersonIcon}
                    text="My Profile"
                />
            </a>
            <a href="/notifications">
                <SidebarOption
                    Icon={PublicIcon}
                    text="Notifications"
                />
            </a>
            <a href="/chat">
                <SidebarOption
                    Icon={ChatIcon}
                    text="Chat"
                />
            </a>
            <a href="/community">
                <SidebarOption
                    Icon={GroupIcon}
                    text="Community"
                />
            </a>
            <a href="/settings">
                <SidebarOption
                    Icon={SettingsOutlinedIcon}
                    text="Settings"
                />
            </a>
            <a href="/logout">
                <SidebarOption
                    Icon={ExitToAppIcon}
                    text="Sign out"
                />
            </a>
            {/* <p className="foot">Copyright© 2021 HobbyT</p> */}
        </div>

    );
}

export default Sidebar;