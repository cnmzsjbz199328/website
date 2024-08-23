import React, { useState } from 'react';
import TextToSpeech from './textToSpeech/TextToSpeech';

function MainContent() {
  const [content, setContent] = useState("这里是您页面上的内容，也许来自于一个状态或是直接渲染的结果。");

  return (
    <div>
      <TextToSpeech content={content} />
      <p>{content}</p>
    </div>
  );
}

export default MainContent;
