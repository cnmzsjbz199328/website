import React, { useState } from 'react';
import './Scrabble.css';

const initialBoard = Array(9).fill(''); // 初始化为一个9格的棋盘
const initialLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // 初始字母区

function Scrabble() {
    const [board, setBoard] = useState(initialBoard);
    const [letters, setLetters] = useState(initialLetters);

    const handleDragStart = (event, index, isBoard) => {
        event.dataTransfer.setData('application/reactflow', index);
        event.dataTransfer.setData('application/source', isBoard ? 'board' : 'letters');
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, index, targetIsBoard) => {
        event.preventDefault();
        const sourceIndex = event.dataTransfer.getData('application/reactflow');
        const sourceIsBoard = event.dataTransfer.getData('application/source') === 'board';

        let newBoard = [...board];
        let newLetters = [...letters];

        if (sourceIsBoard) {
            if (targetIsBoard) {
                [newBoard[index], newBoard[sourceIndex]] = [newBoard[sourceIndex], newBoard[index]];
            } else {
                newLetters.push(newBoard[sourceIndex]);
                newBoard[sourceIndex] = '';
            }
        } else {
            if (targetIsBoard) {
                newBoard[index] = letters[sourceIndex];
                newLetters.splice(sourceIndex, 1);
            }
        }

        setBoard(newBoard);
        setLetters(newLetters);
    };

    const handleSubmit = () => {
        const word = board.join('');
        alert(`你提交的单词是: ${word}`);
    };

    const handleReset = () => {
        setBoard(initialBoard);
        setLetters(initialLetters);
    };

    return (
        <div className="scrabble-container">
            <div className="board">
                {board.map((cell, index) => (
                    <div
                        key={index}
                        className="cell"
                        onDragOver={handleDragOver}
                        onDrop={(event) => handleDrop(event, index, true)}
                        draggable={cell !== ''}
                        onDragStart={(event) => handleDragStart(event, index, true)}
                    >
                        {cell}
                    </div>
                ))}
            </div>
            <div className="letters">
                {letters.map((letter, index) => (
                    <div
                        key={index}
                        className="letter"
                        draggable
                        onDragStart={(event) => handleDragStart(event, index, false)}
                    >
                        {letter}
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit}>submit</button>
            <button onClick={handleReset} className="reset-button">restart</button>
        </div>
    );
}

export default Scrabble;
