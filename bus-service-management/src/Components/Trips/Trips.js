import React from "react";
import Profile from "../Icons/profile.png";
import './Trips.css';

export default function Trips(){
    return(
     <div className="Trips-whole">
        <div className="admin-home">
        <div className="admin-header">
            <h1>GreenLine</h1>
            <img src={Profile}/>
            <p>@admin</p>
        </div>

        <div className="admin-dashboard">
            <h1>Dashboard</h1>
            <button className="AdminButton">Bus</button>
            <button className="TripsButton">Trips</button>
            <button className="AdminButton">Booking</button>
            <button className="AdminButton">Passenger</button>
            <button className="AdminButton">Employee</button>
        </div>
        </div> 

        <div className="Trips-information">
            <h1>THis is Trips</h1>
        </div>
      </div>
    )
}