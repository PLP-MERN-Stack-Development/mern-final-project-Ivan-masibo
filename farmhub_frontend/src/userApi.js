// Example: src/api/userApi.js

const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return data;
};

export const loginUser = async (userData) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return data;
};
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));
