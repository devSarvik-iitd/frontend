import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission logic
    setSuccessMessage("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">Have questions? Reach out to us and we'll get back to you as soon as possible.</p>
            <div className="mb-4">
              <a href="https://wa.me/917982416910" className="flex items-center text-green-600 hover:text-green-700">
                <i className="fab fa-whatsapp text-2xl mr-3"></i>
                <span>Chat with us on WhatsApp</span>
              </a>
            </div>
            <div className="mb-4">
              <a href="mailto:support@TheNexStep.com" className="flex items-center text-blue-600 hover:text-blue-700">
                <i className="fas fa-envelope text-xl mr-3"></i>
                <span>support@TheNexStep.com</span>
              </a>
            </div>
            <div className="mb-4 flex items-center text-gray-600">
              <i className="fas fa-map-marker-alt text-xl mr-3"></i>
              <span>IIT Delhi, India</span>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-blue-600 hover:text-blue-700"><i className="fab fa-instagram text-2xl"></i></a>
              <a href="#" className="text-blue-600 hover:text-blue-700"><i className="fab fa-telegram text-2xl"></i></a>
              <a href="#" className="text-blue-600 hover:text-blue-700"><i className="fab fa-youtube text-2xl"></i></a>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
              {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
