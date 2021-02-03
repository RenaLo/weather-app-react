import React from "react";
import "./CityData.css";

export default function CityData() {
  let cityData = {
    weekday: "Friday",
    month: "January",
    day: 17,
    hour: 18,
    minutes: 30,
    city: "Vienna",
  };

  return (
    <div className="CityData">
      <div className="row">
        <div className="col-6 date">
          {cityData.weekday}, {cityData.month} {cityData.day}
        </div>
        <div className="col-6 time">
          {cityData.hour}:{cityData.minutes}
        </div>
      </div>
      <div className="city">{cityData.city}</div>
    </div>
  );
}
