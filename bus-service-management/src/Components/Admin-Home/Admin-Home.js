import React from "react";
import './Admin-Home.css';
import Profile from "../Icons/profile.png"
import greenline from "../Image/greenLine.jpeg"

export default function AdminHome(){
    return(
    <div className="admin-whole">
        <div className="admin-home">
            <div className="admin-header">
                <h1>GreenLine</h1>
                <img src={Profile}/>
                <p>@admin</p>
            </div>

            <div className="admin-dashboard">
                <h1>Dashboard</h1>
                <button className="AdminButton">Bus</button>
                <button className="AdminButton">Trips</button>
                <button className="AdminButton">Booking</button>
                <button className="AdminButton">Passenger</button>
                <button className="AdminButton">Employee</button>
            </div>
        </div>
        <div className="admin-bus-image">
            <img src={greenline}/>
        </div>
    </div>
    )
}