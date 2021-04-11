import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Login from "./components/login/Login";
import SignUp from "./components/signup/Signup";
import './components/Feed/App.css';
import Homepage from "./components/Feed/Home/Homepage.js"
import Comm_feed_route from './components/Feed/Community/Comm_feed_route'
import Community from './components/Feed/Community/Community.js'
import Notifications from './components/Feed/Notifications/Notifications.js'
import Profile from './components/Feed/Profile/Profile.js'

function App() {
  const cookies = new Cookies();
  // Creates cookie after user signs up so that he can access the user restricted pages
  function storeToken(res) {
    cookies.set('user', res.data, { path: '/' });
    console.log(cookies.get('user'))
    window.location.href = '/feed';
  }

  // router to determine what page to display based on the URL
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          {!cookies.get('user') ? <SignUp storeToken={storeToken} /> : window.location.href = '/feed'}
        </Route>
        <Route path="/">
          {!cookies.get('user') ? <Login storeToken={storeToken} /> : window.location.href = '/feed'}
        </Route>
        <Route path="/login">
          {!cookies.get('user') ? <Login storeToken={storeToken} /> : window.location.href = '/feed'}
        </Route>
        <div className="app">
          {/* route to feed */}
          <Route path="/feed">
            {!cookies.get('user') ? <Login storeToken={storeToken} /> : <Homepage
              user={cookies.get('user')}
            />}
          </Route>
          {/* route to community list */}
          <Route path="/community" exact>
            {!cookies.get('user') ? <Login storeToken={storeToken} /> : <Community
              user={cookies.get('user')}
            />}
          </Route>
          {/* route to my profile */}
          <Route path="/profile">
            {!cookies.get('user') ? <Login storeToken={storeToken} /> : <Profile
              user={cookies.get('user')}
            />}

          </Route>
          {/* route to notifications */}
          <Route path="/notifications">
            {!cookies.get('user') ? <Login storeToken={storeToken} /> : <Notifications />}

          </Route>
          {/* route to community */}
          <Route path="/community/:id">
            {!cookies.get('user') ? <Login storeToken={storeToken} /> : <Comm_feed_route
              user={cookies.get('user')}
            />}
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;