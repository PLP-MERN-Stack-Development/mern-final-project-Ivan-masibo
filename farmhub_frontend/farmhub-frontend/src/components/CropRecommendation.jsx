import { useEffect, useState } from "react";

export default function CropRecommendation({ weather }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (!weather) return;

    const month = new Date().getMonth(); // 0–11
    const temp = weather.main.temp;
    const humidity = weather.main.humidity;

    const crops = [];

    // 🌽 MAIZE
    if (temp >= 18 && temp <= 30 && humidity >= 50) {
      crops.push({
        name: "Maize",
        reason: "Suitable temperature and moisture levels",
        planting: "Plant at onset of rains",
      });
    }

    // 🍅 TOMATOES
    if (temp >= 20 && temp <= 28 && humidity >= 60) {
      crops.push({
        name: "Tomatoes",
        reason: "Warm weather and moderate humidity",
        planting: "Seedlings after land preparation",
      });
    }

    // 🌾 WHEAT
    if (temp >= 12 && temp <= 22 && month <= 5) {
      crops.push({
        name: "Wheat",
        reason: "Cool season crop suitable for current climate",
        planting: "Direct sowing in rows",
      });
    }

    // 🥬 KALE
    if (temp >= 15 && temp <= 25) {
      crops.push({
        name: "Kales (Sukuma Wiki)",
        reason: "Thrives in mild temperatures",
        planting: "Transplant seedlings after 3 weeks",
      });
    }

    setRecommendations(crops);
  }, [weather]);

  return (
    <div className="bg-gradient-to-br from-green-800 to-sky-900 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">🌱 Crop Recommendations</h2>

      {recommendations.length === 0 && (
        <p className="text-sky-200">
          No suitable crops detected for current conditions.
        </p>
      )}

      <div className="space-y-4">
        {recommendations.map((crop, index) => (
          <div
            key={index}
            className="bg-green-900 p-4 rounded-lg border border-sky-600"
          >
            <h3 className="text-xl font-semibold">{crop.name}</h3>
            <p className="text-sky-200">
              <strong>Why:</strong> {crop.reason}
            </p>
            <p className="text-sky-200">
              <strong>Planting:</strong> {crop.planting}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
