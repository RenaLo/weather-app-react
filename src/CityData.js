import React from "react";
import "./CityData.css";

export default function CityData(props) {
  return (
    <div className="CityData">
      <div className="row">
        <div className="col-6 date">
          {props.weekday}, {props.month} {props.day}
        </div>
        <div className="col-6 time">
          {props.hour}:{props.minutes}
        </div>
      </div>
      <div className="city">{props.city}</div>
    </div>
  );
}
