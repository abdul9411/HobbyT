import React from 'react';
import Sidebar from '../Templates/sidebar.js'
import Widgets from "../widgets.js"
import Homefeed from './homefeed.js'
import './homepage.css'
import axios from 'axios'


function Homepage(props) {
    return (
        <div className="homepg">
        <Sidebar/>
        <Homefeed
            user = {props.user}
        />
        <Widgets/>
        </div>
    );
}

export default Homepage;
