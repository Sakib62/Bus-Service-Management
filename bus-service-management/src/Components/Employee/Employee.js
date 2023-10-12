import React from "react";
import './Employee.css';
import Profile from "../Icons/profile.png";
import { useNavigate, Link } from "react-router-dom";

export default function Employee(){
    
    const navigate = useNavigate();

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
                <button  className="AdminButton"><Link to="/adminBus" className="admin-link">Bus</Link></button>
                <button  className="AdminButton"><Link to="/adminTrips" className="admin-link">Trips</Link></button>
                <button  className="AdminButton"><Link to="/adminBooking" className="admin-link">Booking</Link></button>
                <button  className="AdminButton"><Link to="/adminPassenger" className="admin-link">Passenger</Link></button>
                <button  className="EmployeeButton">Employee</button>
            </div>
        </div> 

        <div className="employee-information">
            <div className="employee-operation">
            <div className="employee-search-box">
                <input className="employee-search-input" type="text" placeholder="Search Employee"/>
                <button className="employee-search-button">Go</button>
            </div>
            <div className="employee-add-box">
                <button className="employee-add-box-button">Add New Employee</button>
            </div>
            </div>
            <div className="employee-div-table">            
                <table border="1" className="employee-table">
                    <capton className="employee-table-caption">Employee information</capton>
                     <tr className="employee-table-head">
                        <th className="employee-head-information">NID</th>
                        <th className="employee-head-information">Name</th>
                        <th className="employee-head-information">Position</th>
                        <th className="employee-head-information">Joining Year</th>
                        <th className="employee-head-information">Salary</th>
                        <th className="employee-head-information">Contact</th>
                        <th className="employee-head-information">Action</th>
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