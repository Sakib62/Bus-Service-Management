import React from "react";
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom';
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
                <button onClick={ () => navigate('adminBus')} className="AdminButton">Bus</button>
                <button onClick={ () => navigate('adminTrips')} className="AdminButton">Trips</button>
                <button onClick={ () => navigate('adminBooking')} className="AdminButton">Booking</button>
                <button onClick={ () => navigate('adminPassenger')} className="AdminButton">Passenger</button>
                <button onClick={ () => navigate('adminEmployee')} className="AdminButton">Employee</button>
            </div>
        </div>
        <div className="admin-bus-image">
            <img src={greenline}/>
        </div>
    </div>
    )
}