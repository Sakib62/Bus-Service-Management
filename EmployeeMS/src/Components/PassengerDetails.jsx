// PassengerDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PassengerDetails.css";
import jsPDF from "jspdf";
import { Navigate, useNavigate } from "react-router-dom";

function PassengerDetails() {
  const [name, setName] = useState("");
  const [nid, setNid] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const [journeyDetails, setJourneyDetails] = useState({});
  const [showGeneratePdfButton, setShowGeneratePdfButton] = useState(false);
  const [showConfirmButton, setShowConfirmButton] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the data from your backend
    axios
      .get("http://localhost:3000/journeyDetails2")
      .then((response) => {
        setJourneyDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching journey details:", error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleConfirmTicket = () => {
    // Validate inputs
    if (!name || !nid || !gender || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate NID (10 digits) and phone number (11 digits)
    const nidRegex = /^\d{10}$/;
    const phoneRegex = /^\d{11}$/;
    if (!nidRegex.test(nid)) {
      alert("NID must be a 10-digit number.");
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be an 11-digit number.");
      return;
    }

    // const data = {
    //     coach : journeyDetails.coach_no,
    //     source : journeyDetails.source,
    //     destination : journeyDetails.destination,
    //     dtime : journeyDetails.dtime,
    //     ddate : journeyDetails.ddate,
    //     price : journeyDetails.price,
    //     seats: journeyDetails.seats, // Convert array to a comma-separated string
    //     totalCost: journeyDetails.totalCost,
    //   };

    //to store passenger data
    const data = {
      name: name,
      nid: nid,
      gender: gender,
      phone: phone,
    };

    axios
      .put("http://localhost:3000/storepassenger", data)
      .then((response) => {
        console.log(response);
        // Add logic to handle the response if needed
      })
      .catch((error) => {
        console.error("Error sending data to the backend:", error);
      });

    setShowConfirmButton(true);

    // Add logic to send passenger details to the backend
    console.log("Confirming ticket with the following details:", {
      name,
      nid,
      gender,
      phone,
    });
  };

  const handleGeneratePdf = () => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Set font style and size
    pdf.setFont("helvetica");
    pdf.setTextColor(255, 0, 0); // Red

    // Add a banner at the top
    pdf.setFillColor(255, 20, 20); // Red background
    pdf.rect(0, 0, 210, 20, "F"); // Rectangle for the banner

    pdf.setTextColor(255, 255, 255); // White text
    pdf.setFontSize(16); // Set font size to 16
    pdf.text("Unique Service", 10, 15); // Text in the banner

    // Reset text color, font type, and font size to black and normal for the rest of the document
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(14);

    // Left half of the box
    pdf.text("Name: " + name, 20, 50);
    pdf.text("Coach: " + journeyDetails.coach_no, 20, 60);
    pdf.text("Departure Time: " + journeyDetails.dtime, 20, 70);
    pdf.text("Seats: " + journeyDetails.seats, 20, 80);

    // Right half of the box
    const today = new Date();
    // today.setDate(today.getDate() + 1);
    // Right half of the box
    pdf.text("Journey Date: " + journeyDetails.ddate, 140, 50);
    pdf.text("To: " + journeyDetails.destination, 140, 60);
    pdf.text("Issued On: " + today.toISOString().split("T")[0], 140, 70);
    pdf.text("Total Cost: " + journeyDetails.total_cost, 140, 80);

    // Save the PDF as a file
    pdf.save("Ticket.pdf");
    navigate("/");
  };

  const somework = () => {
    setShowGeneratePdfButton(true);
    //to store ticket data

    const today = new Date();
    //today.setDate(today.getDate() + 1);

    const tkct = {
      nid: nid,
      seat: journeyDetails.seats,
      coach: journeyDetails.coach_no,
      issue_date: today.toISOString().split("T")[0],
      date: journeyDetails.ddate,
      cost: journeyDetails.total_cost,
    };

    axios
      .post("http://localhost:3000/storeticket", tkct)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error sending data to the backend:", error);
      });
  };

  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <h2>Bus Ticket System</h2>
      </div>

      {/* Passenger and Journey Details Container */}
      <div className="details-container">
        {/* Left side - Passenger Information */}
        <div className="passenger-info">
          <h2 className="passenger-info-heading">Passenger Information</h2>
          <div className="form-group">
            <label htmlFor="name">
              <b>Name :</b>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nid">
              <b>NID :</b>
            </label>
            <input
              type="number"
              id="nid"
              value={nid}
              onInput={(e) => setNid(e.target.value)}
              pattern="\d{10}"
              placeholder="Enter 10-digit NID"
              required
            />
          </div>
          <div className="form-group">
            <label>
              <b>Gender:</b>
            </label>
            <div className="gender-options">
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                  required
                />
                <label htmlFor="male">
                  <i>Male</i>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                  required
                />
                <label htmlFor="female">
                  <i>Female</i>
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              <b>Phone :</b>
            </label>
            <input
              type="number"
              inputMode="numeric"
              id="phone"
              value={phone}
              onInput={(e) => setPhone(e.target.value)}
              pattern="\d{11}"
              placeholder="Enter 11-digit phone number"
              required
            />
          </div>
          <button onClick={handleConfirmTicket}>Proceed</button>
          {showConfirmButton && (
            <button onClick={somework} style={{ margin: "0 30px" }}>
              Confirm Information
            </button>
          )}
          {showGeneratePdfButton && (
            <button onClick={handleGeneratePdf}>Generate PDF</button>
          )}
        </div>

        {/* Vertical line */}
        <div className="vertical-line"></div>

        {/* Right side - Journey Details */}
        <div className="journey-details">
          <h2 className="journey-details-heading">Journey Details</h2>
          <p>
            <b>
              {journeyDetails.source} - {journeyDetails.destination}
            </b>
          </p>
          <p>
            {journeyDetails.ddate}, {journeyDetails.dtime}
          </p>
          <p>Coach : {journeyDetails.coach_no}</p>
          <p>Seats : {journeyDetails.seats}</p>
          <p>
            <b>Total cost: ৳{journeyDetails.total_cost}</b>
          </p>
          {/* ... (rest of the journey details code) */}
        </div>
      </div>
    </div>
  );
}

export default PassengerDetails;
