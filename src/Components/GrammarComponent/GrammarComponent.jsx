// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const grammarTopics = [
//   {
//     title: "Nouns",
//     notes: "Nouns are words that name a person, place, thing, or idea.",
//     examples: [
//       "The cat is sleeping.",
//       "John is a good student.",
//       "Paris is a beautiful city.",
//       "She has a new book.",
//       "The sun is shining brightly.",
//       "I love Italian food.",
//       "The river flows through the valley.",
//       "Science is an interesting subject.",
//       "My friend bought a new phone.",
//       "There is a park near my house."
//     ],
//     quiz: [
//       { question: "What is the noun in: 'The dog barked loudly.'", options: ["dog", "barked", "loudly"], answer: "dog" }
//     ]
//   },
//   // Add more topics like Verbs, Adjectives, etc.
// ];

// const GrammarNotes = () => {
//   const [selectedTopic, setSelectedTopic] = useState(grammarTopics[0]);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [feedback, setFeedback] = useState("");

//   const handleAnswerClick = (option, correctAnswer) => {
//     if (option === correctAnswer) {
//       setFeedback("Correct! ✅");
//     } else {
//       setFeedback("Wrong! ❌ Try again.");
//     }
//     setSelectedAnswer(option);
//   };
  
//   return (
//     <div className="p-6">
//       <div className="flex space-x-4 border-b pb-2">
//         {grammarTopics.map((topic) => (
//           <button key={topic.title} onClick={() => { setSelectedTopic(topic); setFeedback(""); }} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">{topic.title}</button>
//         ))}
//       </div>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//         <div className="mt-4 p-4 border rounded-lg shadow">
//           <h2 className="text-xl font-bold">{selectedTopic.title}</h2>
//           <p className="mt-2">{selectedTopic.notes}</p>
//           <h3 className="mt-4 font-semibold">Examples:</h3>
//           <ul className="list-disc pl-5">
//             {selectedTopic.examples.map((example, index) => (
//               <li key={index}>{example}</li>
//             ))}
//           </ul>
//           <h3 className="mt-4 font-semibold">Quiz:</h3>
//           {selectedTopic.quiz.map((q, index) => (
//             <div key={index} className="mt-2">
//               <p>{q.question}</p>
//               {q.options.map((option, i) => (
//                 <button 
//                   key={i} 
//                   onClick={() => handleAnswerClick(option, q.answer)} 
//                   className={`m-1 px-4 py-2 rounded ${selectedAnswer === option ? (option === q.answer ? 'bg-green-500' : 'bg-red-500') : 'bg-blue-500'} text-white hover:opacity-80`}>
//                   {option}
//                 </button>
//               ))}
//               {feedback && <p className="mt-2 font-semibold">{feedback}</p>}
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default GrammarNotes;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const grammarTopics = [
//    {
//      request:"Nouns",
//      "response": {
//          "title": "Active and Passive Voice",
//          "notes": "Active and passive voice describe the relationship between the subject and the verb in a sentence.  In active voice, the subject performs the action. In passive voice, the subject receives the action.",
//          "examples": [
//              {
//                  "sentence": "The dog <strong class='text-blue-500'>chased</strong> the ball.",
//                  "explanation": "Active voice. The dog (subject) is performing the action (chasing).",
//                  "_id": "67e1ae11b6e1604e5eef9a6f"
//              },
//              {
//                  "sentence": "The ball <strong class='text-blue-500'>was chased</strong> by the dog.",
//                  "explanation": "Passive voice. The ball (subject) is receiving the action (being chased).",
//                  "_id": "67e1ae11b6e1604e5eef9a70"
//              },
//              {
//                  "sentence": "She <strong class='text-blue-500'>wrote</strong> a letter.",
//                  "explanation": "Active voice. She (subject) is performing the action (writing).",
//                  "_id": "67e1ae11b6e1604e5eef9a71"
//              },
//              {
//                  "sentence": "A letter <strong class='text-blue-500'>was written</strong> by her.",
//                  "explanation": "Passive voice. The letter (subject) is receiving the action (being written).",
//                  "_id": "67e1ae11b6e1604e5eef9a72"
//              },
//              {
//                  "sentence": "The chef <strong class='text-blue-500'>prepared</strong> the meal.",
//                  "explanation": "Active voice. The chef (subject) is performing the action (preparing).",
//                  "_id": "67e1ae11b6e1604e5eef9a73"
//              },
//              {
//                  "sentence": "The meal <strong class='text-blue-500'>was prepared</strong> by the chef.",
//                  "explanation": "Passive voice. The meal (subject) is receiving the action (being prepared).",
//                  "_id": "67e1ae11b6e1604e5eef9a74"
//              },
//              {
//                  "sentence": "They <strong class='text-blue-500'>painted</strong> the house.",
//                  "explanation": "Active voice. They (subject) are performing the action (painting).",
//                  "_id": "67e1ae11b6e1604e5eef9a75"
//              },
//              {
//                  "sentence": "The house <strong class='text-blue-500'>was painted</strong> by them.",
//                  "explanation": "Passive voice. The house (subject) is receiving the action (being painted).",
//                  "_id": "67e1ae11b6e1604e5eef9a76"
//              },
//              {
//                  "sentence": "He <strong class='text-blue-500'>read</strong> the book.",
//                  "explanation": "Active voice. He (subject) is performing the action (reading).",
//                  "_id": "67e1ae11b6e1604e5eef9a77"
//              },
//              {
//                  "sentence": "The book <strong class='text-blue-500'>was read</strong> by him.",
//                  "explanation": "Passive voice. The book (subject) is receiving the action (being read).",
//                  "_id": "67e1ae11b6e1604e5eef9a78"
//              },
//              {
//                  "sentence": "The thief <strong class='text-blue-500'>stole</strong> the car.",
//                  "explanation": "Active voice. The thief (subject) is performing the action (stealing).",
//                  "_id": "67e1ae11b6e1604e5eef9a79"
//              },
//              {
//                  "sentence": "The car <strong class='text-blue-500'>was stolen</strong> by the thief.",
//                  "explanation": "Passive voice. The car (subject) is receiving the action (being stolen).",
//                  "_id": "67e1ae11b6e1604e5eef9a7a"
//              }
//          ],
//          "quiz": [
//              {
//                  "question": "Identify the voice in the sentence: 'The cake was baked by John.'",
//                  "options": [
//                      "Active",
//                      "Passive"
//                  ],
//                  "answer": "Passive",
//                  "_id": "67e1ae11b6e1604e5eef9a7b"
//              },
//              {
//                  "question": "Which sentence is in the active voice?",
//                  "options": [
//                      "The letter was written by Mary.",
//                      "Mary wrote the letter."
//                  ],
//                  "answer": "Mary wrote the letter.",
//                  "_id": "67e1ae11b6e1604e5eef9a7c"
//              }
//          ]
     
//    }
// },
// ];

// const GrammarNotes = ({grammerData}) => {
//   const [selectedTopic, setSelectedTopic] = useState(grammarTopics);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [feedback, setFeedback] = useState("");

//   const handleAnswerClick = (option, correctAnswer) => {
//     if (option === correctAnswer) {
//       setFeedback("Correct! ✅");
//     } else {
//       setFeedback("Wrong! ❌ Try again.");
//     }
//     setSelectedAnswer(option);
//   };
  
//   return (
//     <div className="p-6">
//       <div className="flex space-x-4 border-b pb-2">
//         {grammarTopics.map((topic) => (
//           <button key={topic.title} onClick={() => { setSelectedTopic(topic); setFeedback(""); }} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">{topic.title}</button>
//         ))}
//       </div>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//         <div className="mt-4 p-4 border rounded-lg shadow">
//           <h2 className="text-xl font-bold">{selectedTopic.title}</h2>
//           <p className="mt-2">{selectedTopic.notes}</p>
//           <h3 className="mt-4 font-semibold">Examples:</h3>
//           <ul className="list-disc pl-5">
//             {selectedTopic.examples.map((example, index) => (
//               <li key={index} dangerouslySetInnerHTML={{ __html: example.sentence }}></li>
//             ))}
//           </ul>
//           <h3 className="mt-4 font-semibold">Quiz:</h3>
//           {selectedTopic.quiz.map((q, index) => (
//             <div key={index} className="mt-2">
//               <p>{q.question}</p>
//               {q.options.map((option, i) => (
//                 <button 
//                   key={i} 
//                   onClick={() => handleAnswerClick(option, q.answer)} 
//                   className={`m-1 px-4 py-2 rounded ${selectedAnswer === option ? (option === q.answer ? 'bg-green-500' : 'bg-red-500') : 'bg-blue-500'} text-white hover:opacity-80`}>
//                   {option}
//                 </button>
//               ))}
//               {feedback && <p className="mt-2 font-semibold">{feedback}</p>}
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default GrammarNotes;


import React, { useState } from "react";
import { motion } from "framer-motion";

const GrammarNotes = ({grammerData}) => {
  const [selectedTopic, setSelectedTopic] = useState(grammerData);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerClick = (questionId, option, correctAnswer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: { selected: option, isCorrect: option === correctAnswer },
    }));
  };

  const handleClearSelection = (questionId) => {
    setSelectedAnswers((prev) => {
      const updatedAnswers = { ...prev };
      delete updatedAnswers[questionId];
      return updatedAnswers;
    });
  };

  return (
   //  <div className="p-6">
      
   //    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
   //      <div className="mt-4 p-4 border rounded-lg shadow">
   //        <h2 className="text-xl font-bold">{selectedTopic.response.title}</h2>
   //        <p className="mt-2">{selectedTopic.response.notes}</p>
   //        <h3 className="mt-4 font-semibold">Examples:</h3>
   //        <ul className="list-disc pl-5">
   //          {selectedTopic.response.examples.map((example, index) => (
   //            <li key={index} dangerouslySetInnerHTML={{ __html: example.sentence }}></li>
   //          ))}
   //        </ul>
   //        <h3 className="mt-4 font-semibold">Quiz:</h3>
   //        {selectedTopic.response.quiz.map((q) => (
   //          <div key={q._id} className="mt-2">
   //            <p>{q.question}</p>
   //            {q.options.map((option, i) => {
   //              const answerState = selectedAnswers[q._id];
   //              const isSelected = answerState?.selected === option;
   //              const isCorrect = answerState?.isCorrect;
   //              const isDisabled = answerState !== undefined; // Disable other options after selection

   //              return (
   //                <button
   //                  key={i}
   //                  onClick={() => handleAnswerClick(q._id, option, q.answer)}
   //                  className={`m-1 px-4 py-2 rounded ${
   //                    isSelected ? (isCorrect ? "bg-green-500" : "bg-red-500") : isDisabled ?"bg-gray-500 opacity-0.2" :"bg-blue-500"
   //                  } text-white hover:opacity-80`}
   //                  disabled={isDisabled}
   //                >
   //                  {option}
   //                </button>
   //              );
   //            })}
   //            {selectedAnswers[q._id] && (
   //              <div className="mt-2">
   //                <p className="font-semibold">
   //                  {selectedAnswers[q._id].isCorrect ? "Correct! ✅" : "Wrong! ❌ Try again."}
   //                </p>
   //                <button
   //                  onClick={() => handleClearSelection(q._id)}
   //                  className="mt-1 px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
   //                >
   //                  Clear Selection
   //                </button>
   //              </div>
   //            )}
   //          </div>
   //        ))}
   //      </div>
   //    </motion.div>
   //  </div>

   <div className="p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="mt-4 p-4 border rounded-lg shadow">
          <h2 className="text-lg md:text-xl font-bold">{selectedTopic.response.title}</h2>
          <p className="mt-2 text-sm md:text-base">{selectedTopic.response.notes}</p>
          <h3 className="mt-4 font-semibold text-base md:text-lg">Examples:</h3>
          <ul className="list-disc pl-5 text-sm md:text-base">
            {selectedTopic.response.examples.map((example, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: example.sentence }}></li>
            ))}
          </ul>
          <h3 className="mt-4 font-semibold text-base md:text-lg">Quiz:</h3>
          {selectedTopic.response.quiz.map((q) => (
            <div key={q._id} className="mt-2">
              <p className="text-sm md:text-base">{q.question}</p>
              {q.options.map((option, i) => {
                const answerState = selectedAnswers[q._id];
                const isSelected = answerState?.selected === option;
                const isCorrect = answerState?.isCorrect;
                const isDisabled = answerState !== undefined;

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswerClick(q._id, option, q.answer)}
                    className={`m-1 px-4 py-2 rounded text-sm md:text-base ${
                      isSelected ? (isCorrect ? "bg-green-500" : "bg-red-500") : isDisabled ? "bg-gray-500 opacity-50" : "bg-blue-500"
                    } text-white hover:opacity-80`}
                    disabled={isDisabled}
                  >
                    {option}
                  </button>
                );
              })}
              {selectedAnswers[q._id] && (
                <div className="mt-2">
                  <p className="font-semibold text-sm md:text-base">
                    {selectedAnswers[q._id].isCorrect ? "Correct! ✅" : "Wrong! ❌ Try again."}
                  </p>
                  <button
                    onClick={() => handleClearSelection(q._id)}
                    className="mt-1 px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 text-sm md:text-base"
                  >
                    Clear Selection
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GrammarNotes;
