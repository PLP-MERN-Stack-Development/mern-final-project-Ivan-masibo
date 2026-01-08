import axios from "axios";

// Base URL from .env
const API_URL = import.meta.env.VITE_API_URL;

// Register user
export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/users/register`, userData);
  return res.data;
};

// Login user
export const loginUser = async (userData) => {
  const res = await axios.post(`${API_URL}/users/login`, userData);
  return res.data;
};
