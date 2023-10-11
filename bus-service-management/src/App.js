import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './style.css'
import Login from "./Components/Login/Login";
import AdminHome from "./Components/AdminHome/AdminHome";
import Bus from "./Components/Bus/Bus";
import Employee from "./Components/Employee/Employee";
import Booking from "./Components/Booking/Booking";
import Trips from "./Components/Trips/Trips";
import Passenger from "./Components/Passenger/Passenger";
import NoMatch from "./Components/NoMatch/NoMatch";

export default function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="adminHome" element={<AdminHome/>} />  
              <Route path="adminBus" element={<Bus/>} />          
              <Route path="adminEmployee" element={<Employee/>} />
              <Route path="adminBooking" element={<Booking/>} />
              <Route path="adminTrips" element={<Trips/>} />
              <Route path="adminPassenger" element={<Passenger/>} />
              <Route path="*" element={<NoMatch/>} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}