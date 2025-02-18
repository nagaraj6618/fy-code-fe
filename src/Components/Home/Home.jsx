import React, { useState, useEffect } from 'react'
import ChatDesign from '../ChatDesign/ChatDesign';
import ChatSent from '../ChatDesign/ChatSent';
import ChatRecived from '../ChatDesign/ChatRecived';
import ChatHome from '../ChatDesign/ChatHome';

const Home = () => {
 
  return (
    <div className = "h-full" >
      <ChatHome />
    </div>
  )
}

export default Home