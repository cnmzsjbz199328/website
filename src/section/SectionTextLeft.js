import React, { useState, useEffect } from 'react';
import './Section.css';
import Post from '../components/Post';
import TextToSpeech from '../textToSpeech/TextToSpeech';
import Sudoku from '../game/Sudoku';
import Scrabble from '../game/Scrabble'; 

function SectionTextLeft({ postIdtext }) {
    const [textForSpeech, setTextForSpeech] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedGame, setSelectedGame] = useState(null);

    // 用于接收 Post 组件传递的内容
    const handleContentLoaded = (content) => {
        setTextForSpeech(content);
    };

    // 随机选择游戏
    useEffect(() => {
        const games = [<Sudoku key="sudoku" />, <Scrabble key="scrabble" />];
        const randomGame = games[Math.floor(Math.random() * games.length)];
        setSelectedGame(randomGame);
    }, []);

    return (
        <div className='section'>
            <div className="text-container">
                <Post postId={postIdtext} onContentLoaded={handleContentLoaded} />
                <TextToSpeech text={textForSpeech} />
            </div>
            <div className="empty-container">
                {/* 随机选择的游戏 */}
                {selectedGame}
            </div>
        </div>
    );
}

export default SectionTextLeft;