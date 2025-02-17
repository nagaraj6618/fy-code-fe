import React from 'react'

const ChatSent = ({message}) => {
  return (
   <div className="flex justify-end mb-4">
   <div className="bg-green-500 text-white p-3 rounded-lg max-w-xs">
     <span>{message}</span>
   </div>
 </div>
  )
}

export default ChatSent