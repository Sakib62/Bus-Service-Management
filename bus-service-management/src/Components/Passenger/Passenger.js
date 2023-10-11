import React from "react";
import Profile from "../Icons/profile.png";
import './Passenger.css';

export default function Booking(){
    return(
     <div className="Passenger-whole">
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
                <button className="PassengerButton">Passenger</button>
                <button className="AdminButton">Employee</button>
            </div>
        </div> 

        <div className="passenger-information">
            <h1>THis is Passenger</h1>
        </div>

      </div>
    )
}