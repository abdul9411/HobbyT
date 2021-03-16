import React from 'react';
import { Helmet } from 'react-helmet';


import SignUpStyle from "./signup.css";
import UseForm from "./useForm";
import Validate from "./validateInfo"

function signUp({submitForm}) {
    /* CSS module styles */
    const button = SignUpStyle.button;
    const div = SignUpStyle.div;
    const form = SignUpStyle.form;

    const { handleChange, values, handleSubmit, errors } = UseForm(submitForm, Validate);

    return (<div className="sform-container">
        <Helmet>
            <title>HobbyT - Signup</title>
        </Helmet>
        <h2>Create your account</h2>
        <form method="post" onSubmit={handleSubmit} >
            <div className="mb-3">
                <input
                    className="form-control form-control-lg"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="mb-3">
                <input
                    className="form-control form-control-lg"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="mb-3">
                <input
                    className="form-control form-control-lg"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="mb-3">
                <input
                    className="form-control form-control-lg"
                    type="password"
                    name="password2"
                    placeholder="Confirm password"
                    value={values.password2}
                    onChange={handleChange}
                />
                {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button type="submit" className="btn btn-primary btn-lg">Sign up</button>
        </form>
        <p>Already a member? <a href="/login"> Log in</a></p>
    </div>

    )
}

export default signUp;