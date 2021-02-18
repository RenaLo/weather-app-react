import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <ul>
          <li>
            {props.maxTempCelsius}° / {props.minTempCelsius}°
          </li>
          <li>
            <h1>
              {props.celsius}
              <sup className="tempUnit">
                {"  "}
                °C |{"  "}
                <span onClick={showFahrenheit}> °F</span>
              </sup>
            </h1>
          </li>
          <li>Real feel: {props.realFeelCelsius}°</li>
        </ul>
      </div>
    );
  } else {
    let currentTemp = (props.celsius * 9) / 5 + 32;
    let maxTemp = (props.maxTempCelsius * 9) / 5 + 32;
    let minTemp = (props.minTempCelsius * 9) / 5 + 32;
    let realFeel = (props.realFeelCelsius * 9) / 5 + 32;

    return (
      <div className="Temperature">
        <ul>
          <li>
            {Math.round(maxTemp)}° / {Math.round(minTemp)}°
          </li>
          <li>
            <h1>
              {Math.round(currentTemp)}
              <sup className="tempUnit">
                {"  "}
                <span onClick={showCelsius}> °C </span> | {"  "}°F
              </sup>
            </h1>
          </li>
          <li>Real feel: {Math.round(realFeel)}°</li>
        </ul>
      </div>
    );
  }
}
