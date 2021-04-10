import React from 'react';

const Newsletter = ({title, subtitle, description}) => {
    return (
        <div className="box widget news_letter mb30">
            <h2 className="widget-title"> {title} </h2>
            <p> {subtitle} </p>
            <div className="space-20"></div>
            <div className="signup_form">
                <form action="index.html">
                    <input className="signup" type="email" placeholder="Your email address" />
                    <input type="button" className="cbtn" value="sign up" />
                </form>
                <div className="space-10"></div>
                <p> {description} </p>
            </div>
        </div>
    );
};

export default Newsletter;