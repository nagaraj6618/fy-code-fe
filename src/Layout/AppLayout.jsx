import React from 'react'
import NavbarComponent from '../Components/Navbar/NavbarComponent'
import AppRouter from "../Route/AppRouter"
import "./AppLayout.css"

const AppLayout = () => {
  return (
    <div className='navbar-container'>
      <div className="navbar">
    <NavbarComponent />
  </div>
  <div className="app-router">
    <AppRouter />
  </div>
      
    </div>
  )
}

export default AppLayout