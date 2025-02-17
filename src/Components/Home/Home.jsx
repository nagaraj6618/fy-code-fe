import React,{useState} from 'react'
import ChatDesign from '../ChatDesign/ChatDesign';
import ChatSent from '../ChatDesign/ChatSent';
import ChatRecived from '../ChatDesign/ChatRecived';

const Home = () => {
  const data = [
    {
      request: "Hi there! How are you?",
      response: "I'm good, thanks for asking! How about you?"
    },
    {
      request: "I'm doing well, just got back from a trip.",
      response: "That sounds exciting! Where did you go?"
    },
    {
      request: "I went to the mountains. It was a great escape from the city!",
      response: "Wow, sounds amazing! Nature is always refreshing."
    },
    {
      request: "Yeah, I did a lot of hiking and spent some time by the lake.",
      response: "That sounds so peaceful. I need a trip like that!"
    },
    {
      request: "You should definitely go! It was the best part of my trip.",
      response: "I'll start planning! Thanks for the suggestion."
    },
    {
      request: "No problem, let me know if you need any recommendations.",
      response: "I will! You've been so helpful, thanks again!"
    },
    {
      request: "Of course, happy to help anytime!",
      response: "You're the best! 😊"
    },
    {
      request: "I try my best. Take care and have a great day!",
      response: "You too! See you soon!"
    },
    {
      request: "Catch you later!",
      response: "Looking forward to it! Take care!"
    },
    {
      request: "Bye!",
      response: "Bye! 👋"
    }
  ];
  
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
      {data.length>0 &&
      data.map((chat,index) => (
        <div>
          <ChatSent message={chat.request}/>
          <ChatRecived message={chat.response}/>
        </div>
      ))
      }
      
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