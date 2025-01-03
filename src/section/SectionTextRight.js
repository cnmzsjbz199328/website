import React, { useState } from 'react';
import styles from './Section.module.css';
import Post from '../components/Post';
import TextToSpeech from '../textToSpeech/TextToSpeech';

function SectionTextRight({ postIdtext, children }) {
    const [textForSpeech, setTextForSpeech] = useState('');

    const handleContentLoaded = (content) => {
        setTextForSpeech(content);
    };

    return (
        <div className={styles.section}>
            <div className={styles['empty-container']}>
                {children}
            </div>
            <div className={styles['text-container']}>
                <Post postId={postIdtext} onContentLoaded={handleContentLoaded} />
                <TextToSpeech text={textForSpeech} />
            </div>
        </div>
    );
}

export default SectionTextRight;