import { useEffect, useState } from "react";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Farms() {
  const { user } = useAuth();
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        // Fetch farms for logged-in user
        const res = await API.get("/farms"); // Backend can filter by user
        setFarms(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load farms");
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchFarms();
    }
  }, [user]);

  if (loading) return <p className="p-6 text-lg">Loading farms...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6 md:p-10 space-y-6">
      <h1 className="text-3xl font-bold mb-6">🌱 My Farms</h1>

      {farms.length === 0 && (
        <p className="text-gray-500">No farms found. Add a farm to get started.</p>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {farms.map((farm) => (
          <Link
            to={`/dashboard/${farm._id}/crops`}
            key={farm._id}
            className="bg-green-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{farm.farmName}</h3>
            <p className="text-gray-200">📍 {farm.location}</p>
            <p className="text-gray-300 mt-2 text-sm">Click to view crops</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
