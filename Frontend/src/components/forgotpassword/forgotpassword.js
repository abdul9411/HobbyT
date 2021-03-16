import React from 'react';
import { Helmet } from 'react-helmet';
import ForgotPasswordStyle from './forgotpassword.css'

function forgotPassword() {
    const button = ForgotPasswordStyle.button;
    const div = ForgotPasswordStyle.div;
    const form = ForgotPasswordStyle.form;

    return (
        <div class="PageContainer">
            <Helmet>
                <title>Forgot Password</title>
            </Helmet>

            <h1>Find your HobbyT account</h1>
            <form id="forgotpasswordform" action="/forgotPassword" method="post">
                <div className="mb-3">
                    <label for="information" className="form-label">Enter your email or username</label>
                    <input id="smaller" type="text" className="form-control form-control-sm" name="information" required/>
                </div>
                <button type="submit" id="smallbtn" className="btn btn-primary btn-md" name="button">Reset Password</button>
            </form>
        </div>
    )
}

export default forgotPassword;
