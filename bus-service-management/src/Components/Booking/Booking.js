import React from "react";
import Profile from "../Icons/profile.png";
import './Booking.css';

export default function Booking(){
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
                <button className="AdminButton">Bus</button>
                <button className="AdminButton">Trips</button>
                <button className="BookingButton">Booking</button>
                <button className="AdminButton">Passenger</button>
                <button className="AdminButton">Employee</button>
            </div>
        </div> 

        <div className="booking-information">
            <h1>This is booking</h1>
        </div>
      </div>
    )
}