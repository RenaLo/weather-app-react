import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherData.css";

export default function WeatherData(props) {
  if (props.unit === "celsius") {
    return (
      <div className="WeatherData row">
        <div className="col temperature">
          <ul>
            <li>
              {props.data.maxTemp}°C / {props.data.minTemp}°C
            </li>
            <li>
              <h1>{props.data.celsiusTemp}°C</h1>
            </li>
            <li>Real feel: {props.data.realFeel}°C</li>
          </ul>
        </div>

        <div className="col">
          <ul>
            <li>
              <WeatherIcons code={props.data.icon} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="col description">
          <ul>
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
  } else {
    let fahrenheitTemp = Math.round((props.data.celsiusTemp * 9) / 5 + 32);
    let maxTemp = Math.round((props.data.maxTemp * 9) / 5 + 32);
    let minTemp = Math.round((props.data.minTemp * 9) / 5 + 32);
    let realFeel = Math.round((props.data.realFeel * 9) / 5 + 32);

    return (
      <div className="WeatherData row">
        <div className="col temperature">
          <ul>
            <li>
              {maxTemp}°F / {minTemp}°F
            </li>
            <li>
              <h1>{fahrenheitTemp}°F</h1>
            </li>
            <li>Real feel: {realFeel}°F</li>
          </ul>
        </div>

        <div className="col">
          <ul>
            <li>
              <WeatherIcons code={props.data.icon} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="col description">
          <ul>
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
}
