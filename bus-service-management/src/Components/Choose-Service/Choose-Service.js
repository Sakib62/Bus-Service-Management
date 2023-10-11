import React from "react";
import BusPic from "../Image/busPic.jpg"
import './Choose-Service.css';

export default function ChooseService() {
    return (
      <div className="home-page">
      <div className="overlap">
        <button className="text-wrapper">Logout</button>
        <div className="text-wrapper-4">GreenLine</div>
      </div>
      <div className="overlap-group">
        <div className="from" />
        <input className="input" placeholder="Enter City"/>
      </div>
      <div className="overlap-2">
        <div className="to" />
        <input className="to-2" placeholder="Enter City"/>
      </div>
      <div className="overlap-3">
        <div className="div-2" />
        <input className="text" type="date" placeholder="Pick a date"/>
      </div>
      <div className="overlap-4">
        <div className="div-2" />
        <input className="text" type="time"/>
      </div>
      
      <div className="text-wrapper-5">From</div>
      <div className="text-wrapper-6">To</div>
      <div className="text-wrapper-7">Date of Journey</div>
      <div className="text-wrapper-8">Time</div>
      <div className="overlap-group-2">
        <div className="search-buses" />
        <button className="text-wrapper-9">Search</button>
      </div>
      <img className="buspic" alt="Buspic" src={BusPic} />
    </div>
  );
}