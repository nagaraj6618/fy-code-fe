import React, { useState, useEffect } from 'react'
import ChatDesign from '../ChatDesign/ChatDesign';
import ChatSent from '../ChatDesign/ChatSent';
import ChatRecived from '../ChatDesign/ChatRecived';

const Home = () => {
  const [data, setData] = useState([
    { request: "Hi there! How are you?", response: "I'm good, thanks for asking! How about you?" },
    { request: "I'm doing well, just got back from a trip.", response: "That sounds exciting! Where did you go?" },
    { request: "I went to the mountains. It was a great escape from the city!", response: "Wow, sounds amazing! Nature is always refreshing." },
    { request: "Yeah, I did a lot of hiking and spent some time by the lake.", response: "That sounds so peaceful. I need a trip like that!" },
    { request: "You should definitely go! It was the best part of my trip.", response: "I'll start planning! Thanks for the suggestion." },
    { request: "No problem, let me know if you need any recommendations.", response: "I will! You've been so helpful, thanks again!" },
    { request: "Of course, happy to help anytime!", response: "You're the best! 😊" },
    { request: "I try my best. Take care and have a great day!", response: "You too! See you soon!" },
    { request: "Catch you later!", response: "Looking forward to it! Take care!" },
    { request: "Bye!", response: "Bye! 👋" }
  ]);
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  // Check if the browser supports SpeechRecognition
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // Start voice recognition
  const startVoiceRecognition = () => {
    recognition.start();
    setIsRecording(true);
  };

  // Handle voice recognition result
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setMessage(transcript); // Set the transcript in the input
    setIsRecording(false); // Stop recording after getting the result
  };

  // Handle any errors during recognition
  recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error);
    setIsRecording(false);
  };
  const handleSend = (event) => {
    // Simulating a new chat message
    
    if (message.trim()) {
      setData(prevData => [
        ...prevData,
        { request: message, response: "Thank you for the message!" }
      ]);
      console.log("Message sent:", message);
      setMessage("");
    }
    event.preventDefault()
  };

  useEffect(() => {
    const chatContainer = document.querySelector('.chat-content');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
    }
  }, [data]);
  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      {/* Chat content */}
      <div className="chat-content flex-grow overflow-y-auto p-4 transition-all duration-500">
        {/* Chat messages will appear here */}
        {data.length > 0 &&
          data.map((chat, index) => (
            <div
              key={index}
              className="message-container mb-4 opacity-100 animate-fadeIn"
            >
              <ChatSent message={chat.request} />
              <ChatRecived message={chat.response} />
            </div>
          ))
        }
      </div>

      {/* Input and Send button */}
      <form onSubmit={handleSend}>
      <div className="flex items-center justify-between p-4 bg-gray-800 border-t border-gray-700 mt-auto mb-8">
        
          <input
            type="text"
            className="w-4/5 p-3 border border-gray-600 rounded-full text-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type='submit'
            className="ml-4 p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out"
          >
            Send
          </button>
          <button
            onClick={startVoiceRecognition}
            
            className={`ml-4 p-3 rounded-full ${isRecording ? "bg-red-500 disabled:" : "bg-blue-500"} text-white hover:bg-opacity-80`}
          >
            {isRecording ? "Recording..." : "🎤 Voice"}
          </button>
      </div>
      </form>
    </div>
  )
}

export default Home