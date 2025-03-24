import { Link } from "react-router-dom";

const AITools = () => {
  return (
    <div className="p-6 flex flex-col gap-6 bg-gray-900  items-center text-white">
      <h1 className="text-3xl font-extrabold text-gray-200">AI Tools</h1>
      <nav className="flex flex-col gap-4 w-64">
        <Link 
          to="/" 
          className="px-4 py-2 bg-blue-700 text-white text-center rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
        >
          Grammar Checker
        </Link>
        <Link 
          to="/ai/code-generate" 
          className="px-4 py-2 bg-green-700 text-white text-center rounded-lg shadow-md hover:bg-green-800 transition duration-300"
        >
          Code Generator
        </Link>
        <Link 
          to="/ai/code-explain" 
          className="px-4 py-2 bg-purple-700 text-white text-center rounded-lg shadow-md hover:bg-purple-800 transition duration-300"
        >
          Code Explainer
        </Link>
        <Link 
          to="/ai/prompt" 
          className="px-4 py-2 bg-yellow-700 text-white text-center rounded-lg shadow-md hover:bg-yellow-800 transition duration-300"
        >
          AI Prompt Helper
        </Link>
      </nav>
    </div>
  );
};

export default AITools;