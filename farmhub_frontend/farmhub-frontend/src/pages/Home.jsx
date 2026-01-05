import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">FarmHub</h1>
        <p className="text-xl max-w-2xl mb-8">
          AI-powered farm assistant that helps you choose the right crops for your land, track growth, predict markets and weather, and optimize every step of farming.
        </p>
        <div className="space-x-4">
          <Link to="/login" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold">
            Login
          </Link>
          <Link to="/register" className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold">
            Register
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="flex flex-col items-center py-20 px-6 bg-green-800">
        <h2 className="text-3xl font-bold mb-10">FarmHub Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          <div className="bg-green-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">AI Crop Selection</h3>
            <p>Get smart suggestions for the best crops to grow based on your land location and conditions.</p>
          </div>
          <div className="bg-green-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Season & Planting Schedule</h3>
            <p>Know the best time to prepare land, plant, and maintain crops for maximum yield.</p>
          </div>
          <div className="bg-green-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Crop Monitoring & Analytics</h3>
            <p>Track growth, detect issues early, and get recommendations to treat and maintain your crops.</p>
          </div>
          <div className="bg-green-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Market & Weather Prediction</h3>
            <p>Predict market prices and upcoming weather to make smarter farming decisions.</p>
          </div>
          <div className="bg-green-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2">Guided Farming Process</h3>
            <p>Step-by-step instructions from land preparation to harvesting, optimized for your crops.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
