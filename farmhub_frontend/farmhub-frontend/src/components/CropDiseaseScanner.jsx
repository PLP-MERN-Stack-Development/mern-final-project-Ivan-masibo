import { useState } from "react";

export default function CropDiseaseScanner() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const analyzeDisease = () => {
    if (!image) return;

    setLoading(true);

    // 🔁 AI SIMULATION (replace with real AI API later)
    setTimeout(() => {
      setResult({
        disease: "Early Blight",
        severity: "Moderate",
        treatment: [
          "Apply recommended fungicide",
          "Remove infected leaves",
          "Improve air circulation",
        ],
        prevention: [
          "Avoid overhead irrigation",
          "Rotate crops",
          "Use certified seeds",
        ],
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-green-800 to-sky-900 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📸 AI Crop Disease Scanner</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />

      {preview && (
        <img
          src={preview}
          alt="Crop Preview"
          className="rounded-lg mb-4 max-h-64 object-cover"
        />
      )}

      <button
        onClick={analyzeDisease}
        className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-lg font-semibold"
      >
        Analyze Crop
      </button>

      {loading && <p className="mt-4 text-sky-200">Analyzing image...</p>}

      {result && (
        <div className="mt-6 bg-green-900 p-4 rounded-lg border border-sky-500">
          <h3 className="text-xl font-semibold mb-2">
            Disease: {result.disease}
          </h3>
          <p className="text-sky-200 mb-2">
            <strong>Severity:</strong> {result.severity}
          </p>

          <div className="mb-2">
            <strong>Treatment:</strong>
            <ul className="list-disc ml-6 text-sky-200">
              {result.treatment.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>

          <div>
            <strong>Prevention:</strong>
            <ul className="list-disc ml-6 text-sky-200">
              {result.prevention.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
