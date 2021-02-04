import React from "react";
import "./App.css";
import Search from "./Search";
import DailyForecast from "./DailyForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Vienna" />

        <DailyForecast />
        <Footer />
      </div>
    </div>
  );
}
