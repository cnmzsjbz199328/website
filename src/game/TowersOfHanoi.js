import React, { useState, useRef } from 'react';
import './TowersOfHanoi.css';

const TowersOfHanoi = () => {
    const [numDisks, setNumDisks] = useState(3); // 默认盘子数量为3
    const [towers, setTowers] = useState([Array.from({ length: numDisks }, (_, i) => numDisks - i), [], []]);
    const [draggedDisk, setDraggedDisk] = useState(null);
    const draggedDiskRef = useRef(null);

    const handleNumDisksChange = (e) => {
        const newNumDisks = parseInt(e.target.value, 10);
        setNumDisks(newNumDisks);
        setTowers([Array.from({ length: newNumDisks }, (_, i) => newNumDisks - i), [], []]);
    };

    const handleDragStart = (disk, towerIndex) => {
        const tower = towers[towerIndex];
        if (tower[tower.length - 1] === disk) { // 只有最上层的盘子可以被拖动
            setDraggedDisk({ disk, towerIndex });
            draggedDiskRef.current = { disk, towerIndex };
        }
    };

    const handleDrop = (towerIndex) => {
        if (draggedDisk) {
            const { disk, towerIndex: fromTowerIndex } = draggedDisk;
            if (isValidMove(disk, towerIndex)) {
                const newTowers = towers.map((tower, index) => {
                    if (index === fromTowerIndex) {
                        return tower.slice(0, tower.length - 1); // 移除顶部盘子
                    } else if (index === towerIndex) {
                        return [...tower, disk]; // 在顶部添加盘子
                    } else {
                        return tower;
                    }
                });
                setTowers(newTowers);
                setDraggedDisk(null);
                draggedDiskRef.current = null;
            }
        }
    };

    const handleTouchStart = (e, disk, towerIndex) => {
        e.preventDefault();
        handleDragStart(disk, towerIndex);
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        if (element && element.classList.contains('tower')) {
            const towerIndex = parseInt(element.getAttribute('data-index'), 10);
            handleDrop(towerIndex);
        }
    };

    const handleTouchEnd = (e) => {
        e.preventDefault();
        setDraggedDisk(null);
        draggedDiskRef.current = null;
    };

    const isValidMove = (disk, towerIndex) => {
        const targetTower = towers[towerIndex];
        return targetTower.length === 0 || disk < targetTower[targetTower.length - 1];
    };

    const isGameWon = towers[2].length === numDisks;

    return (
        <div className="towers-of-hanoi">
            {!isGameWon && <div className="instruction-message">Move all disks to the rightmost tower in order.</div>}
            {isGameWon && <div className="win-message">You won!</div>}
            <div className="towers">
                {towers.map((tower, towerIndex) => (
                    <div
                        key={towerIndex}
                        className="tower"
                        data-index={towerIndex}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleDrop(towerIndex)}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="rod"></div> {/* 添加杆子 */}
                        {tower.map((disk, diskIndex) => (
                            <div
                                key={diskIndex}
                                className="disk"
                                draggable={diskIndex === tower.length - 1} // 只有最上层的盘子可以被拖动
                                onDragStart={() => handleDragStart(disk, towerIndex)}
                                onTouchStart={(e) => handleTouchStart(e, disk, towerIndex)}
                                style={{ width: `${(disk / numDisks) * 100}%`, height: '30px', marginBottom: '5px' }} // 动态计算盘子的宽度
                            >
                                {disk}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="disk-input-container">
                <label htmlFor="numDisks">Number of Disks: </label>
                <input
                    id="numDisks"
                    type="number"
                    min="1"
                    value={numDisks}
                    onChange={handleNumDisksChange}
                />
            </div>
        </div>
    );
};

export default TowersOfHanoi;