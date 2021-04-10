import React from 'react';

const SignUpForm = () => {
    return (
        <div className="signup_form">
            <form action="index.html" method="post">
                <input className="signup" type="email" placeholder="Your email address" />
                <input type="button" className="cbtn" value="sign up" />
            </form>
            <p>We hate spam as much as you do</p>
        </div>
    );
};

export default SignUpForm;