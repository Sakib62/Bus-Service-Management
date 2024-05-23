import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ServiceSelection.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Navigate, useNavigate } from 'react-router-dom';

function ServiceSelection() {

  const navigate = useNavigate()
  
  const [sources, setSources] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [departureTimes, setDepartureTimes] = useState([]);
  const [selectedDepartureTime, setSelectedDepartureTime] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // const today = new Date();
    // const next6Days = new Date();
    // next6Days.setDate(today.getDate() + 6);

    // document.getElementById('journeyDate').setAttribute('min', today.toISOString().split('T')[0]);
    // document.getElementById('journeyDate').setAttribute('max', next6Days.toISOString().split('T')[0]);
    // Fetch sources from the backend
    axios.get('http://localhost:3000/sources')
      .then(response => {setSources(response.data); console.log(response.data);})
      .catch(error => console.error('Error fetching sources:', error));

    // Fetch destinations from the backend
    axios.get('http://localhost:3000/destinations')
      .then(response => setDestinations(response.data))
      .catch(error => console.error('Error fetching destinations:', error));
  }, []);

  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
    // Fetch destinations based on the selected source
    axios.get(`http://localhost:3000/destinations?source=${event.target.value}`)
      .then(response => setDestinations(response.data))
      .catch(error => console.error('Error fetching destinations:', error));
  };

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
    // Fetch departure times based on the selected source and destination
    axios.get(`http://localhost:3000/departureTimes?source=${selectedSource}&destination=${event.target.value}`)
      .then(response => setDepartureTimes(response.data))
      .catch(error => console.error('Error fetching departure times:', error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Adjust the date to account for the UTC conversion
    const adjustedDate = new Date(journeyDate);
    adjustedDate.setDate(journeyDate.getDate() + 1);
  
    // Handle form submission, e.g., send data to the backend for processing
    const data = {
      selectedSource,
      selectedDestination,
      selectedDepartureTime,
      journeyDate: adjustedDate.toISOString().split('T')[0],
    };
  
    axios.post('http://localhost:3000/storedata', data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      navigate('/seatbooking');
  };
  

  return (
    <div>
      <div className="banner">
      <button className='employee' onClick={() => {navigate('/employee_login')}}>
            Employee
          </button>
        <h2 className='admin'>Bus Ticket Booking</h2>
          <button className='mhr' onClick={() => {navigate('/adminlogin')}}>
            Admin
          </button>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="source"><strong>From</strong></label>
          <select id="source" name="source" value={selectedSource} onChange={handleSourceChange}>
            <option value="">Select Source</option>
  {/* key={source.SER_coach_no} */}
            {sources.map(source => (
              <option  value={source.source}>{source.source}</option>
            ))}
          </select>
          {/* key={destination.SER_coach_no} */}
          <label htmlFor="destination"><strong>To</strong></label>
          <select id="destination" name="destination" value={selectedDestination} onChange={handleDestinationChange}>
            <option value="">Select Destination</option>
            {destinations.map(destination => (
              <option  value={destination.destination}>{destination.destination}</option>
            ))}
          </select>
          {/* key={time.SER_coach_no} */}
          <label htmlFor="departureTime"><strong>Departure Time</strong></label>
          <select id="departureTime" name="departureTime" value={selectedDepartureTime} onChange={(e) => setSelectedDepartureTime(e.target.value)}>
            <option value="">Select Departure Time</option>
            {departureTimes.map(time => (
              <option  value={time.time}>{time.time}</option>
            ))}
          </select>

          {/* <label htmlFor="journeyDate">Date of Journey</label> */}
          {/* <input type="date" id="journeyDate" name="journeyDate" value={journeyDate} onChange={(e) => setJourneyDate(e.target.value)} min="" max="" required /> */}
          <label htmlFor="journeyDate"><strong>Date of Journey</strong></label>
          <div className="date-picker-container">
            <DatePicker
              selected={journeyDate}
              onChange={(date) => setJourneyDate(date)}
              minDate={new Date()}
              maxDate={new Date().setDate(new Date().getDate() + 6)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Pick a Date"
            />
            {/* <span className="calendar-icon">📅</span> */}
          </div>

          <div className="error">{error}</div>

          <button type="submit"><strong>Search</strong></button>
        </form>
      </div>

    </div>
  );
}

export default ServiceSelection;