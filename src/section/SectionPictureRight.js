import React, { useState } from 'react';
import './Section.css';
import Post from '../components/Post';
import TextToSpeech from '../textToSpeech/TextToSpeech';

function SectionPictureRight({ postIdtext, postIdphoto }) {
    const [textForSpeech, setTextForSpeech] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleContentLoaded = (content) => {
        setTextForSpeech(content);
    };

    return (
        <div className='section'>
            <div className="text-container">
                <Post postId={postIdtext} onContentLoaded={handleContentLoaded} />
                <TextToSpeech text={textForSpeech} />
            </div>
            <div className="image-container">
                <Post postId={postIdphoto} />
            </div>
        </div>
    );
}

export default SectionPictureRight;