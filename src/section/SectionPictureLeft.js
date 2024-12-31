import React, { useState } from 'react';
import styles from './Section.module.css';
import Post from '../components/Post';
import TextToSpeech from '../textToSpeech/TextToSpeech';

function SectionPictureLeft({ postIdphoto, postIdtext }) {
    const [textForSpeech, setTextForSpeech] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleContentLoaded = (content) => {
        setTextForSpeech(content);
    };

    return (
        <div className={styles.section}>
            <div className={styles['image-container']}>
                <Post postId={postIdphoto} />
            </div>
            <div className={styles['text-container']}>
                <Post postId={postIdtext} onContentLoaded={handleContentLoaded} />
                <TextToSpeech text={textForSpeech} />
            </div>
        </div>
    );
}

export default SectionPictureLeft;
