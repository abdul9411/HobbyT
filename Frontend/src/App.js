import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Cookies from 'universal-cookie';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';

import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import './components/Feed/App.css';
import Homepage from "./components/Feed/Home/Homepage.js"
import Comm_feed_route from './components/Feed/Community/Comm_feed_route'
import Community from './components/Feed/Community/Community.js'
import Notifications from './components/Feed/Notifications/Notifications.js'
import Profile from './components/Feed/Profile/Profile.js'
import Settings from './components/Feed/Settings.js'
import axios from 'axios';
import history from './components/chat/Utilities/history';
import PrivateRoute from './components/chat/Utilities/private-route';
import Chat from './components/chat/Chat/Chat';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#58a5f0',
            main: '#000',
            dark: '#004c8c',
        },
        secondary: {
            light: '#ffd95a',
            main: '#f9a825',
            dark: '#c17900',
            contrastText: '#212121',
        },
        background: {
            default: '#f0f0f0',
        },
    },
    typography: {
        useNextVariants: true,
    },
});

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

  if (window.location.pathname === '/logout'){
    console.log("signing out");
    cookies.remove('user', {path: '/'});
    cookies.remove('token', {path: '/'});
    window.location.href = '/';
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
        <React.Fragment>
        <div className="app">
          {/* route to feed */}
          <Route exact path="/feed">
            {!cookies.get('user') ? <Redirect to="/" /> : <Homepage user={cookies.get('user')} token={cookies.get('token')}
            />}
          </Route>
          {/* route to community list */}
          <Route exact path="/community">
            {!cookies.get('user') ? <Redirect to="/" /> : <Community
              user={cookies.get('user')} token={cookies.get('token')}
            />}
          </Route>
          {/* route to my profile */}
          <Route exact path="/profile">
            {!cookies.get('user') ? <Redirect to="/" /> : <Profile
              user={cookies.get('user')} token={cookies.get('token')}
            />}
          </Route>
          {/* route to notifications */}
          <Route exact path="/notifications">
            {!cookies.get('user') ? <Redirect to="/" /> : <Notifications user={cookies.get('user')} token={cookies.get('token')} />}
          </Route>
          {/* route to community */}
          <Route path="/community/:id">
            {!cookies.get('user') ? <Redirect to="/" /> : <Comm_feed_route user={cookies.get('user')} token={cookies.get('token')}/>}
          </Route>
          <Route path="/settings">
            {!cookies.get('user') ? <Redirect to="/" /> : <Settings user={cookies.get('user')} token={cookies.get('token')}/>}
          </Route>
          {/* route to chat */}
          <Route path="/chat" exact component={Chat} >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
                    <Router history={history}>
                          {!cookies.get('user') ? <Redirect to="/" /> : <Chat user={cookies.get('user')} token={cookies.get('token')} />}
                    </Router>
                </SnackbarProvider>
            </ThemeProvider>
          </Route>
        </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
