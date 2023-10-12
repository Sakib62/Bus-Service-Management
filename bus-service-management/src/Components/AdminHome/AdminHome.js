import React from "react";
import {Routes, Route, useNavigate, Outlet, Link} from 'react-router-dom';
import './AdminHome.css';
import Profile from "../Icons/profile.png"
import greenline from "../Image/greenLine.jpeg"

export default function AdminHome(){
    const navigate = useNavigate();

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
                <button  className="AdminButton"><Link to="/adminBus" className="admin-link">Bus</Link></button>
                <button  className="AdminButton"><Link to="/adminTrips" className="admin-link">Trips</Link></button>
                <button  className="AdminButton"><Link to="/adminBooking" className="admin-link">Booking</Link></button>
                <button  className="AdminButton"><Link to="/adminPassenger" className="admin-link">Passenger</Link></button>
                <button  className="AdminButton"><Link to="/adminEmployee" className="admin-link">Employee</Link></button>
                <button  className="AdminButton"><Link to="/" className="admin-link">Log Out</Link></button>
            </div>
        </div>
        <div className="admin-bus-image">
            <img src={greenline}/>
        </div>
    </div>
    )
}