import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

export default function Crops() {
  const { farmId } = useParams();
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const res = await API.get(`/crops/farm/${farmId}`);
        setCrops(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load crops");
      } finally {
        setLoading(false);
      }
    };

    fetchCrops();
  }, [farmId]);

  if (loading) return <p>Loading crops...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Farm Crops</h1>

      {crops.length === 0 && (
        <p className="text-gray-500">No crops found for this farm</p>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {crops.map((crop) => (
          <div
            key={crop._id}
            className="border rounded-lg p-4 shadow-sm"
          >
            <h3 className="text-lg font-semibold">{crop.cropName}</h3>
            <p className="text-sm text-gray-600">{crop.description}</p>
            <p className="text-xs mt-2">
              🌱 Planted: {new Date(crop.plantedAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
