import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For dynamic farmId
import { useAuth } from "../context/AuthContext";
import AIAgent from "../components/AIAgent";
import GPSWeather from "../components/GPSWeather";
import CropRecommendation from "../components/CropRecommendation";
import CropDiseaseScanner from "../components/CropDiseaseScanner";
import { saveNote, getNotes } from "../services/noteService";
import API from "../api/axios";

export default function Dashboard() {
  const { user } = useAuth();
  const { farmId } = useParams(); // Get farmId from URL
  const [notes, setNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);
  const [weather, setWeather] = useState(null);
  const [crops, setCrops] = useState([]);
  const [livestock, setLivestock] = useState([]);

  // Fetch farm crops and livestock
  useEffect(() => {
    if (!farmId) return;

    const fetchFarmData = async () => {
      try {
        const cropsRes = await API.get(`/farms/${farmId}/crops`);
        const livestockRes = await API.get(`/farms/${farmId}/livestock`);
        setCrops(cropsRes.data);
        setLivestock(livestockRes.data);
      } catch (err) {
        console.error("Failed to fetch farm data:", err);
      }
    };

    fetchFarmData();
  }, [farmId]);

  // Fetch notes per farm
  useEffect(() => {
    if (farmId) {
      getNotes(farmId)
        .then(setSavedNotes)
        .catch(console.error);
    }
  }, [farmId]);

  const handleSaveNote = async () => {
    if (!notes.trim()) return;
    await saveNote(farmId, notes); // Notes linked to farm
    setNotes("");
    getNotes(farmId).then(setSavedNotes).catch(console.error);
  };

  return (
    <Layout>
      <div className="p-6 md:p-10 space-y-10">

        {/* Header */}
        <header className="bg-gradient-to-r from-green-800 to-sky-700 p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Welcome back, {user?.name} 🌱
          </h1>
          <p className="mt-2 text-sky-100 font-medium">
            Smart farming insights powered by AI & GPS
          </p>
        </header>

        {/* Top Widgets: Weather + Crop Recommendation + Disease Scanner */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GPSWeather onWeather={setWeather} />
            {weather && <CropRecommendation weather={weather} />}
          </div>

          <div>
            <CropDiseaseScanner />
          </div>
        </section>

        {/* Farm Calendar */}
        <section className="bg-sky-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-3">📅 Farm Calendar</h2>
          <ul className="list-disc ml-6 space-y-1 text-white">
            <li>Plow Field – Jan 7</li>
            <li>Plant Maize – Jan 10</li>
            <li>Check Irrigation – Jan 12</li>
          </ul>
        </section>

        {/* Crops & Livestock */}
        <section className="bg-green-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-3">🌾 Crops</h2>
          {crops.length === 0 ? (
            <p className="text-gray-200">No crops found for this farm.</p>
          ) : (
            <ul className="list-disc ml-6 space-y-1 text-white">
              {crops.map((crop) => (
                <li key={crop._id}>
                  {crop.cropName} – {crop.area} acres
                </li>
              ))}
            </ul>
          )}

          <h2 className="text-2xl font-bold mb-3 mt-6">🐄 Livestock</h2>
          {livestock.length === 0 ? (
            <p className="text-gray-200">No livestock found for this farm.</p>
          ) : (
            <ul className="list-disc ml-6 space-y-1 text-white">
              {livestock.map((animal) => (
                <li key={animal._id}>
                  {animal.name} – {animal.count} head
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* AI Agent + Notes */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-800 to-sky-800 p-6 rounded-xl shadow-lg">
            <AIAgent />
          </div>
          {/* AI Chat Section */}
<section className="bg-gradient-to-br from-green-700 to-sky-800 p-6 rounded-xl shadow-lg mt-6">
  <h2 className="text-2xl font-bold mb-3 text-white">💬 AI Chat</h2>
  <AIChat />
</section>


          <div className="bg-green-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-3">📝 Farm Notes</h2>
            <textarea
              className="w-full p-3 rounded-lg text-black min-h-[150px] resize-none"
              placeholder="Record crop health, animal conditions, or reminders..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <button
              onClick={handleSaveNote}
              className="mt-3 bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-lg font-semibold text-white transition"
            >
              Save Note
            </button>

            <ul className="mt-4 space-y-2 max-h-64 overflow-y-auto">
              {savedNotes.map((note) => (
                <li
                  key={note._id}
                  className="bg-green-900 p-3 rounded-lg text-white break-words"
                >
                  {note.content}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}

<AIChat />
        