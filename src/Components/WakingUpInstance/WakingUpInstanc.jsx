// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function WakingUpInstance() {
//   const [dots, setDots] = useState(".");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDots((prev) => (prev.length < 3 ? prev + "." : "."));
//     }, 500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-full  bg-gradient-to-r text-white">
//       <motion.div
//         className="text-2xl font-bold tracking-wide text-green-500 drop-shadow-lg"
//         animate={{ opacity: [0.3, 1, 0.3] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//       >
//         Waking up your instance, please wait{dots}
//       </motion.div>
//       <motion.div
//         className="w-16 h-16 mt-6 border-4 border-green-100 border-dashed rounded-full shadow-lg"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
//       />
//       <div className="mt-4 text-sm text-gray-400 italic">This may take a few moments... Please wait for a few minutes.</div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WakingUpInstance() {
  const [dots, setDots] = useState(".");
  const [loadingOption, setLoadingOption] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const optionInterval = setInterval(() => {
      setLoadingOption((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(optionInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r text-white">
      <motion.div
        className="text-2xl font-bold tracking-wide text-green-500 drop-shadow-lg"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Waking up your instance, please wait{dots}
      </motion.div>
      {loadingOption === 0 && (
        <motion.div
          className="w-16 h-16 mt-6 border-4 border-gray-500 border-dashed rounded-full shadow-lg"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      )}
      {loadingOption === 1 && (
        <motion.div
          className="w-16 h-16 mt-6 border-4 border-gray-500 rounded-full shadow-lg flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <div className="w-8 h-8 bg-gray-500 rounded-full" />
        </motion.div>
      )}
      {loadingOption === 2 && (
        <motion.div className="flex mt-6 space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-gray-500 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      )}
      <div className="mt-4 text-sm text-gray-400 italic">This may take a few moments... Please wait for a few minutes.</div>
    </div>
  );
}