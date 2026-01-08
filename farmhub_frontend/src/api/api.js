// frontend/src/api.js
const BASE_URL = "https://mern-final-project-ivan-masibo-7.onrender.com/api"; // your deployed backend
export const getCrops = async () => {
  const res = await fetch(`${BASE_URL}/api/crops`);
  return res.json();
};
