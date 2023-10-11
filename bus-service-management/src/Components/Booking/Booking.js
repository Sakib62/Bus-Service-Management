import React from "react";
import Profile from "../Icons/profile.png";
import './Booking.css';
import { useNavigate, Link } from "react-router-dom";

export default function Booking(){
    const navigate = useNavigate();

    return(
     <div className="booking-whole">
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
                <button className="BookingButton">Booking</button>
                <button  className="AdminButton"><Link to="/adminPassenger" className="admin-link">Passenger</Link></button>
                <button  className="AdminButton"><Link to="/adminEmployee" className="admin-link">Employee</Link></button>
            </div>
        </div> 

        <div className="booking-information">
            <h1>This is booking</h1>
        </div>
      </div>
    )
}