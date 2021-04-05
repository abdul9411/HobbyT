import React, {
  useState
} from 'react';
import {
  Helmet
} from 'react-helmet';
import axios from 'axios';

import SignUpStyle from "./signup.css";

function SignUp({
  storeToken
}) {
  /* CSS module styles */
  const button = SignUpStyle.button;
  const div = SignUpStyle.div;
  const form = SignUpStyle.form;

  // Checks if the form has errors or not to determine whether to post the request to server or show errors
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  // initial state of User input
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    errors: {
      username: '',
      email: '',
      password: '',
      password2: '',
      DuplicateUser: ''
    }
  });


  function handleChange(event) {
    // Changes the value of the field that the user edits
    const {
      name,
      value
    } = event.target
    setValues(preValues => {
      return {
        ...preValues,
        [name]: value
      }
    })

    // error validation to determine what kind of error messsage to display if some input is invalid
    switch (name) {
      case 'username':
        values.errors.DuplicateUser = '';
        values.errors.username =
          value.length < 3 ?
          'username must be at least 3 characters long!' :
          '';
        break;
      case 'email':
        values.errors.email = !/\S+@\S+\.\S+/.test(values.email) ?
          'Email address is invalid' :
          '';
        break;
      case 'password':
        values.errors.password =
          value.length < 6 ?
          'Password must be atleast 6 characters long!' :
          '';
        break;
      case 'password2':
        values.errors.password2 =
          value !== values.password ?
          'Passwords do not match' :
          '';
        break;
      default:
        break;
    }

  }

  // Checks if all inputs are valid and does a post request if it is otherwise it does not post the request to server
  function handleSubmit(event) {
    event.preventDefault();

    const valid = validateForm(values.errors);
    if (valid) {
      axios.post('http://localhost:3001/api/auth/register', {
        name: values.username,
        password: values.password
      }).then(
        response => {
          storeToken(response);
        },
        error => {
          setValues(preValues => {
            return ({
              ...preValues,
              errors: {
                DuplicateUser: 'Username already exists, Please enter a new username'
              }
            })
          })
        }
      )
    }
  }

  return ( < div className = "sform-container" >

      {
        /* Edits title of the page */ } <
      Helmet >
      <
      title > HobbyT - Signup < /title> <
      /Helmet>

      {
        /* Sign up page contents */ } <
      h2 className = "form-header" > Create your account < /h2> <
      form method = "post"
      onSubmit = {
        handleSubmit
      } >
      <
      div className = "mb-3" >
      <
      input className = "form-control form-control-lg"
      type = "text"
      name = "username"
      placeholder = "Username"
      value = {
        values.username
      }
      onChange = {
        handleChange
      }
      required /
      > {
        values.errors.username && < p > {
          values.errors.username
        } < /p>} {
          values.errors.DuplicateUser && < p > {
              values.errors.DuplicateUser
            } < /p>} <
            /div> <
            div className = "mb-3" >
            <
            input
          className = "form-control form-control-lg"
          type = "email"
          name = "email"
          placeholder = "Email"
          value = {
            values.email
          }
          onChange = {
            handleChange
          }
          required
            /
            > {
              values.errors.email && < p > {
                values.errors.email
              } < /p>} <
              /div> <
              div className = "mb-3" >
              <
              input
              className = "form-control form-control-lg"
              type = "password"
              name = "password"
              placeholder = "Password"
              value = {
                values.password
              }
              onChange = {
                handleChange
              }
              required /
              > {
                values.errors.password && < p > {
                  values.errors.password
                } < /p>} <
                /div> <
                div className = "mb-3" >
                <
                input
                className = "form-control form-control-lg"
                type = "password"
                name = "password2"
                placeholder = "Confirm password"
                value = {
                  values.password2
                }
                onChange = {
                  handleChange
                }
                required /
                > {
                  values.errors.password2 && < p > {
                    values.errors.password2
                  } < /p>} <
                  /div> <
                  button type = "submit"
                  className = "btn btn-primary btn-lg" > Sign up < /button> <
                  /form> <
                  p > Already a member ? < a href = "/login" > Log in < /a></p >
                  <
                  /div>

                )
              }

              export default SignUp;
