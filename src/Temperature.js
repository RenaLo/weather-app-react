import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let temperature = { maxTemp: -1, minTemp: -5, currentTemp: -1, realFeel: -7 };
  return (
    <div className="col Temperature">
      <ul>
        <li>
          {temperature.maxTemp}° / {temperature.minTemp}°
        </li>
        <li>
          <h1>
            {temperature.currentTemp}
            <sup className="tempUnit">°C | °F</sup>
          </h1>
        </li>
        <li>Real feel: {temperature.realFeel}°</li>
      </ul>
    </div>
  );
}
