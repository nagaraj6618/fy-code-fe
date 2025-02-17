import React from 'react'
import NavbarComponent from '../Components/Navbar/NavbarComponent'
import AppRouter from "../Route/AppRouter"
import "./AppLayout.css"

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <div className="w-1/5 bg-gray-800 text-white p-4">
        <NavbarComponent />
      </div>
      <div className="w-4/5 bg-gray-850 text-gray-200 p-4">
        <AppRouter />
      </div>
    </div>

  )
}

export default AppLayout