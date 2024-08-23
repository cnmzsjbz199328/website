//face some problem with the code, need to fix it
import React, { useState } from 'react';

const FractalTriangle = () => {
  const initialScale = 0.5; // 调整初始三角形的大小
  const [triangles, setTriangles] = useState([{ id: 0, x: 50, y: 25, scale: initialScale }]);

  const addTriangles = (id, x, y, scale) => {
    const newScale = scale / 2; // 调整新生成三角形的大小
    // 移除被点击的三角形并添加新的三个三角形
    setTriangles((prevTriangles) => [
      ...prevTriangles.filter((t) => t.id !== id),
      { id: prevTriangles.length, x: x, y: y - 43.3 * newScale, scale: newScale }, // 中心上方三角形
      { id: prevTriangles.length + 1, x: x - 50 * newScale, y: y + 43.3 * newScale, scale: newScale }, // 左下方三角形
      { id: prevTriangles.length + 2, x: x + 50 * newScale, y: y + 43.3 * newScale, scale: newScale }, // 右下方三角形
    ]);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40vh',
    width: '40vw',
    overflow: 'hidden',
    textAlign: 'center',
  };

  const svgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  const useStyle = {
    cursor: 'pointer',
    transition: '0.25s all',
  };

  return (
    <main style={containerStyle}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
        <defs>
          <polygon id="triangle" points="100,0 200,173 0,173" />
        </defs>
        {triangles.map(({ id, x, y, scale }) => (
          <g
            key={id}
            transform={`translate(${x} ${y}) scale(${scale})`}
            onClick={() => addTriangles(id, x, y, scale)}
            style={useStyle}
            onMouseEnter={(e) => (e.target.style.fill = '#4b4be7')}
            onMouseLeave={(e) => (e.target.style.fill = '#333')}
          >
            <use href="#triangle" fill="#333" />
          </g>
        ))}
      </svg>
    </main>
  );
};

export default FractalTriangle;