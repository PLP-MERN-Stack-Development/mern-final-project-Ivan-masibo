import { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();

// Only one export for AuthProvider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = not logged in

  // Fake login/logout for now
  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

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
