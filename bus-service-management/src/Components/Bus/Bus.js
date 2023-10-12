import React from "react";
import Profile from "../Icons/profile.png";
import './Bus.css';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';

export default function Bus(){
    const navigate = useNavigate();
    
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
                <button  className="AdminButton"><Link to="/adminTrips" className="admin-link">Trips</Link></button>
                <button  className="AdminButton"><Link to="/adminBooking" className="admin-link">Booking</Link></button>
                <button  className="AdminButton"><Link to="/adminPassenger" className="admin-link">Passenger</Link></button>
                <button  className="AdminButton"><Link to="/adminEmployee" className="admin-link">Employee</Link></button>
            </div>
        </div> 

        <div className="bus-information">
            <div className="bus-operation">
            <div className="bus-search-box">
                <input className="bus-search-input" type="text" placeholder="Search Bus"/>
                <button className="bus-search-button">Go</button>
            </div>
            <div className="bus-add-box">
                <button className="bus-add-box-button">Add New Bus</button>
            </div>
            </div>
            <div className="bus-div-table">            
                <table border="1" className="bus-table">
                     <tr className="bus-table-head">
                        <th className="bus-head-information">Bus Model</th>
                        <th className="bus-head-information">License No.</th>
                        <th className="bus-head-information">Manucfacturer</th>
                        <th className="bus-head-information">Capacity</th>
                        <th className="bus-head-information">Purchasing Year</th>
                        <th className="bus-head-information">Type</th>
                        <th className="bus-head-information">Action</th>
                
                     </tr>
                     <tr>
                        <td>A</td>
                        <td>1</td>
                        <td>Rafi</td>
                        <td>40</td>
                        <td>2015</td>
                        <td>AC</td>
                        <button>Edit</button>
                        <button>Delete</button>
                     </tr>
                     <tr>
                        <td>B</td>
                        <td>2</td>
                        <td>Sakib</td>
                        <td>40</td>
                        <td>2015</td>
                        <td>AC</td>
                        <button>Edit</button>
                        <button>Delete</button>
                     </tr>
                     <tr>
                        <td>C</td>
                        <td>3</td>
                        <td>Mahir</td>
                        <td>40</td>
                        <td>2015</td>
                        <td>AC</td>
                        <button>Edit</button>
                        <button>Delete</button>
                     </tr>
                </table>
            </div>
        </div>
      </div>
    )
}