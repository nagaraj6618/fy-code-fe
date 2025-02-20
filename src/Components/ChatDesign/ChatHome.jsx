import React, { useState, useEffect, useRef } from 'react';
import ChatSent from '../ChatDesign/ChatSent';
import ChatRecived from '../ChatDesign/ChatRecived';
import { MdOutlineMicNone } from "react-icons/md";
import { PiWaveform } from "react-icons/pi";
import { IoMdSend } from "react-icons/io";
import axios from "axios";
import {prod_be_url, prod_model_be_url} from "../../utils/config.js"
import Loading from "../Loading/Loading.jsx";
import ErrorMessage from './ErrorMessage.jsx';
import { showErrorToast } from '../ToastMessage/ToastMessageComponent.jsx';
import { useAuth } from '../../Context/AuthContext.js';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ChatHome = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {setChatHistory,setChatHistoryData,isAuthenticated} = useAuth();
    const [data, setData] = useState([
    ]);
    const [isLoading ,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(false);
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
    const handleSend = async(event) => {
        event.preventDefault();
        const data_id = data.length;
        try{
            if (message.trim()) {
                setData((prevData) => [
                    ...prevData,
                    { request: message,response:{},id:data_id}
                ]);
                console.log("Message sent:", message);
                setMessage("");
                setIsLoading(true);
                setIsError(false);
            const token = localStorage.getItem("token") || ""
            if(!isAuthenticated){
                if(data.length < 5){
                    const response = await axios.post(`${prod_model_be_url}/calculate_score`,{
                        text:message
                    })
                    console.log(response.data);
                    setData((prevData) => 
                        prevData.map((item) => 
                        item.id === data_id ? { ...item, response: response.data } : item
                        )
                    );
                    setIsLoading(false)
                    return
                }
                showErrorToast("Please Login to contiue!")
                setIsLoading(false)
                return
            }
            const response = await axios.post(`${prod_be_url}/grammar-chat-data`,
                {
                    message,
                    chatHistoryId: id,
                },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setData((prevData) => 
                prevData.map((item) => 
                item.id === data_id ? { ...item, response: response.data.data } : item
                )
            );
            console.log(response.data)
            setIsLoading(false)
            navigate(`/chat/${response?.data?.data?.chatHistoryId}`);
            chatHistoryApi();
            }
        }
        catch(err){
            setIsLoading(false);
            setIsError(true);
        }
        
    };

    // Auto-scroll to bottom on new message
    useEffect(() => {
        const chatContainer = document.querySelector('.chat-content');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [data]);

    //Api Call for chat history
    useEffect(() => {
        chatHistoryApi();
        getChatDataBsedOnHistory();
    },[])
    useEffect(() => {
        getChatDataBsedOnHistory();
    },[id])

    const chatHistoryApi = async() => {
        try{
            const token = localStorage.getItem("token") || "";
            const response = await axios.get(`${prod_be_url}/grammar-chat-history`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data);
            setChatHistoryData(response?.data?.data);
            setChatHistory(response?.data?.data);

        }catch(error){
            console.log("Error :",error)
            if(error?.response?.data){
              showErrorToast(error?.response?.data?.message);
            }
            else{
              showErrorToast(error.message);
            }
            // setIsLoading(false);
          }
    }
    const chatStoreApi = async(chatData) => {
        try{

        }catch(error){

        }
    }
    const getChatDataBsedOnHistory = async() => {
        try{
            const token = localStorage.getItem("token") || "";
            const chatId = id || ""
            console.log(chatId);
            const response = await axios.get(`${prod_be_url}/grammar-chat-data/${chatId}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            console.log(response.data);
            let chatDatas = response.data.data;
            chatDatas = chatDatas.map((data ,index)=> ({
                ...data,
                id:index
            }));
            console.log(chatDatas);
            setData(chatDatas)
        }catch(error){

        }
    }
    return (
        <div className="flex flex-col h-full bg-gray-900 text-white">
            {/* Chat content */}
            <div className="chat-content flex-grow overflow-y-auto p-4 transition-all duration-500">
                {data.map((chat, index) => (
                    <div key={index} className="message-container mb-4 opacity-100 animate-fadeIn">
                        <ChatSent message={chat.request} />
                       { chat?.response?.score &&<ChatRecived score = {chat?.response?.score}  suggestion={chat?.response?.suggest}/>}
                       
                    </div>
                ))}
                {isLoading &&
                 <div className='flex justify-start mb-4 '>
                    <Loading/>
                 </div>
                 }
                 {
                    isError &&
                    <div><ErrorMessage/></div>
                 }
            </div>

            {/* Input and Send button */}
            <form onSubmit={handleSend}>
                <div className="flex items-center  p-2 mt-auto mb-1">
                    <input
                        type="text"
                        className="w-4/5 p-3 border border-gray-600 rounded-full text-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) =>{ setMessage(e.target.value);  setIsError(false);}}
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
