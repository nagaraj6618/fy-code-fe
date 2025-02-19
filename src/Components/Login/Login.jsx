// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { IoIosEye } from "react-icons/io";
// import { IoIosEyeOff } from "react-icons/io";
// const Login = () => {
//   const [emailorusername,setemailorusername] = useState("");
//   const [password,setPassword] = useState("");
//   const handlePassword = (event) => {

//   }
//   const handleEmailOrUserName = (event) => {

//   }
//   const loginHandler = (event) => {
//     event.prevantDefault();
//   }
//   return (
//     <div>
//       <form onSubmit={loginHandler}>
//         <div>
//           <div><label>Email/Username</label></div>
//           <input type="text" />
//         </div>
//         <div>
//           <div><label>Password</label></div>
//           <input type="password" />
//           <IoIosEye />
//           <IoIosEyeOff/>
//         </div>
//         <div>
//           <button type='submit'>Login</button>
//         </div>
//       </form>
//       <div>
//         <div>
//           <p>New user? <Link to="/signup" >Register</Link></p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import LoadingFull from '../Loading/LoadingFull';

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailOrUserName = (event) => {
    setEmailOrUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    console.log('Logging in with:', emailOrUsername, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      {/* <LoadingFull/> */}
      <div className="bg-gray-800 bg-opacity-60 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-96 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={loginHandler} className="space-y-4">
          <div>
            <label className="block mb-2">Email/Username</label>
            <input 
              type="text" 
              value={emailOrUsername} 
              onChange={handleEmailOrUserName} 
              className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email or username"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password} 
                onChange={handlePassword} 
                className="w-full p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
              <span 
                className="absolute top-2 right-3 text-xl cursor-pointer text-gray-400 hover:text-white" 
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
              </span>
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all p-2 rounded font-semibold"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-300">New user? <Link to="/signup" className="text-blue-400 hover:underline">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;