import React from "react";
import Profile from "../Icons/profile.png";
import './Trips.css';
import { useNavigate } from "react-router-dom";

export default function Trips(){
    const navigate = useNavigate();

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

        <div className="trips-information">
            <div className="trips-operation">
            <div className="trips-search-box">
                <input className="trips-search-input" type="text" placeholder="Search Trips"/>
                <button className="trips-search-button">Go</button>
            </div>
            
            </div>
            <div className="trips-div-table">            
                <table className="trips-table">
                     <tr>
                        <th>Trip No.</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Date</th>
                        <th>Coach No.</th>
                        <th>Driver ID</th>
                        <th>Number of Passenger</th>
                
                     </tr>
                     <tr>
                        <td>1</td>
                        <td>Rafi</td>
                        <td>Driver</td>
                        <td>2018</td>
                        <td>30,000</td>
                        <td>0199999999</td>
                        <button>Edit</button>
                        <button>Delete</button>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td>Sakib</td>
                        <td>Manager</td>
                        <td>2019</td>
                        <td>50,000</td>
                        <td>0188888888</td>
                        <button>Edit</button>
                        <button>Delete</button>
                     </tr>
                     <tr>
                        <td>3</td>
                        <td>Mahir</td>
                        <td>Supervison</td>
                        <td>2020</td>
                        <td>10,000</td>
                        <td>01777777777</td>
                        <button>Edit</button>
                        <button>Delete</button>
                     </tr>
                </table>
            </div>
        </div>
      </div>
    )
}