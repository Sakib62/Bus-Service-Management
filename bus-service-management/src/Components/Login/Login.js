import React from "react";
import './Login.css';

import user_icon from '../Icons/person.png'
import email_icon from '../Icons/email.png'
import password_icon from '../Icons/password.png'

export default function Login(){
    return(
        <div className="container">
            <div className="header">
                <div className="header-text">
                    Login
                </div>
                <div className="header-underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Name"/>
                </div>
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email ID"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            
            <div className="forgot-password">Forgot Password?<span> Click Here!</span></div>

            <div className="submit-container">
                <div className="submit">Login</div>
            </div>
        </div>
    )
}