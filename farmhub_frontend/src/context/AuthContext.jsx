import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Try to get user from localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("farmhubUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Login function — stores user and JWT
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("farmhubUser", JSON.stringify(userData));
  };

  // Logout function — removes user and JWT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("farmhubUser");
  };

  // Optional: refresh user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("farmhubUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for easier access
export function useAuth() {
  return useContext(AuthContext);
}
