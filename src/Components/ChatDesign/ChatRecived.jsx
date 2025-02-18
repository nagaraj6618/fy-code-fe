import React from "react";

const ChatRecived = ({ message, score, suggestion }) => {
  return (
    <div className="flex justify-start mb-4 animate-fade-ins">
      <div className="bg-gradient-to-r from-gray-400 to-gray-300 text-black p-4 rounded-lg max-w-md shadow-md">
        <p className="text-gray-900 text-base mb-2">
          <span className="font-semibold text-blue-700">Score:</span> {score}
        </p>
        <p className="text-gray-900 text-base">
          <span className="font-semibold text-green-700">Suggestion:</span> {suggestion}
        </p>
      </div>
    </div>
  );
};

export default ChatRecived;
