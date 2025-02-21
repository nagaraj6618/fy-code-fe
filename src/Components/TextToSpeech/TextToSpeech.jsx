import React, { useState, useEffect } from "react";
import { Volume2, Pause } from "lucide-react";

const TextToSpeech = ({ text }) => {
  const [voices, setVoices] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speech, setSpeech] = useState(null);

  useEffect(() => {
    const updateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };
    window.speechSynthesis.onvoiceschanged = updateVoices;
    updateVoices();
  }, []);

  const handlePlayPause = () => {
    if (!text.trim()) return;
    
    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else {
      if (speech && window.speechSynthesis.speaking) {
        window.speechSynthesis.resume();
      } else {
        const newSpeech = new SpeechSynthesisUtterance(text);
        newSpeech.lang = "en-US";
        const maleVoice = voices.find(v => v.name.toLowerCase().includes("male")) || voices[0];
        if (maleVoice) {
          newSpeech.voice = maleVoice;
        }
        newSpeech.onend = () => setIsPlaying(false);
        setSpeech(newSpeech);
        window.speechSynthesis.speak(newSpeech);
      }
      setIsPlaying(true);
    }
  };

  return (
    <div >
      
      <button
  onClick={handlePlayPause}
  className={`flex mt-1 items-center justify-center w-8 h-8 transition duration-300  hover:scale-110 ${isPlaying?"bg-red-600":""}  text-white rounded-full`}
>
  {isPlaying ? <Pause size={18} className="" /> : <Volume2 size={18} className="text-black" />}
</button>
    </div>
  );
};

export default TextToSpeech;
