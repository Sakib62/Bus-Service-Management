import React from "react";
import {Routes, Route, useNavigate,Link} from 'react-router-dom';
import './Login.css';

import user_icon from '../Icons/person.png'
import email_icon from '../Icons/email.png'
import password_icon from '../Icons/password.png'

export default function Login(){

    const navigate = useNavigate();

    return(
     <div className="login-whole">
        <div className="login-container">
            <div className="login-header">
                <div className="login-header-text">
                    Login
                </div>
                <div className="login-header-underline"></div>
            </div>

            <div className="login-inputs">
                <div className="login-input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Name"/>
                </div>
                <div className="login-input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email ID"/>
                </div>
                <div className="login-input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            
            <div className="login-forgot-password">Forgot Password?<span> Click Here!</span></div>

            <div className="login-submit-container">
                <div className="login-submit"><Link to="/adminHome" className="login-link">Login</Link></div>
            </div>
        </div>
      </div>
    )
}