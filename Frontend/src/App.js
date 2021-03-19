import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Login from "./components/login/login";
import SignUp from "./components/signup/Signup";

function App() {
  const cookies = new Cookies();

  // Creates cookie after user signs up so that he can access the user restricted pages
  function storeToken(res) {
    cookies.set('user', res.data, { path: '/' });
    window.location.href = '/feed';
  }

  // router to determine what page to display based on the URL
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp storeToken={storeToken} />
        </Route>
        <Route path="/">
          {!cookies.get('user') ? <Login /> : alert('logged in')}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/feed">
          {!cookies.get('user') ? <Login /> : alert('logged in')}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
