import React, { useState } from 'react';
import './TextToSpeech.css';

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (textToSpeak) => {
    const synth = window.speechSynthesis;

    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      synth.speak(utterance);
      setIsSpeaking(true);

      utterance.onend = () => {
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