import React from "react";
import Profile from "../Icons/profile.png";
import './Passenger.css';
import { useNavigate, Link} from "react-router-dom";

export default function Booking(){
    const navigate = useNavigate();

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
                <button  className="AdminButton"><Link to="/adminBus" className="admin-link">Bus</Link></button>
                <button  className="AdminButton"><Link to="/adminTrips" className="admin-link">Trips</Link></button>
                <button  className="AdminButton"><Link to="/adminBooking" className="admin-link">Booking</Link></button>
                <button  className="AdminButton">Passenger</button>
                <button  className="AdminButton"><Link to="/adminEmployee" className="admin-link">Employee</Link></button>
            </div>
        </div> 

        <div className="passenger-information">
            <h1>THis is Passenger</h1>
        </div>

      </div>
    )
}