import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from "../Components/Home/Home";
import Register from '../Components/Register/Register';
import Login from "../Components/Login/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route path = "/signup" element = {<Register/>}/>
    </Routes>
  )
}

export default AppRouter