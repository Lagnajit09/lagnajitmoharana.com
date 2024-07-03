import React, { useState } from "react";

function Contact() {
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
    // Handle form submission, e.g., send the data to a backend server
    console.log(formData);
  };

  return (
    <section className="p-4" id="contact">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
        <div className="mt-8">
          <p>Email: 2004lagnajitmoharana@gmail.com</p>
          <p>Phone: +91 7735827552</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
