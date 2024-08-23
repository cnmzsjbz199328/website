import React, { useEffect } from 'react';

const BubbleBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('bubbleCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const bubbles = [];

    function randomNeonColor() {
      const colors = ['#1c9cbd', '#8abe56','#f7ce46','#4256a1','#3c57a6','#da3832','#ec248f','#bd6700','#a29e5e','#ebf2dd','#ffffff','#cd760c','#efeed4','#e3e1bf','#69ccff'];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function createBubble() {
      const bubble = {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        radius: Math.random() * 5 + 2,
        speed: Math.random() * 1 + 0.5,
        oscillationAmplitude: Math.random() * 20 + 10,
        oscillationSpeed: Math.random() * 0.02 + 0.01,
        offset: Math.random() * Math.PI * 2,
        color: randomNeonColor()
      };
      bubbles.push(bubble);
    }

    function drawBubble(bubble) {
      ctx.beginPath();
      const oscillation = Math.sin(bubble.y * bubble.oscillationSpeed + bubble.offset) * bubble.oscillationAmplitude;
      ctx.arc(bubble.x + oscillation, bubble.y, bubble.radius, 0, Math.PI * 2);
      ctx.fillStyle = bubble.color;
      ctx.fill();
      ctx.closePath();
    }

    function updateBubbles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bubbles.length; i++) {
        const bubble = bubbles[i];
        bubble.y -= bubble.speed;

        if (bubble.y + bubble.radius < 0) {
          bubbles.splice(i, 1);
          i--;
        } else {
          drawBubble(bubble);
        }
      }

  // 以10%的概率创建一个气泡
  if (Math.random() < 0.1) {
    createBubble();
  }

      requestAnimationFrame(updateBubbles);
    }

    updateBubbles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas id="bubbleCanvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></canvas>;
};

export default BubbleBackground;