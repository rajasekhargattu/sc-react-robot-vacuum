import { useState, useEffect, useRef } from 'react';
const botWidth = 30;
const botHeight = 30;

export function draw(ctx, location) {
  ctx.fillStyle = 'deepskyblue';
  ctx.shadowColor = 'dodgerblue';
  ctx.shadowBlur = 20;
  ctx.fillRect(location.x, location.y, botWidth, botHeight);
}

export function useCanvas() {
  const [locations, setLocations] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    draw(ctx, locations);
  });

  return [locations, setLocations, canvasRef];
}
