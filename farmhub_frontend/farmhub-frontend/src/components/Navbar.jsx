import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-sky-400">
        FarmHub
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>

        {/* Services Dropdown */}
        <div className="relative group">
          <span className="cursor-pointer">Agri Services</span>
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-52">
            <Link className="block px-4 py-2 hover:bg-gray-100" to="/about">About</Link>
            <Link className="block px-4 py-2 hover:bg-gray-100" to="/services">AI Advisory</Link>
            <Link className="block px-4 py-2 hover:bg-gray-100" to="/privacy">Privacy</Link>
            <Link className="block px-4 py-2 hover:bg-gray-100" to="/terms">Terms</Link>
          </div>
        </div>

        <Link to="/contact">Contact</Link>

        {/* Account Dropdown */}
        <div className="relative group">
          <span className="cursor-pointer">Account</span>
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-52">
            {!user && (
              <>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/login">Login</Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/register">Register</Link>
              </>
            )}
            {user && (
              <>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/dashboard">Dashboard</Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/profile">Profile</Link>
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
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-green-900 flex flex-col p-6 gap-4 md:hidden">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          {!user && <Link to="/login">Login</Link>}
          {!user && <Link to="/register">Register</Link>}
          {user && <Link to="/dashboard">Dashboard</Link>}
          {user && <button onClick={logout}>Logout</button>}
        </div>
      )}
    </nav>
  );
}
