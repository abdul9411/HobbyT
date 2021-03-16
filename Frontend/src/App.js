import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import ForgotPassword from "./components/forgotpassword/forgotpassword";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";

const MySwal = withReactContent(Swal)

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false);


  function submitForm(values) {
    setIsSubmitted(true);
    if (!isSubmitted) {
      // send user information to server to store it if there are no errors
      axios.post('http://localhost:3001/api/auth/register',
        {
          name: values.username,
          password: values.password
        })
        // if registration is successful, display success message and redirect to login page
        .then(function (response) {
          MySwal.fire({
            icon: 'success',
            title: 'Account created successfully',
            didClose: () => {
              window.location = '/login';
            }
          })
        })
        // if there is an error, display an error message and redirect to signup page
        .catch(function (error) {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username already taken',
            didClose: () => {
              window.location = '/signup';
            }
          })
        })
    }
  }

  return (
    <Router>
      <Switch>
        <Route path="/signup">
          {!isSubmitted ? <SignUp submitForm={submitForm} /> : null}
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
