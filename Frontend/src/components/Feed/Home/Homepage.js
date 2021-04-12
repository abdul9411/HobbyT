import React from 'react';
import Sidebar from '../Templates/sidebar.js'
import Widgets from "../widgets.js"
import Homefeed from './homefeed.js'
import './homepage.css'
import axios from 'axios'

function Homepage(props) {
    return (
        <div className="homepg">
        <Sidebar removeToken={props.removeToken}/>
        <Homefeed
            user = {props}
        />
        <Widgets/>
        </div>
    );
}

export default Homepage;
