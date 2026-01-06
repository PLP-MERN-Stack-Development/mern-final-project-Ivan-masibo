import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <header
        className="flex flex-col items-center justify-center py-32 px-6 text-center text-white bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">FarmHub</h1>
          <p className="text-lg md:text-xl mb-8">
            AI-powered farm assistant that helps you choose the right crops for your land,
            track growth, predict markets & weather, and optimize every step of farming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6 bg-green-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          🌾 FarmHub Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-green-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">AI Crop Selection</h3>
            <p>
              Get smart suggestions for the best crops to grow based on your land location and conditions.
            </p>
          </div>
          <div className="bg-green-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Season & Planting Schedule</h3>
            <p>
              Know the best time to prepare land, plant, and maintain crops for maximum yield.
            </p>
          </div>
          <div className="bg-green-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Crop Monitoring & Analytics</h3>
            <p>
              Track growth, detect issues early, and get recommendations to treat and maintain your crops.
            </p>
          </div>
          <div className="bg-green-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Market & Weather Prediction</h3>
            <p>
              Predict market prices and upcoming weather to make smarter farming decisions.
            </p>
          </div>
          <div className="bg-green-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Guided Farming Process</h3>
            <p>
              Step-by-step instructions from land preparation to harvesting, optimized for your crops.
            </p>
          </div>
        </div>
      </section>

      {/* About + Contact Section */}
      <section className="py-20 px-6 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">About FarmHub</h2>
          <p>
            FarmHub helps farmers track crops, livestock, and weather while providing AI-based crop recommendations. 
            Our mission is to empower farmers with technology for smarter, sustainable, and more profitable farming.
          </p>

          <h3 className="text-2xl font-semibold mt-6">Contact Us</h3>
          <p>For any inquiries, reach out via email or phone, or visit our contact page.</p>
          <Link 
            to="/contact" 
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
}
