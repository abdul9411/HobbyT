import React from 'react';
import { Helmet } from 'react-helmet';
import logo from "./logo.svg";
import logInStyle from './login.css';

function logIn() {
    const img = logInStyle.img;
    const form = logInStyle.form;
    const button = logInStyle.button;
    const div = logInStyle.div

    return (


        <div className="container">
            {/* edits the webpage title */}
            <Helmet>
                <title>HobbyT - login or sign up</title>
            </Helmet>
            <div className="row justify-content-start">
                {/* Left container  */}
                <div className="col-6">
                    <div className="left-container">
                        <img src={logo} alt="HobbyT logo" />

                        <h1>HobbyT</h1>
                        {/* Description */}

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                </div>
                {/* Right container  */}
                <div className="col-6">
                    <div className="lform-container">
                        <form action="/login" method="post">
                            <div className="mb-3">
                                <input className="form-control form-control-lg" type="text" name="Username" placeholder="Username" required />
                            </div>
                            <div className="mb-3">
                                <input className="form-control form-control-lg" type="password" name="Password" placeholder="Password" required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg">Log in</button>
                        </form>
                        <hr />
                        <form>
                            <a href="/signup"><button type="button" className="btn btn-primary btn-lg">Sign up</button></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default logIn;