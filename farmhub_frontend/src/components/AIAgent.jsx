import { useState } from "react";

export default function AIAgent() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const askAgent = () => {
    setResponse(
      "AI Agent: Upload crop images to detect disease, get treatment and best farming practices."
    );
  };

  return (
    <div className="bg-green-800 p-4 rounded-lg">
      <h3 className="text-xl font-semibold text-sky-400">🤖 AI Farm Assistant</h3>

      <textarea
        className="w-full p-2 text-black rounded"
        placeholder="Ask about crop disease, planting time, soil, market..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={askAgent}
        className="mt-2 bg-sky-500 px-4 py-2 rounded hover:bg-sky-600"
      >
        Ask AI
      </button>

      {response && <p className="mt-3">{response}</p>}
    </div>
  );
}
