import React from "react";
import "./HourlyForecast.css";

export default function HourlyForecast() {
  return (
    <div className="HourlyForecast">
      <div className="row">
        <ul className="col">
          <li>6°C</li>
          <li>
            <i className="fas fa-cloud"></i>
          </li>
          <li>22:00</li>
        </ul>

        <ul className="col">
          <li>5°C</li>
          <li>
            <i className="fas fa-cloud"></i>
          </li>
          <li>01:00</li>
        </ul>

        <ul className="col">
          <li>5°C</li>
          <li>
            <i className="fas fa-cloud-rain"></i>
          </li>
          <li>04:00</li>
        </ul>

        <ul className="col">
          <li>4°C</li>
          <li>
            <i className="far fa-snowflake"></i>
          </li>
          <li>07:00</li>
        </ul>
        <ul className="col">
          <li>6°C</li>
          <li>
            <i className="fas fa-cloud"></i>
          </li>
          <li>10:00</li>
        </ul>
        <ul className="col">
          <li>8°C</li>
          <li>
            <i className="fas fa-cloud"></i>
          </li>
          <li>13:00</li>
        </ul>
      </div>
    </div>
  );
}
