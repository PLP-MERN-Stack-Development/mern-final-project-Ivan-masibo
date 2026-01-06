import { useEffect, useState } from "react";

const API_KEY = "PASTE_YOUR_OPENWEATHER_API_KEY_HERE";

export default function GPSWeather({ onWeather }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("GPS not supported on this device");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
          );
          const data = await res.json();
          setWeather(data);
          if (onWeather) onWeather(data);
        } catch {
          setError("Failed to fetch weather data");
          if (onWeather) onWeather(null);
        }
      },
      () => {
        setError("GPS permission denied");
        if (onWeather) onWeather(null);
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-800 to-sky-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-3">🌦 Live Weather</h2>

      {error && <p className="text-red-300">{error}</p>}

      {!weather && !error && <p>Loading weather...</p>}

      {weather && (
        <div className="space-y-1 text-sky-100">
          <p><strong>Location:</strong> {weather.name}</p>
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
          <p><strong>Wind:</strong> {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
