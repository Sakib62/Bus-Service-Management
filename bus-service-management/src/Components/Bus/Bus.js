import React from "react";
import Profile from "../Icons/profile.png";
import './Bus.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

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
                <button className="AdminButton">Trips</button>
                <button className="AdminButton">Booking</button>
                <button className="AdminButton">Passenger</button>
                <button className="AdminButton">Employee</button>
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
                <table className="bus-table">
                     <tr>
                        <th>Bus Model</th>
                        <th>License No.</th>
                        <th>Manucfacturer</th>
                        <th>Capacity</th>
                        <th>Purchasing Year</th>
                        <th>Type</th>
                
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