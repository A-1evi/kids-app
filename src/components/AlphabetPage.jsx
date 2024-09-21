import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';

const AlphabetPage = ({ letter }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#FF5733';
    ctx.lineWidth = 10;

    // Optional: Draw the letter in light gray as background
    ctx.font = 'bold 200px Arial';
    ctx.fillStyle = 'rgba(200, 200, 200, 0.4)';
    ctx.fillText(letter, canvas.width / 3, canvas.height / 2 + 50);
    
    setContext(ctx);
  }, [letter]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    context.closePath();
    setIsDrawing(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-blue-500">
      <h1 className="text-white text-6xl font-bold mb-5">Letter {letter}</h1>

      {/* Video Player */}
      <ReactPlayer 
        url={`https://www.youtube.com/watch?v=4x_G21KhcEw`} // Replace with actual link
        width="100%"
        height="360px"
        controls
      />

      {/* Tracing Canvas */}
      <div className="mt-10">
        <h2 className="text-white text-3xl mb-5">Trace the letter "{letter}" below!</h2>
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          width={500}
          height={400}
          className="border-2 border-gray-500"
        />
      </div>
    </div>
  );
};

export default AlphabetPage;
