// import React, { useState, useEffect, } from 'react';
// import ChatSent from '../ChatDesign/ChatSent';
// import axios from "axios";
// import { prod_be_url,suggestions} from "../../utils/config.js"
// import Loading from "../Loading/Loading.jsx";
// import ErrorMessage from './ErrorMessage.jsx';

// import GrammarComponent from '../GrammarComponent/GrammarComponent.jsx';

// const LearnGrammarChat = () => {
//    const [message, setMessage] = useState("");
//    const [isLoading, setIsLoading] = useState(false);
//    const [isError, setIsError] = useState(false);
//    const [grammarLearnData, setGrammarLearnData] = useState([]);
//    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//    const [showAll, setShowAll] = useState(false);
//    // Filter suggestions based on input
//    const handleInputChange = (e) => {
//       const value = e.target.value;
//       setMessage(value);

//       if (value.trim() === "") {
//          setFilteredSuggestions([]);
//       } else {
//          const filtered = suggestions.filter(topic =>
//             topic.toLowerCase().includes(value.toLowerCase())
//          );
//          setFilteredSuggestions(filtered);
//       }
//    };


//    const handleSuggestionClick = (suggestion) => {
//       setMessage(suggestion);
//       handleSend(suggestion);
//       setFilteredSuggestions([]);
//    };

//    const handleSend = async (suggestion) => {
//       if (suggestion.trim() === "") return;
//       setMessage("");
//       setFilteredSuggestions([]);



//       const data_id = grammarLearnData.length;
//       try {
//          if (suggestion.trim()) {
//             setGrammarLearnData((prevData) => [
//                ...prevData,
//                { request: suggestion, response: {}, id: data_id }
//             ]);
//             console.log("Message sent:", suggestion);
//             setMessage("");
//             setIsLoading(true);
//             setIsError(false);
//             const token = localStorage.getItem("token") || ""

//             const response = await axios.post(`${prod_be_url}/ai/learn-grammar`,
//                {
//                   text: suggestion,

//                }, {
//                headers: {
//                   Authorization: `Bearer ${token}`
//                }
//             })
//             setGrammarLearnData((prevData) =>
//                prevData.map((item) =>
//                   item.id === data_id ? { ...item, response: response.data.data.response, request: response.data.data.request, _id: response.data.data._id } : item
//                )
//             );
//             console.log(response.data)
//             setIsLoading(false)
//             // navigate(`/chat/${response?.data?.data?.chatHistoryId}`);
//             // chatHistoryApi();
//          }
//       }
//       catch (err) {
//          setIsLoading(false);
//          setIsError(true);
//       }
//    };

//    useEffect(() => {
//       const chatContainer = document.querySelector('.chat-content');
//       if (chatContainer) {
//          chatContainer.scrollTop = chatContainer.scrollHeight;
//       }
//    }, [grammarLearnData]);
//    useEffect(() => {
//       getChatData()
//    }, [])
//    const getChatData = async () => {
//       try {
//          const token = localStorage.getItem("token") || "";
//          const response = await axios.get(`${prod_be_url}/ai/learn-grammar`, {
//             headers: {
//                Authorization: `Bearer ${token}`
//             }
//          });
//          console.log(response.data);
//          let chatDatas = response.data.data;
//          chatDatas = chatDatas.map((data, index) => ({
//             ...data,
//             id: index
//          }));
//          console.log(chatDatas);
//          setGrammarLearnData(chatDatas)
//       } catch (error) {
//          console.log("error", error.message);
//       }
//    }
//    return (
//       <div className="flex flex-col h-full bg-gray-900 text-white">

//          <div className={`chat-content flex-grow overflow-y-auto p-4 transition-all duration-500 `}>

//             {grammarLearnData.map((chat, index) => (
//                <div key={index} className="message-container mb-4 opacity-100 animate-fadeIn">
//                   <ChatSent message={chat.request} />
//                   {chat?.response?.title && <GrammarComponent grammerData={chat} />}
//                </div>))

//             }
//             {isLoading && <div className="flex justify-start mb-4"><Loading /></div>}
//             {isError && <div><ErrorMessage /></div>}
//          </div>

//          <div className={`p-2 flex flex-col mt-auto mb-3 `}>
//             <div>
//                {filteredSuggestions.length > 0 && (
//                   <div className="bg-gray-800 text-white rounded-lg shadow-lg max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700 sm:text-sm md:text-sm">
//                      {filteredSuggestions.slice(0, showAll ? filteredSuggestions.length : 5).map((suggestion, index) => (
//                         <div
//                            key={index}
//                            className="p-2 cursor-pointer hover:bg-gray-700"
//                            onClick={() => handleSuggestionClick(suggestion)}
//                         >
//                            {suggestion}
//                         </div>
//                      ))}
//                      {filteredSuggestions.length > 5 && !showAll && (
//                         <div
//                            className="p-2 text-center text-blue-400 cursor-pointer hover:bg-gray-700"
//                            onClick={() => setShowAll(true)}
//                         >
//                            View All
//                         </div>
//                      )}
//                      {showAll && (
//                         <div
//                            className="p-2 text-center text-red-400 cursor-pointer hover:bg-gray-700"
//                            onClick={() => setShowAll(false)}
//                         >
//                            Show Less
//                         </div>
//                      )}
//                   </div>
//                )}

//             </div>
//             <div className="flex items-center  p-2 mt-auto mb-1">



//                <input
//                   type="text"
//                   className="w-4/5 p-2 border border-gray-600 rounded-full text-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//                   placeholder="Type your topic..."
//                   value={message}
//                   onChange={handleInputChange}
//                />
//             </div>
//          </div>
//       </div>
//    )
// }

// export default LearnGrammarChat

// import React, { useState, useEffect, useRef } from 'react';
// import ChatSent from '../ChatDesign/ChatSent';
// import axios from "axios";
// import { prod_be_url, suggestions } from "../../utils/config.js";
// import Loading from "../Loading/Loading.jsx";
// import ErrorMessage from './ErrorMessage.jsx';
// import GrammarComponent from '../GrammarComponent/GrammarComponent.jsx';

// const LearnGrammarChat = () => {
//    const [message, setMessage] = useState("");
//    const [isLoading, setIsLoading] = useState(false);
//    const [isError, setIsError] = useState(false);
//    const [grammarLearnData, setGrammarLearnData] = useState([]);
//    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//    const [showAll, setShowAll] = useState(false);
//    const chatEndRef = useRef(null);

//    const handleInputChange = (e) => {
//       const value = e.target.value;
//       setMessage(value);

//       if (value.trim() === "") {
//          setFilteredSuggestions([]);
//       } else {
//          const filtered = suggestions.filter(topic =>
//             topic.toLowerCase().includes(value.toLowerCase())
//          );
//          setFilteredSuggestions(filtered);
//       }
//    };

//    const handleSuggestionClick = (suggestion) => {
//       setMessage(suggestion);
//       handleSend(suggestion);
//       setFilteredSuggestions([]);
//    };

//    const handleSend = async (suggestion) => {
//       if (suggestion.trim() === "") return;
//       setMessage("");
//       setFilteredSuggestions([]);

//       const data_id = grammarLearnData.length;
//       try {
//          if (suggestion.trim()) {
//             setGrammarLearnData((prevData) => [
//                ...prevData,
//                { request: suggestion, response: {}, id: data_id }
//             ]);
//             setIsLoading(true);
//             setIsError(false);
//             const token = localStorage.getItem("token") || "";

//             const response = await axios.post(`${prod_be_url}/ai/learn-grammar`,
//                { text: suggestion },
//                { headers: { Authorization: `Bearer ${token}` } }
//             );
//             setGrammarLearnData((prevData) =>
//                prevData.map((item) =>
//                   item.id === data_id ? { ...item, response: response.data.data.response, request: response.data.data.request, _id: response.data.data._id } : item
//                )
//             );
//             setIsLoading(false);
//          }
//       }
//       catch (err) {
//          setIsLoading(false);
//          setIsError(true);
//       }
//    };

//    useEffect(() => {
//       // getChatData();
//    }, []);

//    const getChatData = async () => {
//       try {
//          const token = localStorage.getItem("token") || "";
//          const response = await axios.get(`${prod_be_url}/ai/learn-grammar`, {
//             headers: { Authorization: `Bearer ${token}` }
//          });
//          let chatDatas = response.data.data.map((data, index) => ({ ...data, id: index }));
//          setGrammarLearnData(chatDatas);
//       } catch (error) {
//          console.log("error", error.message);
//       }
//    };

//    useEffect(() => {
//       if (chatEndRef.current) {
//          chatEndRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//    }, [grammarLearnData]);

//    return (
//       <div className="flex flex-col h-full bg-gray-900 text-white">
//          <div className="chat-content flex-grow overflow-y-auto p-4">
//             {grammarLearnData.length === 0 && !isLoading && !isError && (
//                <div className="text-center text-gray-400 text-lg mt-10">Welcome to Learn English Grammar! Start by typing a topic.</div>
//             )}
//             {grammarLearnData.map((chat, index) => (
//                <div key={index} className="message-container mb-4 animate-fadeIn">
//                   <ChatSent message={chat.request} />
//                   {chat?.response?.title && <GrammarComponent grammerData={chat} />}
//                </div>
//             ))}
//             {isLoading && <div className="flex justify-start mb-4"><Loading /></div>}
//             {isError && <div><ErrorMessage /></div>}
//             <div ref={chatEndRef}></div>
//          </div>

//          <div className="p-2 flex flex-col mt-auto mb-3">
//             {filteredSuggestions.length > 0 && (
//                <div className="bg-gray-800 text-white rounded-lg shadow-lg max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
//                   {filteredSuggestions.slice(0, showAll ? filteredSuggestions.length : 5).map((suggestion, index) => (
//                      <div key={index} className="p-2 cursor-pointer hover:bg-gray-700" onClick={() => handleSuggestionClick(suggestion)}>
//                         {suggestion}
//                      </div>
//                   ))}
//                   {filteredSuggestions.length > 5 && !showAll && (
//                      <div className="p-2 text-center text-blue-400 cursor-pointer hover:bg-gray-700" onClick={() => setShowAll(true)}>
//                         View All
//                      </div>
//                   )}
//                   {showAll && (
//                      <div className="p-2 text-center text-red-400 cursor-pointer hover:bg-gray-700" onClick={() => setShowAll(false)}>
//                         Show Less
//                      </div>
//                   )}
//                </div>
//             )}
//             <div className="flex items-center p-2">
//                <input
//                   type="text"
//                   className="w-full p-2 border border-gray-600 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//                   placeholder="Type your topic..."
//                   value={message}
//                   onChange={handleInputChange}
//                />
//             </div>
//          </div>
//       </div>
//    );
// };

// export default LearnGrammarChat;

import React, { useState, useEffect, useRef } from 'react';
import ChatSent from '../ChatDesign/ChatSent';
import axios from "axios";
import { prod_be_url, suggestions } from "../../utils/config.js";
import Loading from "../Loading/Loading.jsx";
import ErrorMessage from './ErrorMessage.jsx';
import GrammarComponent from '../GrammarComponent/GrammarComponent.jsx';

const LearnGrammarChat = () => {
   const [message, setMessage] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [grammarLearnData, setGrammarLearnData] = useState([]);
   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
   const [showAll, setShowAll] = useState(false);
   const chatEndRef = useRef(null);

   const handleInputChange = (e) => {
      const value = e.target.value;
      setMessage(value);

      if (value.trim() === "") {
         setFilteredSuggestions([]);
      } else {
         const filtered = suggestions.filter(topic =>
            topic.toLowerCase().includes(value.toLowerCase())
         );
         setFilteredSuggestions(filtered);
      }
   };

   const handleSuggestionClick = (suggestion) => {
      setMessage(suggestion);
      handleSend(suggestion);
      setFilteredSuggestions([]);
   };

   const handleSend = async (suggestion) => {
      if (suggestion.trim() === "") return;
      setMessage("");
      setFilteredSuggestions([]);

      const data_id = grammarLearnData.length;
      try {
         if (suggestion.trim()) {
            setGrammarLearnData((prevData) => [
               ...prevData,
               { request: suggestion, response: {}, id: data_id }
            ]);
            setIsLoading(true);
            setIsError(false);
            const token = localStorage.getItem("token") || "";

            const response = await axios.post(`${prod_be_url}/ai/learn-grammar`,
               { text: suggestion },
               { headers: { Authorization: `Bearer ${token}` } }
            );
            setGrammarLearnData((prevData) =>
               prevData.map((item) =>
                  item.id === data_id ? { ...item, response: response.data.data.response, request: response.data.data.request, _id: response.data.data._id } : item
               )
            );
            setIsLoading(false);
         }
      }
      catch (err) {
         setIsLoading(false);
         setIsError(true);
      }
   };

   useEffect(() => {
      getChatData();
   }, []);

   const getChatData = async () => {
      try {
         const token = localStorage.getItem("token") || "";
         const response = await axios.get(`${prod_be_url}/ai/learn-grammar`, {
            headers: { Authorization: `Bearer ${token}` }
         });
         let chatDatas = response.data.data.map((data, index) => ({ ...data, id: index }));
         setGrammarLearnData(chatDatas);
      } catch (error) {
         console.log("error", error.message);
      }
   };

   useEffect(() => {
      if (chatEndRef.current) {
         chatEndRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
   }, [grammarLearnData]);

   return (
      <div className="flex flex-col h-full bg-gray-900 text-white">
         <div className="chat-content flex-grow overflow-y-auto p-4">
            {grammarLearnData.length === 0 && !isLoading && !isError && (
               <div className="text-center text-gray-400 text-sm sm:text-base md:text-lg mt-10">Welcome to Learn English Grammar! Start by typing a topic.</div>
            )}
            {grammarLearnData.map((chat, index) => (
               <div key={index} className="message-container mb-4 animate-fadeIn">
                  <ChatSent message={chat.request} />
                  {chat?.response?.title && <GrammarComponent grammerData={chat} />}
               </div>
            ))}
            {isLoading && <div className="flex justify-start mb-4"><Loading /></div>}
            {isError && <div><ErrorMessage /></div>}
            <div ref={chatEndRef}></div>
         </div>

         <div className="p-2 flex flex-col mt-auto mb-3">
            {filteredSuggestions.length > 0 && (
               <div className="bg-gray-800 text-white rounded-lg shadow-lg max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700 text-xs sm:text-sm md:text-base">
                  {filteredSuggestions.slice(0, showAll ? filteredSuggestions.length : 5).map((suggestion, index) => (
                     <div key={index} className="p-2 cursor-pointer hover:bg-gray-700" onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion}
                     </div>
                  ))}
                  {filteredSuggestions.length > 5 && !showAll && (
                     <div className="p-2 text-center text-blue-400 cursor-pointer hover:bg-gray-700" onClick={() => setShowAll(true)}>
                        View All
                     </div>
                  )}
                  {showAll && (
                     <div className="p-2 text-center text-red-400 cursor-pointer hover:bg-gray-700" onClick={() => setShowAll(false)}>
                        Show Less
                     </div>
                  )}
               </div>
            )}
            <div className="flex items-center p-2">
               <input
                  type="text"
                  className="w-full p-2 border border-gray-600 rounded-full bg-gray-700 text-white text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Type your topic..."
                  value={message}
                  onChange={handleInputChange}
               />
            </div>
         </div>
      </div>
   );
};

export default LearnGrammarChat;