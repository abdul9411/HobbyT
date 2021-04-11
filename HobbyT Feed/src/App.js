import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Homepage from "./Home/Homepage.js"
import Cookies from 'universal-cookie';
import Comm_feed_route from './Community/Comm_feed_route'
import Community from './Community/Community.js'
import Notifications from './Notifications/Notifications.js'
import Profile from './Profile/Profile.js'


function App() {
  const cookies = new Cookies();
  cookies.get('user')
  return (
    <Router>
    <Switch>
    <div className="app">
    {/* route to feed */}
    <Route path = "/feed">
    <Homepage
       user= {cookies} 
    />
    </Route>
    {/* route to community list */}
    <Route path = "/community" exact>
    <Community
      user= {cookies}
    />
    </Route>

    {/* route to my profile */}
    <Route path = "/profile">
    <Profile
       user= {cookies}
    />
    </Route>

       {/* route to notifications */}
       <Route path = "/notifications">
    <Notifications/>
    </Route>

 
  {/* route to community */}
    <Route path = "/community/:id">
    <Comm_feed_route
       user= {cookies}
    />

  
    </Route>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
