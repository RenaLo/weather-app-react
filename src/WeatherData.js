import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData row">
      <div className="col temperature">
        <ul>
          <li>
            {props.data.maxTemp}° / {props.data.minTemp}°
          </li>
          <li>
            <h1>
              {props.data.currentTemp}
              <sup className="tempUnit">° C | ° F</sup>
            </h1>
          </li>
          <li>Real feel: {props.data.realFeel}°</li>
        </ul>
      </div>
      <div className="col icon">
        <WeatherIcons code={props.data.icon} alt="Icon" />
      </div>
      <div className="col description">
        <ul>
          <li>
            <h3>{props.data.description}</h3>
          </li>
          <li>
            <div>
              <span role="img" aria-label="humidity">
                💧
              </span>
              Humidity: {props.data.humidiy}%
            </div>
          </li>
          <li>
            <div className="wind">
              <i className="fas fa-wind"></i> Wind: {props.data.wind}km/h
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
