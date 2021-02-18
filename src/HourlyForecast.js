import React, { useState } from "react";
import axios from "axios";
import HourlyForecastPreview from "./HourlyForecastPreview";

import "./HourlyForecast.css";

export default function HourlyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  function handleDailyForecastResponse(response) {
    setHourlyForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === hourlyForecast.city.name) {
    return (
      <div className="HourlyForecast">
        <div className="row">
          {hourlyForecast.list.slice(0, 5).map(function (forecastItem) {
            return (
              <HourlyForecastPreview data={forecastItem} unit={props.unit} />
            );
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "0c0b6e7ec3cec2bccfeccef145911340";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleDailyForecastResponse);
    return null;
  }
}
