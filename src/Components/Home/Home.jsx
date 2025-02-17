import React,{useState} from 'react'

const Home = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };
  return (
    <div className="flex flex-col h-full">
    {/* Chat content */}
    <div className="flex-grow overflow-y-auto p-4">
      {/* Chat messages will appear here */}
    </div>

    {/* Input and Send button */}
    <div className="flex items-center justify-between p-4 bg-white border-t border-gray-300 mt-auto mb-8">
      <input
        type="text"
        className="w-4/5 p-3 border border-gray-300 rounded-full text-lg"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="ml-4 p-3 bg-green-500 text-white rounded-full hover:bg-green-600"
      >
        Send
      </button>
    </div>
  </div>
  )
}

export default Home