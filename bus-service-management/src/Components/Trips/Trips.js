import React from "react";
import Profile from "../Icons/profile.png";
import './Trips.css';
import { useNavigate, Link } from "react-router-dom";

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
            <button  className="AdminButton"><Link to="/adminBus" className="admin-link">Bus</Link></button>
            <button  className="TripsButton">Trips</button>
            <button  className="AdminButton"><Link to="/adminBooking" className="admin-link">Booking</Link></button>
            <button  className="AdminButton"><Link to="/adminPassenger" className="admin-link">Passenger</Link></button>
            <button  className="AdminButton"><Link to="/adminEmployee" className="admin-link">Employee</Link></button>
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
                     <tr className="trips-table-head">
                        <th className="trips-head-information">Trip No.</th>
                        <th className="trips-head-information">Source</th>
                        <th className="trips-head-information">Destination</th>
                        <th className="trips-head-information">Coach No.</th>
                        <th className="trips-head-information">Driver ID</th>
                        <th className="trips-head-information">Number of Passenger</th>
                        <th className="trips-head-information">Action</th>
                     </tr>
                     <tr>
                        <td>1</td>
                        <td>Sylhet</td>
                        <td>Dhaka</td>
                        <td>1</td>
                        <td>1</td>
                        <td>20</td>
                        <button>Edit</button>
                        <button>Delete</button>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td>Chattogram</td>
                        <td>Feni</td>
                        <td>2</td>
                        <td>2</td>
                        <td>30</td>
                        <button>Edit</button>
                        <button>Delete</button>
                     </tr>
                     <tr>
                        <td>3</td>
                        <td>Dhaka</td>
                        <td>Sylhet</td>
                        <td>3</td>
                        <td>3</td>
                        <td>15</td>
                        <button>Edit</button>
                        <button>Delete</button>
                     </tr>
                </table>
            </div>
        </div>
      </div>
    )
}