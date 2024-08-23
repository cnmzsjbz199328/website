import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';  // Ensure you have your CSS file for styling

function Weather() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'https://api.open-meteo.com/v1/forecast';
        const params = {
            latitude: -35.0847,
            longitude: 138.5497,
            daily: 'weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,uv_index_clear_sky_max,precipitation_sum,precipitation_hours',
            timezone: 'auto'  // Ensure timezone handling as needed
        };

        axios.get(url, { params })
            .then(response => {
                setWeather(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching weather:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading weather data...</div>;
    if (error) return <div>Error fetching weather data!</div>;
    if (!weather) return <div>No weather data found.</div>;

    const weatherCode = weather.daily.weather_code[0];
    const iconUrl = weatherIconMap[weatherCode];
    const weatherDescription = weatherDescriptionMap[weatherCode];

    return (
        <div className="weather-container">
            <div className="weather-icon">
                {iconUrl && <img src={iconUrl} alt="Weather Icon" />}
                <p>{weatherDescription}</p>
            </div>
            {weather && (
                <div className="weather-info">
                    <p>Max Temp: {weather.daily.temperature_2m_max[0]}°C</p>
                    <p>Min Temp: {weather.daily.temperature_2m_min[0]}°C</p>
                    <p>UV Index: {weather.daily.uv_index_max[0]}</p>
                    <p>Precipitation: {weather.daily.precipitation_sum[0]} mm</p>
                </div>
            )}
        </div>
    );
}

const weatherIconMap = {
    "0": "https://openweathermap.org/img/wn/01d.png", // Clear sky
    "1": "https://openweathermap.org/img/wn/02d.png", // Few clouds
    "2": "https://openweathermap.org/img/wn/03d.png", // Scattered clouds
    "3": "https://openweathermap.org/img/wn/04d.png", // Broken clouds
    "45": "https://openweathermap.org/img/wn/50d.png", // Fog
    "61": "https://openweathermap.org/img/wn/10d.png", // Light rain
    "63": "https://openweathermap.org/img/wn/09d.png", // Heavy rain
    "95": "https://openweathermap.org/img/wn/11d.png", // Thunderstorm
    "71": "https://openweathermap.org/img/wn/13d.png", // Snow
    // Add additional mappings as necessary
};

const weatherDescriptionMap = {
    "0": "Clear sky",
    "1": "Few clouds",
    "2": "Scattered clouds",
    "3": "Broken clouds",
    "804": "Overcast clouds",
    "45": "Fog",
    "61": "Light rain",
    "63": "Heavy rain",
    "95": "Thunderstorm",
    "71": "Snow",
    // Continue for other codes...
};

export default Weather;
