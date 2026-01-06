import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-green-900 text-white">
      
      {/* ===== HEADER / NAVBAR ===== */}
      <header className="bg-green-800 px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-sky-400">
          FarmHub
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-sky-400">Home</Link>
          <Link to="/blog" className="hover:text-sky-400">Blog</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-sky-400">
              Services
            </span>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-56">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About FarmHub</Link>
              <Link to="/services" className="block px-4 py-2 hover:bg-gray-100">AI Crop Advisory</Link>
              <Link to="/privacy" className="block px-4 py-2 hover:bg-gray-100">Privacy Policy</Link>
              <Link to="/terms" className="block px-4 py-2 hover:bg-gray-100">Terms & Conditions</Link>
            </div>
          </div>

          <Link to="/contact" className="hover:text-sky-400">Contact</Link>

          {/* Account Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-sky-400">
              Account
            </span>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-56">
              {!user && (
                <>
                  <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                  <Link to="/register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
                </>
              )}

              {user && (
                <>
                  <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-green-800 flex flex-col p-6 space-y-4 md:hidden z-50">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            {!user && (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
              </>
            )}

            {user && (
              <>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
                <button onClick={logout}>Logout</button>
              </>
            )}
          </div>
        )}
      </header>

      {/* ===== PAGE CONTENT ===== */}
      <main className="flex-1 p-6">
        {children}
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-green-800 text-center py-6 mt-auto space-y-2">
        <div className="space-x-4">
          <Link to="/about" className="hover:text-sky-400">About Us</Link> |
          <Link to="/terms" className="hover:text-sky-400">Terms & Conditions</Link> |
          <Link to="/privacy" className="hover:text-sky-400">Privacy Policy</Link>
        </div>
        <p className="mt-2 text-sm">
          © 2026 FarmHub – Empowering Farmers with AI & Smart Agriculture
        </p>
      </footer>
    </div>
  );
}
