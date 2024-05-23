// SeatBooking.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SeatBooking.css";
import { Navigate, useNavigate } from "react-router-dom";

function SeatBooking() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [journeyDetails, setJourneyDetails] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the data from your backend
    axios
      .get("http://localhost:3000/journeyDetails")
      .then((response) => {
        setJourneyDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching journey details:", error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  const seatPrice = journeyDetails.price; // Assuming each seat costs $10

  // Function to convert seat number to letter and number format (e.g., A1, B2, C3)
  const convertSeatNumber = (seatNumber) => {
    const rowLetter = String.fromCharCode(
      65 + Math.floor((seatNumber - 1) / 4)
    );
    const seatInRow = ((seatNumber - 1) % 4) + 1;
    return `${rowLetter}${seatInRow}`;
  };

  // Function to handle seat selection
  const handleSeatClick = (seatNumber) => {
    const newSelectedSeats = [...selectedSeats];
    //const convertedSeatNumber = convertSeatNumber(seatNumber);

    const seatIndex = newSelectedSeats.indexOf(seatNumber);

    if (seatIndex === -1) {
      newSelectedSeats.push(seatNumber);
    } else {
      newSelectedSeats.splice(seatIndex, 1);
    }

    setSelectedSeats(newSelectedSeats);
  };

  // Function to calculate total cost
  const calculateTotalCost = () => {
    return selectedSeats.length * seatPrice;
  };

  // Function to proceed to the next step
  const handleProceed = (event) => {
    event.preventDefault();

    // Calculate total cost
    const totalCost = calculateTotalCost();

    // Create data object with total cost and selected seats
    const data = {
      coach: journeyDetails.coach_no,
      source: journeyDetails.source,
      destination: journeyDetails.destination,
      dtime: journeyDetails.dtime,
      ddate: journeyDetails.ddate,
      price: journeyDetails.price,
      seats: selectedSeats.join(", "), // Convert array to a comma-separated string
      totalCost,
    };

    axios
      .put("http://localhost:3000/storedata2", data)
      .then((response) => {
        console.log(response);
        // Add logic to handle the response if needed
      })
      .catch((error) => {
        console.error("Error sending data to the backend:", error);
      });

    navigate("/seatbooking/passengerdetails");
  };

  return (
    <div className="seat-booking-container">
      <div className="banner">
        <h2>Bus Ticket System</h2>
      </div>
      <div className="top-left">
        <label>
          <b>Source : </b>
          <i>{journeyDetails.source}</i>
        </label>
        <label>
          <b>Date of Journey : </b>
          <i>{journeyDetails.ddate}</i>
        </label>
        <label>
          <b>Coach No : </b>
          <i>{journeyDetails.coach_no}</i>
        </label>
      </div>
      <div className="top-right">
        <label>
          <b>Destination : </b>
          <i>{journeyDetails.destination}</i>
        </label>
        <label>
          <b>Departure Time : </b>
          <i>{journeyDetails.dtime}</i>
        </label>
        <label>
          <b>Price : </b>৳<i>{journeyDetails.price}</i>
        </label>
      </div>
      <div className="seat-container">
        <img src="Steering.jpg" alt="Bus" className="bus-image" />
        {/* Loop to create 40 seat buttons */}
        {Array.from({ length: 10 }, (_, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {Array.from({ length: 4 }, (_, colIndex) => {
              const seatNumber = rowIndex * 4 + colIndex + 1;
              const convertedSeatNumber = convertSeatNumber(seatNumber);
              return (
                <button
                  key={convertSeatNumber}
                  className={`seat-button ${
                    selectedSeats.includes(convertedSeatNumber)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleSeatClick(convertedSeatNumber)}
                >
                  {convertedSeatNumber}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="additional-info">
        <div className="sakib">
          <button className="status-button available" disabled></button>
          <label>Available Seat</label>
        </div>
        <div className="sakib">
          <button className="status-button booked" disabled></button>
          <label>Selected Seat</label>
        </div>
        <div className="sakib">
          <button className="status-button selected" disabled></button>
          <label className="mpoo">Booked Seat</label>
        </div>
      </div>

      <div className="bottom-right">
        {/* Display selected seats */}
        {/* <div> */}
        <label className="fixit">
          <strong>Selected Seats : </strong>
        </label>
        {selectedSeats.length > 0 && (
          <div className="selected-seats-container">
            {selectedSeats.map((seat) => (
              <span key={seat}>{seat}</span>
            ))}
          </div>
        )}
        {/* </div> */}
        {/* Display total cost */}
        {/* <div> */}
        <label className="doit">
          <strong>Total Cost:</strong>
        </label>
        {selectedSeats.length > 0 && <span>৳{calculateTotalCost()}</span>}
        {/* </div> */}
        {/* Proceed button */}
        {selectedSeats.length > 0 && (
          <button onClick={handleProceed} className="eatit">
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

export default SeatBooking;
