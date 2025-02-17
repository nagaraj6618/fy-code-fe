import React from 'react'

const ChatRecived = ({message}) => {
  return (
   <div className="flex justify-start mb-4">
   <div className="bg-gray-200 text-black p-3 rounded-lg max-w-xs">
     <span>{message}</span>
   </div>
 </div>
  )
}

export default ChatRecived