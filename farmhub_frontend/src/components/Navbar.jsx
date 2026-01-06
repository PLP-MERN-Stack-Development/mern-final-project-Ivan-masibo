import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="FarmHub Logo" className="w-8 h-8" />
          <span className="text-xl font-bold">FarmHub</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>

          {/* Menu Dropdown */}
          <li className="relative group">
            <button className="hover:underline">Menu ▼</button>
            <ul className="absolute hidden group-hover:block bg-green-800 mt-2 rounded shadow-lg py-2 w-48 z-10">
              <li>
                <Link to="/about" className="block px-4 py-2 hover:bg-green-700">About Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="block px-4 py-2 hover:bg-green-700">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="block px-4 py-2 hover:bg-green-700">Terms</Link>
              </li>
              <li>
                <Link to="/services" className="block px-4 py-2 hover:bg-green-700">Services</Link>
              </li>
              <li>
                <Link to="/contactus" className="block px-4 py-2 hover:bg-green-700">Contact Us</Link>
              </li>
            </ul>
          </li>

          {/* Account Dropdown */}
          <li className="relative">
            <button
              className="hover:underline"
              onClick={() => setAccountOpen(!accountOpen)}
            >
              Account ▼
            </button>
            {accountOpen && (
              <ul className="absolute right-0 mt-2 bg-green-800 rounded shadow-lg py-2 w-48 z-10">
                {!user && (
                  <>
                    <li>
                      <Link to="/login" className="block px-4 py-2 hover:bg-green-700">Login</Link>
                    </li>
                    <li>
                      <Link to="/register" className="block px-4 py-2 hover:bg-green-700">Register</Link>
                    </li>
                  </>
                )}
                {user && (
                  <>
                    <li>
                      <span className="block px-4 py-2 text-gray-200">{user.name}</span>
                    </li>
                    <li>
                      <Link to="/dashboard" className="block px-4 py-2 hover:bg-green-700">Dashboard</Link>
                    </li>
                    <li>
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-2 hover:bg-green-700"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            )}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-green-800 p-4 space-y-2">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link></li>

          {/* Menu Dropdown Mobile */}
          <li>
            <details className="group">
              <summary className="cursor-pointer">Menu ▼</summary>
              <ul className="pl-4 mt-2 space-y-1">
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                <li><Link to="/privacy" onClick={() => setMenuOpen(false)}>Privacy Policy</Link></li>
                <li><Link to="/terms" onClick={() => setMenuOpen(false)}>Terms</Link></li>
                <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                <li><Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
              </ul>
            </details>
          </li>

          {/* Account Dropdown Mobile */}
          <li>
            <details>
              <summary>Account ▼</summary>
              <ul className="pl-4 mt-2 space-y-1">
                {!user && (
                  <>
                    <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
                    <li><Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link></li>
                  </>
                )}
                {user && (
                  <>
                    <li><span>{user.name}</span></li>
                    <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
                    <li><button onClick={logout}>Logout</button></li>
                  </>
                )}
              </ul>
            </details>
          </li>
        </ul>
      )}
    </nav>
  );
}
