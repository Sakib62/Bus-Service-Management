import React from "react";
import SteeringPic from "../Image/Steering.jpg"
import SeatPic from "../Image/Seat.png"
import greenSeat from "../Image/greenSeat.png"
import redSeat from "../Image/redSeat.png"
import './Available-Trip.css';

export default function AvailableTrip() {
  return (
    <div className="search-buses">
      <div className="div">
        <div className="overlap-group">
          <button className="text-wrapper">Logout</button>
          {/* <div className="text-wrapper-2">Login</div>
          <div className="text-wrapper-3">Home</div>
          <div className="text-wrapper-4">Register</div> */}
          <div className="text-wrapper-5">GreenLine</div>
        </div>
        <div className="text-wrapper-6">Starting Point : Sylhet</div>
        <div className="text-wrapper-7">Ending Point : Dhaka</div>
        <div className="text-wrapper-8">Journey Date : 10/12/2023</div>
        <div className="text-wrapper-9">Departure Time : 10:00AM</div>
        <div className="text-wrapper-10">Arrival Time : 05:00PM</div>
        <div className="overlap">
          <div className="text-wrapper-11">Available : 32</div>
          <div className="text-wrapper-12">Fare : 600</div>
        </div>
        <div className="overlap-2">
          <img className="seat" alt="Seat" src={SeatPic} />
          <img className="img" alt="Seat" src={SeatPic} />
          <img className="seat-2" alt="Seat" src={SeatPic} />
          <img className="seat-3" alt="Seat" src={SeatPic} />
          <img className="seat-4" alt="Seat" src={SeatPic} />
          <div className="overlap-3">
            <img className="seat-5" alt="Seat" src={SeatPic} />
            <img className="seat-6" alt="Seat" src={SeatPic} />
          </div>
          <div className="overlap-4">
            <img className="seat-7" alt="Seat" src={SeatPic} />
            <img className="seat-5" alt="Seat" src={SeatPic} />
          </div>
          <img className="seat-8" alt="Seat" src={SeatPic} />
          <img className="seat-9" alt="Seat" src={SeatPic} />
          <div className="overlap-5">
            <img className="seat-7" alt="Seat" src={greenSeat} />
            <img className="seat-5" alt="Seat" src={SeatPic} />
          </div>
          <img className="seat-10" alt="Seat" src={SeatPic} />
          <div className="overlap-6">
            <img className="seat-11" alt="Seat" src={SeatPic} />
            <img className="seat-5" alt="Seat" src={SeatPic} />
          </div>
          <img className="seat-12" alt="Seat" src={SeatPic} />
          <div className="overlap-7">
            <img className="seat-11" alt="Seat" src={SeatPic} />
            <img className="seat-5" alt="Seat" src={SeatPic} />
          </div>
          <img className="seat-13" alt="Seat" src={SeatPic} />
          <img className="seat-14" alt="Seat" src={SeatPic} />
          <img className="seat-15" alt="Seat" src={SeatPic} />
          <img className="seat-16" alt="Seat" src={SeatPic} />
          <img className="seat-17" alt="Seat" src={SeatPic} />
          <img className="seat-18" alt="Seat" src={SeatPic} />
          <img className="seat-19" alt="Seat" src={SeatPic} />
          <img className="seat-20" alt="Seat" src={SeatPic} />
          <img className="seat-21" alt="Seat" src={greenSeat} />
          <img className="seat-22" alt="Seat" src={greenSeat} />
          <img className="seat-23" alt="Seat" src={SeatPic} />
          <img className="seat-24" alt="Seat" src={SeatPic} />
          <img className="seat-25" alt="Seat" src={SeatPic} />
          <img className="steering" alt="Steering" src={SteeringPic} />
        </div>
        <img className="seat-26" alt="Seat" src={SeatPic} />
        <img className="seat-27" alt="Seat" src={redSeat} />
        <img className="seat-28" alt="Seat" src={greenSeat} />
        <div className="available-seat">Available&nbsp;&nbsp;seat</div>
        <div className="text-wrapper-13">Booked seat</div>
        <div className="text-wrapper-14">Selected seat</div>
        <div className="overlap-8">
          <div className="text-wrapper-15">Seats</div>
          <div className="text-wrapper-16">Fare</div>
          <div className="text-wrapper-17">Class</div>
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper-18">Total : 1800</div>
        </div>
        <div className="overlap-9">
          <div className="text-wrapper-19">Continue</div>
        </div>
      </div>
    </div>
  );
};