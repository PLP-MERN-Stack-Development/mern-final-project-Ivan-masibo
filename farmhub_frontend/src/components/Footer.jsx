import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white p-10 mt-10">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        {/* Footer Links */}
        <div className="text-gray-200 space-x-2">
          <Link to="/" className="hover:underline">Home</Link> |
          <Link to="/about" className="hover:underline">About</Link> |
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link> |
          <Link to="/terms" className="hover:underline">Terms</Link> |
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </div>

        <div className="mt-6 text-gray-400">&copy; {new Date().getFullYear()} FarmHub. All rights reserved.</div>
      </div>
    </footer>
  );
}
