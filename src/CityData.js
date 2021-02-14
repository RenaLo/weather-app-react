import React from "react";
import "./CityData.css";

export default function CityData(props) {
  let now = new Date();
  let hours = ("0" + now.getHours()).substr(-2);
  let minutes = ("0" + now.getMinutes()).substr(-2);
  let day = now.getDate();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[now.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];

  return (
    <div className="CityData">
      <div className="row">
        <div className="col-6 date">
          {weekday}, {month} {day}
        </div>
        <div className="col-6 time">
          {hours}:{minutes}
        </div>
      </div>
      <div className="city">{props.city}</div>
    </div>
  );
}
