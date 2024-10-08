import React, { useState } from 'react';
import './Sudoku.css';

const initialBoard = [
    [
        [5, 3, '', '', 7, '', '', '', ''],
        [6, '', '', 1, 9, 5, '', '', ''],
        ['', 9, 8, '', '', '', '', 6, ''],
        [8, '', '', '', 6, '', '', '', 3],
        [4, '', '', 8, '', 3, '', '', 1],
        [7, '', '', '', 2, '', '', '', 6],
        ['', 6, '', '', '', '', 2, 8, ''],
        ['', '', '', 4, 1, 9, '', '', 5],
        ['', '', '', '', 8, '', '', 7, 9]
    ],
    [
        ['', '', '', 2, 6, '', 7, '', 1],
        [6, 8, '', '', 7, '', '', 9, ''],
        [1, 9, '', '', '', 4, 5, '', ''],
        [8, 2, '', 1, '', '', '', 4, ''],
        ['', '', 4, 6, '', 2, 9, '', ''],
        ['', 5, '', '', '', 3, '', 2, 8],
        ['', '', 9, 3, '', '', '', 7, 4],
        ['', 4, '', '', 5, '', '', 3, 6],
        [7, '', 3, '', 1, 8, '', '', '']
    ],
    [
        ['', '', '', '', '', '', '', '', ''],
        [6, '', '', 1, 9, 5, '', '', ''],
        ['', 9, 8, '', '', '', '', 6, ''],
        [8, '', '', '', 6, '', '', '', 3],
        [4, '', '', 8, '', 3, '', '', 1],
        [7, '', '', '', 2, '', '', '', 6],
        ['', 6, '', '', '', '', 2, 8, ''],
        ['', '', '', 4, 1, 9, '', '', 5],
        ['', '', '', '', 8, '', '', 7, 9]
    ],
    [
        [1, '', '', 4, 8, '', '', '', 6],
        ['', 7, '', '', '', 3, '', 9, ''],
        ['', '', 2, '', '', '', 1, '', ''],
        ['', '', '', 6, '', '', '', '', 3],
        [8, '', '', '', '', '', '', '', 5],
        [4, '', '', '', '', 1, '', '', ''],
        ['', '', 5, '', '', '', 9, '', ''],
        ['', 3, '', 7, '', '', '', 6, ''],
        [9, '', '', '', 5, 2, '', '', 8]
    ],
    [
        ['', '', '', '', '', '', '', '', ''],
        [6, '', '', 1, 9, 5, '', '', ''],
        ['', 9, 8, '', '', '', '', 6, ''],
        [8, '', '', '', 6, '', '', '', 3],
        [4, '', '', 8, '', 3, '', '', 1],
        [7, '', '', '', 2, '', '', '', 6],
        ['', 6, '', '', '', '', 2, 8, ''],
        ['', '', '', 4, 1, 9, '', '', 5],
        ['', '', '', '', 8, '', '', 7, 9]
    ],
    [
        [5, 3, '', '', 7, '', '', '', ''],
        [6, '', '', 1, 9, 5, '', '', ''],
        ['', 9, 8, '', '', '', '', 6, ''],
        [8, '', '', '', 6, '', '', '', 3],
        [4, '', '', 8, '', 3, '', '', 1],
        [7, '', '', '', 2, '', '', '', 6],
        ['', 6, '', '', '', '', 2, 8, ''],
        ['', '', '', 4, 1, 9, '', '', 5],
        ['', '', '', '', 8, '', '', 7, 9]
    ],
    [
        ['', '', '', 2, 6, '', 7, '', 1],
        [6, 8, '', '', 7, '', '', 9, ''],
        [1, 9, '', '', '', 4, 5, '', ''],
        [8, 2, '', 1, '', '', '', 4, ''],
        ['', '', 4, 6, '', 2, 9, '', ''],
        ['', 5, '', '', '', 3, '', 2, 8],
        ['', '', 9, 3, '', '', '', 7, 4],
        ['', 4, '', '', 5, '', '', 3, 6],
        [7, '', 3, '', 1, 8, '', '', '']
    ],
    [
        ['', '', '', '', '', '', '', '', ''],
        [6, '', '', 1, 9, 5, '', '', ''],
        ['', 9, 8, '', '', '', '', 6, ''],
        [8, '', '', '', 6, '', '', '', 3],
        [4, '', '', 8, '', 3, '', '', 1],
        [7, '', '', '', 2, '', '', '', 6],
        ['', 6, '', '', '', '', 2, 8, ''],
        ['', '', '', 4, 1, 9, '', '', 5],
        ['', '', '', '', 8, '', '', 7, 9]
    ],
    [
        [1, '', '', 4, 8, '', '', '', 6],
        ['', 7, '', '', '', 3, '', 9, ''],
        ['', '', 2, '', '', '', 1, '', ''],
        ['', '', '', 6, '', '', '', '', 3],
        [8, '', '', '', '', '', '', '', 5],
        [4, '', '', '', '', 1, '', '', ''],
        ['', '', 5, '', '', '', 9, '', ''],
        ['', 3, '', 7, '', '', '', 6, ''],
        [9, '', '', '', 5, 2, '', '', 8]
    ],
    [
        ['', '', '', '', '', '', '', '', ''],
        [6, '', '', 1, 9, 5, '', '', ''],
        ['', 9, 8, '', '', '', '', 6, ''],
        [8, '', '', '', 6, '', '', '', 3],
        [4, '', '', 8, '', 3, '', '', 1],
        [7, '', '', '', 2, '', '', '', 6],
        ['', 6, '', '', '', '', 2, 8, ''],
        ['', '', '', 4, 1, 9, '', '', 5],
        ['', '', '', '', 8, '', '', 7, 9]
    ],
    [
        [5, 3, '', '', 7, '', '', '', ''],
        [6, '', '', 1, 9, 5, '', '', ''],
        ['', 9, 8, '', '', '', '', 6, ''],
        [8, '', '', '', 6, '', '', '', 3],
        [4, '', '', 8, '', 3, '', '', 1],
        [7, '', '', '', 2, '', '', '', 6],
        ['', 6, '', '', '', '', 2, 8, ''],
        ['', '', '', 4, 1, 9, '', '', 5],
        ['', '', '', '', 8, '', '', 7, 9]
    ],
    [
        ['', '', '', 2, 6, '', 7, '', 1],
        [6, 8, '', '', 7, '', '', 9, ''],
        [1, 9, '', '', '', 4, 5, '', ''],
        [8, 2, '', 1, '', '', '', 4, ''],
        ['', '', 4, 6, '', 2, 9, '', ''],
        ['', 5, '', '', '', 3, '', 2, 8],
        ['', '', 9, 3, '', '', '', 7, 4],
        ['', 4, '', '', 5, '', '', 3, 6],
        [7, '', 3, '', 1, 8, '', '', '']
    ]
];

function getRandomBoard() {
    const randomIndex = Math.floor(Math.random() * initialBoard.length);
    const board = initialBoard[randomIndex];
    return board.map(row => row.map(cell => ({ value: cell, editable: cell === '' })));
}

function Sudoku() {
    const [board, setBoard] = useState(getRandomBoard());
    const [selectedCell, setSelectedCell] = useState(null);

    const handleChange = (rowIndex, colIndex, value) => {
        const newBoard = board.map((row, rIdx) =>
            row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? { ...cell, value } : cell))
        );
        setBoard(newBoard);
    };

    const handleCellClick = (rowIndex, colIndex) => {
        if (!board[rowIndex][colIndex].editable) {
            return; // 忽略固定单元格的点击
        }
        setSelectedCell({ rowIndex, colIndex });
    };

    const handleNumberClick = (number) => {
        if (selectedCell) {
            handleChange(selectedCell.rowIndex, selectedCell.colIndex, number);
        }
    };

    return (
        <div className="sudoku-container">
            <table id="sudoku-board">
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={`${!cell.editable ? 'fixed' : ''} ${selectedCell && selectedCell.rowIndex === rowIndex && selectedCell.colIndex === colIndex ? 'selected' : ''}`}
                                    onClick={() => handleCellClick(rowIndex, colIndex)}
                                >
                                    {cell.value !== '' ? (
                                        cell.value
                                    ) : (
                                        <span>{cell.value || ''}</span>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="number-buttons">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                    <button key={number} onClick={() => handleNumberClick(number)}>
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Sudoku;