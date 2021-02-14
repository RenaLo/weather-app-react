import React from "react";
import Temperature from "./Temperature";
import WeatherIcons from "./WeatherIcons";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData row">
      <div className="col temperature">
        <Temperature
          celsius={props.data.currentTemp}
          maxTempCelsius={props.data.maxTemp}
          minTempCelsius={props.data.minTemp}
          realFeelCelsius={props.data.minTemp}
        />
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
