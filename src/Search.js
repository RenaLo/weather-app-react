import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <button type="button" className="btn btn-outline-dark">
        <i className="fas fa-location-arrow"></i>
      </button>

      <input
        className="city-input"
        type="text"
        placeholder="Enter city name"
        autoFocus="on"
        autoComplete="off"
      />
      <button type="submit" className="btn btn-outline-dark search-button">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
