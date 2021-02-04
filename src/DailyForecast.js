import React from "react";
import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="row">
        <ul className="col">
          <li>6°C</li>
          <li>
            <i className="fas fa-cloud"></i>
          </li>
          <li>Friday</li>
        </ul>

        <ul className="col">
          <li>6°C</li>
          <li>
            <i className="fas fa-cloud"></i>
          </li>
          <li>Friday</li>
        </ul>

        <ul className="col">
          <li>6°C</li>
          <li>
            <i className="fas fa-cloud-rain"></i>
          </li>
          <li>Friday</li>
        </ul>

        <ul className="col">
          <li>6°C</li>
          <li>
            <i className="far fa-snowflake"></i>
          </li>
          <li>Friday</li>
        </ul>

        <ul className="col">
          <li>6°C</li>
          <li>
            <i className="fas fa-cloud"></i>
          </li>
          <li>Friday</li>
        </ul>
      </div>
    </div>
  );
}
