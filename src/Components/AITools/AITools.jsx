// import { Link } from "react-router-dom";

// const AITools = () => {
//   return (
//     <div className="p-6 flex flex-col gap-6 bg-gray-900 min-h-screen items-center text-white">
//       <h1 className="text-3xl font-extrabold text-gray-200">AI Tools</h1>
//       <nav className="flex flex-col gap-4 w-64">
//         <Link 
//           to="/" 
//           className="px-4 py-2 bg-blue-700 text-white text-center rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
//         >
//           Grammar Checker
//         </Link>
//         <Link 
//           to="/ai/learn-grammar" 
//           className="px-4 py-2 bg-red-700 text-white text-center rounded-lg shadow-md hover:bg-red-800 transition duration-300"
//         >
//           Learn Grammar
//         </Link>
//         <Link 
//           to="/ai/code-generate" 
//           className="px-4 py-2 bg-green-700 text-white text-center rounded-lg shadow-md hover:bg-green-800 transition duration-300"
//         >
//           Code Generator
//         </Link>
//         <Link 
//           to="/ai/code-explain" 
//           className="px-4 py-2 bg-purple-700 text-white text-center rounded-lg shadow-md hover:bg-purple-800 transition duration-300"
//         >
//           Code Explainer
//         </Link>
//         <Link 
//           to="/ai/prompt" 
//           className="px-4 py-2 bg-yellow-700 text-white text-center rounded-lg shadow-md hover:bg-yellow-800 transition duration-300"
//         >
//           AI Prompt Helper
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default AITools;

import { Link } from "react-router-dom";

const AITools = () => {
  return (
    <div className="p-6 flex flex-col gap-6 bg-gray-900  items-center text-white">
      <h1 className="text-3xl font-extrabold text-gray-200">AI Tools</h1>
      <p className="text-gray-400 text-center max-w-lg">
        Explore our AI-powered tools designed to enhance your writing and coding experience. Whether you need help with grammar, learning new concepts, or generating and explaining code, we've got you covered!
      </p>
      <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-blue-700 p-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 text-center">
          <Link to="/" className="text-white font-bold text-xl block mb-2">Grammar Checker</Link>
          <p className="text-gray-200">Improve your writing with AI-driven grammar corrections.</p>
        </div>
        <div className="bg-red-700 p-6 rounded-lg shadow-md hover:bg-red-800 transition duration-300 text-center">
          <Link to="/ai/learn-grammar" className="text-white font-bold text-xl block mb-2">Learn Grammar</Link>
          <p className="text-gray-200">Master grammar rules with interactive lessons.</p>
        </div>
        <div className="bg-green-700 p-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300 text-center">
          <Link to="/ai/code-generate" className="text-white font-bold text-xl block mb-2">Code Generator</Link>
          <p className="text-gray-200">Automatically generate code snippets with AI.</p>
        </div>
        <div className="bg-purple-700 p-6 rounded-lg shadow-md hover:bg-purple-800 transition duration-300 text-center">
          <Link to="/ai/code-explain" className="text-white font-bold text-xl block mb-2">Code Explainer</Link>
          <p className="text-gray-200">Understand complex code with AI-powered explanations.</p>
        </div>
        <div className="bg-yellow-700 p-6 rounded-lg shadow-md hover:bg-yellow-800 transition duration-300 text-center">
          <Link to="/ai/prompt" className="text-white font-bold text-xl block mb-2">AI Prompt Helper</Link>
          <p className="text-gray-200">Enhance your AI-generated prompts for better results.</p>
        </div>
      </nav>
    </div>
  );
};

export default AITools;