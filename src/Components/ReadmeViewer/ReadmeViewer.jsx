// import React from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// const ReadmeViewer = ({ content }) => {
//   return (
//     <div className="p-4 min-w-[50vw] bg-gray-900 text-white rounded-xl shadow-lg">
//       <ReactMarkdown
//         children={content}
//         remarkPlugins={[remarkGfm]}
//         rehypePlugins={[rehypeRaw]}
//         components={{
//           code({ node, inline, className, children, ...props }) {
//             const match = /language-(\w+)/.exec(className || "");
//             return !inline && match ? (
//               <SyntaxHighlighter
//                 style={oneDark}
//                 language={match[1]}
//                 PreTag="div"
//                 {...props}
//               >
//                 {String(children).replace(/\n$/, "")}
//               </SyntaxHighlighter>
//             ) : (
//               <code className="bg-gray-800 p-1 rounded text-sm" {...props}>{children}</code>
//             );
//           },
//           h1: ({ children }) => <h1 className="text-2xl font-bold my-4">{children}</h1>,
//           h2: ({ children }) => <h2 className="text-xl font-semibold my-3">{children}</h2>,
//           h3: ({ children }) => <h3 className="text-lg font-medium my-2">{children}</h3>,
//           p: ({ children }) => <p className="text-base my-2">{children}</p>,
//           li: ({ children }) => <li className="ml-4 list-disc">{children}</li>,
//           pre: ({ children }) => <pre className="bg-gray-800 p-3 rounded my-2 overflow-auto">{children}</pre>
//         }}
//       />
//     </div>
//   );
// };

// export default ReadmeViewer;


import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";

const ReadmeViewer = ({ content }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-4 min-w-[50vw] bg-gray-900 text-white rounded-xl shadow-lg text-left">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const codeString = String(children).replace(/\n$/, "");
            return !inline && match ? (
              <div className="relative w-full">
                <button
                  onClick={() => copyToClipboard(codeString)}
                  className="absolute top-2 right-2 bg-gray-700 p-1 rounded text-white hover:bg-gray-600"
                >
                  <Copy size={16} />
                </button>
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  className="w-full"
                  {...props}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className="bg-gray-800 p-1 rounded text-sm" {...props}>{children}</code>
            );
          },
          h1: ({ children }) => <h1 className="text-2xl font-bold my-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-xl font-semibold my-3">{children}</h2>,
          h3: ({ children }) => <h3 className="text-lg font-medium my-2">{children}</h3>,
          p: ({ children }) => <p className="text-base my-2">{children}</p>,
          li: ({ children }) => <li className="ml-4 list-disc">{children}</li>,
          pre: ({ children }) => <pre className="bg-gray-800 p-3 rounded my-2 overflow-auto w-full">{children}</pre>
        }}
      />
    </div>
  );
};

export default ReadmeViewer;