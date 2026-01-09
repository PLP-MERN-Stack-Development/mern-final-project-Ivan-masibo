import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [method, setMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      if (method === "email") {
        await axios.post(`${API_URL}/users/forgot-password/email`, { email });
        setMessage("Password reset link sent to your email");
      } else {
        await axios.post(`${API_URL}/users/forgot-password/phone`, { phone });
        setMessage("OTP sent to your phone");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Request failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">
          Reset Password
        </h2>

        {error && <p className="text-red-600 text-center">{error}</p>}
        {message && <p className="text-green-600 text-center">{message}</p>}

        <form onSubmit={submitHandler} className="space-y-4">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="email">Reset via Email</option>
            <option value="phone">Reset via Phone (OTP)</option>
          </select>

          {method === "email" ? (
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          ) : (
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          )}

          <button className="w-full bg-green-600 text-white py-2 rounded-lg">
            Send Reset
          </button>
        </form>
      </div>
    </div>
  );
}
