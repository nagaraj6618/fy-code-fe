import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { motion } from 'framer-motion';

const Contact = () => {
  const { isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const userData = localStorage.getItem()
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 p-4">
      <motion.h1 
        className="text-white text-3xl font-bold mb-6" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
        {
          !isAuthenticated && (
            <div>
              <div className="mb-4">
                <label className="block text-gray-300">Name :</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white" 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Email :</label>
                <input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white" 
                />
              </div>
            </div>
          )
        }
        <div className="mb-4">
          <label className="block text-gray-300">Message :</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white" 
            rows="4"
          ></textarea>
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;