import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { motion } from 'framer-motion';
import axios from 'axios';
import {prod_be_url} from "../../utils/config";
import {showErrorToast, showSuccessToast} from "../ToastMessage/ToastMessageComponent"

const Contact = () => {
  const { isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    // const userData = localStorage.getItem()
    const token = localStorage.getItem("token") || "";
    console.log('Form submitted:', formData);
    try{
      const response = await axios.post(`${prod_be_url}/contact`,{
        email : formData.email,
        name : formData.name,
        message : formData.message.trim()
      },{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      if(response?.data?.success){
        showSuccessToast(response?.data.message);
      }
      setLoading(false);
    }catch(error){
      showErrorToast("An Error Occured.Please try again later.");
      setLoading(false);
    }
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
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex justify-center items-center"
          disabled={loading}
        >
          {loading ? <motion.div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></motion.div> : 'Send'}
        </button>
      </form>
    </div>
  );
}

export default Contact;