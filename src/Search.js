import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import CityData from "./CityData";
import HourlyForecast from "./HourlyForecast";
import Loader from "react-loader-spinner";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function displayWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      currentTemp: Math.round(response.data.main.temp),
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      realFeel: Math.round(response.data.main.feels_like),
      humidiy: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function searchCity() {
    const apiKey = "0c0b6e7ec3cec2bccfeccef145911340";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showLocation(position) {
    const apiKey = "0c0b6e7ec3cec2bccfeccef145911340";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateLocation() {
    navigator.geolocation.getCurrentPosition(showLocation);
  }

  let form = (
    <form className="engine" onSubmit={handleSubmit}>
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={updateLocation}
      >
        <i className="fas fa-location-arrow"></i>
      </button>

      <input
        className="city-input"
        type="text"
        placeholder="Enter city name..."
        autoFocus="on"
        autoComplete="off"
        onChange={updateCity}
      />
      <button type="submit" className="btn btn-outline-dark search-button">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );

  if (weather.loaded) {
    return (
      <div className="Search">
        {form}
        <div className="overview">
          <CityData city={weather.city} />
          <WeatherData data={weather} />
          <br />
          <HourlyForecast />
        </div>
      </div>
    );
  } else {
    searchCity();
    return <Loader type="ThreeDots" color="#fda085" height={500} width={500} />;
  }
}
