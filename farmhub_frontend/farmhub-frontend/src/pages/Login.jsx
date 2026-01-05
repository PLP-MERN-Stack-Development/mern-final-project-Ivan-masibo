import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("Farmer John"); // simulate login
    navigate("/dashboard");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Login as Farmer John
      </button>
    </div>
  );
}
