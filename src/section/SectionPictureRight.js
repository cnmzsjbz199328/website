import React, { useState } from 'react';
import styles from './Section.module.css';
import Post from '../components/Post';
import TextToSpeech from '../textToSpeech/TextToSpeech';

function SectionPictureRight({ postIdtext, postIdphoto }) {
    const [textForSpeech, setTextForSpeech] = useState('');

    const handleContentLoaded = (content) => {
        setTextForSpeech(content);
    };

    return (
        <div className={styles.section}>
            <div className={styles['text-container']}>
                <Post postId={postIdtext} onContentLoaded={handleContentLoaded} />
                <TextToSpeech text={textForSpeech} />
            </div>
            <div className={styles['image-container']}>
                <Post postId={postIdphoto} />
            </div>
        </div>
    );
}

export default SectionPictureRight;