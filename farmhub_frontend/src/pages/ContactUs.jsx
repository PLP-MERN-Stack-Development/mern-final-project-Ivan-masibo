import Layout from "../components/Layout";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the form data to your backend or email service
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20 px-6 bg-green-900 text-white min-h-screen">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Page Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
          <p className="text-center text-lg md:text-xl text-gray-200">
            Have questions or need support? Reach out to us and we’ll get back to you as soon as possible.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-200 text-center md:text-left">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p>
                <a href="mailto:support@farmhub.com" className="hover:underline">
                  support@farmhub.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p>
                <a href="tel:+254700000000" className="hover:underline">
                  +254 700 000 000
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-green-800 p-8 rounded-xl shadow-lg space-y-6"
          >
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg text-black"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg text-black"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 rounded-lg text-black resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
