import React, { useState, useEffect, useRef } from 'react';
import ChatSent from '../ChatDesign/ChatSent';
import ChatRecived from '../ChatDesign/ChatRecived';
import { MdOutlineMicNone } from "react-icons/md";
import { PiWaveform } from "react-icons/pi";
import { IoMdSend } from "react-icons/io";

const ChatHome = () => {
    const [data, setData] = useState([
        { request: "Hi there! How are you?", response: "I'm good, thanks for asking! How about you?" },
        { request: "I'm doing well, just got back from a trip.", response: "That sounds exciting! Where did you go?" },
        { request: "I went to the mountains. It was a great escape from the city!", response: "Wow, sounds amazing! Nature is always refreshing." },
        { request: "Hi there! How are you?", response: "I'm good, thanks for asking! How about you?" },
        { request: "I'm doing well, just got back from a trip.", response: "That sounds exciting! Where did you go?" },
        { request: "I went to the mountains. It was a great escape from the city!", response: "Wow, sounds amazing! Nature is always refreshing." },
    ]);
    
    const [message, setMessage] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const recognitionRef = useRef(null);

    // Initialize Speech Recognition once
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = "en-US";

            // Handle recognition results
            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setMessage(transcript);
                setIsRecording(false);
            };

            // Handle recognition errors
            recognition.onerror = (event) => {
                console.error("Speech recognition error", event.error);
                setIsRecording(false);
            };

            // Handle manual stop to prevent auto-restart
            recognition.onend = () => {
                if (!isRecording) {
                    console.log("Voice recognition stopped manually.");
                }
            };

            recognitionRef.current = recognition;
        } else {
            console.warn("Speech Recognition not supported in this browser.");
        }
    }, []);

    // Toggle voice recording
    const toggleRecording = () => {
        if (!recognitionRef.current) return;
        
        if (isRecording) {
            stopVoiceRecognition();
        } else {
            startVoiceRecognition();
        }
    };

    // Start voice recognition
    const startVoiceRecognition = () => {
        if (recognitionRef.current) {
            setIsRecording(true);
            recognitionRef.current.start();
            console.log("Voice recognition started...");
        }
    };

    // Stop voice recognition
    const stopVoiceRecognition = () => {
        if (recognitionRef.current) {
            setIsRecording(false);
            recognitionRef.current.stop();
            console.log("Voice recognition stopped.");
        }
    };

    // Handle sending messages
    const handleSend = (event) => {
        event.preventDefault();
        if (message.trim()) {
            setData((prevData) => [
                ...prevData,
                { request: message, response: "Thank you for the message!" }
            ]);
            console.log("Message sent:", message);
            setMessage("");
        }
    };

    // Auto-scroll to bottom on new message
    useEffect(() => {
        const chatContainer = document.querySelector('.chat-content');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [data]);

    return (
        <div className="flex flex-col h-full bg-gray-900 text-white">
            {/* Chat content */}
            <div className="chat-content flex-grow overflow-y-auto p-4 transition-all duration-500">
                {data.map((chat, index) => (
                    <div key={index} className="message-container mb-4 opacity-100 animate-fadeIn">
                        <ChatSent message={chat.request} />
                        <ChatRecived message={chat.response} />
                    </div>
                ))}
            </div>

            {/* Input and Send button */}
            <form onSubmit={handleSend}>
                <div className="flex items-center  p-2 mt-auto mb-1">
                    <input
                        type="text"
                        className="w-4/5 p-3 border border-gray-600 rounded-full text-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="ml-4 p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 ease-in-out"
                    >
                        <IoMdSend />
                    </button>
                    <button
                        onClick={toggleRecording}
                        className={`ml-4 p-3 rounded-full ${isRecording ? "bg-red-500" : "bg-gray-200 text-black"} hover:bg-opacity-80 transition-all duration-300 ease-in-out`}
                    >
                        {isRecording ? <PiWaveform /> : <MdOutlineMicNone />}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatHome;
