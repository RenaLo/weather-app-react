import React from "react";
import "./App.css";
import Search from "./Search";
import CityData from "./CityData";
import WeatherData from "./WeatherData";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <section className="overview">
          <CityData />
          <WeatherData />
        </section>
        <Footer />
      </div>
    </div>
  );
}
