import image1 from "../../assest/images/image-1.jpg"
import React, { useState } from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.3 } }),
};

const teamMembers = [
  { name: "Nagaraj S", email: "nagaraj516700@gmail.com", image: image1, website: "https://example.com" },
  { name: "Anitha P", email: "anitha@example.com", image: "", website: "https://example.com" },
  { name: "Harsha", email: "harsha@example.com", image: "https://via.placeholder.com/100", website: "https://example.com" },
  { name: "Rahul K", email: "rahul@example.com", image: "https://via.placeholder.com/100", website: "https://example.com" },
  { name: "Priya M", email: "priya@example.com", image: "https://via.placeholder.com/100", website: "https://example.com" },
  { name: "Vikram T", email: "vikram@example.com", image: "https://via.placeholder.com/100", website: "https://example.com" }
];

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6 overflow-y-auto">
      <motion.div 
        className="bg-gray-800 bg-opacity-60 backdrop-blur-lg p-6 rounded-xl shadow-lg w-full max-w-4xl text-center"
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-2xl font-bold mb-4 text-blue-400" variants={textVariants} custom={0}>
          About Grammar AI
        </motion.h1>
        <motion.p className="text-sm mb-4" variants={textVariants} custom={1}>
          <strong>Grammar AI</strong> is an advanced AI-powered platform that evaluates sentence structure, provides grammar scores, and suggests corrections for grammatical errors. The system ensures high accuracy in grammar correction using a custom-built model.
        </motion.p>
        <motion.h2 className="text-lg font-semibold mb-3 text-blue-300" variants={textVariants} custom={2}>
          Key Features
        </motion.h2>
        <motion.ul className="list-disc list-inside text-left mx-auto max-w-md mb-4 space-y-2 text-sm">
          {["Grammar score and suggestions for sentence improvements", 
            "AI-powered chat history for reference", 
            "Two-Factor Authentication (TFA) for secure login", 
            "Forgot password recovery option", 
            "Account activation status management", 
            "Custom-built grammar prediction model for high accuracy"
          ].map((feature, index) => (
            <motion.li key={index} variants={textVariants} custom={index + 3}>{feature}</motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <button 
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg mt-6 shadow-md transition-transform transform hover:scale-105" 
        onClick={() => setShowPopup(true)}
      >
        Project Developed By
      </button>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-6 overflow-auto" onClick={() => setShowPopup(false)}>
          <motion.div 
            className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-lg text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Developed By</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md text-center">
                  <img src={member.image} alt={member.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-2" />
                  <p className="text-sm font-semibold">{member.name}</p>
                  <p className="text-xs text-gray-400">{member.email}</p>
                  {/* <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs hover:underline">Website</a> */}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
export default About;
