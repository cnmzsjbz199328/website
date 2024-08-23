import React, { useRef, useEffect } from 'react';
import styles from './DancingTrees.module.css'; // 引用样式文件

const DancingTrees = () => {
  const canvasRef = useRef(null);
  const playBoolRef = useRef(false); // 使用 useRef 存储 playBool

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;
    let width = canvas.width;
    let height = canvas.height;
    let x, y, t, n, r, g, b, p, angle;
    let val, v2, v3;

    const setup = () => {
      width = canvas.width = Math.min(window.innerWidth, window.innerHeight) * 0.5;
      height = canvas.height = width;
      n = [3, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 20][Math.floor(Math.random() * 12)];
    };

    const draw = () => {
      ctx.save(); // 保存当前状态
      ctx.clearRect(0, 0, width, height); // 清除画布内容，保持透明背景
      ctx.translate(width / 2, height / 2);
      const scaleFactor = width / (Math.min(window.innerWidth, window.innerHeight) * 0.9); // 计算缩放比例
      ctx.scale(scaleFactor, scaleFactor); // 应用缩放比例
      if (playBoolRef.current) {
        t = frameCount / 500;
      } else {
        if (frameCount > 1) {
          frameCount--;
        }
        t = frameCount / 500;
      }
      angle = Math.PI / 6 + Math.PI * Math.sin(t / 5);
      ctx.rotate(t / 2);
      for (let i = 0; i < n; i++) {
        ctx.save();
        ctx.scale(0.5, 0.5);
        ctx.rotate((2 * Math.PI / n) * i);
        ctx.translate(0, width / 10);
        ctx.rotate(t / 4);
        drawTree();
        ctx.restore();
        ctx.save();
        ctx.scale(1.2, 1.2);
        ctx.rotate(-(2 * Math.PI / n) * (i + 0.5));
        ctx.translate(0, width / 10);
        ctx.rotate(t / 4);
        drawTree();
        ctx.restore();
      }
      ctx.restore(); // 恢复到保存的状态
      frameCount++;
      animationFrameId = window.requestAnimationFrame(draw);
    };

    const drawTree = () => {
      x = width;
      val = 0.6;
      v2 = 5 * Math.sin(t / n);
      v3 = 9;
      ctx.lineWidth = 2;
      fractal(width / 6, -1 + -1 * Math.sin(t));
    };

    const fractal = (len, refl) => {
      let tmp = len * refl;
      let gradient = ctx.createLinearGradient(0, 0, 0, tmp);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)'); // 渐变起始颜色
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)'); // 渐变结束颜色
    
      ctx.lineWidth = playBoolRef.current ? 0.5 : 0.25;
      ctx.strokeStyle = gradient; // 设置树的渐变颜色
    
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, Math.min(-20, tmp));
      ctx.stroke();
      ctx.translate(0, tmp);
    
      if (len > v3) {
        ctx.save();
        ctx.rotate(angle - angle * v2);
        fractal(len * val, refl);
        ctx.restore();
        ctx.save();
        ctx.rotate(-angle + angle * v2);
        fractal(len * val, refl);
        ctx.restore();
      }
    };

    const handleMousePress = () => {
      setup();
      draw();
    };

    const handleKeyPress = () => {
      playBoolRef.current = !playBoolRef.current;
    };

    setup();
    draw();

    window.addEventListener('mousedown', handleMousePress);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousedown', handleMousePress);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={styles.canvasContainer}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

export default DancingTrees;