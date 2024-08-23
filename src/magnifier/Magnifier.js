import React, { useState, useRef } from 'react';
import '../magnifier/Magnifier.css'; // 确保有适当的CSS样式


function Magnifier() {
    const [isActive, setIsActive] = useState(false);
    const magnifierRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!isActive) return;
        const { clientX, clientY } = event;
        const magnifier = magnifierRef.current;
        const { width, height } = magnifier.getBoundingClientRect();
        
        // Setting the position of the magnifier
        magnifier.style.left = `${clientX - width / 2}px`;
        magnifier.style.top = `${clientY - height / 2}px`;
    };

    const toggleMagnify = () => {
        setIsActive(!isActive);
    };

    return (
        <div onMouseMove={handleMouseMove}>
            <button onClick={toggleMagnify}>
                {isActive ? 'Disable Magnify' : 'Enable Magnify'}
            </button>
            {isActive && <div className="magnifier" ref={magnifierRef}></div>}
        </div>
    );
}

export default Magnifier;
