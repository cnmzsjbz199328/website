import React, { useState } from 'react';
import './Nucl.css'; // 引入CSS样式文件

const Nucl = () => {
  const [checked, setChecked] = useState(false);
  const t = 3; // 可以根据需要调整电子的数量

  return (
    <div className="Nucl-container">
      <input
        type="checkbox"
        id="toggle"
        checked={checked}
        onChange={() => setChecked(!checked)}
        style={{ display: 'none' }} // 隐藏复选框
      />

      <div className={`Nucl-nucl ${checked ? 'checked' : ''}`}>
        {Array.from({ length: t }).map((_, i) => (
          <div key={i} className="Nucl-ele" style={{ '--r': `${(i * 180) / t}deg` }}>
            <div
              className="Nucl-dot"
              style={{ animationDelay: `${i * 0.5}s` }} // 动态设置不同的延迟
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nucl;