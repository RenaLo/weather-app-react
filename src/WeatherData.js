import React from "react";
import Temperature from "./Temperature";
import "./WeatherData.css";

export default function WeatherData() {
  let weatherData = {
    wind: 6,
    humidity: 80,
  };
  return (
    <div className="WeatherData row">
      <Temperature />
      <div className="col icon">
        <i className="far fa-snowflake"></i>
      </div>
      <div className="col description ">
        <ul>
          <li>
            <h1 className="iconDescription">Snow</h1>
          </li>
          <li>
            <div className="humidity">
              <span role="img" aria-label="Humidity">
                💧
              </span>
              Humidity: {weatherData.value}%
            </div>
          </li>
          <li>
            <div className="wind">
              {" "}
              <i className="fas fa-wind"></i> Wind: {weatherData.value}km/h
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
