import React from 'react'
import NavbarComponent from '../Components/Navbar/NavbarComponent'
import AppRouter from "../Route/AppRouter"
const AppLayout = () => {
  return (
    <div>
      <NavbarComponent/>
      <AppRouter />
    </div>
  )
}

export default AppLayout