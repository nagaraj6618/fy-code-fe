import React from 'react';
import { Link } from 'react-router-dom';
import { FaHistory, FaSignInAlt, FaUserPlus, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { useAuth } from '../../Context/AuthContext';
import { CiLogout } from "react-icons/ci";
import { RiAccountPinCircleFill } from "react-icons/ri";

const NavbarComponent = ({ closeSidebar }) => {
  const {logout,isAuthenticated} = useAuth();
  const historyData = [
    { id: '1', name: 'Very Long History Name Example 1' },
    { id: '2', name: 'Another Long History Entry 2' },
    { id: '3', name: 'Short Name' },
    { id: '4', name: 'Yet Another Very Long History Name 4' },
    { id: '5', name: 'Very Long History Name Example 1' },
    { id: '6', name: 'Another Long History Entry 2' },
    { id: '7', name: 'Short Name' },
    { id: '8', name: 'Yet Another Very Long History Name 4' },
    { id: '9', name: 'Very Long History Name Example 1' },
    { id: '10', name: 'Another Long History Entry 2' },
    { id: '11', name: 'Short Name' },
    { id: '12', name: 'Yet Another Very Long History Name 4' },
    { id: '13', name: 'Very Long History Name Example 1' },
    { id: '14', name: 'Another Long History Entry 2' },
    { id: '15', name: 'Short Name' },
    { id: '16', name: 'Yet Another Very Long History Name 4' }
  ];

  const handleLogout = () => {
    logout();
    closeSidebar();
  }
  return (
    <nav className="flex flex-col h-full w-full text-white">
    {/* Chat History Section */}
    <div className="flex-1 overflow-y-auto">
      <h2 className="text-lg md:text-base sm:text-sm font-semibold mb-2 border-b border-gray-700 pb-2">Chat History</h2>
      <ul>
        {historyData.map((data) => (
          <li key={data.id} className="mb-2">
            <Link 
              to={`/chat/${data.id}`} 
              className="flex items-center gap-2 p-2 rounded-md transition hover:bg-gray-700 truncate w-full text-base md:text-sm sm:text-xs"
              onClick={closeSidebar}
            >
              <FaHistory /> <span className="truncate max-w-[150px] block">{data.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Navigation Links */}
    <div className="mt-auto">
      <h2 className="text-lg md:text-base sm:text-sm font-semibold mb-2 border-b border-gray-700 pb-2">Navigation</h2>
      <ul className="space-y-2">
        {!isAuthenticated ?(<><li>
          <Link 
            to="/signin" 
            className="flex items-center gap-2 p-2 rounded-md transition hover:bg-gray-700 text-base md:text-sm sm:text-xs"
            onClick={closeSidebar}
          >
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link 
            to="/signup" 
            className="flex items-center gap-2 p-2 rounded-md transition hover:bg-gray-700 text-base md:text-sm sm:text-xs"
            onClick={closeSidebar}
          >
            <FaUserPlus /> Register
          </Link>
        </li>
        </>) : 
        (
          <>
            <li>
              <Link to = "/signin"
                className="flex items-center gap-2 p-2 rounded-md transition hover:bg-gray-700 text-base md:text-sm sm:text-xs"
                onClick={handleLogout}
              >
                <CiLogout /> Logout
              </Link>
             </li>
             <li>
              <Link to = "/account"
                className="flex items-center gap-2 p-2 rounded-md transition hover:bg-gray-700 text-base md:text-sm sm:text-xs"
                onClick={closeSidebar}
              >
                <RiAccountPinCircleFill /> Account
              </Link>
             </li>
          </>
        )
        }
        <li>
          <Link 
            to="/about" 
            className="flex items-center gap-2 p-2 rounded-md transition hover:bg-gray-700 text-base md:text-sm sm:text-xs"
            onClick={closeSidebar}
          >
            <FaInfoCircle /> About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className="flex items-center gap-2 p-2 rounded-md transition hover:bg-gray-700 text-base md:text-sm sm:text-xs"
            onClick={closeSidebar}
          >
            <FaEnvelope /> Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>

  );
};

export default NavbarComponent;
