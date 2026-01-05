import { useState } from "react";

export default function Notes() {
  const [note, setNote] = useState("");

  return (
    <div className="bg-green-800 p-4 rounded-lg">
      <h3 className="text-xl font-semibold text-sky-400">📝 Farmer Notes</h3>

      <textarea
        className="w-full p-2 text-black rounded"
        placeholder="Write observations, crop progress, issues..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
}
