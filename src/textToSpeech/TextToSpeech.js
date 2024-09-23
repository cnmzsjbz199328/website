import React, { useState, useEffect } from 'react';
import './TextToSpeech.css';

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {}, [text]);

  const speak = (textToSpeak) => {
    const synth = window.speechSynthesis;

    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    } else {
      if (!textToSpeak) {
        return;
      }

      const utterance = new SpeechSynthesisUtterance(textToSpeak);

      synth.speak(utterance);
      setIsSpeaking(true);

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };
    }
  };

  return (
    <button onClick={() => speak(text)}>
      {isSpeaking ? 'Stop' : 'Speak'}
    </button>
  );
};

export default TextToSpeech;