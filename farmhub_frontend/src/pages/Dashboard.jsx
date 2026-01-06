import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import AIAgent from "../components/AIAgent";
import GPSWeather from "../components/GPSWeather";
import CropRecommendation from "../components/CropRecommendation";
import CropDiseaseScanner from "../components/CropDiseaseScanner";
import { saveNote, getNotes } from "../services/noteService";

export default function Dashboard() {
  const { user } = useAuth();
  const [notes, setNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);
  const [weather, setWeather] = useState(null);

  // Fetch saved notes for logged-in user
  useEffect(() => {
    if (user) {
      getNotes(user.name).then(setSavedNotes);
    }
  }, [user]);

  const handleSaveNote = async () => {
    if (!notes.trim()) return;
    await saveNote(user.name, notes);
    setNotes("");
    getNotes(user.name).then(setSavedNotes);
  };

  return (
    <Layout>
      <div className="p-6 md:p-10 space-y-10">

        {/* Header */}
        <div className="bg-gradient-to-r from-green-800 to-sky-700 p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Welcome back, {user?.name} 🌱
          </h1>
          <p className="mt-2 text-sky-100 font-medium">
            Smart farming insights powered by AI & GPS
          </p>
        </div>

        {/* Top Widgets: Weather + Crop Recommendation + Disease Scanner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Weather + Crop Recommendation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GPSWeather onWeather={setWeather} />
            {weather && <CropRecommendation weather={weather} />}
          </div>

          {/* Crop Disease Scanner */}
          <CropDiseaseScanner />
        </div>

        {/* Farm Calendar */}
        <div className="bg-sky-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-3">📅 Farm Calendar</h2>
          <ul className="list-disc ml-6 space-y-1 text-white">
            <li>Plow Field – Jan 7</li>
            <li>Plant Maize – Jan 10</li>
            <li>Check Irrigation – Jan 12</li>
          </ul>
        </div>

        {/* Active Crops / Livestock */}
        <div className="bg-green-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-3">🌾 Crops & Livestock</h2>
          <ul className="list-disc ml-6 space-y-1 text-white">
            <li>Maize – 2 acres</li>
            <li>Tomatoes – 1 acre</li>
            <li>Cows – 5</li>
          </ul>
        </div>

        {/* AI Agent + Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* AI Agent */}
          <div className="bg-gradient-to-br from-green-800 to-sky-800 p-6 rounded-xl shadow-lg">
            <AIAgent />
          </div>

          {/* Notes Section */}
          <div className="bg-green-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-3">📝 Farm Notes</h2>
            <textarea
              className="w-full p-3 rounded-lg text-black min-h-[150px]"
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

            {/* Saved Notes */}
            <ul className="mt-4 space-y-2 max-h-64 overflow-y-auto">
              {savedNotes.map((note) => (
                <li key={note._id} className="bg-green-900 p-3 rounded-lg text-white">
                  {note.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
