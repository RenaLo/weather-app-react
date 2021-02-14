import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function HourlyForecastPreview(props) {
  return (
    <ul className="col">
      <li>{Math.round(props.data.main.temp)} °C</li>
      <li className="icon">
        <WeatherIcons code={props.data.weather[0].icon} />
      </li>
      <li>{new Date(props.data.dt * 1000).getHours()}:00</li>
    </ul>
  );
}
