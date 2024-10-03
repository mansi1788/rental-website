import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending to a server)
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-5xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-1/2 md:pr-4">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions or feedback, feel free to reach out!
          </p>
          <p className="text-gray-600 mb-2">Email: support@example.com</p>
          <p className="text-gray-600 mb-2">Phone: +1 (234) 567-8900</p>
        </div>

        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message:</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
