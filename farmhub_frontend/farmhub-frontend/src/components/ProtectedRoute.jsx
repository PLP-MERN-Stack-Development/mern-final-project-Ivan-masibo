import { AuthProvider } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Redirect to login if not logged in
    return <Navigate to="/login" />;
  }

  return children;
}
