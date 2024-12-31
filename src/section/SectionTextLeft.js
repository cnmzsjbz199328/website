import React, { useState, useEffect } from 'react';
import styles from './Section.module.css';
import Post from '../components/Post';
import TextToSpeech from '../textToSpeech/TextToSpeech';
import Sudoku from '../game/Sudoku';
import Scrabble from '../game/Scrabble'; 
import TowersOfHanoi from '../game/TowersOfHanoi';

function SectionTextLeft({ postIdtext }) {
    const [textForSpeech, setTextForSpeech] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedGame, setSelectedGame] = useState(null);

    const handleContentLoaded = (content) => {
        setTextForSpeech(content);
    };

    useEffect(() => {
        const games = [<Sudoku key="sudoku" />, <Scrabble key="scrabble" />, <TowersOfHanoi key="towersOfHanoi" />];
        const randomGame = games[Math.floor(Math.random() * games.length)];
        setSelectedGame(randomGame);
    }, []);

    return (
        <div className={styles.section}>
            <div className={styles['text-container']}>
                <Post postId={postIdtext} onContentLoaded={handleContentLoaded} />
                <TextToSpeech text={textForSpeech} />
            </div>
            <div className={styles['empty-container']}>
                {selectedGame}
            </div>
        </div>
    );
}

export default SectionTextLeft;