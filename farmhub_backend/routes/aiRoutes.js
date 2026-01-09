import { useState } from "react";
import axios from "axios";

export default function AIChat() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const send = async () => {
    const res = await axios.post(`${API_URL}/ai`, { message: input });
    setMessages([...messages, { user: input, ai: res.data.reply }]);
    setInput("");
  };

  return (
    <>
      {messages.map((m, i) => (
        <div key={i}>
          <p>User: {m.user}</p>
          <p>AI: {m.ai}</p>
        </div>
      ))}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={send}>Send</button>
    </>
  );
}
