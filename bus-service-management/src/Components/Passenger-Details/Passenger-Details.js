import React from "react";
import { Link } from "react-router-dom";
import './Passenger-Details.css';

export default function PassengerDetails() {
return (
    <div className="passenger-details">
        <div className="div">
        <div className="overlap">
            <button className="text-wrapper">Logout</button>
            
            <div className="text-wrapper-5">GreenLine Bus Lt.</div>
        </div>
        <div className="overlap-group">
            <div className="text-wrapper-6">Passenger Details</div>
        </div>
        <div className="div-wrapper">
            <button className="text-wrapper-7"><Link to="/chooseService" className="passenger-details-confirm">Confirm</Link></button>
        </div>
        
        <div className="name">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</div>
        <div className="gender">Gender&nbsp;&nbsp;&nbsp; :</div>
        <div className="phone">Phone&nbsp;&nbsp;&nbsp;&nbsp; :</div>
        <div className="NID">NID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</div>
        <div className="overlap-group-2">
            <div className="rectangle" />
            <input className="input" />
        </div>
        <div className="overlap-2">
            <div className="rectangle-2" />
            <input className="gender-2" />
        </div>
        <div className="overlap-3">
            <div className="rectangle-3" />
            <input className="phone-2" />
        </div>
        <div className="overlap-4">
            <div className="rectangle-4" />
            <input className="nid" />
        </div>
        <div className="overlap-5">
            <div className="flexcontainer">
            <p className="text">
                <span className="span">
                Sylhet - Dhaka
                <br />
                </span>
            </p>
            <p className="text">
                <span className="span">
                Thu, 10/12/2023,10:00 AM
                <br />
                </span>
            </p>
            <p className="text">
                <span className="span">Seat No(s) :&nbsp;&nbsp;C1, D1, D2</span>
            </p>
            </div>
            <div className="overlap-6">
            <div className="text-wrapper-8">Journey Details</div>
            </div>
        </div>
        </div>
    </div>
    );
};