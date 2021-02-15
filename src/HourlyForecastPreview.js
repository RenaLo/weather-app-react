import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function HourlyForecastPreview(props) {
  let celsius = Math.round(props.data.main.temp);
  let fahrenheit = Math.round((celsius * 9) / 5 + 32);

  return (
    <ul className="col">
      <li>{new Date(props.data.dt * 1000).getHours()}:00</li>
      <li className="icon">
        <WeatherIcons code={props.data.weather[0].icon} />
      </li>
      <li className="unit">
        {celsius}°C | {fahrenheit}°F
      </li>
    </ul>
  );
}
