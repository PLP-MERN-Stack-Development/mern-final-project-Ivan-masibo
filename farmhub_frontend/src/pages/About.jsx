export default function About() {
  return (
    <div className="min-h-screen bg-green-900 text-white px-6 py-12 md:px-16">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        About FarmHub
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Smart Farming Made Simple
        </h2>
        <p className="text-lg leading-relaxed">
          FarmHub is a cutting-edge agricultural platform that combines
          artificial intelligence, GPS technology, and data analytics to
          revolutionize the way farmers manage their land and crops. Designed
          for both small-scale and commercial farmers, FarmHub provides
          actionable insights that help users make informed decisions at every
          stage of the farming process.
        </p>
      </section>

      {/* AI & Data Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          AI-Powered Crop Intelligence
        </h2>
        <p className="text-lg leading-relaxed">
          By analyzing soil quality, climate data, and regional trends, FarmHub
          recommends the most suitable crops for each plot of land. This ensures
          optimal yields, efficient resource use, and sustainable farming
          practices. Farmers receive tailored recommendations based on real
          data, not guesswork.
        </p>
      </section>

      {/* Farm Lifecycle */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          End-to-End Crop Management
        </h2>
        <p className="text-lg leading-relaxed">
          FarmHub supports farmers throughout the entire crop lifecycle —
          from land preparation and planting schedules to fertilization, pest
          control, and harvesting. The platform continuously monitors crop
          growth, identifies potential risks, and provides timely guidance to
          maintain healthy and productive farms.
        </p>
      </section>

      {/* Sustainability */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Sustainable & Profitable Farming
        </h2>
        <p className="text-lg leading-relaxed">
          With real-time weather updates and market insights, farmers can adapt
          quickly to changing conditions. FarmHub promotes environmentally
          responsible farming while helping users maximize yields, reduce
          losses, and increase profitability.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed">
          Our mission is to empower farmers with accessible technology that
          simplifies complex agricultural decisions. By bridging traditional
          farming knowledge with modern innovation, FarmHub helps build
          resilient farming communities and supports long-term food security.
        </p>
      </section>

      {/* Closing */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Grow With Confidence
        </h2>
        <p className="text-lg leading-relaxed">
          Whether you are managing a small farm or overseeing multiple
          agricultural projects, FarmHub is your trusted partner. Join a
          growing community of farmers embracing smarter, data-driven farming
          — where intelligence meets agriculture and innovation cultivates
          growth.
        </p>
      </section>
    </div>
  );
}
