const API_URL = "http://localhost:5000/api/notes";

export const saveNote = async (userId, content) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, content }),
  });
  return res.json();
};

export const getNotes = async (userId) => {
  const res = await fetch(`${API_URL}/${userId}`);
  return res.json();
};
