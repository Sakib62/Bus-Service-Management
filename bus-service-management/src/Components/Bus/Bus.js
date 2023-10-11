import React from "react";
import Profile from "../Icons/profile.png";
import './Bus.css';

export default function Bus(){
    return(
     <div className="bus-whole">
        <div className="admin-home">
            <div className="admin-header">
                <h1>GreenLine</h1>
                <img src={Profile}/>
                <p>@admin</p>
            </div>

            <div className="admin-dashboard">
                <h1>Dashboard</h1>
                <button className="BusButton">Bus</button>
                <button className="AdminButton">Trips</button>
                <button className="AdminButton">Booking</button>
                <button className="AdminButton">Passenger</button>
                <button className="AdminButton">Employee</button>
            </div>
        </div> 

        <div className="bus-information">
            <h1>This is bus</h1>
        </div>
      </div>
    )
}