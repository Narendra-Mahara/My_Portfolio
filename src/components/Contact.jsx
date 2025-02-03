import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";
const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <main className="flex-grow flex flex-col items-center  p-14">
        <h2 className="text-4xl mb-4">Get in Touch</h2>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-slate-400 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-slate-400 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-slate-400 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Send Message
          </button>
        </form>

        <div className="flex gap-5 mt-8">
          <a
            href="https://www.facebook.com/its.narendramahara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-600"
          >
            <FaFacebook size="2em" />
          </a>
          <a
            href="mailto:narendramahara9868@example.com"
            className="text-white hover:text-gray-600"
          >
            <FaEnvelope size="2em" />
          </a>
          <a
            href="https://github.com/Narendra-Mahara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-600"
          >
            <FaGithub size="2em" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Contact;
