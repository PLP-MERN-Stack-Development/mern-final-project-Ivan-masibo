// frontend/src/api.js
const BASE_URL = "https://farmhub-backend.onrender.com"; // your deployed backend
export const getCrops = async () => {
  const res = await fetch(`${BASE_URL}/api/crops`);
  return res.json();
};
