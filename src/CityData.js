import React from "react";
import Datetime from "react-datetime";
import "./CityData.css";

export default function CityData(props) {
  function forecastTime(timestamp) {
    let now = new Date(timestamp);
    let hours = ("0" + now.getHours()).substr(-2);
    let minutes = ("0" + now.getMinutes()).substr(-2);
  }

  return (
    <div className="CityData">
      <div className="row">
        <div className="col-6 date">
          {props.weekday}, {props.month} {props.day}
        </div>
        <div className="col-6 time">
          {hours}:{minutes}
        </div>
      </div>
      <div className="city">{props.city}</div>
    </div>
  );
}
