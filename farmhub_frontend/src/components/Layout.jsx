import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-green-900 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="FarmHub Logo" className="w-8 h-8" />
            <span className="text-xl font-bold">FarmHub</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li className="relative group">
              <span className="cursor-pointer hover:underline">Menu ▾</span>
              <ul className="absolute left-0 mt-2 w-40 bg-green-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible z-10">
                <li><Link to="/about" className="block px-4 py-2 hover:bg-green-700">About Us</Link></li>
                <li><Link to="/privacy" className="block px-4 py-2 hover:bg-green-700">Privacy Policy</Link></li>
                <li><Link to="/terms" className="block px-4 py-2 hover:bg-green-700">Terms</Link></li>
                <li><Link to="/services" className="block px-4 py-2 hover:bg-green-700">Services</Link></li>
                <li><Link to="/contactus" className="block px-4 py-2 hover:bg-green-700">Contact Us</Link></li>
              </ul>
            </li>

            {/* Account Dropdown */}
            <li className="relative group">
              <span className="cursor-pointer hover:underline">Account ▾</span>
              <ul className="absolute right-0 mt-2 w-40 bg-green-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible z-10">
                {!user && <li><Link to="/login" className="block px-4 py-2 hover:bg-green-700">Login</Link></li>}
                {!user && <li><Link to="/register" className="block px-4 py-2 hover:bg-green-700">Register</Link></li>}
                {user && <li><Link to="/dashboard" className="block px-4 py-2 hover:bg-green-700">Dashboard</Link></li>}
                {user && <li>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 hover:bg-green-700"
                  >
                    Logout
                  </button>
                </li>}
              </ul>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-green-800 space-y-2 p-4">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li>
              <span className="block cursor-pointer">Menu ▾</span>
              <ul className="pl-4 mt-1 space-y-1">
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                <li><Link to="/privacy" onClick={() => setMenuOpen(false)}>Privacy Policy</Link></li>
                <li><Link to="/terms" onClick={() => setMenuOpen(false)}>Terms</Link></li>
                <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                <li><Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
              </ul>
            </li>

            <li>
              <span className="block cursor-pointer">Account ▾</span>
              <ul className="pl-4 mt-1 space-y-1">
                {!user && <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>}
                {!user && <li><Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link></li>}
                {user && <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>}
                {user && <li>
                  <button
                    onClick={() => { logout(); setMenuOpen(false); }}
                    className="w-full text-left"
                  >
                    Logout
                  </button>
                </li>}
              </ul>
            </li>
          </ul>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
