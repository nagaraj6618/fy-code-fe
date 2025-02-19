// import React from 'react'

// const Register = () => {
//   return (
//     <div>Register</div>
//   )
// }

// export default Register

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const registerHandler = (event) => {
    event.preventDefault();
    console.log('Registering with:', name, email, username, password, confirmPassword);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 p-4">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-gray-800 bg-opacity-60 backdrop-blur-lg p-10 rounded-2xl shadow-lg text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={registerHandler} className="space-y-4">
          <div>
            <label className="block mb-2">Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Choose a username"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
              <span 
                className="absolute top-3 right-3 text-xl cursor-pointer text-gray-400 hover:text-white" 
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
              </span>
            </div>
          </div>
          <div>
            <label className="block mb-2">Confirm Password</label>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all p-3 rounded font-semibold"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-300">Already have an account? <Link to="/signin" className="text-blue-400 hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
