import React from "react";

import './style.css'
import Login from "./Components/Login/Login.js";
import AdminHome from "./Components/Admin-Home/Admin-Home.js";
import Bus from "./Components/Bus/Bus.js";
import Employee from "./Components/Employee/Employee.js";
import Booking from "./Components/Booking/Booking.js";
import Trips from "./Components/Trips/Trips.js";
import Passenger from "./Components/Passenger/Passenger.js";

export default function App(){
    return(
        <div>
            <Trips/>
        </div>
    )
}