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
  const [unit, setUnit] = useState("celsius");

  function displayWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      celsiusTemp: Math.round(response.data.main.temp),
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      realFeel: Math.round(response.data.main.feels_like),
      humidiy: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function searchCity() {
    const apiKey = "0c0b6e7ec3cec2bccfeccef145911340";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
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

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (weather.loaded) {
    return (
      <div className="Search">
        <form className="engine" onSubmit={handleSubmit}>
          <span className="tempUnit">
            <span onClick={showCelsius}>C</span> |{" "}
            <span onClick={showFahrenheit}>F</span>
          </span>
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

        <div className="overview">
          <CityData city={weather.city} />
          <WeatherData data={weather} unit={unit} />
          <br />
          <HourlyForecast city={weather.city} unit={unit} />
        </div>
      </div>
    );
  } else {
    searchCity();
    return <Loader type="ThreeDots" color="#fda085" height={500} width={500} />;
  }
}
