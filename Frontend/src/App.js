import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import './components/Feed/App.css';
import Homepage from "./components/Feed/Home/Homepage.js"
import CommFeedRoute from './components/Feed/Community/Comm_feed_route'
import Community from './components/Feed/Community/Community.js'
import Notifications from './components/Feed/Notifications/Notifications.js'
import Profile from './components/Feed/Profile/Profile.js'
import axios from 'axios';

function App() {
  const cookies = new Cookies();
  // Creates cookie after user signs up so that he can access the user restricted pages
  function storeToken(res) {
    axios.defaults.headers.common['x-auth-token'] = res.data.token;
    cookies.set('token', res.data.token, { path: '/' });
    axios.get('http://localhost:3001/api/auth/user', {
      req: res.data
    })
    .then(function (response) {
      cookies.set('user', response.data, { path: '/' });
      window.location.href = '/';
      })
    .catch(function (error) {
      console.log(error);
    })   
  }

  // router to determine what page to display based on the URL
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          {!cookies.get('user') ? <SignUp storeToken={storeToken} /> : <Redirect to="/feed" />}
        </Route>
        <Route exact path="/">
          {!cookies.get('user') ? <Redirect to="/login" /> : <Redirect to="/feed" />}
        </Route>
        <Route path="/login">
          {!cookies.get('user') ? <Login storeToken={storeToken} /> : <Redirect to="/feed" />}
        </Route>
        <div className="app">
          {/* route to feed */}
          <Route path="/feed">
            {!cookies.get('user') ? <Redirect to="/" /> : <Homepage user={cookies.get('user')} token={cookies.get('token')}
            />}
          </Route>
          {/* route to community list */}
          <Route path="/community">
            {!cookies.get('user') ? <Redirect to="/" /> : <Community
              user={cookies.get('user')} token={cookies.get('token')}
            />}
          </Route>
          {/* route to my profile */}
          <Route path="/profile">
            {!cookies.get('user') ? <Redirect to="/" /> : <Profile
              user={cookies.get('user')} token={cookies.get('token')}
            />}
          </Route>
          {/* route to notifications */}
          <Route path="/notifications">
            {!cookies.get('user') ? <Redirect to="/" /> : <Notifications />}
          </Route>
          {/* route to community */}
          <Route path="/community/:id">
            {!cookies.get('user') ? <Redirect to="/" /> : <CommFeedRoute user={cookies.get('user')} token={cookies.get('token')}/>}
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
