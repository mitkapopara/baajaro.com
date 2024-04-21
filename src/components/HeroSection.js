import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../styles/HeroSection.css";

function HeroSection() {
  const [weather, setWeather] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(process.env.REACT_APP_API_KEY);

  const fetchWeather = useCallback(
    async (lat, lon) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
    [apiKey]
  ); // Make sure apiKey is included as a dependency

  useEffect(() => {
    const success = (position) => {
      fetchWeather(position.coords.latitude, position.coords.longitude);
    };

    const error = () => {
      console.error("Geolocation not supported or permission denied");
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, [fetchWeather]); // Include fetchWeather in the dependency array

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return "☀️";
      case "Clouds":
        return "☁️";
      case "Rain":
      case "Drizzle":
      case "Thunderstorm":
        return "🌧️";
      case "Snow":
        return "❄️";
      default:
        return "🌍";
    }
  };

  return (
    <div className="hero-section">
      <div className="weather-overlay">
        <h1>Hey, What's up!</h1>
        <button>See My Work</button>
        {weather && (
          <div className="weather-info">
            <span
              className="weather-icon"
              aria-label={`Weather Condition: ${weather.weather[0].main}`}
            >
              {getWeatherIcon(weather.weather[0].main)}
            </span>
            <span
              className="temperature"
              aria-label={`Temperature: ${Math.round(
                weather.main.temp
              )} Celsius`}
            >
              {Math.round(weather.main.temp)}°C
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
