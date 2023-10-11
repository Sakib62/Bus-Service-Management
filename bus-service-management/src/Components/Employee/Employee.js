import React from "react";
import './Employee.css';
import Profile from "../Icons/profile.png";

export default function Employee(){
    return(
     <div className="Employee-whole">
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
                <button className="EmployeeButton">Employee</button>
            </div>
        </div> 

        <div className="employee-information">
            <h1>This is Employee</h1>
        </div>

      </div>
    )
}